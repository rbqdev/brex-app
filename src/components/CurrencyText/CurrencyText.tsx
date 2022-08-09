import { Text } from 'native-base';
import React from 'react';
import { localizeCurrencyToUSD } from 'src/utils';

export type CurrencyTextProps = {
  value: string | number;
};

export const CurrencyText = ({ value }: CurrencyTextProps) => {
  return <Text>{localizeCurrencyToUSD(value)}</Text>;
};
