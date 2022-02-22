import * as React from "react";
import { useConveyer } from "@egjs/react-conveyer";

export default function HorizontalScroll() {
  const ref = React.useRef<HTMLDivElement>();
  useConveyer(ref, {
    horizontal: true,
  });
  return <div className="examples">
    <div className="items horizontal" ref={ref}>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
      <div className="item">7</div>
      <div className="item">8</div>
      <div className="item">9</div>
      <div className="item">10</div>
    </div>
  </div>;
}
