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

// ----------------------------------
// ES9
// rest
const obj9_1 = {
  name: 'imo',
  age: 1,
  obj: {
    num: 2
  }
}
const obj9_2= {
  school: 'imooc'
}
// 克隆对象-是浅拷贝
const obj9_3 = {
  ...obj9_1
}
obj9_1.obj.num = 3;
console.log(obj9_3);
// 合并对象
const obj9_4 = {
  ...obj9_1,
  ...obj9_2
}
// 解构剩余的，放最后一个
const {name9, age9, ...rest9} = obj9_4;

// ---------------------------
// ES10
// Object.fromEntries()
const obj10 = {
  name: 'imooc',
  age: 1
}
const entries10 = Object.entries(obj10);
console.log(entries10);
const fromEntries10 = Object.fromEntries(entries10)
console.log(fromEntries10);
// 将map -> 对象
const map10 = new Map();
map10.set('name', 'df');
const mapEntries = Object.fromEntries(map10);
console.log(mapEntries);

const course10 = {
  math: 80,
  english: 85,
  chinese: 90
}
const res10 = Object.entries(course10).filter(([key, val]) => {
  return val > 80;
})
console.log(Object.fromEntries(res10));

// ES11 ?可选链
const obj11 = {
  name: '1',
  age:123,
  getNum(){
    return 455
  }
}
// 如果是返回的数据不确定有没有时
const num11 = obj11 && obj11.getNum && obj11.getNum();
// 可选写法
const Num11 = obj11?.getNum?.();
console.log(Num11); 
