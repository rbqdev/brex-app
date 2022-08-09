import type { CreditCardType } from 'src/types';

import { chance } from '../chanceConfig';

export const creditCardsBuilder = ({
  length = 4,
}: {
  length?: number;
} = {}): CreditCardType[] => {
  return [...Array.from({ length })].map(() => ({
    id: chance.guid(),
    name: `${chance.word().toUpperCase()} Card`,
    creditRemaining: chance.integer({ min: 1, max: 100000 }),
    fourLastDigits: chance.integer({ min: 1000, max: 9000 }),
  }));
};
