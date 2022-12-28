/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import Conveyer from "./Conveyer";
import { CONVEYER_EVENTS, CONVEYER_METHODS } from "./consts";
import { ReactiveAdapter, Ref } from "@cfcs/core";
import { ConveyerEvents, ConveyerMethods, ConveyerOptions, ConveyerReactiveState } from "./types";


export interface ConveyerData {
  container: Ref<HTMLElement>;
  props: ConveyerOptions;
}

export const REACTIVE_CONVEYER: ReactiveAdapter<
  Conveyer,
  ConveyerReactiveState,
  keyof ConveyerMethods,
  ConveyerData,
  ConveyerEvents
> = {
  methods: CONVEYER_METHODS,
  events: CONVEYER_EVENTS,
  created(data) {
    return new Conveyer(data.container, { ...data.props, autoInit: false });
  },
  init(instance, data) {
    if (data.props.autoInit !== false) {
      instance!.init();
    }
  },
  on(instance, name, callback) {
    instance.on(name, callback);
  },
  off(instance, name, callback) {
    instance.off(name, callback);
  },
  destroy(instance) {
    instance.destroy();
  },
};
