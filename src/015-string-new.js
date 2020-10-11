// 字符串扩展
// unicodes
// \uxxxx
// 码点0000~ffff
// console.log(`${\u{20BB7}}`); 

// 遍历
for (let item of 'imooc') {
  console.log(item);
}

// 模板字符串
let str = `字符串模板${1}`;
// 带标签的模板字符串，第一个参数是字符串数组，剩下的参数是变量参数
const foo = (a, b, c, d) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
const name = 'xiecheng'
const age = 34;
foo`这是${name},他的年龄是${age}岁`

console.log(String.fromCharCode(0x20BB7)) //es5
console.log(String.fromCodePoint(0x20BB7)) // es6 扩大码点查找

// indexOf
const str2 = 'imooc';
console.log(str2.indexOf('mo')); // 1
console.log(str2.includes('mo')); // true

console.log(str2.startsWith('im')) // true,以什么开头
console.log(str2.endsWith('im')) // false，以什么结尾

const newStr = str2.repeat(10);
console.log(newStr);