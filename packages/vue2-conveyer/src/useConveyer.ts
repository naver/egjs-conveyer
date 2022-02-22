import Conveyer, { ConveyerMethods, ConveyerOptions, ConveyerReactiveState, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { ref } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { useReactive } from "./cfc/useReactive";
import { VueReactiveResult } from "./cfc/types";


export interface ReactConveyerResult extends VueReactiveResult<Conveyer, ConveyerReactiveState, keyof ConveyerMethods> {
  ref: Ref<HTMLElement | undefined>;
}

export function useConveyer(props: ConveyerOptions = {}): ReactConveyerResult {
  const containerRef = ref<HTMLElement>();

  return {
    ref: containerRef,
    ...useReactive({
      data() {
        return {
          container: containerRef!,
          props,
        };
      },
      ...REACTIVE_CONVEYER,
    }),
  };
}
