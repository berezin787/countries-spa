import { HTMLAttributes } from 'react';
import { NavigateFunction } from 'react-router';
import { ColorMode } from '@chakra-ui/react';
import { ICountryData } from '../../interfaces/country-data.interface';
import { Neighbour } from '../../types/neighbour.type';

export interface ICountryInfoProps extends HTMLAttributes<HTMLDivElement> {
  country: ICountryData;
  colorMode: ColorMode;
  navigate: NavigateFunction;
  neighbours: Neighbour[];
}
