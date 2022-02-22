/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import Conveyer, * as modules from "./index";

for (const name in modules) {
  (Conveyer as any)[name] = (modules as any)[name];
}

export default Conveyer;
