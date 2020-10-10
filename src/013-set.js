// set数据结构
// 唯一的值,不能重复
let s = new Set([1, 2, 3, 2]);
s.add('imooc').add('es');
s.delete(2);
// s.clear();
console.log(s.has('imooc'));
console.log(s.size)

// 可遍历的方式都可以用
s.forEach(item => {
  console.log(item);
})
for(let item of s) {
  console.log(item)
}
for(let item of s.keys()) {
  console.log(item);
}
for(let item of s.values()) {
  console.log(item);
}
for(let item of s.entries()) {
  console.log(item[0], item[1]);
}

// 场景-数组去重
let arr = [1, 2,3,4,2,3];
let s1 = new Set(arr);
console.log(s1);
// 合并去重
let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
let s2 = new Set([...arr1, ...arr2]);
// 转换数组
console.log([...s2]);
console.log(Array.from(s2));
// 交集
let s3 = new Set(arr2);
let s4 = new Set(arr1);
let result = new Set(arr1.filter(item => {
  return s3.has(item);
}))
console.log('交集', result);
// 差集
let arr3 = new Set(arr1.filter(item=> {
  return !s3.has(item);
}))
let arr4 = new Set(arr2.filter(item=> {
  return !s4.has(item);
}))
console.log(arr3);
console.log(arr4);

//Weakset 只能存储对象，不可遍历，弱引用(当其他对象不在引用时，就会触发垃圾回收机制，不会在乎weakset是否引用过)
let ws = new WeakSet();
const obj1 = {
  name: 'imooc'
}
const obj2 = {
  age: 5
}
ws.add(obj1);
ws.add(obj2);
// ws.delete(obj1)
console.log(ws);
console.log(ws.has(obj2));
// ws.forEach(item => console.log(item)); // 遍历报错，没有遍历
