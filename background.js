/**
 * Created by yuanjw on 2017/10/10.
 */

function connect(data){
    var hostname = 'test';//test对应注册表上项的名称
    port = chrome.runtime.connectNative(hostname);//建立连接
    port.postMessage(data);//可选如有需要，发送参数消息到本地程序
}

chrome.extension.onRequest.addListener(function(data, sender) {//监听请求

    if (data.length > 0) {//如果input的value值不为空则打开记事本
        alert(data);
        connect(data);
    }else{//如果input的value值为空则报错
        alert('请输入消息');
    }
});