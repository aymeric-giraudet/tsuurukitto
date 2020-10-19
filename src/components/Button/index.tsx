import React, { FC } from "react";

export interface ButtonProps {
  type: string;
}

const Button: FC<ButtonProps> = ({ children, type }) => (
  <button style={{ background: type }}>{children}</button>
);

export default Button;
