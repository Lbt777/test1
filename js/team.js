var user = JSON.parse(window.localStorage.getItem("user"));
if(new Date().getTime() > user.time){
  current((result) => {
    user = result;
  });
}else{
  user = user.data;
}
const id = getParamFromURL("id") || user.id;
const template = (item) =>
  `<a href="team.html?id=${item.id}" class="member">` +
  `<img src="${item.avatar || "images/default-head.png"}" />` +
  "<div>" +
  "<div>" +
  `<span>${
    item.name ? item.name + "(" + item.phone + ")" : item.phone
  }</span>` +
  `<span>${item.level}</span>` +
  "</div>" +
  "<div>" +
  "<span>销售：</span>" +
  `<span>${item.teamTotalAmount} CNY</span>` +
  "</div>" +
  "</div>" +
  "</a>";
const height = document.body.offsetHeight;
const headerHeight = ele(".header").offsetHeight;
const topPartHeight = ele(".top-part").offsetHeight;
const minirefresh = ele(".minirefresh-wrap");
minirefresh.style.top = headerHeight + topPartHeight + "px";
Pagination.setTemplate(template);
const teamSearch = ele("#teamSearch");
var page = 1;
var total;
const listDom = ele("#listdata");
function firstLoad() {
  getMyTeam(id, teamSearch.value, 1, (data) => {
    page = 2;
    ele("#count").innerHTML = "共" + data.page.total + "人";
    Pagination.appendData(listDom, data.results, true);
    miniRefresh.endDownLoading(true);
  });
}
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: firstLoad,
  },
  up: {
    isAuto: true,
    callback: function () {
      if (total < 10) {
        miniRefresh.endUpLoading(true);
        return;
      }
      getMyTeam(id, teamSearch.value, page, (data) => {
        page += 1;
        total = data.page.total;
        ele("#count").innerHTML = "共" + data.page.total + "人";
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});
teamSearch.onsearch = firstLoad;
