// 反射Reflect
// Object内部方法
// 修改Object的返沪结果合理化
// 让Object操作变成函数化行为
// 方法和proxy对应

const { Reflect } = require("core-js");

// Object -> Reflect
// 修改成Reflect
let obj = {}
let newVal = ''
Reflect.defineProperty(obj, 'name', {
    get() {
        return newVal
    },
    set(val){
        newVal = val;
    }
})
obj.name = 'es'
console.log(obj.name)

// 修复Object.defineProperty没有返回值
// Reflect.defineProperty 返回Boolean
try {
    Object.defineProperty();
}catch(e) {
    console.log(e.message)
}
// if (Reflect.defineProperty()) { // 返回Boolean
// }

// 修改对象的函数形式
console.log('assign' in Object) // true
console.log(Reflect.has(Object, 'assign'))

// 拦截形式同proxy
let user3 = {
    name: 'dd',
    age: 12,
    _password: '***'
}
user3 = new Proxy(user3, {
    get(target, prop){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        } else {
            // return target[prop]
            return Reflect.get(target, prop)
        }
    },
    set(target, prop, val) {
        if (prop.startsWith('_')){
            throw new Error('不可访问')
        } else {
            // target[prop] = val;
            Reflect.set(target, prop, val)
            return true;
        }
    },
    deleteProperty(target, prop) { // 拦截删除
        if(prop.startsWith('_')){
            throw new Error('不可删除')
        } else {
            // delete target[prop]
            Reflect.defineProperty(target, prop)
            return true
        }
    },
    // 拦截了Object.getOwnPropertyNames()
    // Object.getOwnPropertySymbols()
    // Object.keys()
    ownKeys(target, prop) { // 拦截遍历key
        return Reflect.keys(target).filter(key => !key.startsWith('_'))
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
        // return target(...args) * 2;
        return Reflect.apply(target, ctx, [...args]) * 2
    }
})
console.log(sum(1, 2))
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null,[1,2,3]))