/**
 * Created by yuanjw on 2017/10/10.
 */
function connect(){
    var data = document.getElementById('text').value;//获取input的value值
    chrome.extension.sendRequest(data);//发送请求
}
document.getElementById('button').addEventListener('click',connect);  //当用户点击按钮，则发起请求
