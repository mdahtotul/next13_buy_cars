"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { FC } from "react";

const CustomButton: FC<CustomButtonProps> = ({
  title,
  type,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
