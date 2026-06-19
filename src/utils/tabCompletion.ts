import type {Dispatch, SetStateAction} from 'react';
import * as bin from './bin';
import themes from '../../themes.json';

export const handleTabCompletion = (
    command: string,
    setCommand: Dispatch<SetStateAction<string>>,
) => {
    const args = command.split(' ');

    if (args.length === 1) {
        const commands = Object.keys(bin).filter((entry) =>
            entry.startsWith(command),
        );

        if (commands.length === 1) {
            setCommand(commands[0]);
        }
    } else if (args[0] === 'theme' && args.length === 2) {
        const availableThemes = Object.keys(themes);
        const matches = availableThemes.filter((theme) =>
            theme.startsWith(args[1]),
        );

        if (matches.length === 1) {
            setCommand(`theme ${matches[0]}`);
        }
    } else if (args[0] === 'mode' && args.length === 2) {
        const availableModes = ['light', 'dark'];
        const matches = availableModes.filter((mode) =>
            mode.startsWith(args[1].toLowerCase()),
        );

        if (matches.length === 1) {
            setCommand(`mode ${matches[0]}`);
        }
    }
};
