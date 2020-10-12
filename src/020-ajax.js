// Ajax原理
function ajax(url, callback, failed) {
    var xmlhttp;
    // 1.创建XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2.发送请求
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    // 3.服务端响应
    xmlhttp.onreadstagechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            callback(obj);
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 500) {
            failed(JSON.parse(xmlhttp.responseText))
        }
    }
};
var url = 'http://musicapi.xiecheng.live/personal'
ajax(url, function(res) {
    console.log(res);
    ajax('',res=> {
        ajax('',res=>{})
    })
})
// callback回调地狱
export default ajax;