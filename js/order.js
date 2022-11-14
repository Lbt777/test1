const headerHeight = ele(".header").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + "px";
Pagination.setTemplate(
  (obj) =>
    `<a class="item" href="orderdetail.html?orderId=${obj.orderId}">` +
    "<div>" +
    `<span>${obj.productName} ${obj.amount}T</span>` +
    `<span style="color:${statusColor[obj.status]}">${obj.status}</span>` +
    "</div>" +
    "<div>" +
    `<span>${obj.total} ${obj.payMethod == 2 ? " CNY" : " USDT"}</span>` +
    `<span>${obj.createTime}</span>` +
    "</div>" +
    "</a>"
);
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getMyOrder(1, (data) => {
        const datalist = data.results.map((item) => {
          if ((item.orderItems || []).length > 0) {
            item.productThumbnail =
              item.imageBaseUrl + item.orderItems[0].productThumbnail;
          }
          return item;
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
      getMyOrder(page, (data) => {
        const datalist = data.results.map((item) => {
          if ((item.orderItems || []).length > 0) {
            item.productThumbnail =
              item.imageBaseUrl + item.orderItems[0].productThumbnail;
          }
          return item;
        });
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
