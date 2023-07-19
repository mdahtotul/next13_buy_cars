"use client";

import { FC, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (): void => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={searchVal}
          setManufacturer={setSearchVal}
        />
      </div>
    </form>
  );
};

export default SearchBar;
