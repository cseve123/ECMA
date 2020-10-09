// 数组的新增

// 伪数组处理
let divs = document.querySelectorAll('div');
// 处理1-slice
let arr = Array.prototype.slice.call(divs);
arr.push(123);
// 处理2-Array.form()
let arr2 = Array.from(div3)

// 处理new Array长度问题
// let arr = new Array(3) // length =3
let arr3 = Array.of(3) // length =1


// Array.copyWithin(star,end),起始区间替换成结尾的
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4.copyWithin(1,3)) // [1, 4, 5, 4, 5]
 
// Array.fill() 替换填充元素
let arr5 = [1, 2, 3, 4, 5];
arr.fill('imooc', 1, 3)
// [1, imooc, imooc, 4, 5]

// Array.includes() 是否包含
let arr6 = [1, 2, 3, NaN];
console.log(arr6.includes(NaN)) // true
console.log(arr6.indexOf(NaN)) // -1