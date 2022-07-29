import type { REACTIVE_CONVEYER } from "@egjs/conveyer";
import { Ref, SvelteReactiveAdapterResult } from "@cfcs/svelte";

export interface SvelteConveyerResult extends Ref<HTMLElement>, SvelteReactiveAdapterResult<typeof REACTIVE_CONVEYER> {
  ref: Ref<HTMLElement>;
}
