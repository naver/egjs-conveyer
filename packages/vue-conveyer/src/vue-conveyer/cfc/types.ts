import { Ref } from "vue";

export type VueReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any
  > = {
    [key in keyof State]: Ref<State[key]>
  } & {
    [key in Methods]: Instance[key]
  };
