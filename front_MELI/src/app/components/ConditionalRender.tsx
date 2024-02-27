import { ReactNode } from "react";

interface Props {
  condition: boolean;
  Then?: ReactNode;
  Else?: ReactNode;
  children?: ReactNode;
}

export const ConditionalRender = ({ condition, Then, Else, children }: Props) => {

  if (condition) {
    return Then || children;
  }

  return Else || null;
}