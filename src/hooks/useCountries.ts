import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useCallback, useState } from 'react';
import { axios } from '../axios';
import { ICountry } from '../interfaces/country.interface';
import { Region } from '../types/region.types';
import { ALL_COUNTRIES_URL } from '../constants/urls';
import { queryKeys } from '../react-query/constants';

async function getCountries(): Promise<ICountry[]> {
  const { data } = await axios.get(ALL_COUNTRIES_URL);
  return data;
}

const selectVisibleCountries = (countries: ICountry[], region: Region | null, search: string = '') => {
  return countries.filter((country) => {
    return region !== null
      ? country.region.includes(region) && country.name.common.toLowerCase().includes(search.toLowerCase())
      : country.name.common.toLowerCase().includes(search.toLowerCase());
  });
};

export function useCountries() {
  const [region, setRegion] = useState<Region>(null);
  const [search, setSearch] = useState<string>('');
  const handleChangeRegion = (option: { label: string, value: string } | null) =>
    setRegion(option?.value as Region || null);
  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);
  const selectFn = useCallback(
    (data: ICountry[], filter: Region | null, search: string) => filter == null && !search ? data : selectVisibleCountries(data, filter, search),
    []);

  const fallback: ICountry[] = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: [queryKeys.countries],
    queryFn: getCountries,
    select: (data: ICountry[]) => selectFn(data, region, search),
  });

  return {
    countries: data,
    isLoading,
    region,
    search,
    setSearch,
    handleChangeRegion,
    handleChangeSearch,
  };
}
