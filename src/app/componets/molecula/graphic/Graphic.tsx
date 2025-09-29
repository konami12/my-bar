import Item from "../../atomo/graphic/Item";
import assignColors from "./Logic";
import { Props } from "../../../../types/Types";

const Graphic = ({ sell, keep, buy }: Props) => {
  const TOTAL = sell + keep + buy;
  if (TOTAL <= 100) {
    const [_sell, _keep, _buy] = assignColors({ sell, keep, buy });
    return (
      <div className="graphic-wrapper">
        <Item key="item-001" {..._sell} />
        <Item key="item-002" {..._keep} />
        <Item key="item-003" {..._buy} />
      </div>
    );
  }
  return (
    <div className="graphic-wrapper">
      Error: El total debe ser igual o menor a 100%
    </div>
  );
};

export default Graphic;
