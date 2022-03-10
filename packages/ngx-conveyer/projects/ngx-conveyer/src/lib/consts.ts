import { CONVEYER_EVENTS } from "@egjs/conveyer";
import { AngularEventsOutputs } from "./cfcs/types";

// auto
// eslint-disable-next-line max-len
export const ANGULAR_CONVEYER_EVENTS =["ngxReachStart: reachStart", "ngxReachEnd: reachEnd", "ngxLeaveStart: leaveStart", "ngxLeaveEnd: leaveEnd", "ngxBeginScroll: beginScroll", "ngxFinishScroll: finishScroll"] as AngularEventsOutputs<typeof CONVEYER_EVENTS, "ngx", "">;
