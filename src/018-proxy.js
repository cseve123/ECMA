// 代理proxy
// es5
// let obj = {}
// Object.defineProperty(obj, 'name', {
//     get () {
//         console.log('get');
//         return 'imooc'
//     },
//     set(val){
//         console.log('set')
//     }
// })

const { get } = require("core-js/fn/dict");

// 代理了给对象添加属性 
let obj = {}
let p = new Proxy(obj, {})
p.name = 'imooc'
console.log(obj.name)
for (let key in obj) {
    console.log(key);
}

// 代理对象的检测
let arr = [7, 8, 9]
arr = new Proxy(arr, {
    get(target, prop){
        console.log(target, prop)
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1]);
console.log(arr[10])

let arr2 = [];
arr2 = new Proxy(arr2, {
    set(target, prop, val) {
        if (typeof val === 'number') {
            target[prop] = val;
            return true
        } else {
            return false;
        }
    }
})
arr2.push(5)
arr2.push(6)
// proxy代理的方式为对象的get()和set()添加属性

// has
let range = {
    start: 1,
    end: 5
}
range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <=target.end
    }
})
console.log(2 in range)
console.log(9 in range)
// console.log(range.has(9)) // 直接用代理中的方法会报错

// ownKeys 保护对象数据
let obj2 = {
    name: 'imooc',
    [Symbol('es')]: 'es6'
}
let userinfo = {
    name: 'j',
    age: 12,
    _password:　'***'
}
userinfo = new Proxy(userinfo, {
    // 拦截方法拦截啦key值
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith('_'))
    },
    get(target, prop) {
        return prop.startsWith("_") ? '---' : target[prop]
    }
})
for (let key in userinfo) {
    console.log(key)
}
console.log(userinfo._password); // 正常取可以通过get来做修改


// 拦截保护值的修改查询
// get(),set(),deleteProperty(),ownKeys()
let user3 = {
    name: 'dd',
    age: 12,
    _password: '***'
}
user3 = new Proxy(user3, {
    // get(target, prop){
    //     if(prop.startsWith('_')){
    //         throw new Error('不可访问')
    //     } else {
    //         return target[prop]
    //     }
    // },
    set(target, prop, val) {
        if (prop.startsWith('_')){
            throw new Error('不可访问')
        } else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) { // 拦截删除
        if(prop.startsWith('_')){
            throw new Error('不可删除')
        } else {
            delete target[prop]
            return true
        }
    },
    // 拦截了Object.getOwnPropertyNames()
    // Object.getOwnPropertySymbols()
    // Object.keys()
    ownKeys(target, prop) { // 拦截遍历key
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})
console.log(user3.age)
console.log(user3._password)
try {
    user3._password = 'xxx'
} catch(e) {
    console.log(e.message)
}
try {
    delete user3._password;
} catch(e) {
    console.log(e.message)
}
for (let key in user3) {
    console.log(key)
}


// apply 函数调用的时候进行拦截sum()sum.call().sum.apply()
let sum = (...args) => {
    let num = 0;
    args.forEach(item=> {
        num += item;
    })
    return num
}
sum = new Proxy(sum, {
    apply(target, ctx, args){
        return target(...args) * 2;
    }
})
console.log(sum(1, 2))
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null,[1,2,3]))

// construt 拦截new命令,必须返回一个对象
let user5 = class {
    constructor(name){
        this.name = name;
    }
}
user5 = new Proxy(user5, {
    construct(target, args, newTarget) {
        return new target(...args);
    }
})
console.log(new user5('ddd'));