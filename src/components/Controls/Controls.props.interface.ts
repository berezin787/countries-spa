import { ChangeEvent, HTMLAttributes } from 'react';
import { Region } from '../../types/region.types';

export interface IControlsProps extends HTMLAttributes<HTMLDivElement> {
  region: Region;
  search: string;
  setSearch: (search: string) => void;
  handleChangeRegion: (option: { label: string, value: string } | null) => void;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
