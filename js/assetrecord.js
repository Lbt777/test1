const coin = getParamFromURL("coin") || "";
const headerHeight = ele(".header").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + "px";
Pagination.setTemplate(
  (obj) =>
    `<dt>${obj.description}</dt>` +
    `<dd><span>${obj.type === 1 ? "+" : "-"}${
      obj.amount
    }<span> ${coin.toUpperCase()}</span></span><span>${
      obj.createTime
    }</span></dd>`
);
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getAssetList(coin, coin, 1, (data) => {
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
      getAssetList(coin, coin, page, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
