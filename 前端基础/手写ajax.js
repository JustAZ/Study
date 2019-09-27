/**
 * 1.创建xhr对象
 * 2.调用open()时,先指定onreadystatechange()
 *      检测readyState,该属性表示请求和响应过程的活动阶段
 *      0:未初始化.尚未调用open()方法.
 *      1:启动.已经调用open()方法,但未调用send()方法
 *      2:发送.已经调用send()方法,但未接受到响应
 *      3:接受.已经接收到部分响应数据
 *      4:完成.已经接受到全部响应数据,而且可以在客户端使用     
 * 
 */

function createXhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject('MicroSoft.XMLHTTP')
    }
}

let xhr = createXhr();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {//完成
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
            console.log(xhr.responeText)
        }else{
            console.log('请求失败'+xhr.status)
        }
    }
}
//xhr.open(method,url,boolean) 要请求的类型,请求的url和是否异步发送请求.未真正发送请求
xhr.open('get','index.text','true')
//设置请求头
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
//超时设定
xhr.timeout = 1000;
//发送请求
xhr.send(null)