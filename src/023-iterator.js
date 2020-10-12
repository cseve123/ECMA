// 迭代器iterator
// 为不同数据结构提供统一访问机制 for of
// 可以让不可遍历可遍历

// 模拟原理
function makeIterator(arr) {
    let nextIndex = 0;
    return {
        next(){
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }

        }
    }
}
let it = makeIterator(['a', 'b', 'c']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 不可遍历结构变的可遍历--[Symbol.iterator]
// 需要-可迭代协议：Symbol.iterator
// 需要-迭代器协议：return{next(){return{vale,done}}}
let courses = {
    allCourse: {
        frontend: ['es','vue','react','小程序'],
        backend: ['Java','python'],
        webapp: ['Android', 'IOS']
    }
}
courses[Symbol.iterator] = function() {
     let allCourse = this.allCourse;
     let keys = Reflect.ownKeys(allCourse);
     let values = [];
     return {
         next() {
            if(!values.length){
                if(keys.length) {
                    values = allCourse[keys[0]]
                    keys.shift();
                }
            }
            return {
                done: !values.length,
                value: values.shift()
            }
         } 
     }
}
for(let c of courses) {
    console.log(c);
}
// generator写法
// courses[Symbol.iterator] = function* (){
//     let allCourse = this.allCourse;
//     let keys = Reflect.ownKeys(allCourse);
//     let values = [];
//     while(1) {
//         if(!values.length) {
//             if(keys.length) {
//                 values = allCourse[keys[0]]
//                 keys.shift()
//                 yield values
//             } else {
//                 return false
//             }
//         } else {
//             yield values.shift();
//         }
//     }
// }
// for(let c of courses) {
//     console.log(c);
// }

let arr = [1,2,3]; //可遍历数据有[Symbol.iterator]
let it1 = arr[Symbol.iterator]();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
// 原生可遍历 Array，Map,Set,String，TypedArray，arguments,NodeList
