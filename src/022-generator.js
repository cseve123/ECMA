import { getMetadata } from 'core-js/fn/reflect';
// generator异步
import ajax from './020-ajax';
// function foo() {
//     for(let i=0;i<3;i++){
//         console.log(i)
//     }
// }
// foo();
// 不能作为构造函数，yield只在函数里有效，不能在其他作用域使用
function* foo(args) {
    for(let i=0;i<3;i++){
        yield i
    }
    // args.forEach(item => {
    //     yield item +1;
    // })
}
let f = foo();
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

// next和yeild顺序,next(val)可接受值
function* gen(x){
    let y = 2 * (yield(x+1));
    let z = yield(y/3);
    return x + y + z;
}
let g = gen(5); // x = 5
console.log(g.next()) // yield后面的（x+1）6
console.log(g.next(12)) // 传递值到第一个yield的结果 2×12 y = 24,这个yield后面(y/3) 8
console.log(g.next(13)); // 传递值 上一个yield=13 z=13
// 5+24+13

// 场景
function* count(x=1){
    while(true) {
        if(x%7 === 0) {
            yield x;
        }
        x++
    }
};
let n = count();
console.log(n.next().value);
console.log(n.next().value);

// generator异步
function request(url) {
    ajax(url,res=> {
        getMetadata.next(res)
    })
}
function* gens() {
    let res1 = yield request(''); //异步操作
    let res2 = yield request('');
}
let getData = gens();
getData.next();