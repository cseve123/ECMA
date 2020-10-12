// 函数参数

// 默认值修复,默认值一定放最后面
function foo (x, y = 'world', z) {
  // 以前通过判断的方式去写存在的问题
  // var yVal = y || 'world'
  // 函数内部同名参数报错
  // let y = y;
  console.log(x, y, z);
}

foo('hello', 0);

// 与结构赋值结合
function ajax (url, {
  boby = '',
  method = 'get'
} = {}) {
  console.log(method)
  // 返回没有默认值的参数个数
  console.log('function没有默认值参数长度', ajax.length);
}
ajax('http://www.imoo.com', {
  method: 'post'
})

// 形参数作用域, 先从函数里找包含参数
let x = 1;
function foo1 (x, y = x) {
  console.log(y); // 2,这里就是参数x = 2
}
foo1(2);
// 在形参作用域里的x是全局里的x,验证形参作用域
function foo2 (y = x) {
  let x = 2;
  console.log(y);
}
foo2();

// 函数名称
console.log(foo2.name);
console.log((new Function()).name) // anonymous

function foo3(x, y) {
  console.log(this.name, x, y);
}
// bind 绑定作用域，里的this
foo3.bind({ name: 'xiecheng' })(1, 2);
console.log((function(){}).bind({}).name);  // bound

// -----------------
// ES8-尾都号-允许函数参数列表最后多一个逗号
function trailing(x,y,) {
  // zhushi
  console.log(x,y);
}
trailing(1,2)

// ------------------
// ES10 返回事实片段Function.prototype.toString()
console.log(trailing.toString());
