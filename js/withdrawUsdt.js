var coin = getParamFromURL("coin") || "fil";
const inputs = elea("input");


var config;
getConfig((result) => {
  config = result;
  if(result.withdrawType == 2){
    ele("#usdt").style.display = "block";
    ele(".unit").innerHTML = coin.toUpperCase();
  }else{
    ele(".unit").innerHTML = "FIL";
  }
});

var balance;
var assets;
function setCoin(val) {
  coin = val;
  const coinsBtn = ele(".coins").querySelectorAll("button");
  coinsBtn[coin === "fil" ? 0 : 1].style = "background-color: #5c92ff;color: #fff;";
  coinsBtn[coin === "fil" ? 1 : 0].style = "background-color: #dadada;color: #aaa;display:none;";
  ele(".unit").innerHTML = coin.toUpperCase();
  ele("#balance").innerHTML = formatAmount(assets[coin].balance);
}

getAssets(function (data) {
  assets = data;
  balance = data[coin].balance;
  setCoin(coin);
});

function next() {
  count = 60;
  sending = false;
  veriBtn.innerHTML = "短信";
  const amount = parseFloat(inputs[0].value);
  const address = inputs[1].value;
  if (amount > balance) loading("warning", "提币数量大于可用余额");
  else if (!amount) loading("warning", "请输入提币数量");
  else if (amount < 1) loading("warning", "最低提币量1个");
  else if (!address) loading("warning", "请输入提币地址");
  else {
    ele("#fee").innerHTML = config[coin + "Fee"] || 0;
    ele("#amount").innerHTML = formatAmount(
      amount - (config[coin + "Fee"] || 0)
    );
    ele("#coin").innerHTML = coin.toUpperCase();
    popup();
  }
}
function withdrawlConfirm() {
  const amount = parseFloat(inputs[0].value);
  const address = inputs[1].value;
  const payPassword = inputs[2].value;
  const messageCode = inputs[3].value;
  applyWithdrawal({ amount, coinName: coin, address, payPassword,messageCode }, () => {
    window.history.back();
  });
}
function goWithdrawRecord() {
  window.location.href = `withdrawrecord.html?coin=${coin}`;
}
var count = 60;
var sending = false;
const veriBtn = ele(".vericode").querySelector("button");
function sendSms() {
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
