(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customer-tixian_mingxi"],{"029d":function(t,i,e){"use strict";e.r(i);var n=e("8ebe"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},"19a0":function(t,i,e){"use strict";e.r(i);var n=e("26a0"),a=e("f629");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("4a9e");var r,o=e("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2f94bbd8",null,!1,n["a"],r);i["default"]=u.exports},"1eca":function(t,i,e){var n=e("bd45");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("6892c01c",n,!0,{sourceMap:!1,shadowMode:!1})},"26a0":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var n={cuNavbar:e("bd90").default,uLine:e("cdf7").default,uTabs:e("db55").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page"},[e("cu-navbar",{attrs:{bgColor:"bg-gradual-red",isGrayBg:!0,isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("提现明细")])],2),e("u-line",{staticClass:"u-line",attrs:{color:"#E6E6E6"}}),e("u-tabs",{attrs:{list:t.tabList,"active-color":"#FF2E26","bg-color":"transparent","is-scroll":!1,current:t.current},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.changeTab.apply(void 0,arguments)}}}),e("u-line",{staticClass:"u-line",attrs:{color:"#E6E6E6"}}),0==t.current?e("v-uni-view",{staticClass:"container"},t._l(t.tixianList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"mingxiList"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",[t._v("提至 "+t._s(i.bank_name)),1==i.status?e("v-uni-text",[t._v("提现成功")]):0==i.status?e("v-uni-text",{staticStyle:{color:"red"}},[t._v("待转帐")]):e("v-uni-text",{staticStyle:{color:"red"}},[t._v("失败")])],1),e("v-uni-view",[t._v(t._s(i.money))])],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",[t._v(t._s(i.creattime))]),e("v-uni-view",[t._v("手续费："+t._s(i.fee))])],1)],1)})),1):t._e(),1==t.current?e("v-uni-view",{staticClass:"container"},t._l(t.tixianList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"mingxiList"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",[t._v("提至 "+t._s(i.bank_name)),1==i.status?e("v-uni-text",[t._v("提现成功")]):0==i.status?e("v-uni-text",{staticStyle:{color:"red"}},[t._v("待转帐")]):e("v-uni-text",{staticStyle:{color:"red"}},[t._v("失败")])],1),e("v-uni-view",[t._v(t._s(i.money))])],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",[t._v(t._s(i.creattime))]),e("v-uni-view",[t._v("手续费："+t._s(i.fee))])],1)],1)})),1):t._e(),2==t.current?e("v-uni-view",{staticClass:"container"},t._l(t.tixianList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"mingxiList"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",[t._v("提至 "+t._s(i.bank_name)),1==i.status?e("v-uni-text",[t._v("提现成功")]):0==i.status?e("v-uni-text",{staticStyle:{color:"red"}},[t._v("待转帐")]):e("v-uni-text",{staticStyle:{color:"red"}},[t._v("失败")])],1),e("v-uni-view",[t._v(t._s(i.money))])],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",[t._v(t._s(i.creattime))]),e("v-uni-view",[t._v("手续费："+t._s(i.fee))])],1)],1)})),1):t._e(),3==t.current?e("v-uni-view",{staticClass:"container"},t._l(t.tixianList,(function(i,n){return e("v-uni-view",{key:n,staticClass:"mingxiList"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",[t._v("提至 "+t._s(i.bank_name)),1==i.status?e("v-uni-text",[t._v("提现成功")]):0==i.status?e("v-uni-text",{staticStyle:{color:"red"}},[t._v("待转帐")]):e("v-uni-text",{staticStyle:{color:"red"}},[t._v("失败")])],1),e("v-uni-view",[t._v(t._s(i.money))])],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",[t._v(t._s(i.creattime))]),e("v-uni-view",[t._v("手续费："+t._s(i.fee))])],1)],1)})),1):t._e(),e("v-uni-view",{staticStyle:{height:"100upx"}}),e("foot-bar",{attrs:{pageIndex:3}})],1)},s=[]},"349d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-line[data-v-c7c48cc8]{vertical-align:middle}',""]),t.exports=i},"4a9e":function(t,i,e){"use strict";var n=e("1eca"),a=e.n(n);a.a},"8b74":function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("2909")),s=n(e("906a")),r={components:{footBar:s.default},data:function(){return{current:0,tabList:[{name:"全部"},{name:"待转账"},{name:"已打款"},{name:"失败"}],tixianList:[],page:1,page1:1,page2:1,page3:1,pagesize:10}},onShow:function(){},onLoad:function(){var t=this;this.$api.tixianlist({page:this.page,pagesize:this.pagesize}).then((function(i){i.result.items.length||t.$common.errorToShow("暂无信息"),t.tixianList=i.result.items}))},methods:{changeTab:function(t){var i=this;this.current=t,0==this.current?this.$api.tixianlist({page:this.page,pagesize:this.pagesize}).then((function(t){t.result.items.length||i.$common.errorToShow("暂无信息"),i.tixianList=t.result.items})):1==this.current?this.$api.tixianlist({status:0,page:this.page1,pagesize:this.pagesize}).then((function(t){t.result.items.length||i.$common.errorToShow("暂无信息"),i.tixianList=t.result.items})):2==this.current?this.$api.tixianlist({status:1,page:this.page2,pagesize:this.pagesize}).then((function(t){t.result.items.length||i.$common.errorToShow("暂无信息"),i.tixianList=t.result.items})):this.$api.tixianlist({status:2,page:this.page3,pagesize:this.pagesize}).then((function(t){t.result.items.length||i.$common.errorToShow("暂无信息"),i.tixianList=t.result.items}))}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){var i=this;t.log("1111"),0==this.current?(this.page++,this.$api.tixianlist({page:this.page,pagesize:this.pagesize}).then((function(t){if(!t.result.items.length)return i.$common.errorToShow("你太贪心了哦"),void i.page--;i.tixianList=[].concat((0,a.default)(i.tixianList),(0,a.default)(t.result.items))}))):1==this.current?(this.page1++,this.$api.tixianlist({status:0,page:this.page1,pagesize:this.pagesize}).then((function(t){if(!t.result.items.length)return i.$common.errorToShow("你太贪心了哦"),void i.page1--;i.tixianList=[].concat((0,a.default)(i.tixianList),(0,a.default)(t.result.items))}))):2==this.current?(this.page2++,this.$api.tixianlist({status:1,page:this.page2,pagesize:this.pagesize}).then((function(t){if(!t.result.items.length)return i.$common.errorToShow("你太贪心了哦"),void i.page2--;i.tixianList=[].concat((0,a.default)(i.tixianList),(0,a.default)(t.result.items))}))):(this.page3++,this.$api.tixianlist({status:2,page:this.page3,pagesize:this.pagesize}).then((function(t){if(!t.result.items.length)return i.$common.errorToShow("你太贪心了哦"),void i.page3--;i.tixianList=[].concat((0,a.default)(i.tixianList),(0,a.default)(t.result.items))})))}};i.default=r}).call(this,e("5a52")["default"])},"8d17":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-line",style:[t.lineStyle]})},s=[]},"8ebe":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-line",props:{color:{type:String,default:"#e4e7ed"},length:{type:String,default:"100%"},direction:{type:String,default:"row"},hairLine:{type:Boolean,default:!0},margin:{type:String,default:"0"},borderStyle:{type:String,default:"solid"}},computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"==this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.borderStyle,t.width=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.borderStyle,t.height=this.$u.addUnit(this.length),this.hairLine&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,t}}};i.default=n},bd45:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-2f94bbd8]{background-color:#fff;min-height:100vh}.page .container[data-v-2f94bbd8]{padding:0 %?20?%}.page .container .mingxiList[data-v-2f94bbd8]{width:100%;height:%?146?%;border-top:%?2?% solid #e6e6e6;display:flex;flex-direction:column;justify-content:space-around}.page .container .mingxiList .top[data-v-2f94bbd8]{display:flex;justify-content:space-between;align-items:center;font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#333}.page .container .mingxiList .top uni-view[data-v-2f94bbd8]:nth-child(1){font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#333}.page .container .mingxiList .top uni-view:nth-child(1) uni-text[data-v-2f94bbd8]{color:#1fb31d;margin-left:%?20?%}.page .container .mingxiList .bottom[data-v-2f94bbd8]{display:flex;justify-content:space-between;align-items:center;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#999}',""]),t.exports=i},bd7c:function(t,i,e){var n=e("349d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1fa49967",n,!0,{sourceMap:!1,shadowMode:!1})},bdb9:function(t,i,e){"use strict";var n=e("bd7c"),a=e.n(n);a.a},cdf7:function(t,i,e){"use strict";e.r(i);var n=e("8d17"),a=e("029d");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("bdb9");var r,o=e("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"c7c48cc8",null,!1,n["a"],r);i["default"]=u.exports},f629:function(t,i,e){"use strict";e.r(i);var n=e("8b74"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a}}]);