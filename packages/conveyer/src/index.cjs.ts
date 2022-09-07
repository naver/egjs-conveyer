import Conveyer, * as modules from './index';

for (const name in modules) {
  (Conveyer as any)[name] = (modules as any)[name];
}

declare const module: any;
module.exports = Conveyer;
export default Conveyer;
export * from './index';
