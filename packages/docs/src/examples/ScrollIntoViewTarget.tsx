import * as React from "react";
import { useConveyer } from "@egjs/react-conveyer";

function updateItem(items, container, mark, target, className) {
  if (target) {
    items[parseFloat(target.innerHTML) - 1].classList.add(className);
    mark.style.transform = `translateX(${target.getBoundingClientRect().left - container.getBoundingClientRect().left}px)`;
    mark.style.display = "block";
  } else {
    mark.style.display = "none";
  }
}

export default function ScrollIntoViewTarget() {
  const ref = React.useRef<HTMLDivElement>();
  const containerRef = React.useRef<HTMLDivElement>();
  const { findElement, scrollIntoView } = useConveyer(ref, {
    horizontal: true,
  });

  const onScroll = React.useCallback(() => {
    requestAnimationFrame(() => {
      const container = containerRef.current;
      const markPrev = document.querySelector(".mark.prev");
      const markStart = document.querySelector(".mark.start");
      const markEnd = document.querySelector(".mark.end");
      const markNext = document.querySelector(".mark.next");
      const items = document.querySelectorAll(".item");
      const backgroundItems = document.querySelectorAll<HTMLElement>(".background-items .item");

      backgroundItems.forEach(element => {
        element!.style.transform = `translateX(${-ref.current.scrollLeft}px)`;
      });
      items.forEach(item => {
        item.classList.remove("prev", "start", "end", "next");
      });

      const prev = findElement("prev");
      const start = findElement("start");
      const end = findElement("end");
      const next = findElement("next");

      prev?.classList.add("prev");
      start?.classList.add("start");
      end?.classList.add("end");
      next?.classList.add("next");

      updateItem(backgroundItems, container, markPrev, prev, "prev");
      updateItem(backgroundItems, container, markStart, start, "start");
      updateItem(backgroundItems, container, markEnd, end, "end");
      updateItem(backgroundItems, container, markNext, next, "next");
    });
  }, []);

  React.useEffect(() => {
    onScroll();
    scrollIntoView("next", {
      align: "center",
      duration: 500,
    });
  }, []);
  return <div className="scroll-into-view-target" ref={containerRef}>
    <p className="top">target</p>
    <div className="background-items">
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
    <div className="items" ref={ref} onScroll={onScroll}>
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
    <div className="mark prev"></div>
    <div className="mark next"></div>
    <div className="mark start"></div>
    <div className="mark end"></div>
    <p className="bottom">align</p>
  </div>;
}
