import { ReactElement, ReactNode } from "react";

interface Props {
  condition: boolean;
  Then?: ReactElement | ReactElement[];
  Else?: ReactElement | ReactElement[];
  children?: ReactNode;
}

export const ConditionalRender = ({ condition, Then, Else, children }: Props) => {

  if (condition) {
    return Then ? Then : children;
  }

  return Else ? Else : null;
}