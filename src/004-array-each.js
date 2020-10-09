// 数据的遍历
// for循环
// forEach() 没有返回值，只针对每个元素cb()
// map() 返回新的Array，每个元数cb()
// filter 返回符合cb()条件的数组
// some() 返回boolean,判断是否有元素符合cb()条件
// every() 返回Boolean，判读是否符合cb()条件
// reduce() 接收一个函数作为累加器
// for in


let arr = [1, 2, 3, 2, 4];

// for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach
arr.forEach((item, index, array) => {
  // 当前元素，当前索引， 遍历的数组
  console.log(item, index, array)
})

// map 返回新的
let result = arr.map( item => {
  item +=1
  return item;
})

// filter 返回新的符合条件数组
let result2 = arr.filter((item)=> {
  return item === 2;
})
console.log(arr, result2);
// [1,2],[2]

// some 返回符合条件Boolean
let result3 = arr.some(item => {
  return item = 2;
})
console.log(result3) //true

// every 每个元素都符合
let result4 = arr.every(item => {
  return item = 1;
})
console.log(result) // false

// reduce 累加每一项 1+2
// 四个参数
// 初始值-0
// 场景--求和
let sum = arr.reduce((prev, cur, index, arr) => {
  return prev + cur
}, 0)
console.log(sum) // 3
// 场景--找最大值
let max = arr.reduce((prev, cur) => {
  return Math.max(prev, cur)
})
// 场景--数组去重
// 初始为数组，一个个不包含的push进 
let res = arr.reduce((prev, cur) => {
  prev.indexOf(cur) == -1 && prev.push(cur);
  return prev;
}, [])

// for in， 会遍历原型不推荐
Array.prototype.foo = function() {
  console.log('foo')
}
for (let index in arr) {
  console.log(index, arr[index]); // 会有foo,
}

// find 返回第一个通过cb()条件的元素
let result5 = arr.find((item) => {
  return item  === 2;
})
console.log(arr, result5); // 2 第一个

// findIndex 返回第一个通过cb()条件的元素索引
let result6 = arr.findIndex((item) => {
  return item  === 2;
})
console.log(arr, result5); // 1 第一个索引

// for of,迭代器的使用,有方法values(), keys(), entries()
for (let item of arr) {
  console.log(item)
}
for (let item of arr.values()) {
  console.log(item)
}
// 数组的索引
for (let item of arr.keys()) {
  console.log(item)
}
// 都有的key, value
for (let [index, item] of arr.entries()) {
  console.log(index, item);
}
