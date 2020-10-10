// 对象的扩展
// 简写和变量属性名
let name = 'imo';
let age = 34;
let s = 'school'
let obj = {
  name,
  age,
  [s]: 'imooc', // 动态属性名 obj.school
  study() { // 箭头函数的简写
    console.log('this', this)
  }
}

// Object.is() === 的严格模式判断
console.log(Object.is(2, '2')) // false
console.log(Object.is(NaN, NaN)) // true,三等运算是!=的

// 对象的扩展运算
let x = {
  name: 'im',
  age: 12
}
let y = {...x}
console.log(y);
// 同样的效果
Object.assign(y, x);


// in 运算符
let arr = [1, 2, 3];
console.log('in-arr-index',3 in arr);
console.log('obj-in-name', 'name' in x);

// 对象的遍历
let obj2 = {
  name: 'xiecheng',
  age: 34,
  school: 'immoc'
}
for (let key  in obj2) {
  console.log(key, obj2[key])
}
Object.keys(obj2).forEach(key => {
  console.log(key, obj2[key]);
})
Object.getOwnPropertyNames(obj2).forEach(key => {
  console.log(key, obj2[key]);
})
Reflect.ownKeys(obj2).forEach(key => {
  console.log(key, obj2[key])
})