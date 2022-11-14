const headerHeight = ele(".header").offsetHeight;
const barHeight = ele(".statusBar").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + barHeight + 15 + "px";
const statusBtns = ele(".statusBar").querySelectorAll("button");
statusBtns[0].style.fontSize = "1.2rem";
statusBtns[0].style.color = "#4594f7";
var status;
var page = 1;
var total;
function switchStatus(index, type = "") {
  for (var i = 0; i < statusBtns.length; i++) {
    statusBtns[i].style.fontSize = i === index ? "1.2rem" : "0.8rem";
    statusBtns[i].style.color = i === index ? "#4594f7" : "#202020";
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
    "<div>" +
    `<span>${obj.orderId}</span>` +
    `<span style="color: ${statusColor[obj.status]};">${obj.status}</span>` +
    "</div>" +
    "<div>" +
    `<span>${obj.name}&nbsp;&nbsp;￥${obj.total}</span>` +
    `<span>${obj.payTime}</span>` +
    "</div>" +
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
