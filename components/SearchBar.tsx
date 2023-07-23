"use client";

import Image from "next/image";
import { FC, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

interface SearchButtonProps {
  otherClasses?: string;
}

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
  return (
    <button type="submit" className={`z-10 ml-3 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar: FC = () => {
  const [manufacturerVal, setManufacturerVal] = useState("");
  const [modelVal, setModelVal] = useState("");

  const handleSearch = (): void => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturerVal}
          setManufacturer={setManufacturerVal}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          height={25}
          width={25}
          className="absolute ml-4 h-[20px] w-[20px]"
        />

        <input
          type="text"
          name="model"
          value={modelVal}
          onChange={(e) => setModelVal(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
