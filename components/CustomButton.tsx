"use client";

import { CustomButtonProps } from "@/types";
import { FC } from "react";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  type,
  containerStyles,
  handleClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
