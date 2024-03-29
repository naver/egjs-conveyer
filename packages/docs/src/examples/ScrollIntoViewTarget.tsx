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


function ConveyerItems(props: { itemsRef: React.RefObject<HTMLDivElement>; onScroll: () => void }) {
  return <>
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
    <div className="items" ref={props.itemsRef} onScroll={props.onScroll}>
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
  </>;
}

export default function ScrollIntoViewTarget() {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { findElement, scrollIntoView } = useConveyer(ref, {
    horizontal: true,
  });

  const onScroll = React.useCallback(() => {
    requestAnimationFrame(() => {
      const container = containerRef.current!;
      const markPrev = container.querySelector(".mark.prev");
      const markStart = container.querySelector(".mark.start");
      const markEnd = container.querySelector(".mark.end");
      const markNext = container.querySelector(".mark.next");
      const items = container.querySelectorAll(".item");
      const backgroundItems = container.querySelectorAll<HTMLElement>(".background-items .item");

      backgroundItems.forEach(element => {
        element!.style.transform = `translateX(${-ref.current!.scrollLeft}px)`;
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
    <ConveyerItems itemsRef={ref} onScroll={onScroll} />
    <div className="mark prev"></div>
    <div className="mark next"></div>
    <div className="mark start"></div>
    <div className="mark end"></div>
    <p className="bottom">align</p>
  </div>;
}

export function ScrollIntoViewTargetWithIntersectionStartEnd() {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { findElement, scrollIntoView } = useConveyer(ref, {
    horizontal: true,
  });

  const onScroll = React.useCallback(() => {
    requestAnimationFrame(() => {
      const container = containerRef.current!;
      // const markPrev = container.querySelector(".mark.prev");
      const markStart = container.querySelector(".mark.start");
      const markEnd = container.querySelector(".mark.end");
      // const markNext = container.querySelector(".mark.next");
      const items = container.querySelectorAll(".item");
      const backgroundItems = container.querySelectorAll<HTMLElement>(".background-items .item");

      backgroundItems.forEach(element => {
        element!.style.transform = `translateX(${-ref.current!.scrollLeft}px)`;
      });
      items.forEach(item => {
        item.classList.remove("start", "end");
      });

      // const prev = findElement("prev");
      const start = findElement("start", {
        intersection: true,
      });
      const end = findElement("end", {
        intersection: true,
      });
      // const next = findElement("next");

      // prev?.classList.add("prev");
      start?.classList.add("start");
      end?.classList.add("end");
      // next?.classList.add("next");

      // updateItem(backgroundItems, container, markPrev, prev, "prev");
      updateItem(backgroundItems, container, markStart, start, "start");
      updateItem(backgroundItems, container, markEnd, end, "end");
      // updateItem(backgroundItems, container, markNext, next, "next");
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
    <p className="top">target with intersection (start, end)</p>
    <ConveyerItems itemsRef={ref} onScroll={onScroll} />
    {/* <div className="mark prev"></div> */}
    {/* <div className="mark next"></div> */}
    <div className="mark start"></div>
    <div className="mark end"></div>
    <p className="bottom">align</p>
  </div>;
}

export function ScrollIntoViewTargetWithIntersectionPrevNext() {
  const ref = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { findElement, scrollIntoView } = useConveyer(ref, {
    horizontal: true,
  });

  const onScroll = React.useCallback(() => {
    requestAnimationFrame(() => {
      const container = containerRef.current!;
      const markPrev = container.querySelector(".mark.prev");
      const markNext = container.querySelector(".mark.next");
      const items = container.querySelectorAll(".item");
      const backgroundItems = container.querySelectorAll<HTMLElement>(".background-items .item");

      backgroundItems.forEach(element => {
        element!.style.transform = `translateX(${-ref.current!.scrollLeft}px)`;
      });
      items.forEach(item => {
        item.classList.remove("prev", "next");
      });

      const prev = findElement("prev", {
        intersection: true,
      });
      const next = findElement("next", {
        intersection: true,
      });

      prev?.classList.add("prev");
      next?.classList.add("next");


      updateItem(backgroundItems, container, markPrev, prev, "prev");
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
    <p className="top">target with intersection (prev, next)</p>
    <ConveyerItems itemsRef={ref} onScroll={onScroll} />
    <div className="mark prev"></div>
    <div className="mark next"></div>
    {/* <div className="mark start"></div>
    <div className="mark end"></div> */}
    <p className="bottom">align</p>
  </div>;
}
