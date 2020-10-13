// ES11 globalThis 根据环境自动匹配全局对象
const getGlobal = () => {
    if(typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global!== 'undefined') {
        return global
    }
    throw new Error('无法找到全局对象')
}
console.log(getGlobal());
console.log(globalThis);