import { HTMLAttributes } from 'react';
import { ICountry } from '../../interfaces/country.interface';

export interface ICountriesProps extends HTMLAttributes<HTMLDivElement> {
  countries: ICountry[];
  isLoading: boolean;
}
