import Conveyer from "./Conveyer";
import { CONVEYER_EVENTS, CONVEYER_METHODS, CONVEYER_REACTIVE_STATE } from "./consts";
import { ReactiveAdapter, Ref } from "./cfcs";
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
  state: CONVEYER_REACTIVE_STATE,
  methods: CONVEYER_METHODS,
  events: CONVEYER_EVENTS,
  instance(data) {
    return new Conveyer(data.container, { ...data.props, autoInit: false });
  },
  init(instance, data) {
    if (data.props.autoInit !== false) {
      instance.init();
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
