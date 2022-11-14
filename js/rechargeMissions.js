const headerHeight = ele(".header").offsetHeight;
const barHeight = ele(".statusBar").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + barHeight + 15 + "px";
const statusBtns = ele(".statusBar").querySelectorAll("button");
const statusSpans = ele(".statusBar").querySelectorAll("span");
statusBtns[0].style.color = "#4594f7";
statusSpans[0].style.backgroundColor = "#4594f7";
var status;
var page = 1;
var total;

var statusvalue = {
  1:'待审核',
  3:'已拒绝',
  4:'已同意',
}

const statusValueColor = {
  待审核: "#4594f7",
  已拒绝: "#ff8888",
  已同意: "#39b524",
};


function switchStatus(index, type = "") {
  for (var i = 0; i < statusBtns.length; i++) {
    statusBtns[i].style.color = i === index ? "#4594f7" : "#202020";
    statusSpans[i].style.backgroundColor = i === index ? "#4594f7" : "#FFF";
    if (i === index) {
      status = type;
      getRechargeMissions(1, type, (data) => {
        page = 2;
        Pagination.appendData(listDom, data.results, true);
        miniRefresh.endDownLoading(true);
      });
    }
  }
}


Pagination.setTemplate(
  (obj) =>
    `<a class='item'>` +
      "<div style='border-bottom:1px solid #EDEDED;padding-bottom:0.8rem;'>" +
        `<span>单号：${obj.investId}</span>` +
        `<span style="color: ${statusValueColor[statusvalue[obj.status]]};">${statusvalue[obj.status]}</span>` +
      "</div>" +
      "<div class='centeritem'>" +
        "<div>" + 
          `<p>${obj.userName}</p>` +
        "</div>"+
        "<div>" + 
          `<p>${obj.amount} ${obj.coinName.toUpperCase()}</p>` +
        "</div>"+
        `<div onclick="openPic(\'${obj.investImages}\')">` + 
          `<p>支付凭证<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-jiantou1" style="font-size:1rem;"></use>
          </svg></p>` +
        "</div>"+
      "</div>" +
      "<div style='display:flex;justify-content: start;'>" + 
        `<div style='width:15%;'>` +
          `<p style='color:#999999;font-size:0.8rem;'>备注</p>` +
        `</div>`+
        `<div style='width:80%;height: auto;word-break: break-all;'>` +
          `<p style='flex-wrap: wrap;'>${obj.tradeId}</p>` +
        `</div>`+
      "</div>"+
      "<div>" + 
        `<span>${obj.createTime}</span>` +
      "</div>"+

      (obj.status == 1 ?
      "<div class='btnsBox'>" + 
        `<div onclick="refuse(\'${obj.investId}\')">` + 
          `<p style="color:#494C5A;">拒绝</p>` +
        `</div>`+
        `<div onclick="finalConfirm(\'${obj.investId}\')">` +  
          `<p style="color:#fff;">同意</p>` +
        `</div>`+
      "</div>" : "") +     
    "</a>"
);
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getRechargeMissions(1, status, (data) => {
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
      getRechargeMissions(page, status, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});


// 充币审核同意
function finalConfirm(investId) {
  confirm("是否确认通过？", () => {
    getRechargeConfirm(investId, () => {
      // window.history.back();
      window.location.reload();
    });
  });
}

// 充币审核拒绝
function refuse(investId){
  confirm("是否确认拒绝？", () => {
    getRechargeRefuse(investId, () => {
      // window.history.back();
      window.location.reload();
    });
  });
}


// 打开凭证
function openPic(urlLink){
  var model = ele("#model");
  model.innerHTML =
    "<div onclick='removeModel()' class='box global-shadow'>" +
    "<div class='confirm'>" +
    `<img style="width:100%;" src="${urlLink}" />` +
    "</div></div>";
}