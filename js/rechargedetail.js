var data = JSON.parse(sessionStorage.getItem("dataitem"));
const status1 = ["核实中", "核实中", "已驳回", "交易失败", "已充值"];
var inputs = elea("input");
inputs[0].value =status1[data.status];
inputs[1].value = data.amount;
inputs[2].value = data.tradeId.toString();
ele("#proof").src = data.investImages;
// inputs[3].value = 
