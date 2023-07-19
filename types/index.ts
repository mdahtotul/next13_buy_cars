import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  containerStyles?: string;
  disabled?: boolean;
  handleClick?: () => MouseEventHandler<HTMLButtonElement> | void;
}
