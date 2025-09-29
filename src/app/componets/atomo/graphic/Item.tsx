import { CSSProperties } from "react";
import type { Item } from "../../../../types/Types";

const Item = ({ percent = 0, name, color }: Item) => {
  const PERCENT = Math.floor(percent);
  const VAR_GRAPHIC = PERCENT <= 0 ? "4px" : `${PERCENT}%`;
  return (
    <div
      className="graphic-wrapper__item"
      style={
        {
          "--graphic": VAR_GRAPHIC,
          "--color_graphic": color,
        } as CSSProperties
      }
    >
      <div className={`graphic-wrapper__item_bar`}></div>
      <div className="graphic-text">
        <span>{PERCENT}%</span>
        <span className="graphic-sub-text">{name}</span>
      </div>
    </div>
  );
};

export default Item;
