import { Children, ReactNode } from 'react';

interface Props<ElementType> {
  of: ElementType[];
  render: (item: ElementType, index: number) => ReactNode;
}

export const MapRender = <ElementType,>({ render, of }: Props<ElementType>) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};
