'use client';

import { useState } from 'react';
import { History } from './interface';

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistoryState] = useState<Array<History>>(defaultValue);
  const [command, setCommand] = useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistoryState((prev) => [
        ...prev,
        {
          id: prev.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistoryState([]),
  };
};
