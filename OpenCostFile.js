// 主入口(必须有)
var main = function(param) {
    var userAgent = navigator.userAgent;
    var isIe;
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        isIe = true;
    else
        isIe = false;

    if (isIe) {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]
            : (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]:0;
        var fIEVersion = Sys.ie;
        if (fIEVersion > 8.0) {
            console.log('ie');
        } else {
            alert('请使用IE9+版本的浏览器！');
        }
    } else if (userAgent.indexOf("Chrome") > -1) {
        var evt = document.createEvent("CustomEvent");//创建自定义事件
        console.log('chrome');
        evt.initCustomEvent("launchEvent", true, false, param);//自定义初始化事件
        document.dispatchEvent(evt);//触发自定义事件
    } else {
        alert('请使用谷歌Chrome或IE9+版本的浏览器！');
    }

};


document.addEventListener('launchEvent', function(evt) {
    //chrome.runtime.sendMessage({type: "launch", message: evt.detail}, function(response) {
    //    console.log(response)
    //});
    console.log(evt.detail);
}, false);

param = 'test';
main(param);




