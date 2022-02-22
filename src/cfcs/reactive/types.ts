import { EventCallback, EventKey } from "@egjs/component/declaration/types";
import { ReactiveSubscribe } from "./utils";

export type ReactiveMethods<Instance, Names extends keyof Instance> = {
  [key in Names]: Instance[key];
};

type a = keyof {};

export type ReactiveAdapter<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = never,
  Data = any,
  Events extends Record<string, any> = {},
  > = {
    state: State;
    data?: () => Data;
    instance: (data: Data) => Instance;
    methods: readonly Methods[];
    events: readonly (keyof Events)[];
    init: (instance: Instance, data: Data) => void;
    destroy: (instance: Instance, data: Data) => void;
    on?: <EventName extends EventKey<Events>>(
      instance: Instance, eventName: EventName, listener: EventCallback<Events, EventName, Instance>) => void;
    off?: <EventName extends EventKey<Events>>(
      instance: Instance, eventName: EventName, listener: EventCallback<Events, EventName, Instance>) => void;
  };
