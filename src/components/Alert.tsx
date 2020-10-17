import React, { FC } from "react";

export type AlertKind = "info" | "warning" | "error";

const kinds: Record<AlertKind, string> = {
  info: "blue",
  error: "red",
  warning: "yellow",
};

export interface AlertProps {
  /**
   * Set this to change the criticity of the Alert
   * @default info
   */
  kind: AlertKind;
}

const Alert: FC<AlertProps> = ({ children, kind }) => (
  <div
    style={{
      padding: 20,
      borderRadius: 3,
      color: "white",
      background: kinds[kind],
    }}
  >
    {children}
  </div>
);

export default Alert;
