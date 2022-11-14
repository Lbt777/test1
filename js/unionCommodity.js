var commodity;

// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if(new Date().getTime() > user.time){
  current((result) => {
    user = result;
  });
}else{
  user = user.data;
}

//判断用户是否可以下单
if(user.hasOwnProperty('orderAuthority')){
  if(user.orderAuthority == 1){
    ele("#orderBtn").style.backgroundColor="gray";
    ele("#orderBtn").disabled=true;
  }
}

const id = getParamFromURL("id");
var paytype = 1;
getProduct(id, (data) => {
    commodity = data;
    ele("#settlementPeriod").innerHTML = data.settlementPeriod;
    ele("#contractPeriod").innerHTML = data.contractPeriod;
    ele("#serviceFee").innerHTML = data.serviceFee;
    ele("#price").innerHTML = data.unionPrice + " FIL";
    ele("#total").innerHTML = data.unionPrice + " FIL";
    ele("#total2").innerHTML = data.unionPrice + " FIL";
    ele("#name").innerHTML = data.name;
});

function changeAmount(num = 0) {
  var amount = ele("#amount").value;
  if (isNaN(parseInt(amount)) || amount.indexOf(".") !== -1) {
    loading("warning", "请输入正确的数量");
    return;
  }
  amount = parseInt(amount);
  if (amount + num >= 1) {
    ele("#amount").value = amount + num;
    ele("#amount2").innerHTML = amount + num;
    ele("#total").innerHTML = (amount + num) * commodity.unionPrice + " FIL";
    ele("#total2").innerHTML = (amount + num) * commodity.unionPrice + " FIL";
  }
}
const inputs = elea("input");
function purchaseConfirm() {
  const password = inputs[2].value;
  if (!password && paytype == 1) {
    loading("warning", "请输入支付密码");
    return;
  }
  var amount = ele("#amount").value;
  if (isNaN(parseInt(amount)) || amount.indexOf(".") !== -1) {
    loading("warning", "请输入正确的数量");
    return;
  }
payOrderIh({
    productId: id,
    productNum: parseInt(amount),
    payPassword: password,
    },"下单成功",(result) => {
        window.history.back()
    });
}


ele("#usdt").addEventListener('click', function(){
  paytype = 1;
  ele(".two").style.display = "block";
  ele(".twochild").style.display = "block";
  var amount = ele("#amount").value;
  ele("#total2").innerHTML = (amount) * commodity.priceUsdt + " USDT";
})

ele("#datas").querySelectorAll("td");

var today = new Date();
const theTD = ele("#datas").querySelectorAll("td");
theTD[0].innerHTML = timestampToTime(today.getTime() / 1000, "date");
today = today.setDate(today.getDate() + 3);
today = new Date(today);
theTD[1].innerHTML = timestampToTime(today.getTime() / 1000, "date");
today = today.setDate(today.getDate() + 540);
today = new Date(today);
theTD[2].innerHTML = timestampToTime(today.getTime() / 1000, "date");
