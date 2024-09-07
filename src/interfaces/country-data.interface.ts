import { ICountry } from './country.interface';

export interface ICountryData extends ICountry {
  nativeName: string;
  borders: string[];
  currencies: { code: string; name: string }[];
  languages: { name: string }[];
  subregion: string;
  topLevelDomain: string[];
}
