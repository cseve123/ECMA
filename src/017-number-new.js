// 数值的扩展

// ES6 0B二进制 0O八进制
const a = 0B101;
console.log(a);
const b = 0O777;
console.log(b);

//  Number.isFinite() 是否有限的
console.log(Number.isFinite(5)) // true
console.log(Number.isFinite(Infinity)) // false

// Number.isNaN()
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(12)) // false

// Number.isInteger
console.log(Number.isInteger(5)) // true
console.log(Number.isInteger(1.2)) //false

// 0.1 + 02 = 0.3?????? IEEE754双进度标准存储二进制数字，转而成二进制会很长，会有精度缺失
 
const max = Math.pow(2, 53);
console.log(max);
console.log(Number.MAX_SAFE_INTEGER === max -1) // 最大安全数
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))

// Math.trunc() 去除小数部分
console.log(Math.trunc(1.5));
console.log(Math.trunc(true)) // 1
console.log(Math.trunc(false)) // 0
console.log(Math.trunc(NaN)) // NaN
console.log(Math.trunc()) // NaN
console.log(Number.parseInt(true)) // NaN
console.log(Number.parseInt(NaN)) // NaN

// Math.sign() 根据正负数0，返回1，-1，0
console.log(Math.sign(5)) // 1
console.log(Math.sign(-5)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(NaN)) // NaN

// Math.cbrt() 计算立方根
console.log(Math.cbrt(8)); // 2
console.log(Math.cbrt('imooc')) // NaN