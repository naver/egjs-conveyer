import Conveyer, { ConveyerMethods, ConveyerOptions, ConveyerReactiveState, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { RefObject } from "react";
import { ReactReactiveResult } from "./cfc/types";
import { useReactive } from "./cfc/useReactive";


export interface ReactConveyerResult extends ReactReactiveResult<Conveyer, ConveyerReactiveState, keyof ConveyerMethods> { }

export function useConveyer(ref: RefObject<HTMLElement>, props: ConveyerOptions = {}): ReactConveyerResult {
  return useReactive({
    data() {
      return {
        container: ref,
        props,
      };
    },
    ...REACTIVE_CONVEYER,
  });
}
