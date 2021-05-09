var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    document.getElementById('app').style.display="none";
    var head = document.head || document.getElementsByTagName('head')[0];
var style = document.createElement('style');
style.innerHTML = `
 body,html{width:100%;height:100%}
        *{margin:0;padding:0}
        body{background-color:#fff}
        .top-bar-guidance{font-size:15px;color:#fff;height:70%;line-height:1.8;padding-left:20px;padding-top:20px;background:url(https://gw.alicdn.com/tfs/TB1eSZaNFXXXXb.XXXXXXXXXXXX-750-234.png) center top/contain no-repeat}
        .top-bar-guidance .icon-safari{width:25px;height:25px;vertical-align:middle;margin:0 .2em}
        .app-download-tip{margin:0 auto;width:320px;text-align:center;font-size:15px;color:#2466f4;}
        .app-download-tip .guidance-desc{background-color:#fff;padding:0 5px}
        .app-download-btn{display:block;width:214px;height:40px;line-height:40px;margin:18px auto 0 auto;text-align:center;font-size:18px;color:#2466f4;border-radius:20px;border:.5px #2466f4 solid;text-decoration:none}
        .layui-layer-dialog .layui-layer-content {color: #fff;}`;
head.appendChild(style);
   document.body.innerHTML = `<div class="top-bar-guidance">
    <p>点击右上角<img src="https://gw.alicdn.com/tfs/TB1xwiUNpXXXXaIXXXXXXXXXXXX-55-55.png" class="icon-safari" /> <span id="openm">Safari/浏览器打开</span></p>
    <p>可以继续浏览本站哦~</p>
</div>
<div class="app-download-tip">
    <span class="guidance-desc">您也可以复制本站网址，到其它浏览器打开</span>
</div>
    <a class="app-download-btn" id="leo-copy-defend" href="javascript:;">点我复制</a>

<script src="https://cdn.staticfile.org/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/clipboard.js/1.6.1/clipboard.min.js"></script>
<script src="https://cdn.staticfile.org/layer/3.1.1/layer.min.js"></script>
<script>
    var clipboard = new Clipboard('#leo-copy-defend', {text: function() {return window.location.href;}});
    clipboard.on('success', function(e) {layer.msg('复制成功，快到浏览器打开浏览吧！');});
    clipboard.on('error', function(e) {layer.msg('复制失败，请手动复制或重试！');});
</script>`
    
}
