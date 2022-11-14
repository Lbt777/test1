var assets;
var cost = 10;

const powerType = {
  200201: "专业存储",
  200202: "联合存储",
  200203: "云存储",
  200204: '联合存储'
};


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

  if (new Date().getTime() > config.time) {
    getConfig((result) => {
      cost = parseFloat(result.sealFee);
      ele("#cost").innerHTML = cost;
    });
  } else {
    cost = parseFloat(config.data.sealFee);
    ele("#cost").innerHTML = cost;
  }
});

// 未激活算力
getPowerAssets(data => {
  assets = data;
  ele("#selfStorage").innerHTML = data["fil-ct"].selfStorage;
});

// 算力列表
const headerHeight = ele(".header").offsetHeight;
const topPartHeight = ele(".top-part").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + topPartHeight + "px";
Pagination.setTemplate(
  (obj) => `<dt>${obj.description} ${powerType[obj.coinType]}</dt>` +
    `<dd><span>${obj.type === 1 ? "+" :
      "-"}${obj.amount}<span> T</span></span><span>${obj.createTime}</span></dd>`
);
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getAssetList("fil", "storage", 1, (data) => {
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
      getAssetList("fil", "storage", page, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});

// 激活弹窗
const inputs = elea("input");
function activate () {
  if (ele("#selfStorage").innerHTML < 1) {
    loading("warning", "算力不足");
    return;
  };
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
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
  popup();
}

// 输入判断
function changeAmount () {
  const costamount = inputs[0].value;
  const amount = inputs[1].value;
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
}

// 确认激活
function next () {
  const costvalue = inputs[0].value;
  const amount = inputs[1].value;
  const password = inputs[2].value;
  if (!amount || amount <= 0) loading("warning", "请输入数量");
  else if (costvalue < cost) loading("warning", "封装成本不能低于最低封装成本");
  else if (amount.indexOf(".") !== -1) loading("warning", "填写整数倍激活数量");
  else if (amount > assets.selfStorage) loading("warning", "算力不足");
  else if (ele("#totalCost").innerHTML > assets.fil)
    loading("warning", "FIL余额不足");
  else if (!password) loading("warning", "请输入支付密码");
  else {
    poweractive(costvalue, amount, password, () => {
      window.history.back();
    });
  }
}
