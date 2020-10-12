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

// -------------------------
// ES8
// Object.values(),Object.entries()
const obj3 = {
  name: 'imooc',
  web: 'www.imooc.com',
  course: 'es'
}
console.log(Object.values(obj3));
console.log(Object.entries(obj3))

// 对象属性描述符 Object.getOwnPropertyDescriptors()
const desc = Object.getOwnPropertyDescriptors(obj3)
console.log(desc); 

const obj4 = {};
// 自定义描述属性
Reflect.defineProperty(obj4, 'name', {
  value: 'imooc',
  writable: true,
  configurable: true,
  enumerable: true
})
console.log('obj4', obj4);
for(let key in obj4) {
  console.log(1111111111111111)
  console.log('属性描述配置了true枚举', key);
}
// 获取单个的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj4, 'name'))