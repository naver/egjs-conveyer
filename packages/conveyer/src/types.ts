/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import { CONVEYER_METHODS } from "./consts";
import Conveyer from "./Conveyer";
/**
 * @typedef
 * @property - scroll direction. (true: Horizontal Scroll, false: Vertical Scroll)  (default: true) <ko>스크롤 방향. (true: 가로 스크롤, false: 세로 스크롤) (default: true)</ko>
 * @property - selector to find items inside. (default: "") <ko>내부의 아이템들을 찾기 위한 selector. (default: "")</ko>
 * @property - Whether to use drag (default: true) <ko> 드래그를 사용할지 여부. (default: true)</ko>
 * @property - Whether to use the mouse wheel in a direction aside from the scroll direction (default: false) <ko>스크롤 방향과 다른 방향의 마우스 휠 입력을 사용할지 여부. (default: false)</ko>
 * @property - The minimum margin space for {@link Conveyer#event-reachStart reachStart}, {@link Conveyer#event-leaveStart leaveStart}, {@link Conveyer#event-reachEnd reachEnd}, and {@link Conveyer#event-leaveEnd leaveEnd} events to be triggered at the beginning and end of the scroll area. (default: 0)
 * <ko> 스크롤 영역의 시작과 끝에서 {@link Conveyer#event-reachStart reachStart}, {@link Conveyer#event-leaveStart leaveStart}, {@link Conveyer#event-reachEnd reachEnd}, {@link Conveyer#event-leaveEnd leaveEnd} 이벤트들이 발생하기 위한 최소 여백. (default: 0)</ko>
 * @property - The maximum amount of time the scroll event does not fire for the finishScroll event to be triggered. (default: 100) <ko> finishScroll 이벤트가 발생되기 위한 scroll 이벤트가 발생하지 않는 최대 시간. (default: 100)</ko>
 * @property - Whether to prevent being selected. (default: true) <ko>셀렉트가 되는 것을 막을지 여부. (default: true) </ko>
 * @property - Whether to prevent click event when dragging. (default: false) <ko>드래그하면 클릭이벤트를 막을지 여부. (default: true)</ko>
 * @property - Whether to use the {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} when the user starts dragging <ko>사용자가 드래그를 시작할 때 {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} 실행 여부</ko>
 * @property - Whether to automatically initialize when an instance is created. If set to false, initialization is possible while calling the init method. (default: true) <ko>인스턴스를 생성할 때 자동으로 초기화할지 여부. false로 설정하면 init 메서드를 호출하면서 초기화가 가능하다. (default: true)</ko>
 * @property - If this option is enabled on a Conveyer placed inside an egjs component that has the same scroll direction including the Conveyer itself. The parent component moves in the same direction after the Conveyer reaches the first/last scroll position. <ko>Conveyer 자신을 포함해서 동일한 스크롤 방향을 가진 egjs 컴포넌트 내부에 배치된 Conveyer에서 이 옵션을 활성화하면 Conveyer가 첫/마지막 스크롤 위치에 도달한 뒤부터 같은 방향으로 상위 컴포넌트가 움직인다.</ko>
 */
export interface ConveyerOptions {
  horizontal?: boolean;
  itemSelector?: string;
  useDrag?: boolean;
  useSideWheel?: boolean;
  boundaryMargin?: number;
  scrollDebounce?: number;
  preventDefault?: boolean;
  preventClickOnDrag?: boolean;
  preventDefaultOnDrag?: boolean;
  autoInit?: boolean;
  nested?: boolean;
}

/**
 * @typedef
 */
export interface OnFinishScroll {
  isWheelScroll: boolean;
  isDragScroll: boolean;
  isAnimationScroll: boolean;
  isTrusted: boolean;
}

export interface ConveyerEvents {
  reachStart: void;
  reachEnd: void;
  leaveStart: void;
  leaveEnd: void;
  beginScroll: void;
  finishScroll: OnFinishScroll;
}

export interface ConveyerReactiveState {
  readonly isReachStart: boolean;
  readonly isReachEnd: boolean;
  readonly scrollPos: number;
}


/**
 * @typedef
 */
export interface FindItemOptions {
  /**
   * size ratio to find items.
   * <ko>아이템을 찾기 위한 사이즈 비율.</ko>
   * @default 1
   */
  hitTest?: number;
  /**
   * Whether to include items that intersect on the side
   * <ko>사이드에 교차하는 아이템까지 포함할지 여부.</ko>
   * @default 0
   */
  intersection?: boolean;
  /**
   * The number of items next to the item's index to return.
   * <ko>해당 아이템의 index에서 얼마나 옆에 있는 아이템을 반환할지 개수.</ko>
   * @default 0
   */
  sibling?: number;
}


/**
 * @typedef
 * @extends FindItemOptions
 * @property - Where to arrange the items in the container. (default: "start") <ko>아이템을 container안에서 정렬할 위치. (default: "start")</ko>
 * @property - Whether to find the next item except sorting it in place. (default: false) <ko>아이템을 제자리에 정렬하는 것을 제외하고 다음 아이템을 찾을지 여부. (default: false)</ko>
 * @property - The value to scroll further from the sort position. (default: 0) <ko>정렬하는 위치에서 얼만큼 더 스크롤할 값. (default: 0)</ko>
 * @property - How long to scroll animation time. (default: 0) <ko>얼마동한 스크롤할 할지 애니메이션 시간. (default: 0)</ko>
 */
export interface ScrollIntoViewOptions extends FindItemOptions {
  align?: "start" | "end" | "center";
  excludeStand?: boolean;
  offset?: number;
  duration?: number;
}

/**
 * @typedef
 */
export interface ConveyerItem {
  element?: HTMLElement | null;
  pos: number;
  size: number;
}

export type ConveyerMethods = {
  [key in typeof CONVEYER_METHODS[number]]: Conveyer[key];
}
