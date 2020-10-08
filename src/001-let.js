// 特性
// 1，不属于顶级对象window
// 2，没有变量提升
// 3，暂时死区--本质不允许声明前使用
// 4，不能重复声明
// 5，块级作用域
var a = 5;
if (true) {
    a = 6; // 这里会触发暂时死区，不能在声明前，提前调用
    let a;
    console.log(a);
}

// foo函数的默认 a= b，也是隐式的暂时死区
function foo(a = b, b =2) {
    console.log(a, b);
}
foo();

// 块级作用域
// 原来的var没有块级作用域都取得到
for (var i =0; i < 3; i++) {
    console.log('循环内', i);
}
console.log('循环外的i', i); // 3

// 作用域的考题
// 队列里for是同步事件执行完后i=3,再到异步事件，输出的就只是3
// for (var j = 0; j < 3; i++) {
//     setTimeout(function(){
//         console.log(j);
//     }, 0);
// }