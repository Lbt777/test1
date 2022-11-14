// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if(new Date().getTime() > user.time){
  current((result) => {
    user = result;
    ele("#qrcodeImg").src = user.qr;
    ele("#inviteCode").innerHTML = user.invite.toUpperCase();
    ele("#addressText").innerHTML = user.inviteCodeUrl;
  });
}else{
  user = user.data;
  ele("#qrcodeImg").src = user.qr;
  ele("#inviteCode").innerHTML = user.invite.toUpperCase();
  ele("#addressText").innerHTML = user.inviteCodeUrl;
}

getConfig((result) => {
  ele("#appName").innerText=result.appTitle || "";
});


var clipboard = new ClipboardJS("#copyBtn");
clipboard.on("success", function (e) {
  loading("success", "复制成功");
  e.clearSelection();
});

var clipboard1 = new ClipboardJS("#copyBtnOne");
clipboard1.on("success", function (e) {
  loading("success", "复制成功");
  e.clearSelection();
});

function haibao(){
  window.location.href = `haibao.html`;
}