// 轮播图
new Swiper(".swiper-container", {
  autoplay: true,
  pagination: { el: ".swiper-pagination" }
});


// getBannerList((data) => {
//     var swiperHtml = "";
//     data.forEach((item) => {
//       swiperHtml += 

//     })
//     console.log(JSON.stringify(swiperHtml));
//     ele(".swiper-wrapper").innerHTML = swiperHtml;
// });

// 顶部数据展示
function getCoinData () {
  getMarketData((data) => {
    if (data == "") getCoinData();
    else
      data.forEach((item) => {
        if (item.id === "bitcoin") setMarketCoin(item, 0);
        else if (item.id === "ethereum") setMarketCoin(item, 1);
        else if (item.id === "filecoinnew") setMarketCoin(item, 2);
      });
  });
}


axios({
  url: 'http://api.zhaoyicheng.cc/api/sale-register/1',
  method: 'get',
}).then(res => {
  if (res.data.data.PopUpSaleRegister) {
    confirmIndex("Filecoin销售负责人招募令", () => {
      window.location.href = `InviteFriends.html`;
    }, '查看详情');
  }
})

const setMarketCoin = (item, index) => {
  const theDIV = ele(".exchanges").querySelectorAll("div")[index];
  theDIV.querySelector(".changePre").innerHTML = (item.percent_change_24h >= 0 ? "+" : "") + item.percent_change_24h + "%";
  theDIV.querySelector(".changePre").style.color = item.percent_change_24h >= 0 ? "#4DAA90" : "#C15465";
  theDIV.querySelector(".usdtPrice").innerHTML = item.price_usd;
  theDIV.querySelector(".usdtPrice").style.color = item.percent_change_24h >= 0 ? "#4DAA90" : "#C15465";
  theDIV.querySelector(".cnyPrice").innerHTML = "￥" + item.price_cny;
};

getCoinData();

// 全网数据展示
getNetworkData(({ data }) => {
  ele("#tipSetHeight").innerHTML = data.tipSetHeight;
  ele("#totalPower").innerHTML = data.totalPower.toFixed(4);
  ele("#tipSetHeight1").innerHTML = data.tipSetHeight;
  ele("#totalPower1").innerHTML = data.totalPower.toFixed(4);
  ele("#avgBlocksReword").innerHTML = data.avgBlocksReword.toFixed(4);
  ele("#activeMiners").innerHTML = data.activeMiners;
  ele("#blockRewardIn24h").innerHTML = data.blockRewardIn24h;
  ele("#currentPledgeCollateral").innerHTML = (data.currentPledgeCollateral * 32).toFixed(4);
  ele("#gasIn32GB").innerHTML = data.gasIn32GB.toFixed(4);
  ele("#yesterdayCost").innerHTML = data.cost0fSealingSectors || 0;
});


// 机房监控
const width = document.body.offsetWidth;
const sceneAddresses = [
  "ezopen://open.ys7.com/F49639235/1.hd.live",
  "ezopen://open.ys7.com/F49639278/1.hd.live",
  "ezopen://open.ys7.com/F49639353/1.hd.live",
  "ezopen://open.ys7.com/F49639366/1.hd.live",
  "ezopen://open.ys7.com/F49639412/1.hd.live",
];

var player;

getVideoToken((data) => {
  player = new EZUIPlayer({
    id: "myPlayer",
    url: "",
    autoplay: false,
    accessToken: data,
    decoderPath: "ys",
    width: width,
    height: width * 0.8,
  });

  player.on("log", (log) => {
    if (log.indexOf("播放成功") !== -1) {
      ele(".rotate").style.opacity = 0;
    }
    console.log(log);
  });
});

function openMonitor (index) {
  ele(".rotate").style.opacity = 1;
  player.play({
    url: sceneAddresses[index]
  });
  popup();
}

function closeMonitor () {
  player.stop();
  popup(0);
}

var homeLayout = 1
var config;
getConfig((result) => {
  homeLayout = result.homeLayout;
  if (homeLayout == 1) {
    ele("#shujubox1").style.display = "flex";
    ele("#zixunbox").style.display = "block";
  } else {
    ele("#shujubox2").style.display = "flex";
    ele("#jiankongbox").style.display = "block";
  }
});

var noticeid;
noticeData(1, (result) => {
  if (result.results.length != 0) {
    ele("#containerText").innerHTML = result.results[0].title;
    noticeid = result.results[0].id;
  }
});

function godetial () {
  window.location.href = `noticedetail.html?id=${noticeid}`;
}

function goFriends () {
  window.location.href = `InviteFriends.html`;
}


function gonoticelist () {
  window.location.href = `noticelist.html`;
}


// 相关资讯
const headerHeight = ele(".swiper-container").offsetHeight;
const header1Height = ele(".exchanges").offsetHeight;
const header2Height = ele(".title").offsetHeight * 2;
const header3Height = ele(".datas").offsetHeight;
const header4Height = ele(".gap").offsetHeight * 2;
ele(".minirefresh-wrap").style.top = headerHeight + header1Height + header2Height + header3Height + 37.5 + "px";
const tabs = ele(".tabs");
minirefresh.style.bottom = tabs.offsetHeight + "px";
Pagination.setTemplate(
  (obj) =>
    "<li class='list-item'>" +
    `<button onClick="top.location.href='news.html?id=${obj.articleId}'">` +
    "<div>" +
    `<span class="msg-title">${obj.title}</span>` +
    "<div>" +
    `<span class="msg-date" style="margin-right: .6rem;">${obj.createTime}</span>` +
    `<span class="msg-date">${obj.viewCount}阅读</span>` +
    "</div>" +
    "</div>" +
    `<img src="${obj.sourceUrl}" />` +
    "</button>" +
    "</li>"
);

var page = 1;
var total;
const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      page = 1;
      getNewsList(page, (data) => {
        page += 1;
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
      getNewsList(page, (data) => {
        page += 1;
        Pagination.appendData(listDom, data.results);
        miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
      });
    },
  },
});