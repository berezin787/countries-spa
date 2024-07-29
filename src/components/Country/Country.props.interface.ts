import { HTMLAttributes } from 'react';
import { ColorMode } from '@chakra-ui/react';
import { ICountry } from '../../interfaces/country.interface';

export interface ICountryProps extends HTMLAttributes<HTMLDivElement> {
  country: ICountry;
  colorMode: ColorMode;
}
