export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

export type RegionOptionsType = {
  [key in Region]: { value: Region; label: string; };
};
