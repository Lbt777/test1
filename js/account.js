/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-03-24 16:26:29
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-11-14 15:59:34
 * @Description: 
 */

var user = JSON.parse(window.localStorage.getItem("user"));
current((result) => {
  user = result;
  ele("#phone").innerHTML = user.phone;
  if (user.name) {
    ele("#realname").innerHTML = "<div><span>实名认证</span><span>已认证</span></div>";
  }
});

function logout () {
  confirm("确认退出登录吗？", () => {
    userLogout();
    window.location.replace("signin.html");
  });
}