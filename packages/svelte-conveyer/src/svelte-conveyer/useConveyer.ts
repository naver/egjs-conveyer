import type { SvelteConveyerResult } from "./types";
import { ConveyerOptions, REACTIVE_CONVEYER } from "@egjs/conveyer";
import { useReactive, useRef } from "@cfcs/svelte";


function useConveyer(props: ConveyerOptions = { horizontal: false }): SvelteConveyerResult {
  const elementRef = useRef<HTMLElement>();
  const result = useReactive({
    data() {
      return {
        container: elementRef,
        props,
      };
    },
    ...REACTIVE_CONVEYER,
  });

  return Object.assign(elementRef, result, { ref: elementRef });
}
function useInlineConveyer(props: ConveyerOptions = {}) {
  const elementRef = useRef<HTMLElement>();

  useReactive({
    data() {
      return {
        container: elementRef,
        props,
      };
    },
    ...REACTIVE_CONVEYER,
  });

  return elementRef;
}
export {
  useInlineConveyer as conveyer,
  useConveyer,
};
