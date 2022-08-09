import type { TaskType } from 'src/types';

import { chance } from '../chanceConfig';

export const tasksBuilder = ({
  length = 4,
}: {
  length?: number;
} = {}): TaskType[] => {
  return [...Array.from({ length })].map(() => ({
    id: chance.guid(),
    title: chance.sentence({ words: 4 }),
    description: chance.sentence({ words: 4 }),
    amount: chance.integer({ min: 1, max: 100000 }),
    iconName: chance.pickone(['logo-usd', 'cash-outline', 'logo-react']),
  }));
};
