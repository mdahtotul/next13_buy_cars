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
