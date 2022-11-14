/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-03-24 16:26:29
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-09-14 09:18:49
 * @Description: 
 */
var coin = getParamFromURL("coin") || "fil-lhh";
if (coin.indexOf('fil') > -1) {
  coin = 'fil-lhh'
  document.getElementById('coinType').innerHTML = 'Filecoin'
  document.getElementById('coinTypeAddress').innerHTML = 'FIL充币地址'
} else {
  document.getElementById('coinType').innerHTML = 'USDT-TRC20'
  document.getElementById('coinTypeAddress').innerHTML = 'USDT充币地址'
}
// getAssets(function (data) {
//   if(data.fil.hasOwnProperty('coinAddress') && data.fil.coinAddress != '' && performance.navigation.type == 0){
//     coinconfirm("仅限使用该地址进行充提币操作",data.fil.coinAddress,() => {});
//   }
// });

var clipboard = new ClipboardJS("#copyBtn");
clipboard.on("success", function (e) {
  loading("success", "复制成功");
  e.clearSelection();
});
if (JSON.parse(localStorage.getItem('user')).data.usdtaddress == '') {
  getRechargeAddress(coin, (res) => {
    var qrcode = new QRCode(document.getElementById("qrcodeImg"), {
      width: 160,//设置宽高
      height: 160
    });
    qrcode.makeCode(res.coinAddress);
    ele("#addressText").innerHTML = res.coinAddress
  });
} else {
  setCoinFun(coin);
}
//充币二维码
function setCoinFun (val) {
  coin = val;
  // const coinsBtn = ele(".coins").querySelectorAll("button");
  // coinsBtn[coin === "fil" ? 0 : 1].style = "background-color: #5c92ff;color: #fff;";
  // coinsBtn[coin === "fil" ? 1 : 0].style = "background-color: #dadada;color: #aaa;display:none;";
  ele("#coin").innerHTML = coin.toUpperCase();
  ele("#coinIcon").src = `images/${coin}.png`;
  ele("#addressText").innerHTML = config[coin + "Address"];
  var link = config[coin + "Address"];
  ele("#qrcodeImg").innerHTML = '';
  var qrcode = new QRCode(document.getElementById("qrcodeImg"), {
    width: 160,//设置宽高
    height: 160
  });
  qrcode.makeCode(link);
}



var config = '';
getConfig((result) => {
  config = result;
});

// const uploadInput = ele(".proof").querySelector("input");
// const uploadBtn = ele(".proof").querySelector("button");
// console.log('uploadBtn', uploadBtn)

// // 上传图片
// uploadBtn.onclick = () => {
//   uploadInput.click();
//   uploadInput.onchange = () => {
//     ele("#proof").src = window.URL.createObjectURL(uploadInput.files[0]);
//     ele("#proof").style.width = "100%";
//     uploadBtn.style.border = "none";
//     uploadBtn.style.padding = "0";
//   };
// };

// 充币提交
// function recharge () {
//   var inputs = elea("input");
//   if (inputs[0].value == '') {
//     loading("warning", "请输入正确的充币数量");
//     return
//   }
//   if (uploadInput.files.length < 1) {
//     loading("warning", "请添加支付凭证");
//     return
//   }
//   const formdata = new FormData();
//   formdata.append("amount", inputs[0].value);
//   // formdata.append("tradeId", inputs[1].value);
//   formdata.append("coinName", coin);
//   formdata.append("proof", uploadInput.files[0]);
//   manualRecharge(formdata, () => {
//     goRechargeRecord();
//   });
// }

// 充币记录
function goRechargeRecord () {
  window.location.href = `rechargerecord.html?coin=${coin}`;
}
