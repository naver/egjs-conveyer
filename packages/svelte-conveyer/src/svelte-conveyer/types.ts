import type { Writable } from "svelte/store";
import type { ConveyerMethods, ConveyerReactiveState } from "@egjs/conveyer";
import { Ref, SvelteReactiveResult } from "./cfc/types";
import Conveyer from "@egjs/conveyer";

export interface SvelteConveyerResult extends SvelteReactiveResult<Conveyer, ConveyerReactiveState, keyof ConveyerMethods> {
  ref: Ref<HTMLElement>;
}
