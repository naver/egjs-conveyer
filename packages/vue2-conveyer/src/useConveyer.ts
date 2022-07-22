import { ConveyerOptions, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { ref } from "@vue/composition-api";
import type { Ref } from "@vue/composition-api";
import { useReactive, VueReactiveAdapterResult } from "@cfcs/vue2";

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
          container: containerRef!,
          props,
        };
      },
      ...REACTIVE_CONVEYER,
    }),
  };
}
