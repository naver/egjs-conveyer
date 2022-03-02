
export const IS_IE = /msie|trident/g.test(
  (typeof window !== "undefined" && window?.navigator?.userAgent?.toLowerCase()) || "",
);
