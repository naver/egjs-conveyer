/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
export function isString(val: any): val is string {
  return typeof val === "string";
}

export function findIndex<T>(arr: T[], callback: (element: T, index: number) => boolean) {
  const length = arr.length;

  for (let i = 0; i < length; ++i) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
  return -1;
}


export function instanceOfElement(el: any): el is Element {
  return el instanceof Element || el instanceof Node;
}


export function isIntersection(
  pos1: number,
  pos2: number,
  target: "start" | "end",
  intersection?: boolean | number,
) {
  if (!intersection) {
    return false;
  }
  const intersectionRatio = intersection === true ? 1 : intersection;
  const size = intersectionRatio * Math.abs(pos2 - pos1);

  if (target === "end") {
    // pos1 위치를 고정하고 pos2를 pos1 + size으로 보정
    // Fix the position pos1 and adjust pos2 to pos1 + size
    return pos1 < 0 && pos1 + size > 0;
  }

  // pos2 위치를 고정하고 pos1를 pos2 - size으로 보정
  // Fix the position pos2 and adjust pos1 to pos2 - size
  return pos2 - size < 0 && pos2 > 0;
}
