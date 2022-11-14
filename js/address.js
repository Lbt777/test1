const inputs = elea("input");

getAssets(function (data) {
  if (data.fil.hasOwnProperty('wfiladdress') && data.fil.wfiladdress != '') {
    document.getElementById("addressValue").value = data.fil.wfiladdress;
  }
});

function makeExpandingArea (el) {
  var timer = null;
  //由于ie8有溢出堆栈问题，故调整了这里
  var setStyle = function (el, auto) {
    if (auto) el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }
  var delayedResize = function (el) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      setStyle(el)
    }, 200);
  }
  if (el.addEventListener) {
    el.addEventListener('input', function () {
      setStyle(el, 1);
    }, false);
    setStyle(el)
  } else if (el.attachEvent) {
    el.attachEvent('onpropertychange', function () {
      setStyle(el)
    })
    setStyle(el)
  }
  if (window.VBArray && window.addEventListener) { //IE9
    el.attachEvent("onkeydown", function () {
      var key = window.event.keyCode;
      if (key == 8 || key == 46) delayedResize(el);

    });
    el.attachEvent("oncut", function () {
      delayedResize(el);
    }); //处理粘贴
  }
}

//调用
var textarea = document.getElementById('addressValue');
makeExpandingArea(addressValue);

function next () {
  count = 60;
  sending = false;
  veriBtn.innerHTML = "短信";
  var amount = document.getElementById("addressValue").value;
  if (amount == null || amount == '') {
    loading("warning", "请输入提币地址");
  } else {
    ele("#address").innerHTML = document.getElementById("addressValue").value;
    popup();
  }
}
function withdrawlConfirm () {
  const address = document.getElementById("addressValue").value;
  const payPassword = inputs[0].value;
  const code = inputs[1].value;
  if (inputs[0].value == null || inputs[0].value == '') {
    loading("warning", "请输入支付密码");
  } else if (inputs[1].value == null || inputs[1].value == '') {
    loading("warning", "请输入验证码");
  } else {
    coinAddress(address, payPassword, code, (result) => {
      window.history.back();
    });
  }
}
function goWithdrawRecord () {
  window.location.href = `withdrawrecord.html?coin=${coin}`;
}
var count = 60;
var sending = false;
const veriBtn = ele(".vericode").querySelector("button");


function sendSms () {
  if (sending) return;
  sending = true;
  veriBtn.innerHTML = "发送中...";
  sendWithdrawSms((result) => {
    if (result.success) {
      const timer = setInterval(() => {
        if (count === 0) {
          clearInterval(timer);
          count = 60;
          sending = false;
          veriBtn.innerHTML = "短信";
        } else {
          count--;
          veriBtn.innerHTML = count + "s";
        }
      }, 1000);
    } else {
      sending = false;
      veriBtn.innerHTML = "短信";
    }
  });
}
