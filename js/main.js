if (!window.localStorage.getItem("X-User-Token")) {
  const filterURLs = [
    "signin",
    "signup",
    "setpwd",
    "setpaypwd",
    "forgetpwd",
    "vericode",
    "InviteFriends"
  ];
  var redirect = 1;
  filterURLs.forEach((url) => {
    if (window.location.href.indexOf(url) !== -1) redirect = 0;
  });
  if (redirect) top.location.href = "signin.html";
}

document.getElementsByTagName("body")[0].innerHTML += "<div id='model'></div>";
console.log(baseUrl);
var baseUrl = "";

var locationHref = window.location.href;
console.log(locationHref);
if (locationHref.indexOf("test3-app") != -1) {
  baseUrl = "http://test3-api.wkyclouds.com"
} else if (locationHref.indexOf("test4-app") != -1) {
  baseUrl = "http://test4-api.wkyclouds.com"
} else if (locationHref.indexOf("beijinglg") != -1) {
  // 北京悟空云
  baseUrl = "http://api.beijinglg.cc"
} else if (locationHref.indexOf("cangzhoulg") != -1) {
  // 沧州IPFS
  baseUrl = "http://api.cangzhoulg.cc"
} else if (locationHref.indexOf("changanwhl") != -1) {
  // 长安云
  baseUrl = "http://api.changanwhl.cc"
} else if (locationHref.indexOf("jinanipfs") != -1) {
  // 济南云存储
  baseUrl = "http://api.jinanipfs.cc"
} else if (locationHref.indexOf("jinancunchu") != -1) {
  // 济南云存储
  baseUrl = "http://api.jinancunchu.cc"
} else if (locationHref.indexOf("lf-app.wky") != -1) {
  // 筋斗云 
  baseUrl = "http://lf-api.wky.cloud"
} else if (locationHref.indexOf("jiujuchang") != -1) {
  // 久居长 
  baseUrl = "http://api.jiujuchang.cc"
} else if (locationHref.indexOf("jiuxiaoyun") != -1) {
  // 九霄云 
  baseUrl = "http://api.jiuxiaoyun.cc"
} else if (locationHref.indexOf("fengjieipfs") != -1) {
  // 吉祥海云 
  baseUrl = "http://api.fengjieipfs.cc"
} else if (locationHref.indexOf("zhaoyicheng") != -1) {
  // 聚信宝 
  baseUrl = "http://api.zhaoyicheng.cc"
} else if (locationHref.indexOf("xianliuglipfs") != -1) {
  // WKF 
  baseUrl = "http://api.xianliuglipfs.cc"
} else if (locationHref.indexOf("yananwgl") != -1) {
  // 延安IPFS 
  baseUrl = "http://api.yananwgl.cc"
} else if (locationHref.indexOf("fil-app.zhongkeyt") != -1) {
  // 中科云通
  baseUrl = "http://fil-api.zhongkeyt.cc"
} else if (locationHref.indexOf("app.zhongkeyt") != -1) {
  // 中科云通BZZ
  baseUrl = "http://api.zhongkeyt.cc"
} else if (locationHref.indexOf("xiangxiangkeji") != -1) {
  // 香香科技 
  baseUrl = "http://api.xiangxiangkeji.cc"
} else if (locationHref.indexOf("ningxiawukongyun") != -1) {
  // 宁夏
  baseUrl = "http://api.ningxiawukongyun.cc"
} else if (locationHref.indexOf("hanruikeji") != -1) {
  // 涵锐 
  baseUrl = "http://api.hanruikeji.cc"
} else if (locationHref.indexOf("shurongyun") != -1) {
  // 金满文 
  baseUrl = "http://api.shurongyun.cc"
} else if (locationHref.indexOf("yongzhouwky") != -1) {
  // 永州存储
  baseUrl = "http://api.yongzhouwky.cc"
} else if (locationHref.indexOf("ipfs88") != -1) {
  // 九星云创 
  baseUrl = "http://api.ipfs88.cc"
} else if (locationHref.indexOf("xichuyun") != -1) {
  // 西储云 
  baseUrl = "http://api.xichuyun.cc"
} else if (locationHref.indexOf("jianshou") != -1) {
  // 线上测试 
  baseUrl = "http://jianshou-api.wkyteam.com"
} else if (locationHref.indexOf("test-wkzh") != -1) {
  // 智和测试
  baseUrl = "https://test-wkzh-api.wkyclouds.com"
} else if (locationHref.indexOf("zhihe") != -1) {
  // 智和线上
  baseUrl = "http://zhihe-api.wkyteam.com"
} else {
  // 本地测试 
  baseUrl = "http://192.168.3.110:8083"
  // baseUrl = "https://test-wkzh-api.wkyclouds.com"
}

const statusColor = {
  未支付: "#d42a2a",
  已支付: "#4594f7",
  待确认: "#2443b5",
  已确认: "#ffcb35",
  已完成: "#39b524",
  完成: "#39b524",
  已取消: "#a7a7a7",
  被拒绝: "#ff8888",
};

function request (url, method, params, resolve, reject = () => { }) {
  var paramsStr = "";
  for (var k in params) {
    paramsStr += k + "=" + params[k] + "&";
  }
  console.log(baseUrl);
  if (url.indexOf("http") === -1) url = baseUrl + url;
  const options = {
    method,
    headers: {
      "X-User-Token": window.localStorage.getItem("X-User-Token"),
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      "Cache-Control": "no-cache"
    }
  };
  if (paramsStr && method !== "GET") options.body = paramsStr;
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      if (json.message === "请先登录") {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("X-User-Token");
        top.location.href = "signin.html";
      }
      resolve(json);
    })
    .catch((err) => {
      console.error(err);
      reject(err);
    });
}

function ele (name) {
  return document.querySelector(name);
}

function elea (name) {
  return document.querySelectorAll(name);
}

const formatAmount = (val = 0, len = 6) => parseFloat((val * 1).toFixed(len));

function loading (type, text, fixed = false) {
  var model = ele("#model");
  model.innerHTML =
    "<button onclick='" +
    (fixed ? "" : "removeModel()") +
    "' class='box global-shadow'>" +
    "<div class='tips'>" +
    `<img class="${type === "loading" ? "rotate" : ""
    }" src="images/${type}.png" />` +
    `<span>${text}</span>` +
    "</div>";
  ("</button>");
}

function confirm (title, callback, text = "确认") {
  var model = ele("#model");
  model.innerHTML =
    "<div class='box global-shadow'>" +
    "<div class='confirm'>" +
    "<img src='images/warning.png' />" +
    "<span>" +
    title +
    "</span>" +
    "<button onclick='removeModel()' style='background-color:#eaeaea;color:#808080'>取消</button>" +
    `<button id='confirmBtn' style='background-color:#6ac8ff;color:#fff;'>${text}</button>` +
    "</div></div>";
  ele("#confirmBtn").onclick = () => {
    ele("#model").innerHTML = "";
    callback();
  };
}

function confirmIndex (title, callback, text = "确认") {
  var model = ele("#model");
  model.innerHTML =
    "<div class='box global-shadow' onclick='removeModel()'>" +
    "<div class='confirm'>" +
    "<img src='images/warning.png' />" +
    "<span>" +
    title +
    "</span>" +
    `<button id='confirmBtn' style='background-color:#6ac8ff;color:#fff;'>${text}</button>` +
    "</div></div>";
  ele("#confirmBtn").onclick = () => {
    ele("#model").innerHTML = "";
    callback();
  };
}

function confirmNoCenel (title, callback, text = "确认") {
  var model = ele("#model");
  model.innerHTML =
    "<div class='box global-shadow'>" +
    "<div class='confirm'>" +
    "<img src='images/warning.png' />" +
    "<span>" +
    title +
    "</span>" +
    `<button id='confirmBtn' style='background-color:#6ac8ff;color:#fff;'>${text}</button>` +
    "</div></div>";
  ele("#confirmBtn").onclick = () => {
    ele("#model").innerHTML = "";
    callback();
  };
}

function confirmcoin (title, callback, text = "确认") {
  var model = ele("#model");
  model.innerHTML =
    "<div class='box global-shadow'>" +
    "<div class='confirm'>" +
    "<img src='images/warning.png' />" +
    "<span>" +
    title +
    "</span>" +
    "<button onclick='coinremoveModel()' style='background-color:#eaeaea;color:#808080'>取消</button>" +
    `<button id='confirmBtn' style='background-color:#6ac8ff;color:#fff;'>${text}</button>` +
    "</div></div>";
  ele("#confirmBtn").onclick = () => {
    ele("#model").innerHTML = "";
    callback();
  };
}

// 提币弹框
function coinconfirm (title, address, callback, text = "同意") {
  var model = ele("#model");
  model.innerHTML =
    "<div class='box global-shadow'>" +
    "<div class='confirm'>" +
    "<p>" +
    "提示" +
    "</p>" +
    "<p>" +
    address +
    "</p>" +
    "<span>" +
    title +
    "</span>" +
    "<button onclick='coinremoveModel()' style='background-color:#eaeaea;color:#808080'>拒绝</button>" +
    `<button id='confirmBtn' style='background-color:#6ac8ff;color:#fff;'>${text}</button>` +
    "</div></div>";
  ele("#confirmBtn").onclick = () => {
    ele("#model").innerHTML = "";
    callback();
  };
}
function coinremoveModel () {
  ele("#model").innerHTML = "";
}

function removeModel () {
  ele("#model").innerHTML = "";
}

const popup = (status = 1, index = 0) =>
(elea(".global-shadow")[index].style.display =
  status === 1 ? "block" : "none");

function getParamFromURL (name) {
  const url = window.location.href;
  var params = {};
  url
    .substr(url.indexOf("?") + 1)
    .split("&")
    .forEach((item) => {
      params[item.split("=")[0]] = item.split("=")[1];
    });
  return params[name] || "";
}

function timestampToTime (timestamp, format = "datetime") {
  var date = new Date(timestamp * 1000);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (format === "date") return Y + M + D;
  else return Y + M + D + h + m + s;
}

// app配置项
function getConfig (callback) {
  request("/api/config", "GET", {}, (result) => {
    if (result.success) {
      window.localStorage.setItem("config", JSON.stringify({ data: result.data, time: new Date().getTime() + 3000 }))
      callback(result.data);
    } else {
      loading("warning", result.message);
    }
  });
}


function signin (params, callback) {
  loading("loading", "加载中...", true);
  request("/login/signin", "POST", params, (result) => {
    if (result.success) {
      loading("success", "登录成功");
      window.localStorage.setItem("X-User-Token", result.data.token);
      window.localStorage.setItem("user", JSON.stringify({ data: result.data.user, time: new Date().getTime() + 3000 }))
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

// 运营中心总资产
function getAssetSummary (callback) {
  request("/api/asset/summary", "GET", {}, (result) => {
    if (result.success) {
      callback(result.data);
    } else {
      loading("warning", result.message);
    }
  });
}


// 获取用户信息User
function current (callback) {
  request("/api/user/current", "GET", {}, (result) => {
    if (result.success) {
      window.localStorage.setItem("user", JSON.stringify({ data: result.data, time: new Date().getTime() + 3000 }))
      callback(result.data);
    } else {
      loading("warning", result.message);
    }
  });
}

function saveContact (params, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/contact", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "保存成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function signup (params, callback) {
  loading("loading", "加载中...", true);
  request("/login/signup", "POST", params, (result) => {
    if (result.success) {
      loading("success", "注册成功");
      window.localStorage.setItem("X-User-Token", result.data.token);
      window.localStorage.setItem("user", JSON.stringify({ data: result.data.user, time: new Date().getTime() + 3000 }))
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function userLogout (callback) {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("X-User-Token");
  request("/api/login/signout", "GET", {}, (result) => {
    callback(result);
  });
}

function verifyphone (phone, callback) {
  loading("loading", "加载中...", true);
  request(`/login/verifyphone?phone=${phone}`, "GET", {}, (result) => {
    removeModel();
    callback(result);
  });
}

function getVeriCode (phone, callback) {
  request(`/login/sendsms?phone=${phone}`, "GET", {}, (result) => {
    if (result.success) callback(result.success);
    else loading("warning", result.message);
  });
}

function verifyVeriCode (phone, code, callback) {
  loading("loading", "加载中...", true);
  request(
    `/login/verifysms?phone=${phone}&code=${code}`,
    "GET",
    {},
    (result) => {
      if (result.success) {
        removeModel();
        callback();
      } else loading("warning", result.message);
    }
  );
}

function forgetPwd (params, callback) {
  loading("loading", "加载中...", true);
  request("/login/forgetpassword", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "保存成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

function resetPayPwd (params, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/forgetpaypassword", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "保存成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

// 判断用户是否可以审核
function getRights (callback = () => { }) {
  request("/api/user/manage", "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function verifyInviteCode (invitecode, callback) {
  loading("loading", "加载中...", true);
  request(
    `/login/verifyinviatecode?invitecode=${invitecode}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback();
      else loading("warning", result.message);
    }
  );
}

function setPayPwd (loginPassword, password, rePassword, callback) {
  loading("loading", "加载中...", true);
  request(
    "/api/user/paypassword",
    "PUT",
    {
      loginPassword,
      password,
      rePassword,
    },
    (result) => {
      if (result.success) {
        loading("success", "设置成功");
        const user = JSON.parse(window.localStorage.getItem("user"));
        user.data.setPay = true;
        window.localStorage.setItem("user", JSON.stringify({ data: user.data, time: new Date().getTime() + 3000 }))
        setTimeout(callback, 1000);
      } else loading("warning", result.message);
    }
  );
}

function modiPwd (params, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/password", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "修改成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

function modiPayPwd (params, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/modifypaypassword", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "修改成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

function getMyTeam (userid, search = "", page, callback) {
  request(
    `/api/user/team?userID=${userid}&page=${page}&coinName=fil&search=${search}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

// 获取相关资讯数据
function getNewsList (page, callback) {
  request(
    `/article/list?page=${page}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
      else loading("warning", result.message);
    }
  );
}

function getNews (id, callback) {
  request(`/article/${id}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

// 获取公告
function noticeData (page, callback) {
  request(
    `/notice/list?page=${page}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
      else loading("warning", result.message);
    }
  );
}

function getNotice (id, callback) {
  request(`/notice/${id}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}






function getVestingList (page, callback) {
  request(`/api/vesting/list?page=${page}&coinName=fil`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}


function getAssets (callback) {
  request(`/api/user-asset-stabilize/list`, "GET", {}, (result) => {
    if (result.success) {
      var data = {};
      result.data.results.forEach((item) => {
        data[item.summaryName] = item;
      });
      callback(data);
    } else loading("warning", result.message);
  });
}

function getAssetList (coin, type, page, callback) {
  request(
    `/api/user-resource-log/list?page=${page}&module=${type}&coinName=${coin}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
      else loading("warning", result.message);
    }
  );
}


function getProfitList (page, type, model, desvalue, callback) {
  request(
    `/api/user-profit-log/list?page=${page}&coinName=${type}&module=${model}&des=${desvalue}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
      else loading("warning", result.message);
    }
  );
}


function identity (name, id, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/identify", "PUT", { name, identify: id }, (result) => {
    if (result.success) {
      loading("success", "认证成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function getMyOrder (page, callback) {
  request(`/api/user-order/list?page=${page}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function getManage (callback) {
  request(`/api/user/manage`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function getOrder (orderId, callback) {
  request(`/api/user-order/${orderId}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function uploadAvatar (file, callback) {
  const formdata = new FormData();
  formdata.append("avatar", file);
  fetch(baseUrl + "/api/user/avatar", {
    headers: {
      "X-User-Token": window.localStorage.getItem("X-User-Token"),
    },
    method: "PUT",
    body: formdata,
  })
    .then((response) => response.json())
    .then(callback)
    .catch(() => { });
}

function applyWithdrawal (params, callback) {
  loading("loading", "加载中...", true);
  request("/third/withdraw", "POST", params, (result) => {
    if (result.success) {
      loading("success", "提交成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function getWithdrawRecord (coin, page, callback = () => { }) {
  request(
    `/api/withdraw/list?page=${page}&module=${coin}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

function getTheDayNetDate (cdate, callback) {
  loading("loading", "加载中...", true);
  request(
    "/api/distribution-rules/rule",
    "POST",
    { cdate, coinName: "fil" },
    (result) => {
      if (result.success) {
        removeModel();
        callback(result.data);
      } else loading("warning", result.message);
    }
  );
}

function getRechargeAddress (coin, callback) {
  request(`/third/coinaddress?coinName=${coin}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

// 轮播图数据获取
function getBannerList (callback) {
  request(`/banner/list`, "GET", {}, (result) => {
    if (result.success) callback(result.data.results);
    else loading("warning", result.message);
  });
}

function buyPower (amount, pwd, callback) {
  loading("loading", "下单中...", true);
  request(
    "/api/asset/buy",
    "POST",
    { productNum: amount, payPassword: pwd },
    (result) => {
      if (result.success) {
        loading("success", "下单成功");
        setTimeout(() => {
          removeModel();
          callback();
        }, 1000);
      } else loading("warning", result.message);
    }
  );
}
function getMissions (page, status, callback = () => { }) {
  request(
    `/api/user-order/alllist?page=${page}&status=${status}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}


// 充币审核列表
function getRechargeMissions (page, status, callback = () => { }) {
  request(
    `/api/invest/alllist?page=${page}&status=${status}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

// 充币审核同意
function getRechargeConfirm (investId, callback = () => { }) {
  request(
    `/api/invest/confirm?investId=${investId}`,
    "POST",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}


// 充币审核拒绝
function getRechargeRefuse (investId, callback = () => { }) {
  request(
    `/api/invest/refuse?investId=${investId}`,
    "POST",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

function getBanner (params, callback) {
  request(`/banner/list?location=${params}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

// 提币审核列表（3已完成）
function getWithdrawMissions (page, status, callback = () => { }) {
  request(
    `/api/withdraw/alllist?page=${page}&status=${status}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

// 提币审核同意
function getWithdrawConfirm (investId, callback = () => { }) {
  request(
    `/api/withdraw/withdrawagree`,
    "POST",
    { withdrawNo: investId },
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

// 提币审核拒绝
function getWithdrawRefuse (investId, callback = () => { }) {
  request(
    `/api/withdraw/withdrawrefuse`,
    "POST",
    { withdrawNo: investId },
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}


function getPowerList (page, callback) {
  request(`/api/power/list?page=${page}&coinName=fil`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function poweractive (cost, amount, pwd, callback) {
  loading("loading", "激活中", true);
  request(
    "/api/power/activenew",
    "POST",
    { freeze: cost, power: amount, payPassword: pwd, coinName: "fil-lhh" },
    (result) => {
      if (result.success) {
        loading("success", "激活成功");
        setTimeout(() => {
          removeModel();
          callback();
        }, 1000);
      } else loading("warning", result.message);
    }
  );
}



function powerActiveCancel (id, callback) {
  loading("loading", "取消中", true);
  request("/api/power/cancelactive", "POST", { id }, (result) => {
    if (result.success) {
      loading("success", "取消成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

function saveAddress (params, callback) {
  loading("loading", "加载中...", true);
  request("/api/user/contact", "PUT", params, (result) => {
    if (result.success) {
      loading("success", "保存成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function createContract (callback = () => { }) {
  loading("loading", "生成中...", true);
  request("/api/contract/create", "POST", {}, (result) => {
    if (result.success) {
      loading("success", "生成成功");
      setTimeout(callback, 1000);
    } else loading("warning", result.message);
  });
}

function getUndoContract (text, callback = () => { }) {
  loading("loading", text, true);
  request("/api/contract/by", "GET", {}, (result) => {
    removeModel();
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

function getMyContract (page, callback = () => { }) {
  request(`/api/contract/list?page=${page}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
  });
}

function getMarketData (callback) {
  request("/third/marketdata", "GET", {}, (result) => {
    if (result.success) callback(JSON.parse(result.data || "[]"));
    // else loading("warning", result.message);
  });
}


// 获取全网数据
function getNetworkData (callback) {
  request("/third/overview", "GET", {}, (result) => {
    if (result.success) callback(JSON.parse(result.data));
    // else loading("warning", result.message);
  });
}

function getVideoToken (callback) {
  request("/api/user/livetoken", "GET", {}, (result) => {
    if (result.success) callback(result.data);
    // else loading("warning", result.message);
  });
}

function payOrder (params, text, callback) {
  loading("loading", "加载中...", true);
  request("/api/asset/buy", "POST", params, (result) => {
    if (result.success) {
      loading("success", text);
      setTimeout(() => {
        callback(result.data);
      }, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

//联合挖矿产品下单
function payOrderIh (params, text, callback) {
  loading("loading", "加载中...", true);
  request("/api/power/activelh", "POST", params, (result) => {
    if (result.success) {
      loading("success", text);
      setTimeout(() => {
        callback(result.data);
      }, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}


function goAlipay (orderId, returnUrl, callback) {
  loading("loading", "跳转支付中...", true);
  request("/api/pay/alipayorder", "POST", { orderId, returnUrl }, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

function goWXpay (orderId, returnUrl, callback) {
  loading("loading", "跳转支付中...", true);
  request("/api/pay/wxorder", "POST", { orderId, returnUrl }, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

function uploadProof (formdata, callback) {
  loading("loading", "加载中...", true);
  fetch(baseUrl + "/api/user-order/payorder", {
    headers: {
      "X-User-Token": window.localStorage.getItem("X-User-Token"),
    },
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then(() => {
      loading("success", "提交成功");
      setTimeout(callback, 1000);
    })
    .catch((err) => {
      loading("warning", "上传失败，请稍后重试");
    });
}

function getHECOAddress (callback) {
  request("/third/hecoaddress", "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

function hecoWithdraw (params, callback) {
  loading("loading", "加载中...", true);
  request("/third/hecowithdraw", "POST", params, (result) => {
    if (result.success) {
      loading("success", "提交成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}
// 充提币地址
function coinAddress (address, payPassword, code, callback) {
  loading("loading", "加载中...", true);
  request("/api/user-asset-stabilize/bindaddress", "POST", { address: address, payPassword: payPassword, code: code, coinName: 'fil' }, (result) => {
    if (result.success) {
      loading("success", "提交成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function sendWithdrawSms (callback) {
  request("/third/sendsms", "GET", {}, (result) => {
    if (result.success) callback(result);
    else loading("warning", result.message);
  });
}

function getProductList (callback) {
  request("/project/list", "GET", {}, (result) => {
    if (result.success) callback(result.data.results);
    else loading("warning", result.message);
  });
}

function getProduct (id, callback) {
  request(`/project/${id}`, "GET", {}, (result) => {
    if (result.success) callback(result.data);
    else loading("warning", result.message);
  });
}

function getRechargeRecord (coin, page, callback = () => { }) {
  request(
    `/api/invest/list?page=${page}&coinName=${coin}`,
    "GET",
    {},
    (result) => {
      if (result.success) callback(result.data);
    }
  );
}

function manualRecharge (formdata, callback) {
  loading("loading", "加载中...", true);
  fetch(baseUrl + "/api/invest/create", {
    headers: {
      "X-User-Token": window.localStorage.getItem("X-User-Token"),
    },
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.success) {
        loading("success", "提交成功");
        setTimeout(callback, 1000);
      } else {
        loading("warning", json.message);
      }
    })
    .catch((err) => {
      loading("warning", err);
    });
}

function orderPaymentConfirm (orderId, callback) {
  loading("loading", "加载中...", true);
  request("/api/user-order/state", "PUT", { orderId }, (result) => {
    if (result.success) {
      loading("success", "订单确认成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function orderFinalConfirm (orderId, callback) {
  loading("loading", "加载中...", true);
  request("/api/user-order/confirm", "POST", { orderId }, (result) => {
    if (result.success) {
      loading("success", "订单确认成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function orderRefuse (orderId, callback) {
  loading("loading", "加载中...", true);
  request("/api/user-order/refuse", "PUT", { orderId }, (result) => {
    if (result.success) {
      loading("success", "订单拒绝成功");
      setTimeout(callback, 1000);
    } else {
      loading("warning", result.message);
    }
  });
}

function getPowerAssets (callback) {
  request(`/api/asset`, "GET", {}, result => {
    if (result.success) {
      var data = {};
      result.data.forEach(item => {
        data[item.coinName] = item;
      });
      callback(data);
    } else loading("warning", result.message);
  });
}

function getrepayAssets (callback) {
  request(`/api/asset/repay?coinName=fil-ct`, "GET", {}, result => {
    if (result.success) {
      callback(result.data);
    } else loading("warning", result.message);
  });
}
function uploadIdCard (file, callback) {
  const formdata = new FormData();
  formdata.append("image", file);
  fetch(baseUrl + "/api/upload", {
    headers: {
      "X-User-Token": window.localStorage.getItem("X-User-Token"),
    },
    method: "POST",
    body: formdata,
  })
    .then((response) => response.json())
    .then(callback)
    .catch(() => { });
}
// 人脸检测与五官定位
function userDetectface (data, callback) {
  request("/api/user/detectface", "POST", data, (result) => {
    callback(result)
  });
}
// 人脸活体检测
function userDetectliveface (data, callback) {
  request("/api/user/detectliveface", "POST", data, (result) => {
    callback(result)
  });
}
// 人脸对比1：1
function userompareface (data, callback) {
  request("/api/user/compareface", "POST", data, (result) => {
    callback(result)
  });
}
// 人脸缓存
function recoginz (data, callback) {
  request("/api/user/recoginze", "GET", {}, (result) => {
    callback(result)
  });
}
// 识别身份证号
function recoginzecard (data, callback) {
  request("/api/user/recognizecard", "POST", data, (result) => {
    callback(result)
  });
}