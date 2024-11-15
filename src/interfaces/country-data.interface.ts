import { ICountry } from './country.interface';

export interface ICountryData extends ICountry {
  borders: string[];
  currencies: Record<string, { symbol: string; name: string }>;
  languages: Record<string, string>;
  subregion: string;
  tld?: string[];
}
