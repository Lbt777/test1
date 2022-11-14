const template = (name, val) =>
  `<div><span>${name}</span><span>${val || ""}</span></div>`;
var orderId;
getOrder(getParamFromURL("orderId"), (result) => {
  orderId = result.orderId;
  ele("#name").innerHTML = result.productName;
  ele("#status").innerHTML = result.status;
  ele("#status").style.color = statusColor[result.status];
  ele("#total").innerHTML = "￥" + result.total;
  ele("#proof").src = result.proofURL;
  const detailFields = {
    orderId: "订单号",
    name: "客户姓名",
    identify: "身份证",
    orderId: "订单号",
    price: "单价(元)",
    amount: "数量(T)",
    payway: "支付方式",
    createTime: "下单时间",
    payTime: "支付时间",
  };
  Object.keys(detailFields).forEach((key) => {
    ele(".rows").innerHTML += template(detailFields[key], result[key]);
  });
  getRights((data) => {
    const btns = ele(".main").querySelectorAll("button");
    if (data.payConfirm && result.status === "已支付") {
      btns[0].style.display = "block";
      btns[1].style.display = "block";
      ele(".proof").style.marginBottom = "5rem";
    }
    if (data.confirm && result.status === "已确认") {
      btns[0].style.display = "block";
      btns[2].style.display = "block";
      ele(".proof").style.marginBottom = "5rem";
    }
  });
});

function confirmPayment() {
  confirm("是否确认通过？", () => {
    orderPaymentConfirm(orderId, () => {
      window.history.back();
    });
  });
}
function finalConfirm() {
  confirm("是否确认通过？", () => {
    orderFinalConfirm(orderId, () => {
      window.history.back();
    });
  });
}
function refuse(){
  confirm("是否确认拒绝？", () => {
    orderRefuse(orderId, () => {
      window.history.back();
    });
  });
}