/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-03-24 16:26:29
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-11-08 10:22:07
 * @Description: 
 */
const template = (name, val) =>
  `<div><span>${name}</span><span>${val || ""}</span></div>`;
let order;
getOrder(getParamFromURL("orderId"), (result) => {
  order = result;
  ele("#name").innerHTML = result.productName;
  ele("#status").innerHTML = result.status;

  if (result.payMethod == 1) {
    ele("#total").innerHTML = result.total + "USDT";
  } else {
    ele("#total").innerHTML = result.total + "CNY";
  }
  ele("#status").style.color = statusColor[result.status];

  ele("#total").style.color = "#5c92ff";
  const detailFields = {
    orderId: "订单号",
    price: "单价",
    amount: "数量(T)",
    payway: "支付方式",
    createTime: "下单时间",
    payTime: "支付时间",
  };
  Object.keys(detailFields).forEach((key) => {
    ele(".rows").innerHTML += template(detailFields[key], result[key]);
  });
  if (result.payMethod === 2) {
    const bankFields = {
      bankAccount: "收款方",
      bankNumber: "收款账户",
      openingBank: "收款银行",
    };
    Object.keys(bankFields).forEach((key) => {
      ele(".rows").innerHTML += template(bankFields[key], result.bankTransfer[key]);
    });
  }
  const uploadInput = ele(".proof").querySelector("input");
  const uploadBtn = ele(".proof").querySelector("button");
  const commitBtn = ele(".proof").querySelectorAll("button")[1];
  if (result.status === "未支付" || result.status === "被拒绝") {
    if (result.payMethod > 2) {
      // uploadBtn.style.display = "block"
      ele('.proof').style.display = 'none'
    } else {
      uploadBtn.onclick = () => {
        uploadInput.click();
        uploadInput.onchange = () => {
          ele("#proof").src = window.URL.createObjectURL(uploadInput.files[0]);
          ele("#proof").style.width = "100%";
          uploadBtn.style.border = "none";
          uploadBtn.style.padding = "0";
        };
      };
      commitBtn.onclick = () => {
        if (ele("#proof").src.indexOf("/images/upload.png") !== -1) {
          loading("warning", "请上传凭证");
          return;
        }
        confirm("确认提交吗？", () => {
          const formdata = new FormData();
          formdata.append("orderId", order.orderId);
          formdata.append("proof", uploadInput.files[0]);
          uploadProof(formdata, () => {
            // window.location.reload();
            window.location.href = window.location.href + `&buy=1`;
          });
        });
      };
    }
  }
  // else if (result.status === "已支付" || result.status === "已完成" || result.status === "被拒绝") {
  //   ele("#proof").style.width = "100%";
  //   uploadBtn.style.border = "none";
  //   uploadBtn.style.padding = "0";
  //   commitBtn.style.display = "none";
  // }
  if (result.proofURL === '' || result.status === "被拒绝") {
    commitBtn.style.display = "block";
  } else {
    commitBtn.style.display = "none";
    ele("#proof").style.width = "100%"
  }
  if (result.proofURL) {
    ele("#proof").style.width = "100%"
    uploadBtn.style.border = "none";
    uploadBtn.style.padding = "0";
    ele("#proof").src = result.proofURL;
  }
});
function back () {
  if (window.location.href.indexOf('buy') > -1) {
    window.location.href = `mall.html`;
  } else {
    window.history.back()
  }
}