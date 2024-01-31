import { ReactElement, ReactNode } from "react";

interface Props {
  condition: boolean;
  Then?: ReactElement | ReactElement[];
  Else?: ReactElement | ReactElement[];
  children?: ReactElement | ReactElement[] | ReactNode;
}

export const ConditionalRender = ({
  condition,
  Then,
  Else,
  children,
}: Props) => {
  if (condition) {
    if (Then) {
      return Then;
    }
    return children;
  }

  if (Else) {
    return Else;
  }

  return null;
};
