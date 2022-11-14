getConfig((result) => {});
function next() {
  var inputs = elea("input");
  signin(
    {
      phone: inputs[0].value,
      password: inputs[1].value,
    },
    () => {
      getManage((data) => {
        window.location.replace("index.html");
      })
    }
  );
}
