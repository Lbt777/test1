const addUnit = (val, unit, size = 0.8) =>
  `${formatAmount(val)} <span style="font-size:${size}rem">${unit}</span>`;
const setVal = (id, val) => (ele("#" + id).innerHTML = val);
var cuttteindex = 0;

const powerType = {
  200201: "专业存储",
  200202: "联合存储",
  200203: "云存储",
  200204: '联合存储'
};

getPowerAssets(data => {
  ele("#totalFil").innerHTML = addUnit(data["fil-sl"].totalFil + data["fil-ct"].totalFil + data["fil-lhh"].totalFil, "FIL", 1);
  ele("#ydayFil").innerHTML = addUnit(data["fil-sl"].ydayFil + data["fil-ct"].ydayFil + data["fil-lhh"].ydayFil, "FIL", 1);
  ele("#power").innerHTML = addUnit(data["fil-sl"].gas + data["fil-ct"].gas + data["fil-lhh"].gas, "FIL");
  ele("#pledgeFil").innerHTML = addUnit(data["fil-sl"].pledgeFil + data["fil-ct"].pledgeFil + data["fil-lhh"].pledgeFil, "FIL");
  ele("#vestingFil").innerHTML = addUnit(data["fil-sl"].vestingFil + data["fil-ct"].vestingFil + data["fil-lhh"].vestingFil, "FIL");
});


function showdetails (date, income) {
  getTheDayNetDate(date, (data) => {
    const allTd = ele(".details").querySelectorAll("td");
    allTd[3].innerHTML = data.averageMiningReward + " Fil/T";
    allTd[5].innerHTML = income + " Fil";
    popup();
  });
}
var page = 1;
function tabClick (index) {
  ele("#listdata").innerHTML = "";
  ele("#tabBox").querySelector(".active").classList.remove('active');
  ele("#tabBox").querySelectorAll("div")[index].classList.add('active');
  total = 10;
  page = 2;
  if (index == 0) {
    getProfitList(1, "fil", "available_fil", "available", (data) => {
      Pagination.appendData(listDom, data.results, true);
      miniRefresh.endDownLoading(true);
    });
  } else if (index == 1) {
    getProfitList(1, "fil", "available_fil", "vesting", (data) => {
      Pagination.appendData(listDom, data.results, true);
      miniRefresh.endDownLoading(true);
    });
  } else {
    getVestingList(1, (data) => {
      Pagination.appendData(listDom, data.results, true);
      miniRefresh.endDownLoading(true);
    });
  }
  cuttteindex = index;
}

const topPartHeight = ele(".top-part").offsetHeight;
const tabBox = ele(".tabBox").offsetHeight;
const tabs = ele(".tabs");
const height = document.body.offsetHeight;
const minirefresh = ele(".minirefresh-wrap");
minirefresh.style.top = topPartHeight + tabBox + 20 + "px";
minirefresh.style.bottom = tabs.offsetHeight + "px";
Pagination.setTemplate((obj) => {
  if (cuttteindex == 0) {
    const direct = obj.description.indexOf("可提") !== -1;
    return (
      "<dt>" +
      `<span>${powerType[obj.coinType]}<span style="background-color: ${direct ? "#8eb3ff" : "#5ccaff"
      };">${direct ? "25%" : "75%"}</span></span>` +
      `<span>${obj.extra || obj.createTime.split(" ")[0]}</span>` +
      "</dt>" +
      "<dd>" +
      `<span><span>+${formatAmount(obj.amount)}</span>FIL</span>` +
      (direct
        ? `<button onclick="showdetails(\'${obj.extra}\',\'${obj.amount}\')">···</button>`
        : "") +
      "</dd>"
    );
  } else if (cuttteindex == 1) {
    const direct = obj.description.indexOf("可提") !== -1;
    return (
      "<dt>" +
      `<span>${powerType[obj.coinType]}<span style="background-color: ${direct ? "#8eb3ff" : "#5ccaff"
      };">${direct ? "25%" : "75%"}</span></span>` +
      `<span>${obj.extra || obj.createTime.split(" ")[0]}</span>` +
      "</dt>" +
      "<dd>" +
      `<span><span>+${formatAmount(obj.amount)}</span>FIL</span>` +
      (direct
        ? `<button onclick="showdetails(\'${obj.extra}\',\'${obj.amount}\')">···</button>`
        : "") +
      "</dd>"
    );
  } else {
    return (
      `<dt><span>${powerType[obj.coinType]}${formatAmount(obj.vestingFil)}<span>FIL</span></span><span>${timestampToTime(obj.createTime).split(" ")[0]
      }</span></dt>` +
      `<dd><span>进度：</span><span>${obj.currentDay}/${obj.totalDay
      }</span><span>已释放：</span><span>${formatAmount(
        obj.vestingFil * (obj.currentDay / obj.totalDay)
      )} FIL</span></dd>`
    )
  }
});


var total;

const listDom = ele("#listdata");
const miniRefresh = new MiniRefresh({
  container: "#minirefresh",
  down: {
    callback: function () {
      if (cuttteindex == 0) {
        getProfitList(1, "fil", "available_fil", "available", (data) => {
          page = 2;
          Pagination.appendData(listDom, data.results, true);
          miniRefresh.endDownLoading(true);
        });
      } else if (cuttteindex == 1) {
        getProfitList(1, "fil", "available_fil", "vesting", (data) => {
          page = 2;
          Pagination.appendData(listDom, data.results, true);
          miniRefresh.endDownLoading(true);
        });
      } else {
        getVestingList(1, (data) => {
          page = 2;
          Pagination.appendData(listDom, data.results, true);
          miniRefresh.endDownLoading(true);
        });
      }
    },
  },
  up: {
    isAuto: true,
    callback: function () {
      console.log(JSON.stringify(total));
      if (total < 10) {
        miniRefresh.endUpLoading(false);
        return;
      }
      if (cuttteindex == 0) {
        getProfitList(page, "fil", "available_fil", "available", (data) => {
          page += 1;
          total = data.page.total;
          Pagination.appendData(listDom, data.results);
          miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
        });
      } else if (cuttteindex == 1) {
        getProfitList(page, "fil", "available_fil", "vesting", (data) => {
          page += 1;
          total = data.page.total;
          Pagination.appendData(listDom, data.results);
          miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
        });
      } else {
        getVestingList(page, (data) => {
          page += 1;
          total = data.page.total;
          Pagination.appendData(listDom, data.results);
          miniRefresh.endUpLoading(data.results.length < 10 ? true : false);
        });
      }
    },
  },
});


