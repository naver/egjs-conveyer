import { Writable } from "svelte/store";
import { ReactiveAdapter, ReactiveEventParameters } from "@egjs/conveyer";

export type SvelteReactiveEvents<
  Events extends Record<string, any>
  > = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (callback: ((...args: ReactiveEventParameters<Events, K & string>) => void)) => void;
  };


export type Ref<T> = ((value: T) => { destroy(): void }) & { current?: T };

export type SvelteReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
  > = {
    [key in keyof State]: Writable<State[key]>
  } & {
    [key in Methods]: Instance[key]
  } & SvelteReactiveEvents<Events>;


export type SvelteReactiveAdapterResult<
  Adapter extends ReactiveAdapter<any, any, any, any, any>,
  >
  = Adapter extends ReactiveAdapter<infer Instance, infer State, infer Methods, any, infer Events>
  ? SvelteReactiveResult<Instance, State, Methods, Events> : {};
