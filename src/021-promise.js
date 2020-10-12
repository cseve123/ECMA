import ajax from './020-ajax';
// ES6异步
// promise优势在于状态管理
// resolve

const { resolve } = require("core-js/fn/promise")

// reject
let p = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log('imooc')
        // resolve()
        // reject()
        // if (true) {
        //     resolve()
        // } else {
        //     reject()
        // }
        resolve('成功')
    },1000)
}).then((res)=> {
    console.log(res)
},() => {
    console.log('失败')
})

// promise的代码是同步的.then里的代码是异步的
let p1 = new Promise((resolve, reject)=> {
    console.log('Promise里',1)
    setTimeout(()=> {
        resolve()
    },1000 );
})
console.log(2)
p1.then(res=> {
    console.log(3)
})
console.log(p1);

// 状态情况
let p2 = new Promise((resolve, reject) => {
    resolve(1)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(2)
    }, 1000)
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject(3)
    }, 1000)
})
console.log(p2) // resolve 1
console.log(p3) // pending
console.log(p4) // pending
setTimeout(()=> {
    console.log(p3) // 事件队列到异步 resolve
}, 2000)
setTimeout(()=> {
    console.log(p4)
}, 2000)
p2.then(res=> {
    console.log(res)
})
p3.then(res=> {
    console.log(res)
})
p4.catch(err => {
    console.log('失败的', err);
})

// 状态不可逆
let p5 = new Promise((resovle, reject)=> {
    resolve(1)
    // reject(2)
})
p5.then(res=>{
    console.log(res)
},(err) => {
    console.log(err)
})
// 只会输出1,结果已有就不可逆了

// 回调地狱到链式调用平级
function getPromise(url) {
    return new Promise((resolve, reject)=> {
        ajax(url, res=> {
            resolve(res)
        },err => {
            reject(err)
        })
    })
}
// new Promise((resolve, reject) => {
//     ajax('',(res)=>{
//         resolve(111111)
//     })
// }).then(res=> {
//     return new Promise((resolve, reject)=> {
//         ajax('', res=> {
//             resolve(222222);
//         })
//     })
// })
getPromise('1')
.then(res=> {
    console.log(res);
    return getPromise('2');
})
.then(res=> {
    console.log(res)
})
.catch(err=>{
    console.log(err)
})

// promise静态方法 返回一个promise
let p6 = Promise.resolve('success')
let p7 = Promise.reject('fail');
p6.then(res=> {
    console.log(res)
})
p7.catch(err=> {
    console.log(err);
})

// Promise.all,全部加载完
Promise.all([p1,p2,p6,p7]).then(res=> {
    console.log(res);
},err=> {
    console.log(err)
})
// Promise.race 一个完成就完成
Promise.race([p1,p2]).then(res=> {
    console.log(res)
})

const imgArr = ['1.jpg', '2.jpg', '3.jpg'];
let promiseArr = []
imgArr.forEach(item=> {
    promiseArr.push(
        new Promise((resolve, reject)=> {
            // 上传操作
            resolve(1);
        })
    )
})
Promise.all(promiseArr).res(res=> {
    // 插入
    console.log('图片上传完成')
})

// 场景 请求和超时
function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function() {
            resolve();
        }
        img.src = 'http://www.xx.com/x.jpg'
    })
}
function timeout() {
    return new Promise((resovle, reject) => {
        setTimeout(()=> {
            reject('图片请求超时')
        }, 2000)
    })
}
Promise.race([getImg(), timeout()])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})