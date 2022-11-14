const headerHeight = ele(".header").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + "px";
Pagination.setTemplate(
  (obj) =>
    `<a class="item" href="noticedetail.html?id=${obj.id}">` +
    "<div>" +
    `<span>${obj.title}</span>` +
    `<span>${obj.createTime}</span>` +
    "</div>" +
    "<div>" +
    `<span>${obj.content}</span>` +
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
        noticeData(1, (data) => {
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
      noticeData(page, (data) => {
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
