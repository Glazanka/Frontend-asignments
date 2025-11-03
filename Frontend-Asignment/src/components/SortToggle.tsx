import React from "react";
import "./SortToggle.scss";

interface SortToggleProps {
  sortByRating: boolean;
  onToggle: () => void;
}

const SortToggle: React.FC<SortToggleProps> = ({ sortByRating, onToggle }) => {
  return (
    <button className="sort-toggle" onClick={onToggle}>
      {sortByRating ? "Sort: Rating ↓" : "Sort: Default"}
    </button>
  );
};

export default SortToggle;
