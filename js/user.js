var config = JSON.parse(window.localStorage.getItem("config"));
getConfig((result) => {
  config = result;
  coincard();
  aboutus()
});


function aboutus () {
  // 用户信息判断是否展示关于我们
  if (config.hasOwnProperty('isAboutUS')) {
    if (config.isAboutUS == 1) {
      ele("#aboutUs").style.display = "flex";
    } else {
      ele("#aboutUs").style.display = "none";
    }
  } else {
    ele("#aboutUs").style.display = "none";
  }
}

// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if (new Date().getTime() > user.time) {
  current((result) => {
    user = result;
    userMsg()
  });
} else {
  user = user.data;
  userMsg()
}

function userMsg () {
  //展示用户头像昵称或者手机号 
  ele("#avatar").src = user.avatar || "images/default-head.png";
  ele("#name").innerHTML = user.name || user.phone;
  // 用户信息判断是否展示分享
  if (user.hasOwnProperty('shareAuthority')) {
    if (user.shareAuthority != 1) {
      ele("#shareBox").style.display = "flex";
    } else {
      ele("#shareBox").style.display = "none";
    }
  } else {
    ele("#shareBox").style.display = "flex";
  }
  if (user.hasOwnProperty('summaryAuthority')) {
    if (user.summaryAuthority == 1) {
      ele("#summaryAuthority").style.display = "flex";
    } else {
      ele("#summaryAuthority").style.display = "none";
    }
  }
}

// 卡片展示
function coincard () {
  if (config.coinType == 1) {
    document.getElementById("assets").innerHTML =
      `<div style="width:auto;padding-left: 0rem;margin: 0 0.5rem;">` +
      `<div style="background-image: url(images/fil-bg.png);width: 100%;">` +
      `<a href="assetrecord.html?coin=fil">` +
      `<div style="background-color: #3b82ee">` +
      `<img src="images/fil-icon.png" />` +
      `</div>` +
      `<span>FIL</span>` +
      `</a>` +
      `<a href="assetrecord.html?coin=fil">` +
      `<div>` +
      `<p i18n="UserBalance">余额</p>` +
      `<p id="fil">0.00</p>` +
      `</div>` +
      `<div>` +
      `</div>` +
      `</a>` +
      `<div>` +
      `<a onclick="goToCoin(1,\'fil\')" i18n="UserRecharge">充币</a>` +
      `<a onclick="goToCoin(2,\'fil\')" i18n="UserExtract">提币</a>` +
      `</div>` +
      `</div>` +
      // `<div style="background-image: url(images/usdt-bg.png)">` +
      // `<a href="assetrecord.html?coin=usdt">` +
      // `<div style="background-color: #17a468">` +
      // `<img src="images/usdt-icon.png" />` +
      // `</div>` +
      // `<span>USDT</span>` +
      // `</a>` +
      // `<a href="assetrecord.html?coin=usdt">` +
      // `<div>` +
      // `<p i18n="UserBalance">余额</p>` +
      // `<p id="usdt">0.00</p>` +
      // `</div>` +
      // `</a>` +
      // `<div>` +
      // `<a href="recharge.html?coin=usdt" i18n="UserRecharge">充币</a>` +
      // `<a href="withdraw.html?coin=usdt" i18n="UserExtract">提币</a>` +
      // `</div>` +
      // `</div>` +
      `</div>`;
    i18nExecute(localStorage.getItem('lang') || 'tw')
  } else {
    document.getElementById("assets").innerHTML =
      `<div>` +
      `<div style="background-image: url(images/fil-bg.png)">` +
      `<a href="assetrecord.html?coin=fil">` +
      `<div style="background-color: #3b82ee">` +
      `<img src="images/fil-icon.png" />` +
      `</div>` +
      `<span>FIL</span>` +
      `</a>` +
      `<a href="assetrecord.html?coin=fil">` +
      `<div>` +
      `<p i18n="UserBalance">余额</p>` +
      `<p id="fil">0.00</p>` +
      `</div>` +
      `<div>` +
      `</div>` +
      `</a>` +
      `<div>` +
      `<a onclick="goToCoin(1,\'fil\')" i18n="UserRecharge">充币</a>` +
      `<a onclick="goToCoin(2,\'fil\')" i18n="UserExtract">提币</a>` +
      `</div>` +
      `</div>` +
      `<div style="background-image: url(images/usdt-bg.png)">` +
      `<a href="assetrecord.html?coin=usdt">` +
      `<div style="background-color: #17a468">` +
      `<img src="images/usdt-icon.png" />` +
      `</div>` +
      `<span>USDT</span>` +
      `</a>` +
      `<a href="assetrecord.html?coin=usdt">` +
      `<div>` +
      `<p i18n="UserBalance">余额</p>` +
      `<p id="usdt">0.00</p>` +
      `</div>` +
      `</a>` +
      `<div>` +
      `<a onclick="goToCoin(1,\'usdt\')" i18n="UserRecharge">充币</a>` +
      `<a onclick="goToCoin(2,\'usdt\')" i18n="UserExtract">提币</a>` +
      `</div>` +
      `</div>` +
      `</div>`;
    i18nExecute(localStorage.getItem('lang') || 'tw')
  }
  getAssets(function (data) {
    ele("#fil").innerHTML = formatAmount(data.fil.balance);
    ele("#usdt").innerHTML = formatAmount(data.usdt.balance);
  });
}

function goToCoin (type, coinType) {
  current((result) => {
    if (!result.name) {
      loading("warning", "请先进行身份验证！");
    } else if (config[coinType + "Address"] == "") {
      loading("warning", "暂未开放");
    } else {
      if (type == 2) {
        if (coinType == 'fil') {
          getAssets(function (data) {
            if (data.fil.hasOwnProperty('wfiladdress') && data.fil.wfiladdress != '') {
              if (type == "1") {
                window.location.href = "recharge.html?coin=" + coinType;
              } else {
                window.location.href = "withdraw.html?coin=" + coinType;
              }
            } else {
              confirmcoin("请先绑定提币地址", () => {
                window.location.href = "address.html";
              });
            }
          });
        } else {
          window.location.href = "withdrawUsdt.html?coin=" + coinType;
        }
      } else if (type == '0') {
        // 偿还迁移fil
        window.location.href = "repay.html"
      } else {
        window.location.href = "recharge.html?coin=" + coinType;
      }
    }
  });
}

// 有效算力以及未激活算力值
getPowerAssets(data => {
  var amount = data["fil-ct"].power;
  amount += data["fil-lhh"].power;
  amount += data["fil-sl"].power;
  ele("#power").innerHTML = amount;
  ele("#powerinactive").innerHTML = data["fil-ct"].selfStorage;
});

// 切换头像
const head = ele("#head");
const inputFile = head.querySelector("input");
inputFile.onchange = () => {

  uploadAvatar(inputFile.files[0], (result) => {
    head.getElementsByTagName("img")[0].src = window.URL.createObjectURL(
      inputFile.files[0]
    );
    user.avatar = result.data;
    window.localStorage.setItem("user", JSON.stringify({ data: user, time: new Date().getTime() + 3000 }))
  });
};

head.onclick = () => {
  close.postMessage("来调用一下");
  inputFile.click();
};


const height = document.body.offsetHeight;
const topPart = ele(".top-part");
const assets = ele(".assets");
const powers = ele(".powers");
const btns = ele(".btns");
const tabs = ele(".tabs");
btns.style.height = height - topPart.offsetHeight - assets.offsetHeight - powers.offsetHeight - tabs.offsetHeight + 'px';


// 判断是否展示审核
var manageData;
getRights((data) => {
  manageData = data;
  if (manageData.confirm || manageData.invest || manageData.payConfirm || manageData.withdraw) {
    ele(".examinebox").style.display = "block";
  }
  // 订单
  if (manageData.confirm || manageData.payConfirm) {
    ele("#examineBtn1").style.display = "block";
  }
  // 充币
  if (manageData.invest) {
    ele("#examineBtn2").style.display = "block";
  }
  // 提币
  if (manageData.withdraw) {
    ele("#examineBtn3").style.display = "block"
  }
});

// 审核跳转
function examineBtn (type) {
  if (type == 0) {
    if (manageData.confirm || manageData.payConfirm) {
      window.location.href = "orderMissions.html";
    }
  } else if (type == 1) {
    if (manageData.invest) {
      window.location.href = "rechargeMissions.html";
    }
  } else if (type == 2) {
    if (manageData.withdraw) {
      window.location.href = "withdrawExamine.html";
    }
  }
}

function showChangeLanguageList () {
  confirm('当前支持简体中文与繁体中文，是否切换', () => {
    changeLang()
  })
}
function changeLang () {
  let lang = localStorage.getItem('lang')
  if (lang === 'zh') {
    i18nExecute('tw')
  } else {
    i18nExecute('zh')
  }
}