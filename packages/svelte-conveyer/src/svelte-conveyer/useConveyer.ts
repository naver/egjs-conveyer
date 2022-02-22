import type { SvelteConveyerResult } from "./types";
import { ConveyerOptions, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { useReactive, useRef } from "./cfc/useReactive";


export function useConveyer(props: ConveyerOptions = {}): SvelteConveyerResult {
  const elementRef = useRef<HTMLElement>();

  return {
    ref: elementRef,
    ...useReactive({
      data() {
        return {
          container: elementRef,
          props,
        };
      },
      ...REACTIVE_CONVEYER,
    }),
  };
}
