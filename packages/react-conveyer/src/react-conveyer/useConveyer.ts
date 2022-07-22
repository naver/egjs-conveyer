import { ConveyerOptions, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { RefObject } from "react";
import { useReactive, ReactReactiveAdapterResult } from "@cfcs/react";

export interface ReactConveyerResult extends ReactReactiveAdapterResult<typeof REACTIVE_CONVEYER> { }

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
