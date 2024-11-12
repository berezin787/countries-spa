import { queryKeys } from './constants.ts';

export const generateCountryKey = (country: string) => [queryKeys.country, country];
