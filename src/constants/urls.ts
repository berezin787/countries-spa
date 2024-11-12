export const API_URL = import.meta.env.VITE_API_BASE_URL;
export const ALL_COUNTRIES_URL = `${API_URL}/independent?fields=name,capital,flags,population,region`;
export const searchByCountryUrl = (name: string) => `${API_URL}/name/${name}`;
