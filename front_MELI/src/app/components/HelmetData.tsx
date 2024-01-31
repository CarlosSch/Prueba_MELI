import { Helmet } from "react-helmet-async";
import { capitalizeText } from "../utils";

export type Props = {
  title: string;
  capitalize?: boolean;
  description: string;
};

export const HelmetData = ({
  title,
  description,
  capitalize = true,
}: Props) => {
  
  return (
    <Helmet>
      <title>{capitalize ? capitalizeText(title) : title}</title>
      <meta
        name="description"
        content={capitalize ? capitalizeText(description) : description}
      />
    </Helmet>
  );
};
