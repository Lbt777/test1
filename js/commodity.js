var commodity;

// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if (new Date().getTime() > user.time) {
  current((result) => {
    user = result;
  });
} else {
  user = user.data;
}

var config = JSON.parse(window.localStorage.getItem("config"));
getConfig((result) => {
  config = result;
  if (config.hasOwnProperty('orderAuthority')) {
    if (config.orderAuthority == 1) {
      ele("#orderBtn").style.backgroundColor = "gray";
      ele("#orderBtn").disabled = true;
    }
    if (user.orderAuthority == 1) {
      ele("#orderBtn").style.backgroundColor = "gray";
      ele("#orderBtn").disabled = true;
    }
  }
});


//判断用户是否可以下单
if (user.hasOwnProperty('orderAuthority')) {
  if (user.orderAuthority == 1) {
    ele("#orderBtn").style.backgroundColor = "gray";
    ele("#orderBtn").disabled = true;
  }
}

const id = getParamFromURL("id");
var paytype = 2;
getProduct(id, (data) => {
  commodity = data;
  ele("#settlementPeriod").innerHTML = data.settlementPeriod;
  ele("#contractPeriod").innerHTML = data.contractPeriod;
  ele("#serviceFee").innerHTML = data.serviceFee + (data.machineType === 4 ? '%' : '');
  ele("#price").innerHTML = data.price + " CNY";
  ele("#price1").innerHTML = data.priceUsdt;
  ele("#total").innerHTML = data.price + " CNY";
  ele("#total2").innerHTML = data.price + " CNY";
  ele("#name").innerHTML = data.name;
  ele("#detialContent").innerHTML = data.content;
  if (data.machineType === 4) {
    ele('.main>div:nth-child(2)>div>input').disabled = true
    ele(".schedule").style.display = 'none'
    ele(".type4").style.display = 'none'
  }

  var today = new Date();
  var numOne = commodity.settlementPeriod.split("+");
  var numOne2 = commodity.contractPeriod.split("天");
  const theTD = ele("#datas").querySelectorAll("td");
  theTD[0].innerHTML = timestampToTime(today.getTime() / 1000, "date");
  numOne[1] = parseInt(numOne[1]) + parseInt(1);
  today = today.setDate(today.getDate() + parseInt(numOne[1]));
  today = new Date(today);
  if (commodity.machineType === 4) {
    theTD[1].innerHTML = timestampToTime((new Date().getTime() + 86400000 * 45) / 1000, "date");
  } else {
    theTD[1].innerHTML = timestampToTime(today.getTime() / 1000, "date");
  }


  var today1 = new Date();
  numOne2[0] = parseInt(numOne2[0]);
  console.log(JSON.stringify(numOne2[0]));
  today1 = today1.setDate(today1.getDate() + parseInt(numOne2[0]) + parseInt(1));
  today1 = new Date(today1);
  theTD[2].innerHTML = timestampToTime(today1.getTime() / 1000, "date");
});
function changeAmount (num = 0) {
  if (commodity.machineType) {
    loading("warning", "只能购买一件");
    return;
  }
  var amount = commodity.machineType === 4 ? '1' : ele("#amount").value;
  if (isNaN(parseInt(amount)) || amount.indexOf(".") !== -1) {
    loading("warning", "请输入正确的数量");
    return;
  }
  amount = parseInt(amount);
  if (amount + num >= 1) {
    ele("#amount").value = amount + num;
    ele("#amount2").innerHTML = amount + num;
    ele("#total").innerHTML = (amount + num) * commodity.price + " CNY";
    ele("#total2").innerHTML = (amount + num) * commodity.price + " CNY";
  }
}
const inputs = elea("input");
function purchaseConfirm () {
  const password = inputs[3].value;
  if (!password && paytype == 1) {
    loading("warning", "请输入支付密码");
    return;
  }
  var amount = commodity.machineType === 4 ? '1' : ele("#amount").value;
  if (isNaN(parseInt(amount)) || amount.indexOf(".") !== -1) {
    loading("warning", "请输入正确的数量");
    return;
  }
  payOrder(
    {
      productId: id,
      productNum: parseInt(amount),
      type: paytype,
      payPassword: password,
    },
    "下单成功",
    (result) => {
      console.log(123, result)
      if ([3, 4].includes(paytype)) {
        if (paytype === 3) {
          goWXpay(result, window.location.href, (res) => {
            console.log('微信支付', res)
          })
        } else if (paytype === 4) {
          goAlipay(result, window.location.href, (res) => {
            console.log('支付宝支付', res)
          })
        }
      } else {
        window.location.href = `orderdetail.html?orderId=${result}`;
      }
    }
  );
}


var config = JSON.parse(window.localStorage.getItem("config"));
if (new Date().getTime() > config.time) {
  getConfig((result) => {
    config = result;
    if (config.coinType == 2) {
      ele("#usdtPay").style.display = "flex";
    }
  });
} else {
  config = config.data;
  if (config.coinType == 2) {
    ele("#usdtPay").style.display = "flex";
  }
}

ele("#card").addEventListener('click', function () {
  paytype = 2;
  ele(".two").style.display = "none";
  ele(".twochild").style.display = "none";
  var amount = ele("#amount").value;
  ele("#total2").innerHTML = (amount) * commodity.price + " CNY";
})
ele("#usdt").addEventListener('click', function () {
  paytype = 1;
  ele(".two").style.display = "block";
  ele(".twochild").style.display = "block";
  var amount = ele("#amount").value;
  ele("#total2").innerHTML = (amount) * commodity.priceUsdt + " USDT";
})
ele("#wx").addEventListener('click', function () {
  paytype = 3;
  ele(".two").style.display = "none";
  ele(".twochild").style.display = "none";
  var amount = ele("#amount").value;
  ele("#total2").innerHTML = (amount) * commodity.price + " CNY";
})
ele("#zfb").addEventListener('click', function () {
  paytype = 4;
  ele(".two").style.display = "none";
  ele(".twochild").style.display = "none";
  var amount = ele("#amount").value;
  ele("#total2").innerHTML = (amount) * commodity.price + " CNY";
})

ele("#datas").querySelectorAll("td");


