// 深浅拷贝

// Object.assign 是适用于浅拷贝
let target = {
  a: {
    b: {
      c: 1
    },
    e: 4,
    f: 5,
    g:6
  }
};
let source = {
  a: {
    b: {
      c: 1
    },
    e: 4,
    f: 5
  }
}
Object.assign(target, source); // target.g属性丢失，深对象引用，相同的后面覆盖了前面
console.log(target);

// 深拷贝
let obj1 = {
  name: 'xiecheng',
  age: 34
}
// 方法一JSON.stringify和JSON.parse
let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);

// 方法二自定义循环递归
// 检测类型
let checkType = data => {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType('123')); // [object String]
console.log(checkType(123)); // [object Number]
console.log(checkType(function(){})); // [object Function]
console.log(checkType([])); // [object Array].slice(8, -1) > Array
// 递归
let deepClone = target => {
  let targeyType = checkType(target);
  let result;
  if (targeyType === 'Object') {
    result = {};
  } else if (targeyType === 'Array') {
    result = [];
  } else {
    return target;
  }
  // 子元素递归
  for (let i in target) {
    let value = target[i];
    let valueType = checkType(value);
    if (valueType === 'Object' || Object.is(valueType, 'Array')) {
      result[i] = deepClone(value);
    } else {
      result[i] = value;
    }
  }
  return result;
}
let obj1 = {
  name: 'xiecheng',
  hobby: ['coding', 'eating']
}
let obj2 = deepClone(obj1);