// 扩展运算符,将数组和类数组值按逗号分隔
function foo (a, b,c) {
  console.log(a, b, c);
}
let arr = [1, 2, 3];
foo(...arr); // 打散开，就是扩展运算

let arr1 = [1,2,3];
let arr2 = [4,5,6];
// es5 arr2和到arr1
// Array.prototype.push.call(arr1, arr2);
// es6扩展
arr1.push(...arr2);


// rest参数，将剩余参数合成一个数组
function foo1 (...args) {
  console.log(args);
}
foo1(1, 2, 3);
let [x, ...y] = [1, 2, 3];
console.log(x)
console.log(y)