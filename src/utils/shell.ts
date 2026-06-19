import type {Dispatch, SetStateAction} from 'react';
import * as bin from './bin';

type BinCommand = (args: string[]) => string | Promise<string>;

export const shell = async (
    command: string,
    setHistory: (value: string) => void,
    clearHistory: () => void,
    setCommand: Dispatch<SetStateAction<string>>,
) => {
    const args = command.split(' ');
    args[0] = args[0].toLowerCase();

    if (args[0] === 'clear' || args[0] === 'cls') {
        clearHistory();
    } else if (command === '') {
        setHistory('');
    } else if (!(args[0] in bin)) {
        const isMath = /^[0-9+\-*/().\s]+$/.test(command);
        if (isMath && command.trim() !== '') {
            try {
                const result = new Function(`return ${command}`)();
                setHistory(String(result));
            } catch (err) {
                setHistory(
                    `shell: command not found: ${args[0]}. Try 'help' to get started.`,
                );
            }
        } else {
            setHistory(
                `shell: command not found: ${args[0]}. Try 'help' to get started.`,
            );
        }
    } else {
        const output = await (bin as unknown as Record<string, BinCommand>)[
            args[0]
            ](args.slice(1));
        setHistory(output);
    }

    setCommand('');
};
