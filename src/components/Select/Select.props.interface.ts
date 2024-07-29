export interface ISelectProps {
  options: { label: string, value: string }[];
  onChange: (option: { label: string, value: string }) => void,
  placeholder: string,
  value: unknown,
}
