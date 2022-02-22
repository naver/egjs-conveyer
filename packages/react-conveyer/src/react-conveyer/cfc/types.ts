export type ReactReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any
  > = State & { [key in Methods]: Instance[key] };
