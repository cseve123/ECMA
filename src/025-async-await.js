// async和await 异步解决方案， generator的语法糖
// 返回promise
async function foo(){
     return 'imooc'
}
console.log(foo()); // Promise

function timeout() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            // console.log(1);
            resolve(1);
            // reject(1)
        })
    })
}
async function foo1(){
    // 使其按顺序输入
    const res1 = await timeout();
    console.log(res1);
    const res2 = await timeout();
    console.log(res2)
    // 异步reject, 就不会往下走了
    console.log(2);
    return 3;
}
foo1().then(res=> {
    console.log('promise---', res);
})
.catch(err => {
    console.log(1);
});

