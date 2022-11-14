
const powerType = {
  200201: "专业存储",
  200202: "联合存储",
  200203: "云存储",
  200204: '联合存储'
};
const inputs = elea("input");
getPowerAssets((data) => {
  var amount = data["fil-lhh"].power;
  var pledgeFil = data["fil-lhh"].pledgeFil
  var gass = data["fil-lhh"].gas
  ele("#power").innerHTML = amount || 0;
  ele("#pledgeFil").innerHTML = pledgeFil || 0;
  ele("#gass").innerHTML = gass || 0;

  var nummm = parseFloat(data["fil-ct"].paymentServiceFee) + parseFloat(data["fil-lhh"].paymentServiceFee) + parseFloat(data["fil-sl"].paymentServiceFee)
  // 未激活算力
  if (nummm > 0) {
    ele("#paymentServiceFeeID").innerHTML = '<span style="font-size: inherit;">(已支付迁移费<span id="repayNum" style="font-size: inherit;">' + nummm + '</span>Fil)</span>';
    ele("#paymentServiceFeeID").style.display = 'block';
  } else {
    ele("#paymentServiceFeeID").style.display = 'none';
  }
});
const headerHeight = ele(".header").offsetHeight;
const topPartHeight = ele(".top-part").offsetHeight;
const statusName = ["激活中", "存储中", "已失效"];
const mineStatusColor = ["#006cf5", "#55e087", "#d2d2d2"];
ele(".minirefresh-wrap").style.top = headerHeight + topPartHeight + "px";

Pagination.setTemplate(obj => "<dt>" +
  `<span><span>${obj.power}</span>T ${powerType[obj.coinType]}</span>` +
  `<span style="color:${mineStatusColor[obj.status] || "#ccc"}">
${statusName[obj.status] || "已取消"}</span>` +
  "</dt>" + "<dd>" + `<span>${timestampToTime(obj.createTime)}</span>` +
  `<button onclick='showDetails(${JSON.stringify(obj)})'>...</button>` + "</dd>");


// Pagination.setTemplate(
//   (obj) =>
//     "<dt>" +
//     `<span>${obj.power}<span>T</span></span>` +
//     `<span>${timestampToTime(obj.createTime)}</span>` +
//     "</dt>" +
//     "<dd>" +
//     `<span style="color:${mineStatusColor[obj.status] || "#ccc"}">${
//       statusName[obj.status] || "已取消"
//     }</span>` +
//     `<button onclick='showDetails(${JSON.stringify(obj)})'>...</button>` +
//     "</dd>"
// );
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getPowerList(1, (data) => {
        getPowerAssets((data) => {
          var amount = data["fil-ct"].power;
          amount += data["fil-lhh"].power;
          amount += data["fil-sl"].power;
          ele("#power").innerHTML = amount;
        });
        page = 2;
        Pagination.appendData(listDom, data.results, true);
        miniRefresh.endDownLoading(true);
      });
    },
  },
  up: {
    isAuto: true,
    callback: function () {
      if (total < 10) {
        miniRefresh.endUpLoading(true);
        return;
      }
      getPowerList(page, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
function showDetails (info) {
  ele("#last").style.display = "none";
  const allSpan = ele(".details").querySelectorAll("span");
  allSpan[1].innerHTML = info.power + "T";
  allSpan[3].innerHTML = info.freeze ? formatAmount(info.freeze) + "FIL" : "";
  allSpan[5].innerHTML = powerType[info.coinType];
  allSpan[7].innerHTML = info.pledge ? formatAmount(info.pledge) + "FIL" : "";
  allSpan[9].innerHTML = info.gas ? formatAmount(info.gas) + "FIL" : "";
  allSpan[11].innerHTML = info.activeTime ? timestampToTime(info.activeTime).split(" ")[0] : "";
  allSpan[13].innerHTML = info.activeTime ? timestampToTime(info.expiredTime).split(" ")[0] : "";
  allSpan[15].innerHTML = statusName[info.status] || "已取消";
  if (!info.activeTime && info.status !== -1) {
    ele("#freeze").innerHTML = info.freeze;
    ele("#last").style.display = "flex";
    ele("#cancelSeal").onclick = () => {
      confirm("是否确认取消封装？", () => {
        powerActiveCancel(info.id, () => {
          window.location.reload();
        });
      });
    };
  }
  popup();
}

// 获取封装成本 以及可用fil
getAssets(data => {
  ele("#fil").innerHTML = formatAmount(data.fil.balance);
  const config = JSON.parse(window.localStorage.getItem("config"));
  if (config.data.PowerActive == 1) {
    ele("#PowerActiveBtn").innerHTML = "暂停激活";
    ele("#PowerActiveBtn").disabled = true;
  } else {
    ele("#PowerActiveBtn").innerHTML = "激活";
    ele("#PowerActiveBtn").disabled = false;
  }
  // if (new Date().getTime() > config.time) {
  //   getConfig((result) => {
  //     cost = parseFloat(config.data.packageCostFil || 10);
  //     ele("#cost").innerHTML = cost;
  //   });
  // } else {
  cost = parseFloat(config.data.packageCostFil) || 10;
  ele("#cost").innerHTML = cost;
  inputs[0].setAttribute("placeholder", `请输入算力数，最低${cost}T`);
  // }
});
// 激活弹窗

function activate () {
  // if (ele("#power").innerHTML < 1) {
  //   loading("warning", "算力不足");
  //   return;
  // };
  inputs[0].value = JSON.parse(localStorage.getItem(`config`)).data.minPowerNum || 5;
  inputs[1].value = "";
  ele("#cost").innerHTML = JSON.parse(localStorage.getItem(`config`)).data.packageCostFil || 10
  const user = JSON.parse(window.localStorage.getItem("user"));
  if (!user.data.name) {
    confirm(
      "请先完成实名认证",
      () => {
        removeModel();
        window.location.href = "identity.html";
      },
      "去认证"
    );
    return;
  }
  popup(1, 1);
  changeAmount()
}
// 输入判断
function changeAmount () {
  const costamount = ele("#cost").innerHTML;
  const amount = inputs[0].value;
  if (amount % 5 !== 0) {
    loading("warning", "最低5T，每次5T递增");
  }
  if (costamount < cost) {
    inputs[0].value = '';
    loading("warning", "封装成本不能低于最低封装成本");
  }
  // 计算共支付成本
  if (costamount != 0 && amount != 0) {
    ele("#totalCost").innerHTML = formatAmount(amount * costamount);
  } else {
    ele("#totalCost").innerHTML = 0;
  }
  ele("#tSum").innerHTML = amount || 0;
  ele("#tSum2").innerHTML = formatAmount(amount * costamount);
  ele("#tSum3").innerHTML = amount
}
// 确认激活
function next () {
  const costvalue = ele("#cost").innerHTML
  const amount = inputs[0].value;
  const password = inputs[1].value;
  if (!amount || amount <= 0) loading("warning", "请输入算力");
  else if (costvalue < cost) loading("warning", "封装成本不能低于最低封装成本");
  else if (amount.indexOf(".") !== -1) loading("warning", "填写整数倍激活数量");
  else if (amount % 5 !== 0) loading("warning", "最低5T，每次5T递增");
  else if (!password) loading("warning", "请输入支付密码");
  else {
    poweractive(costvalue, amount, password, () => {
      window.history.back();
    });
  }
}