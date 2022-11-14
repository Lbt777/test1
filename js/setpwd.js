const invite = getParamFromURL("invite");
if (invite) ele(".header").innerHTML = "";
function next() {
  var inputs = elea("input");
  var pwd1 = inputs[0].value;
  var pwd2 = inputs[1].value;
  if (!pwd1 || !pwd2) {
    loading("warning", "请设置登录密码");
    return;
  }
  if (pwd1 !== pwd2) {
    loading("warning", "两次密码不相同");
    return;
  }
  const type = getParamFromURL("type"); // 1.注册 2.忘记密码
  if (type == 1) {
    signup(
      {
        phone: getParamFromURL("phone"),
        inviteCode: invite || getParamFromURL("inviteCode"),
        messageCode: getParamFromURL("captchaCode"),
        password: pwd1,
      },
      () => {
        if(invite){
          window.location.replace("download.html")
        }else{
          window.location.replace("index.html")
        }
      }
    );
  } else if (type == 2) {
    forgetPwd(
      {
        phone: getParamFromURL("phone"),
        captchaCode: getParamFromURL("captchaCode"),
        password: pwd1,
      }, 
      () => ( window.location.replace("signin.html"))
    );
  }
}
