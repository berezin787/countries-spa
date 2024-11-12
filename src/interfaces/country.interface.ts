export interface ICountry {
  name: {
    common: string,
    official: string,
    nativeName: Record<string, { official: string, common: string }>,
  };
  flags: {
    svg: string,
    png: string,
  };
  population: string;
  region: string;
  capital: string;
}
