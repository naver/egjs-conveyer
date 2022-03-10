import { EventEmitter } from "@angular/core";
import { ReactiveSubscribe, ReactiveAdapter, withReactiveMethods, Ref, camelize } from "@egjs/conveyer";

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Data = any,
  Events extends Record<string, any> = {},
  >(self: State, reactiveProps: ReactiveAdapter<Instance, State, Methods, Data, Events>) {
  const reactiveState = reactiveProps.state as any;
  const names = Object.keys(reactiveState);
  const instanceRef: Ref<Instance> = { current: null };
  const methods = withReactiveMethods(instanceRef, reactiveProps.methods);

  for (const name in reactiveState) {
    (self as any)[name] = reactiveState[name];
  }
  for (const name in methods) {
    (self as any)[name] = methods[name];
  }

  const events = reactiveProps.events || [];

  events.forEach(name => {
    (self as any)[camelize(`ngx ${name}`)] = new EventEmitter();
  });
  const on = reactiveProps.on;
  const off = reactiveProps.off;
  let callbacks: Array<(...args: any[]) => void> = [];

  function mounted() {
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
    const inst = reactiveProps.instance(data);

    instanceRef.current = inst;

    names.forEach((name) => {
      inst.subscribe(name as any, (value: any) => {
        setTimeout(() => {
          (self as any)[name] = value;
        });
      });
    });

    if (on) {
      callbacks = events.map(name => {
        const callback = (...args: any[]) => {
          ((self as any)[camelize(`ngx ${name}`)] as EventEmitter<any>).emit(...args);
        };

        (on as any)(inst, name, callback);

        return callback;
      });
    }

    reactiveProps.init(inst, data);
  }
  function destroy() {
    const inst = instanceRef.current!;
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;

    if (off) {
      events.forEach((name, i) => {
        (off as any)(inst, name, callbacks[i]);
      });
    }

    reactiveProps.destroy(inst, data);
  }

  return {
    mounted,
    destroy,
  };
}
