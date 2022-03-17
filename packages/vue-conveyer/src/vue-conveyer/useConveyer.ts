import Conveyer, { ConveyerEvents, ConveyerMethods, ConveyerOptions, ConveyerReactiveState, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { ref } from "vue";
import type { Ref } from "vue";
import { useReactive } from "./cfcs/useReactive";
import { VueReactiveAdapterResult, VueReactiveResult } from "./cfcs/types";


export interface VueConveyerResult extends VueReactiveAdapterResult<typeof REACTIVE_CONVEYER> {
  ref: Ref<HTMLElement | undefined>;
}

export function useConveyer(props: ConveyerOptions = {}): VueConveyerResult {
  const containerRef = ref<HTMLElement>();

  return {
    ref: containerRef,
    ...useReactive({
      data() {
        return {
          container: containerRef,
          props,
        };
      },
      ...REACTIVE_CONVEYER,
    }),
  };
}
