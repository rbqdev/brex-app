import { stripAllNonNumericsFromString } from '../stripAllNonNumericsFromString';

type FormatType =
  | {
      style: string;
      currency: string;
    }
  | undefined;

export const localizeCurrencyToUSD = (
  value: string | number,
  withCurrency = true,
) => {
  let format: FormatType = {
    style: 'currency',
    currency: 'USD',
  };

  const rawValue = Number(
    typeof value === 'string' ? stripAllNonNumericsFromString(value) : value,
  );

  if (Number.isNaN(rawValue)) {
    return (0).toLocaleString('en-US', format);
  }

  if (!withCurrency) {
    format = undefined;
  }

  const formattedValue = Math.abs(rawValue / 100).toLocaleString(
    'en-US',
    format,
  );

  return formattedValue;
};
