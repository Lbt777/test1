(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-addAddress"],{"1e32":function(t,e,n){"use strict";n.r(e);var a=n("c47e"),i=n("6512");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("6456");var r,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"29d10feb",null,!1,a["a"],r);e["default"]=c.exports},"302e":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgClass,1==t.isGrayBg?"nav-bg-gray":"",1==t.isWhiteBg?"nav-bg-white":"",1==t.isGreenBg?"nav-bg-green":""],style:[t.navStyle]},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),n("v-uni-view",{staticClass:"left",style:[{top:t.StatusBar+"px"}]},[t._t("left")],2),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)],1)},s=[]},"3bc5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{name:"",number:"",address:"",detailaddress:"",time:null,publicId:""}},onShow:function(){},onLoad:function(e){this.publicId=e.id,t.log(e.id)},methods:{changeTab:function(t){this.current=t},save:function(){var t=this;this.name&&this.number&&this.address&&this.detailaddress?this.$api.addaddress({consignee:this.name,address:this.address,mobile:this.number,detailaddress:this.detailaddress,isdefault:1}).then((function(e){1==e.code&&(t.$common.successToShow("保存成功"),t.time=setTimeout((function(){clearTimeout(t.time),uni.navigateBack()}),500))})):this.$common.errorToShow("请填写完整")},editAddress:function(){var t=this;this.$api.editaddress({address_id:this.publicId,consignee:this.name,address:this.address,mobile:this.number,detailaddress:this.detailaddress,isdefault:1}).then((function(e){1==e.code&&(t.$common.successToShow("修改成功"),t.time=setTimeout((function(){clearTimeout(t.time),uni.navigateBack()}),500))}))}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){t.log("1111")}};e.default=n}).call(this,n("5a52")["default"])},6456:function(t,e,n){"use strict";var a=n("a387"),i=n.n(a);i.a},6512:function(t,e,n){"use strict";n.r(e);var a=n("3bc5"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"8c8c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-29d10feb]{background-color:#f6f6f6;min-height:100vh}.page .box[data-v-29d10feb]{background-color:#fff;padding:0 %?32?%}.page .box .name[data-v-29d10feb]{display:flex;align-items:center;height:%?84?%;border-bottom:%?2?% solid #e6e6e6}.page .box .name uni-view[data-v-29d10feb]:nth-child(1){width:%?200?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#333}.page .box .name uni-input[data-v-29d10feb]{flex:1;font-size:%?28?%;font-family:苹方-简;font-weight:400;color:#999}.page .box .inp[data-v-29d10feb]{height:%?150?%;border:none}.page .box .inp .textarea[data-v-29d10feb]{height:%?100?%;margin-top:%?30?%;font-size:%?28?%;font-family:苹方-简;font-weight:400;color:#999}.page .btn[data-v-29d10feb]{padding:0 %?28?%;width:100%;margin-top:%?50?%}.page .btn uni-view[data-v-29d10feb]{background-color:#f95959;opacity:1;border-radius:%?10?%;text-align:center;line-height:%?94?%;font-size:%?36?%;font-family:PingFang SC;font-weight:500;color:#fff}',""]),t.exports=e},a387:function(t,e,n){var a=n("8c8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("33b74754",a,!0,{sourceMap:!1,shadowMode:!1})},a540:function(t,e,n){"use strict";n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{StatusBar:0,CustomBar:0}},name:"cu-navbar",created:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},props:{bgClass:{type:String,default:"nav-bg-blue"},whitebgClass:{type:String,default:"bg-white"},bgColor:{type:String,default:""},color:{type:String,default:""},bgLinear:{type:Array,default:function(){return[]}},isBack:{type:[Boolean,String],default:!1},isGrayBg:{type:[Boolean,String],default:!1},isWhiteBg:{type:[Boolean,String],default:!1},isGreenBg:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},computed:{navStyle:function(){var t={height:"".concat(this.CustomBar,"px"),paddingTop:"".concat(this.StatusBar,"px")};this.bgImage&&(t.backgroundImage="url(".concat(this.bgImage,")"));var e=this.bgLinear.length;return e?3==e&&(t.backgroundImage="linear-gradient(".concat(this.bgLinear[0],"deg, ").concat(this.bgLinear[1],", ").concat(this.bgLinear[2],")")):this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),t}},methods:{backPage:function(){uni.navigateBack({delta:1})}}};e.default=a},bd90:function(t,e,n){"use strict";n.r(e);var a=n("302e"),i=n("c29f");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var r,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"82439704",null,!1,a["a"],r);e["default"]=c.exports},c29f:function(t,e,n){"use strict";n.r(e);var a=n("a540"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},c47e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={cuNavbar:n("bd90").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("cu-navbar",{attrs:{bgColor:"bg-gradual-red",isGrayBg:!0,isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("添加地址")])],2),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v("收获人")]),n("v-uni-input",{attrs:{type:"text",placeholder:"收货人"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v("手机号")]),n("v-uni-input",{attrs:{type:"text",placeholder:"联系电话"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-view",[t._v("所在地区")]),n("v-uni-input",{attrs:{type:"text",placeholder:"所在地区"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("v-uni-view",{staticClass:"name inp"},[n("v-uni-view",[t._v("详细地址")]),n("v-uni-textarea",{staticClass:"textarea",attrs:{placeholder:"详细街道门牌号"},model:{value:t.detailaddress,callback:function(e){t.detailaddress=e},expression:"detailaddress"}})],1)],1),t.publicId?t._e():n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("保存此地址")])],1),t.publicId?n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddress.apply(void 0,arguments)}}},[n("v-uni-view",[t._v("确认修改")])],1):t._e()],1)},s=[]}}]);