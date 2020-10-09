// 解构赋值
// 数组
let [a, b, [c]] = [1, 2, [3, 4]]
// [a=1, b=2, [c=3]]
let [a, b, c, d] = [1, 2, [3, 4]];
// [a=1, b=2,c=[3,4], d=undefined]

let user = {
  name: 'xiecheng',
  age: 34
}
// 别名，默认值
let { age:uage, name='lilei'} = user;
console.log(uage, name);

// 对象的别名属性赋值
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0]} = { foo:123, bar: true})

// 对象的嵌套
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}
// 三个变量locm, start, line
let {loc, loc: { start}, loc: { start: { line }}} = node;
// line =1, start={line:1, column:5},loc = node
