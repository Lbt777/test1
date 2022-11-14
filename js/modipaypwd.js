var user;
current((result) => {
  user = result;
  ele("#phone").innerHTML = user.phone;
});

var count = 60;
var sending = false;
const theBtn = ele(".vericode").getElementsByTagName("button")[0];
function sendVericode() {
  if (sending) return;
  sending = true;
  theBtn.style.color = "#696969";
  theBtn.innerHTML = "发送中...";
  getVeriCode(
    user.phone,
    () => {
      const timer = setInterval(() => {
        if (count === 0) {
          clearInterval(timer);
          sending = false;
          theBtn.style.color = "#202020";
          theBtn.innerHTML = "发送验证码";
          count = 60;
        } else {
          count--;
          theBtn.innerHTML = count + "s";
        }
      }, 1000);
    },
    () => {
      sending = false;
      theBtn.style.color = "#202020";
      theBtn.innerHTML = "发送验证码";
    }
  );
}

function next() {
  var inputs = elea("input");
  var captchaCode = inputs[0].value;
  var password = inputs[1].value;
  var rePassword = inputs[2].value;
  if (!captchaCode) {
    loading("warning", "请输入验证码");
    return;
  }
  if (!password || !rePassword) {
    loading("warning", "请输入新支付密码");
    return;
  }
  if (password !== rePassword) {
    loading("warning", "两次密码不相同");
    return;
  }
  resetPayPwd(
    {
      phone: user.phone,
      captchaCode,
      password,
    },
    () => window.history.back()
  );
}
