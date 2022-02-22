export const CONVEYER_METHODS = [
  "update",
  "scrollBy",
  "scrollTo",
  "scrollIntoView",
  "setItems",
  "updateContainer",
  "updateItems",
  "init",
] as const;

export const CONVEYER_EVENTS = [
  "reachStart",
  "reachEnd",
  "leaveStart",
  "leaveEnd",
  "beginScroll",
  "finishScroll",
] as const;

export const CONVEYER_REACTIVE_STATE = {
  "isReachStart": false,
  "isReachEnd": false,
} as const;
