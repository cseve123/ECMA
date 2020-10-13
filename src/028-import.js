// ES11 import()动态导入
document.documentElement.onclick = () => {
    import('./020-ajax').then(res => {
        console.log(res)
        res.default('url', (res)=> {
            console.log(res);
        })
    })
}