import { ReactiveSubscribe, ReactiveAdapter, withReactiveMethods, Ref } from "@egjs/conveyer";

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Data = any,
  Events extends Record<string, any> = {},
  >(self: State, reactiveProps: ReactiveAdapter<Instance, State, Methods, Data, Events>) {
  const reactiveState = reactiveProps.state as any;
  const names = Object.keys(reactiveState);
  const instRef: Ref<Instance> = { current: null };
  const methods = withReactiveMethods(instRef, reactiveProps.methods);

  for (const name in reactiveState) {
    (self as any)[name] = reactiveState[name];
  }
  for (const name in methods) {
    (self as any)[name] = methods[name];
  }

  return {
    mounted() {
      const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
      const inst = reactiveProps.instance(data);

      instRef.current = inst;

      names.forEach((name) => {
        inst.subscribe(name as any, (value: any) => {
          setTimeout(() => {
            (self as any)[name] = value;
          });
        });
      });

      reactiveProps.init(inst, data);
    },
    destroy() {
      const data = reactiveProps.data ? reactiveProps.data() : {} as Data;

      reactiveProps.destroy(instRef.current!, data);
    },
  }
}
