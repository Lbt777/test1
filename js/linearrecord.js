// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if(new Date().getTime() > user.time){
  current((result) => {
    user = result;
  });
}else{
  user = user.data;
}


var newUser = false;
getAssets((data) => {
  ele("#vestingFil").innerHTML = formatAmount(data.fil.vestingFil);
});
const headerHeight = ele(".header").offsetHeight;
const topPartHeight = ele(".top-part").offsetHeight;
ele(".minirefresh-wrap").style.top = headerHeight + topPartHeight + "px";
Pagination.setTemplate(
  (obj) =>
    `<dt><span>${formatAmount(obj.vestingFil)}<span>FIL</span></span><span>${
      timestampToTime(obj.createTime).split(" ")[0]
    }</span></dt>` +
    `<dd><span>进度：</span><span>${obj.currentDay}/${
      obj.totalDay
    }</span><span>已释放：</span><span>${formatAmount(
      obj.vestingFil * (obj.currentDay / obj.totalDay)
    )} FIL</span></dd>`
);
var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      getVestingList(1, (data) => {
        if (newUser) total = 0;
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
      getVestingList(page, (data) => {
        page += 1;
        total = data.page.total;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
function explain() {
  loading("warning", "每日收益的75%进入待释放，释放后会进入可提收益");
}
