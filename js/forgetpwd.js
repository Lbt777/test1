function next() {
  var inputs = elea("input");
  var phone = inputs[0].value;
  if (!phone || !/^1[3456789]\d{9}$/.test(phone)) {
    loading("warning", "请输入正确的手机号");
    return;
  }
  verifyphone(phone, (result) => {
    if (result.success) loading("warning", "该手机未注册");
    else window.location.href = "vericode.html?phone=" + phone + "&type=2";
  });
}
