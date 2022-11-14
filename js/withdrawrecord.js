var user = JSON.parse(window.localStorage.getItem("user"));
if(new Date().getTime() > user.time){
  current((result) => {
    user = result;
  });
}else{
  user = user.data;
}
const coin = getParamFromURL("coin") || "";
const headerHeight = ele(".header").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + "px";
var status1 = ["审核中", "提币中", "已驳回", "已提币", "交易失败"];
Pagination.setTemplate(
  (obj) =>
    "<dt>" +
    `<span>${status1[obj.status]}</span>` +
    "</dt>" +
    "<dd>" +
    `<span>${formatAmount(
      obj.amount
    )}<span>${coin.toUpperCase()}</span></span>` +
    `<span>${timestampToTime(obj.createTime)}</span>` +
    "</dd>"
);
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getWithdrawRecord(coin, 1, (data) => {
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
      getWithdrawRecord(coin, page, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
