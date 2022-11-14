/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-03-24 16:26:29
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-11-09 17:13:28
 * @Description: 
 */
const height = document.body.offsetHeight;
const banner = ele(".banner");
const tabs = ele(".tabs");

ele(".commodities").style.height =
  height - banner.offsetHeight - tabs.offsetHeight + "px";
// 获取用户信息
var user = JSON.parse(window.localStorage.getItem("user"));
if (new Date().getTime() > user.time) {
  current((result) => {
    user = result;
  });
} else {
  user = user.data;
}
getProductList((data) => {
  // console.log(data.length);
  // var result = data;
  // console.log(result.length);
  // result.forEach((item) => {

  // });
  // machineType == 4 木星智能盒子
  ele(".commodities").innerHTML +=
    "<div>" +
    "<div>" +
    `<h4>联合存储</h4>` +
    `<span>FIL</span>` +
    "</div>" +
    "<p>" +
    `` +
    "</p>" +
    `<div></div>` +
    "<div class='shoujia'>" +
    "<div>" +
    "<p class='prices'>产品售价</p>" +
    "<p class='goodsp f_12'>10FIL/T,质押9FIL,Gas费1FIL</p>" +
    "</div>" +
    "<div>" +
    "<p class='zhouqi'>服务周期</p>" +
    `<p class='f_12'>三年</p>` +
    "</div>" +
    "</div>" +
    `<a class='btns' href="powerrecord.html">立即参与</a>` +
    "</div>";
  var result = data;
  result.forEach((item) => {
    ele(".commodities").innerHTML +=
      "<div>" +
      "<div>" +
      `<h4>${item.name}${item.machineType === 4 ? '' : `(${item.capacity}T)`}</h4>` +
      (item.machineType !== 4 ? `<span>FIL</span>` : '') +
      "</div>" +
      (item.machineType !== 4 ? `<p class='shengyu'>剩余：<span>999+</span></p><div class='jindu'><div class='jindubg'></div></div>` : '') +
      "<div class='shoujia'>" +
      "<div>" +
      "<p class='prices'>产品售价</p>" +
      (item.coinName != "fil-lhh"
        ? `<p class="goodsp f_12">${item.price} CNY<br />${item.machineType !== 4 ? `<span style="font-size:12px;color:gray;">≈${item.priceUsdt} USDT</span>` : ''}</p>`
        : `<p class="goodsp f_12">${item.unionPrice} FIL<br /></p>`) +
      "</div>" +
      `<div><p class='zhouqi'>服务周期</p><p class='f_12'>${item.contractPeriod}</p></div>` +
      "</div>" +
      (item.machineType === 4 ? `<div class='goodsTip'>45天内发货，支持7天无理由退款，可开发票，一张身份证只能购买一台盒子。</div>` : '') +
      (item.coinName == "fil-lhh"
        ? `<a class='btns' href="unionCommodity.html?id=${item.id}">立即激活</a>`
        : `<a class='btns' onClick="changeR(${item.id})"">立即下单</a>`) +
      "</div>";
  });
});
function changeR (id) {
  current((result) => {
    if (!result.name) {
      window.location.href = `real.html?id=${id}`
    } else {
      window.location.href = `commodity.html?id=${id}`
    }
  })
}
