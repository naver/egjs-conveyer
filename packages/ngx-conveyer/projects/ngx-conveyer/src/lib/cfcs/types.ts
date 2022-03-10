import { EventEmitter } from "@angular/core";
import { ReactiveAdapter, ReactiveEventParameters } from "@egjs/conveyer";

type WithPrefix<Prefix extends string, Name extends string> = Prefix extends "" ? Name : `${Prefix}${Capitalize<Name>}`;

export type AngularEventsOutputs<
  Events extends readonly any[],
  PropertyPrefix extends string = "",
  EventPrefix extends string = "",
  > = Events extends readonly [infer Name, ...infer Args] ? [`${WithPrefix<PropertyPrefix, string & Name>}: ${WithPrefix<EventPrefix, string & Name>}`, ...AngularEventsOutputs<Args, PropertyPrefix, EventPrefix>] : [];

export type AngularBindingProperties<
  Events extends Record<string, any>,
  PropertyPrefix extends string = "",
  > = {
    [Key in keyof Events as WithPrefix<PropertyPrefix, string & Key>]: Events[Key];
  };

export type AngularReactiveEvents<
  Events extends Record<string, any>
  > = {
    [Key in keyof Events]: EventEmitter<ReactiveEventParameters<Events, Key & string>[0]>;
  };

export type AngularReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
  > = State & { [key in Methods]: Instance[key] } & AngularReactiveEvents<Events>;

export type AngularReactiveAdapterResult<
  Adapter extends ReactiveAdapter<any, any, any, any, any>,
  AngularEvents extends Record<string, any> | null = null,
  >
  = Adapter extends ReactiveAdapter<infer Instance, infer State, infer Methods, any, infer Events>
  ? AngularReactiveResult<Instance, State, Methods, AngularEvents extends null ? Events : AngularEvents> : {};
