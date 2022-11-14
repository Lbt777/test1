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
function switchStatus(index, type = "") {
  for (var i = 0; i < statusBtns.length; i++) {
    statusBtns[i].style.color = i === index ? "#4594f7" : "#202020";
    statusSpans[i].style.backgroundColor = i === index ? "#4594f7" : "#FFF";
    if (i === index) {
      status = type;
      getMissions(1, type, (data) => {
        page = 2;
        Pagination.appendData(listDom, data.results, true);
        miniRefresh.endDownLoading(true);
      });
    }
  }
}


Pagination.setTemplate(
  (obj) =>
    `<a class='item' href="mission.html?orderId=${obj.orderId}">` +
      "<div style='border-bottom:1px solid #EDEDED;padding-bottom:0.8rem;'>" +
        `<span>订单号 ${obj.orderId}</span>` +
        `<span style="color: ${statusColor[obj.status]};">${obj.status}</span>` +
      "</div>" +
      "<div class='centeritem'>" +
        "<div>" + 
        (obj.payway == "USDT" ?
        `<p>${obj.total}USDT</p>`: `<p>${obj.total}CNY </p>`) + 
          // `<p style='color:#999999;font-size:0.8rem;'>价格</p>` +
        "</div>"+
        "<div>" + 
          `<p>${obj.sumCapacity}T</p>` +
          // `<p style='color:#999999;font-size:0.8rem;'>数量</p>` +
        "</div>"+
        "<div>" + 
          `<p>${obj.name}</p>` +
          // `<p style='color:#999999;font-size:0.8rem;'>姓名</p>` +
        "</div>"+
      "</div>" +
      "<div>" + 
        `<span>${obj.createTime}</span>` +
        `<span><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-jiantou1" style="font-size:1rem;"></use>
      </svg></span>` +
      "</div>"+
    "</a>"
);
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getMissions(1, status, (data) => {
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
      getMissions(page, status, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
