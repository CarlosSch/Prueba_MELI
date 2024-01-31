import { Children, ReactNode } from "react";

interface Props<A> {
  of: A[];
  render: (item: A, index: number) => ReactNode;
}

export const MapRender = <A,>({ render, of }: Props<A>) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};
