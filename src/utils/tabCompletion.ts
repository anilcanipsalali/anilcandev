import type { Dispatch, SetStateAction } from 'react';
import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: Dispatch<SetStateAction<string>>,
) => {
  const commands = Object.keys(bin).filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
