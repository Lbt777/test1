const invite = getParamFromURL("invite");
var inputs = elea("input");
if (invite) {
  inputs[1].value = invite;
  const signinBtn = ele("#signinBtn");
  signinBtn.innerHTML = "下载APP";
  signinBtn.onclick = () => {
    getConfig((result) => {
      window.location.href = result.downloadLink
    });
  };
}
// 注册
function next() {
  var phone = inputs[0].value;
  var inviteCode = inputs[1].value;
  if (!phone || !/^1[3456789]\d{9}$/.test(phone)) {
    loading("warning", "请输入正确的手机号");
    return;
  }
  if (!inviteCode) {
    loading("warning", "请输入正确的推荐码");
    return;
  }
  verifyphone(phone, (result) => {
    if (result.success) {
      verifyInviteCode(inviteCode, () => {
        window.location.href =
          "vericode.html?phone=" +
          phone +
          "&inviteCode=" +
          inviteCode +
          "&type=1&invite=" +
          invite;
      });
    } else loading("warning", result.message);
  });
}
