// 导出
// export const a = 5;
// export const b = 'imooc';
// export const sum = (x,y) => x + y;
// const obj = {
//     name: 'es'
// }
// export {obj}; // 导出对象
const a = 5;
const b = 'imooc';
const sum = (x, y) => x+y
const obj = {
    name:'es'
}
class People {
    constructor(name) {
        this.name = name;
    }
    showName(){
        console.log(this.name);
    }
}
export {
    a,
    b,
    sum,
    obj,
    People
}
const c = 6;
export default c; // default 只能有一个