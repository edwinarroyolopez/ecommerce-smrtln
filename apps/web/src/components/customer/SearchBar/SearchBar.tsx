import React from "react";
import styles from "./SearchBar.module.css"; 
import { Input } from "ecommerce-smrtln-ui";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <Input
        type="text"
        placeholder="Buscar productos..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;