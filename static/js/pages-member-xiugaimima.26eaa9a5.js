(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-xiugaimima"],{"0bff":function(t,e,n){"use strict";var a=n("a733"),i=n.n(a);i.a},"14e9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{list:[{name:"默认地址",disabled:!1}],number:"",newPass:"",newPassed:"",smCode:"",state:!1,totalTime:60,recordingTime:0,currentTime:0}},onShow:function(){},onLoad:function(){},methods:{changeTab:function(t){this.current=t},editPass:function(){var t=this;this.newPass===this.newPassed?this.$api.modifyPassword({type:"mobile",mobile:this.$store.state.vuex_user.mobile,captcha:this.smCode,newpassword:this.newPassed}).then((function(e){0!=e.code?t.$api.doLogout({}).then((function(){localStorage.clear(),t.$common.navigateTo(t.$ph.login)})):t.$common.errorToShow(e.reason)})):this.$common.errorToShow("两次密码不一致")},checking:function(){var t=this;this.currentTime=this.totalTime,this.smsSend((function(e){1==e.code&&(t.state=!0,t.checkingTime())}))},checkingTime:function(){var t=this;this.state&&this.currentTime>0&&this.recordingTime<=this.totalTime?(this.recordingTime=this.recordingTime+1,this.currentTime=this.totalTime-this.recordingTime,setTimeout((function(){t.checkingTime()}),1e3)):(this.state=!1,this.recordingTime=0,this.currentTime=this.totalTime)},smsSend:function(t){var e=this;this.$api.smsSend({mobile:this.$store.state.vuex_user.mobile,event:"resetpwd"}).then((function(n){t(n),e.$common.errorToShow(n.reason)}))}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){t.log("1111")}};e.default=n}).call(this,n("5a52")["default"])},2508:function(t,e,n){"use strict";n.r(e);var a=n("14e9"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"302e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgClass,1==t.isGrayBg?"nav-bg-gray":"",1==t.isWhiteBg?"nav-bg-white":"",1==t.isGreenBg?"nav-bg-green":""],style:[t.navStyle]},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),n("v-uni-view",{staticClass:"left",style:[{top:t.StatusBar+"px"}]},[t._t("left")],2),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)],1)},o=[]},"5e43":function(t,e,n){"use strict";n.r(e);var a=n("7586"),i=n("2508");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0bff");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"3abf608c",null,!1,a["a"],s);e["default"]=c.exports},"6d61a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-3abf608c]{background-color:#f6f6f6;min-height:100vh}.page .box[data-v-3abf608c]{background-color:#fff}.page .box .name1[data-v-3abf608c]{display:flex;align-items:center;height:%?102?%;border-bottom:%?2?% solid #e6e6e6;padding:0 %?32?%}.page .box .name1 .first[data-v-3abf608c]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.page .box .name2[data-v-3abf608c]{display:flex;align-items:center;height:%?84?%;padding:0 %?32?%;border-bottom:%?2?% solid #e6e6e6}.page .box .name2 uni-view[data-v-3abf608c]:nth-child(1){width:%?180?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.page .box .name2 uni-input[data-v-3abf608c]{font-size:%?28?%;font-family:苹方-简;font-weight:400;color:#999}.page .box .name2 .btn1[data-v-3abf608c]{flex:1;flex-wrap:nowrap;color:#1fb31d;line-height:%?84?%;text-align:center;border-left:%?4?% solid #e6e6e6}.page .box .name[data-v-3abf608c]{padding:0 %?32?%;display:flex;align-items:center;height:%?84?%;border-bottom:%?2?% solid #e6e6e6}.page .box .name uni-view[data-v-3abf608c]:nth-child(1){width:%?180?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.page .box .name uni-input[data-v-3abf608c]{flex:1;font-size:%?28?%;font-family:苹方-简;font-weight:400;color:#999}.page .btn[data-v-3abf608c]{padding:0 %?28?%;width:100%;margin-top:%?50?%}.page .btn uni-view[data-v-3abf608c]{background-color:#f95959;opacity:1;border-radius:%?10?%;text-align:center;line-height:%?94?%;font-size:%?36?%;font-family:PingFang SC;font-weight:500;color:#fff}',""]),t.exports=e},7586:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={cuNavbar:n("bd90").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("cu-navbar",{attrs:{bgColor:"bg-gradual-red",isGrayBg:!0,isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("安全密码")])],2),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"name1"},[n("v-uni-view",{staticClass:"first"},[t._v("将向你的手机 "+t._s(this.$store.state.vuex_user.mobile)+" 发送验证码")])],1),n("v-uni-view",{staticClass:"name2"},[n("v-uni-view",[t._v("验证码")]),n("v-uni-input",{attrs:{type:"text",placeholder:"验证码"},model:{value:t.smCode,callback:function(e){t.smCode=e},expression:"smCode"}}),!1===t.state?n("v-uni-view",{staticClass:"btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checking.apply(void 0,arguments)}}},[t._v("获取验证码")]):t._e(),!0===t.state?n("v-uni-view",{staticClass:"btn1"},[t._v(t._s(t.currentTime)+"s")]):t._e()],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v("新密码")]),n("v-uni-input",{attrs:{type:"password",placeholder:"设置新密码"},model:{value:t.newPass,callback:function(e){t.newPass=e},expression:"newPass"}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v("确认新密码")]),n("v-uni-input",{attrs:{type:"password",placeholder:"确认新密码"},model:{value:t.newPassed,callback:function(e){t.newPassed=e},expression:"newPassed"}})],1)],1),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editPass.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("确认修改")])],1)],1)},o=[]},a540:function(t,e,n){"use strict";n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{StatusBar:0,CustomBar:0}},name:"cu-navbar",created:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},props:{bgClass:{type:String,default:"nav-bg-blue"},whitebgClass:{type:String,default:"bg-white"},bgColor:{type:String,default:""},color:{type:String,default:""},bgLinear:{type:Array,default:function(){return[]}},isBack:{type:[Boolean,String],default:!1},isGrayBg:{type:[Boolean,String],default:!1},isWhiteBg:{type:[Boolean,String],default:!1},isGreenBg:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},computed:{navStyle:function(){var t={height:"".concat(this.CustomBar,"px"),paddingTop:"".concat(this.StatusBar,"px")};this.bgImage&&(t.backgroundImage="url(".concat(this.bgImage,")"));var e=this.bgLinear.length;return e?3==e&&(t.backgroundImage="linear-gradient(".concat(this.bgLinear[0],"deg, ").concat(this.bgLinear[1],", ").concat(this.bgLinear[2],")")):this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),t}},methods:{backPage:function(){uni.navigateBack({delta:1})}}};e.default=a},a733:function(t,e,n){var a=n("6d61a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("19b83c38",a,!0,{sourceMap:!1,shadowMode:!1})},bd90:function(t,e,n){"use strict";n.r(e);var a=n("302e"),i=n("c29f");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"82439704",null,!1,a["a"],s);e["default"]=c.exports},c29f:function(t,e,n){"use strict";n.r(e);var a=n("a540"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}}]);