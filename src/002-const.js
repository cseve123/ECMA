// es5中，定义不可改的变量
Object.defineProperty(window, 'pi',{
    value: 3.14,
    writable: false
});
pi = 5;
console.log(pi);
// Object.freeze() 只冻结对象的浅层

// 不可修改值,必须有初始值
// 引用值可以修改
const a = 5;
// a = 6; 不可被修改
const obj = {
    age: 7
}
obj.age = 8;