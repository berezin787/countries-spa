import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../axios';
import { searchByCodes } from '../constants/urls';
import { generateAlphaKey } from '../react-query/key-factories';
import { ICountryData } from '../interfaces/country-data.interface';

async function getNeighbours(codes: string[]): Promise<ICountryData[]> {
  const { data } = await axios.get(searchByCodes(codes));
  return data;
}

export function useNeighbours(borders: string[] = []): { neighbours: string[] } {
  const select = useCallback((data: ICountryData[]) => data.map((item) => item.name.common), []);
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
