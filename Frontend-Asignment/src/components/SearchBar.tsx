import React from "react";
import "./SearchBar.scss";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search trips..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
