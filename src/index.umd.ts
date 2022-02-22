import Conveyer, * as modules from "./index";

for (const name in modules) {
  (Conveyer as any)[name] = (modules as any)[name];
}

export default Conveyer;
