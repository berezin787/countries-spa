import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../axios';
import { searchByCodes } from '../constants/urls';
import { generateAlphaKey } from '../react-query/key-factories';
import { ICountryData } from '../interfaces/country-data.interface';
import { Neighbours } from '../types/neighbour.type';

async function getNeighbours(codes: string[]): Promise<ICountryData[]> {
  const { data } = await axios.get(searchByCodes(codes));
  return data;
}

export function useNeighbours(borders: string[] = []): Neighbours {
  const select = useCallback(
    (data: ICountryData[]) =>
      data.map((item) => ({
        official: item.name.official,
        common: item.name.common,
      })),[]);
  const { data = [] } = useQuery({
    queryKey: generateAlphaKey(borders),
    queryFn: () => getNeighbours(borders),
    select,
    enabled: borders.length > 0,
  });

  return {
    neighbours: data,
  };
}
