const invite = getParamFromURL("invite");
if (invite) ele(".header").innerHTML = "";
ele("#phone").innerHTML = getParamFromURL("phone");
var count = 60;
const phone = getParamFromURL("phone");
const theSpan = ele("#send").getElementsByTagName("span")[0];
const theBtn = ele("#send").getElementsByTagName("button")[0];
const codeInput = elea("input")[0];
function sendVericode() {
  theBtn.style.display = "none";
  theSpan.innerHTML = "发送中...";
  getVeriCode(
    phone,
    () => {
      const timer = setInterval(() => {
        if (count === 0) {
          clearInterval(timer);
          theBtn.style.display = "block";
          theSpan.innerHTML = "没有收到?";
          count = 60;
        } else {
          count--;
          theSpan.innerHTML = count + "s后可重发";
        }
      }, 1000);
    },
    () => {
      theBtn.style.display = "block";
      theSpan.innerHTML = "没有收到?";
    }
  );
}
sendVericode();
function next() {
  if (!codeInput.value) {
    loading("warning", "请输入验证码");
    return;
  }
  verifyVeriCode(phone, codeInput.value, () => {
    const url = top.location.href;
    var params = url.substr(url.indexOf("?") + 1);
    window.location.href = `setpwd.html?captchaCode=${codeInput.value}&${params}`;
  });
}
