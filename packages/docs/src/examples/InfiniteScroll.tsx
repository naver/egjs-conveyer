import * as React from "react";
import { useConveyer } from "@egjs/react-conveyer";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";


function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}


export default function InfiniteScroll() {
  const gridRef = React.useRef<MasonryInfiniteGrid>();
  const ref = React.useRef<HTMLElement>();
  const [items, updateItems] = React.useState(() => getItems(0, 10));

  const {
    isReachStart,
    isReachEnd,
    setItems,
    updateContainer,
    scrollIntoView,
    init,
  } = useConveyer(ref, {
    horizontal: false,
    autoInit: false,
  });
  React.useEffect(() => {
    ref.current = gridRef.current.getScrollContainerElement();
    init();
  });
  return <div className="examples">
    <div className="buttons">
      <button className="prev" disabled={isReachStart} onClick={() => {
        // start to end
        scrollIntoView("start", {
          align: "end",
          duration: 500,
          excludeStand: true,
        });
      }}>Prev</button>
      <button className="next" disabled={isReachEnd} onClick={() => {
        // end to start
        scrollIntoView("end", {
          align: "start",
          duration: 500,
          excludeStand: true,
        });
      }}>Next</button>
    </div>
    <MasonryInfiniteGrid className="items infinite" container={true} gap={5}
      ref={gridRef}
      onRequestAppend={e => {
        const nextGroupKey = (+e.groupKey! || 0) + 1;

        updateItems([
          ...items,
          ...getItems(nextGroupKey, 10),
        ]);
      }} onRenderComplete={e => {
        setItems(e.currentTarget.getItems().map((item) => ({
          element: item.element,
          pos: item.computedContentPos,
          size: item.contentSize,
        })));
        updateContainer();
      }}>
      {items.map((item, i) => (<div className={`item item${i % 4}`} data-grid-groupkey={item.groupKey} key={item.key}>{item.key}</div>))}
    </MasonryInfiniteGrid>
  </div>;
}
