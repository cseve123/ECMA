import { from } from "core-js/fn/array";
// 模块
import cc, { a as aa, b, sum, obj, People } from './024-module-sub';
console.log(aa, b, sum(1, 2), obj);
let p = new People('dd');
p.showName();
console.log('default', cc);