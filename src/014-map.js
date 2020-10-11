// 数据结构map

// 任何都可以做key
let m = new Map();
let obj = {
  name: 'imooc'
}
m.set(obj, 'es');
console.log(m);
console.log(m.get(obj));
m.delete(obj);
console.log(m);
console.log(m.has(obj));

// 键值数组写法
let map = new Map([
  ['name', 'imooc'],
  ['age', 5]
])
console.log('---------', map);
console.log(map.size)
console.log(map.has('name'))
console.log(map.get('age'))
map.set('name', 'zhangsan')
map.delete('name')
console.log(map)

// 遍历
map.forEach((value, key) => {
  console.log(value, key);
})

for (let [key, value] of map) {
  console.log(key, value)
}

for (let key of map.keys()) {
  console.log(key);
}
for (let value of map.values()) {
  console.log(value)
}
for (let [key, value] of map.entries()) {
  console.log(key, value)
}

// map和object更简洁

// weakmap和weakset一样，唯一不同的是weakmap键必须是引用类型
let vm = new WeakMap();
vm.set([1], 2);
vm.set({
  name: 'imooc'
}, 'es');
let obj2 = {
  name: 'imooc'
}
let div = document.createElement('div');
document.appendChild(div);
vm.set(obj2, 'dddd')
console.log('div>>>>>', div);
vm.set(div, '11111') // div被删除触发垃圾机制，weakmap的弱引用自动清除
console.log(vm)