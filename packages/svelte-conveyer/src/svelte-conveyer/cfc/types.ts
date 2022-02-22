import { Writable } from "svelte/store";

export type SvelteReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any
  > = {
    [key in keyof State]: Writable<State[key]>
  } & {
    [key in Methods]: Instance[key]
  };

export type Ref<T> = ((value: T) => { destroy(): void }) & { current?: T };
