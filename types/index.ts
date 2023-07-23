import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  disabled?: boolean;
  handleClick?: () => MouseEventHandler<HTMLButtonElement> | void;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (value: string) => void;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  // options: Record<string, string>;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
