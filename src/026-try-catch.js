const checkNum = num => {
    try {
        Number.isInteger(num);
        return true;
    } catch { // 可简写了
        console.log('catch')
        return false
    }
}
checkNum('ssss');