// Symbol数据类型

// 独一无二的
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2); // false

let s3 = Symbol('foo'); // 增加了描述
let s4 = Symbol('bar');
console.log(s3.description, s3 === s4);  // false

const obj = {
  name: 'imooc',
  toString() {
    return this.name
  }
}
let s5 = Symbol(obj); //将对象转为字符串，调用tostring
console.log(s5); //Symbol([object Object]) 对象修改后就是Symbol(imooc)

// 全局声明 
let s6 = Symbol.for('foo');
let s7 = Symbol.for('foo');
console.log(s6 === s7); // true .for是全局声明
// 查找描述，只能查全局描述
console.log(Symbol.keyFor(s5), Symbol.keyFor(s6)); //undefined, foo

// 场景-重名
let stu1 = '李四';
let stu2 = '李四';
const grade = {
  [stu1]: {address: 'yyy', tel: '222'},
  [stu2]: {address: 'zzz', tel: '333'}
}
console.log(grade);

const stu3 = Symbol('李四');
const stu4 = Symbol('李四');
const grade2 = {
  [stu3]: {address: 'yyy', tel: '222'},
  [stu4]: {address: 'zzz', tel: '333'}
}
// 通过用Symbol不覆盖同名
console.log(grade2);
console.log(grade2[stu3]);

const sym = Symbol('imooc');
class User {
  constructor(name) {
    this.name = name;
    this[sym] = 'imooc.com';
  }
  getName() {
    return this.name + this[sym]
  }
}
const user = new User('eve');
console.log(user.getName());

for (let key in user) {
  // 遍历是得不出Symbol的变量名
  console.log(key);
}
for(let key of Object.keys(user)) {
  console.log(key);
}
// 只取了Symbol属性名
for(let key of Object.getOwnPropertySymbols(user)) {
  console.log(key);
}
// 取所有的key
for(let key of Reflect.ownKeys(user)) {
  console.log(key);
}

// 提取重复的
const shapeType = {
  triangle: Symbol(), // 这里的值并不重要
  circle: Symbol()
}
function getArea(shape) {
  let area = 0;
  switch(shape) {
    case shapeType.triangle:
      area = 1;
      break;
    case shapeType.circle:
      area = 2
      break
  }
  return area;
}
console.log(getArea(shapeType.triangle));

// ------------------
// ES10 获取描述
console.log(s6.description);