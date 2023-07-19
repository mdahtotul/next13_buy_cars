import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  containerStyles?: string;
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
