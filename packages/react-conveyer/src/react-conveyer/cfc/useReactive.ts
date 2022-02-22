import { withReactiveMethods, ReactiveSubscribe, ReactiveAdapter, keys } from "@egjs/conveyer";
import { useEffect, useRef, useState } from "react";
import { ReactReactiveResult } from "./types";


export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Data = any,
  Events extends Record<string, any> = {},
  >(reactiveProps: ReactiveAdapter<Instance, State, Methods, Data, Events>): ReactReactiveResult<Instance, State, Methods> {
  const reactiveState = reactiveProps.state as any;
  const names = keys<Record<string, any>>(reactiveState);
  const [states] = useState<Record<string, {
    getter: boolean,
    value: any,
    set: (value: any) => void,
  }>>({});
  for (const name in reactiveState) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useState(reactiveState[name]);
    states[name] = {
      getter: false,
      set: state[1],
      value: state[0],
    };
  }
  const vanillaRef = useRef<Instance>();
  const [methods] = useState(() => withReactiveMethods(vanillaRef, reactiveProps.methods || []));
  // const reactiveEvents = (reactiveProps.events || {});
  // const events = keys<Record<string, any>>(reactiveEvents).reduce<any>((result, name) => {
  //   result[name] = (callback: (e: any) => void, dependencies: readonly any[]) => {
  //     useEffect(() => {
  //       reactiveProps.on && reactiveProps.on(vanillaRef.current!, name as any, callback as any);
  //       return () => {
  //         reactiveProps.off && reactiveProps.off(vanillaRef.current!, name as any, callback as any);
  //       };
  //     }, dependencies);
  //   };

  //   return result;
  // }, {});
  useEffect(() => {
    const data = reactiveProps.data ? reactiveProps.data() : {} as any;
    const inst = reactiveProps.instance(data);

    vanillaRef.current = inst;
    names.forEach((name) => {
      (inst as any).subscribe(name, (value: any) => {
        if (states[name].getter) {
          states[name].set(value);
        }
      });
    });

    reactiveProps.init(inst, data);
    return () => {
      const data = reactiveProps.data ? reactiveProps.data() : {} as any;

      reactiveProps.destroy(inst, data);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const result = names.reduce<any>((result, name) => {
    Object.defineProperty(result, name, {
      enumerable: true,
      get() {
        states[name].getter = true;
        return states[name].value;
      },
    });
    return result;
  }, {});

  keys(methods).forEach(name => {
    result[name] = methods[name];
  });
  return result;
}
