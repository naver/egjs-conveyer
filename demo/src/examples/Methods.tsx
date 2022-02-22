import * as React from "react";
import { useConveyer } from "@egjs/react-conveyer";

export default function HorizontalScroll() {
  const ref = React.useRef<HTMLDivElement>();
  const {
    scrollIntoView,
  } = useConveyer(ref, {
    horizontal: true,
  });
  return <div className="examples">
    <div className="buttons">
      <button className="prev" onClick={() => {
        // start to end
        scrollIntoView("prev", {
          align: "end",
          duration: 500,
        });
      }}>Prev</button>
      <button className="next" onClick={() => {
        // end to start
        scrollIntoView("next", {
          align: "start",
          duration: 500,
        });
      }}>Next</button>
    </div>
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
