import { ChangeEvent, HTMLAttributes } from 'react';

export interface ISearchProps extends HTMLAttributes<HTMLDivElement> {
  search: string;
  setSearch: (str: string) => void;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}
