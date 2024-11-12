import { FC } from 'react';
import { Controls, Countries } from '../../components';
import { useCountries } from '../../hooks';

export const Home: FC = () => {
  const {
    countries,
    isLoading,
    region,
    search,
    setSearch,
    handleChangeSearch,
    handleChangeRegion,
  } = useCountries();
  return (
    <>
      <Controls
        region={region}
        search={search}
        setSearch={setSearch}
        handleChangeSearch={handleChangeSearch}
        handleChangeRegion={handleChangeRegion}
      />
      <Countries countries={countries} isLoading={isLoading} />
    </>
  );
};
