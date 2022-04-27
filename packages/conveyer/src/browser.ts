/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
export const IS_IE = /msie|trident/g.test(
  (typeof window !== "undefined" && window?.navigator?.userAgent?.toLowerCase()) || "",
);
