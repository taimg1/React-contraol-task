import { FC } from "react";

interface SearchBoxProps {
  searchValue: string;
  onChange: (value: string) => void;
}
export const SearchBox: FC<SearchBoxProps> = ({ searchValue, onChange }) => {
  return (
    <input
      type="text"
      value={searchValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
    />
  );
};
