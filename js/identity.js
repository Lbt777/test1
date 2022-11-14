function next() {
  var inputs = elea("input");
  var realnme = inputs[0].value;
  var id = inputs[1].value;
  identity(realnme, id, () => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    user.data.name = realnme;
    user.data.identify = id;
    window.localStorage.setItem("user", JSON.stringify({data: user.data, time: new Date().getTime() + 3000 }))
    const from = getParamFromURL("from");
    if (from === "pwd") window.location.href = "index.html";
    else window.history.back();
  });
}
