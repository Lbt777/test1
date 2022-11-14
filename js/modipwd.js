function next() {
    var inputs = elea("input");
    const oldPassword = inputs[0].value;
    const password = inputs[1].value;
    const rePassword = inputs[2].value;
    if (!oldPassword || !password || !rePassword) {
      loading("warning", "请输入密码");
      return;
    }
    if (password !== rePassword) {
      loading("warning", "两次新密码不相同");
      return;
    }
    modiPwd({ oldPassword, password }, () =>
      window.history.back()
    );
  }