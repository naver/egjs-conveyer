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
