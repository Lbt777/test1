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
  0:'待审核',
  2:'已拒绝',
  3:'已同意',
}

const statusValueColor = {
  待审核: "#4594f7",
  已拒绝: "#ff8888",
  已同意: "#39b524",
};

var coinName = {
  1001:'USDT',
  2002:'FIL'
}

function switchStatus(index, type = "") {
  for (var i = 0; i < statusBtns.length; i++) {
    statusBtns[i].style.color = i === index ? "#4594f7" : "#202020";
    statusSpans[i].style.backgroundColor = i === index ? "#4594f7" : "#FFF";
    if (i === index) {
      status = type;
      getWithdrawMissions(1, type, (data) => {
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
        `<span>单号：${obj.withdrawNo}</span>` +
        `<span style="color: ${statusValueColor[statusvalue[obj.status]]};">${statusvalue[obj.status]}</span>` +
      "</div>" +
      "<div class='centeritem'>" +
        "<div>" + 
          `<p><span style="font-size:0.8rem;color:#999999;padding-right:1rem;">姓名</span>${obj.userName}</p>` +
        "</div>"+
        "<div>" + 
          `<p><span style="font-size:0.8rem;color:#999999;padding-right:1rem;">数量</span>${obj.amount.toFixed(4)}${coinName[obj.summaryNo]}</p>` +
        "</div>"+
      "</div>" +
      "<div style='display:flex;justify-content: start;margin-bottom:0.8rem;'>" + 
        `<div style='width:20%;'>` +
          `<p style='color:#999999;font-size:0.8rem;'>提币地址</p>` +
        `</div>`+
        `<div style='width:80%;height: auto;word-break: break-all;'>` +
        `<p id="addressText" style='flex-wrap: wrap;display: inline;'>${obj.address}</p>` +
        // <svg data-clipboard-text="${obj.address}" class="icon btnc" aria-hidden="true">
        // <use xlink:href="#icon-fuzhi" style="font-size:1rem;"></use></svg>
        `</div>`+
        `</div>`+
      "</div>"+
      "<div style='display:flex;justify-content: start;margin-bottom:0.8rem;'>" + 
        `<div style='width:20%;'>` +
          `<p style='color:#999999;font-size:0.8rem;'>备注</p>` +
        `</div>`+
        `<div style='width:80%;height: auto;word-break: break-all;'>` +
          `<p style='flex-wrap: wrap;'>${obj.tradeId}</p>` +
        `</div>`+
      "</div>"+
      "<div>" + 
        `<span>${dataValue(obj.createTime*1000)}</span>` +
      "</div>"+
      (obj.status == 0 ?
      "<div class='btnsBox'>" + 
        `<div onclick="refuse(\'${obj.withdrawNo}\')">` + 
          `<p style="color:#494C5A;">拒绝</p>` +
        `</div>`+
        `<div onclick="finalConfirm(\'${obj.withdrawNo}\')">` +  
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
      getWithdrawMissions(1, status, (data) => {
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
      getWithdrawMissions(page, status, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});


// var clipboard = new ClipboardJS("#copyBtn");
// clipboard.on("success", function (e) {
//   showMessage('复制成功',1000,true,);
//   e.clearSelection();
// });
// var clipboard = new ClipboardJS('.btnc');
// clipboard.on('success', function(e) {
//     // console.info('Action:', e.action);
//     // console.info('Text:', e.text);
//     // console.info('Trigger:', e.trigger);
//     showMessage('复制成功',1000,true,);
//     e.clearSelection();
// });

// 充币审核同意
function finalConfirm(withdrawNo) {
  confirm("是否确认通过？", () => {
    getWithdrawConfirm(withdrawNo, () => {
      window.location.reload();
      // window.history.back();
    });
  });
}

// 充币审核拒绝
function refuse(withdrawNo){
  confirm("是否确认拒绝？", () => {
    getWithdrawRefuse(withdrawNo, () => {
      window.location.reload();
      // window.history.back();
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

function dataValue(timestamp){
  let time = new Date(timestamp)
  let year = time.getFullYear()
  const month = (time.getMonth() + 1).toString().padStart(2, '0')
  const date = (time.getDate()).toString().padStart(2, '0')
  const hours = (time.getHours()).toString().padStart(2, '0')
  const minute = (time.getMinutes()).toString().padStart(2, '0')
  const second = (time.getSeconds()).toString().padStart(2, '0')
  return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second

}