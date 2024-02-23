import { Children, ReactNode } from "react";

interface Props<ElementType> {
  of: ElementType[];
  render: (item: ElementType, index: number) => ReactNode;
}

export const MapRender = <A,>({ render, of }: Props<A>) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};
