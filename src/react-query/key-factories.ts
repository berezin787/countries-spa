import { queryKeys } from './constants';

export const generateCountryKey = (country: string) => [queryKeys.country, country];
export const generateAlphaKey = (codes: string[]) => [queryKeys.alpha, codes.join(',')];
