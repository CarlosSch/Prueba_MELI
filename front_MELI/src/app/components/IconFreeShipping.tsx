import { ConditionalRender } from "./ConditionalRender";
import ic_shipping from "../../assets/images/ic_shipping.png";

interface Props {
  isFree: boolean;
}
export const IconFreeShipping = ({ isFree }: Props) => {
  return (
    <ConditionalRender condition={isFree}>
      <div className="ic-free-shipping">
        <img
          src={ic_shipping}
          alt="Envio Gratis"
          width={18}
          height={18}
          loading="lazy"
        />
      </div>
    </ConditionalRender>
  );
};
