import { Children, ReactNode } from "react";

interface ChildrenProp {
  children?: ReactNode;
  render?: ReactNode;
}

interface WhenProps extends ChildrenProp {
  isTrue: boolean;
}

interface ShowProps {
  ({ children }: ChildrenProp): ReactNode;
  When: (Props: WhenProps) => ReactNode;
  Else: (Props: ChildrenProp) => ReactNode;
}

const ShowHOC = ({ children }: { children?: ReactNode }) => {
  const whenSet = new Set<ReactNode>();
  const elseSet = new Set<ReactNode>();

  Children.forEach(children, (child: ReactNode) => {
    if ( child && typeof child === "object" && "props" in child && "type" in child) {

      if (child.props.isTrue) {
        return whenSet.add(child?.props.children);
      }

      if (child.type === Else) {
        elseSet.add(child.props.children);
      }

    } else {
      throw new Error(
        "Show expects exactly one When or Else component as its child"
      );
    }
  });

  return whenSet.size ? whenSet : elseSet;
};

export const When = ({ isTrue, render, children }: WhenProps) => isTrue ? render || children : null;
export const Else = ({ render, children }: ChildrenProp) => render || children;
export const Show: ShowProps = Object.assign(ShowHOC, { When, Else });
