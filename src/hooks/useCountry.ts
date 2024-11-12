import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { axios } from '../axios';
import { searchByCountryUrl } from '../constants/urls';
import { generateCountryKey } from '../react-query/key-factories';
import { ICountryData } from '../interfaces/country-data.interface';

async function getCountry(name: string): Promise<ICountryData> {
  const { data } = await axios.get(searchByCountryUrl(name));
  return data[0];
}

export function useCountry()
: {
  country: ICountryData | undefined,
  isError: boolean,
  error: Error | null,
} {
  const { name } = useParams();
  const { data, isError, error } = useQuery({
    enabled: !!name,
    queryKey: generateCountryKey(name!),
    queryFn: () => getCountry(name!),
  });

  return {
    country: data,
    isError,
    error,
  };
}
