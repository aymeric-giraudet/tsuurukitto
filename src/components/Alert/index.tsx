import React, { FC } from "react";

export type AlertKind = "info" | "warning" | "error";

interface Colors {
  background: string;
  borderColor: string;
  color: string;
}

const kinds: Record<AlertKind, Colors> = {
  info: { background: "#C9E2FF", borderColor: "#b0d4ff", color: "#7db9ff" },
  error: { background: "#ffc9e2", borderColor: "#ffb0d4", color: "#ff7db9" },
  warning: { background: "#fff3cd", borderColor: "#ffedb4", color: "#ffcf35" },
};

export interface AlertProps {
  /**
   * Set this to change the criticity of the Alert
   * @default info
   */
  kind: "info" | "error" | "warning";
}

const Alert: FC<AlertProps> = ({ children, kind }) => {
  const { background, borderColor, color } = kinds[kind];
  return (
    <div
      style={{
        padding: 20,
        borderRadius: 3,
        borderStyle: "solid",
        borderWidth: 1,
        color,
        background,
        borderColor,
      }}
    >
      {children}
    </div>
  );
};

export default Alert;
