(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shop_detail"],{"009e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=n?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=n?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=n?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(n)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":n==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":n==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":n==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},r=[]},"302e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgClass,1==t.isGrayBg?"nav-bg-gray":"",1==t.isWhiteBg?"nav-bg-white":"",1==t.isGreenBg?"nav-bg-green":""],style:[t.navStyle]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),i("v-uni-view",{staticClass:"left",style:[{top:t.StatusBar+"px"}]},[t._t("left")],2),i("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)],1)},r=[]},"34e8":function(t,e,i){"use strict";i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=n},"6d2d":function(t,e,i){var n=i("7357");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5211f75e",n,!0,{sourceMap:!1,shadowMode:!1})},"6d89":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA61JREFUeNrsmztoFEEYx/dWY4xBicQHWggRjEW0CAq5VIKFiBoVIYXebQg2VjaSi0i00cYYrSwsRDR3SfCBig9E8FXYmhgCiij4ImohiI9oYu4u53+4ORyHvezsY9bJ3XzwJzO3s4/f7Pd9M7O7ieRyOaNczTTK2DS8hi9Dm+3UoHVHi4zzHoUOQNW0/hHqgi4EfaIrN255h5dgScjiflsOnYcWQz2l6va9HPhzaJSpn4ASpQhP7ngbUx+AGqB6aIjrgM5Sgk9xd5zUY7Q8DjVBg8z27jA6wAzJ1eNMvY/zAGIZqBl6ynVAx0yG7+VA+22SXcHSUJTrgB6ZHmBKdvU27o7HHfaZDDMEZMEnbVzdEty34AFDskPAlOTqFpfVLZfHKOSAYS4EEirDp2xiPObxWIUQkDYMmhJdPSUQ4146oDsoDzAluXq/zXDm1TI0BwxzHtChArzdzC0ecDilqQcEOgyaAcS4xWX1mCHHioVA5/+A9zOc+fGAaFAzQTOgGB8IAdxpJpgIA77PZuYWM8I1u5kgSYIHZcInOdBUiHdcZCZ43I0HmD5cPcjhzM8w2GwzDCaChE/azNzihhrmeSYoAn/M5kGEKuBOq8HtfuEPK+bqTiHAesDpoGL+iYJ33C4JrqN/ia0ICr4WWg1VQgsUBCfvAKqgjVAkqIRXeI1bB72A3kFvqSfUKwBdA92k1/UeemD8fR8x6Be+nasvhRZS92pXAH4T1EI9cxG3ba9feDLM7YZGoCy37YMC8I+5cX4Kekiz/8h0O4q+rrpItQw6C22lv/92cZGHoA30nFNF2syCJqDLdFIlYp+gRmgVVAF9N/59C+Qbnj3RqIeESWBaXZxnC3XhUy72eRXGwqbaZfv1LsELdhKaLzNewnhLW8eUSWwemaYtGULPQXOZ5PpjJsOPM2UyRN52aH+Ggc+66OAx6HNYT3IMCSFTy12TyKdi26DX0BtorcrwMsxiOnZnucF/LRJiZQHPzhmy5Qbv2TS8htfwri2rAEM2TPg5TDmtGHyFbHh2rh0VaD/pA0xkydzElH/Khr/DlPdBuxzapyXCd3Hwj2QvbK5BL4388zvSeVehZ9AXG7cj4EuYepXAzZjH1O9Dv+hDDtbIY2ryve5K5rfrRv5zVumrus1G/vl4Da03CO6Xcdj+jXZYJa03Ch6XdP6esLI9WUGtgS65iOm70H6B/EAWJ/cEV3RjdAlMOmnCLURE/4ORhtfwGl7Da3gNr+E1fInZHwEGAP3D0pTWwXMbAAAAAElFTkSuQmCC"},"718b":function(t,e,i){"use strict";i.r(e);var n=i("34e8"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},7357:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{display:flex;flex-direction:row;overflow:hidden;align-items:center}',""]),t.exports=e},"98ce":function(t,e,i){"use strict";i.r(e);var n=i("ad91"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},a540:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{StatusBar:0,CustomBar:0}},name:"cu-navbar",created:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},props:{bgClass:{type:String,default:"nav-bg-blue"},whitebgClass:{type:String,default:"bg-white"},bgColor:{type:String,default:""},color:{type:String,default:""},bgLinear:{type:Array,default:function(){return[]}},isBack:{type:[Boolean,String],default:!1},isGrayBg:{type:[Boolean,String],default:!1},isWhiteBg:{type:[Boolean,String],default:!1},isGreenBg:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},computed:{navStyle:function(){var t={height:"".concat(this.CustomBar,"px"),paddingTop:"".concat(this.StatusBar,"px")};this.bgImage&&(t.backgroundImage="url(".concat(this.bgImage,")"));var e=this.bgLinear.length;return e?3==e&&(t.backgroundImage="linear-gradient(".concat(this.bgLinear[0],"deg, ").concat(this.bgLinear[1],", ").concat(this.bgLinear[2],")")):this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),t}},methods:{backPage:function(){uni.navigateBack({delta:1})}}};e.default=n},ad91:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},computed:{},data:function(){return{dataList:{},show:!1,product_sn:"",isShop:!0}},onShow:function(){},onLoad:function(t){var e=this;this.product_sn=t.id,this.$api.productDetails({product_sn:t.id}).then((function(t){e.dataList=t.result}))},methods:{toshouye:function(){this.$common.redirectTo(this.$ph.index)},submit:function(){var e=this;this.isShop=!1,this.$api.useraddress({}).then((function(i){e.isShop=!0,Boolean(i.result)?e.$api.orderadd({product_sn:e.product_sn}).then((function(i){t.log(i),e.$common.successToShow(i.reason),setTimeout((function(){uni.navigateBack({delta:1})}),500)})):e.show=!0}))},ok:function(){this.$common.navigateTo(this.$ph.address),this.show=!1}}};e.default=i}).call(this,i("5a52")["default"])},b305:function(t,e,i){"use strict";var n=i("ead3"),a=i.n(n);a.a},bc07:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={cuNavbar:i("bd90").default,uSwiper:i("f3bd").default,uPopup:i("d96c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("cu-navbar",{attrs:{bgColor:"bg-gradual-red",isGrayBg:!0,isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v("商品详情")])],2),n("v-uni-view",{staticClass:"wrap"},[n("u-swiper",{attrs:{list:t.dataList.images,mode:"number",height:"424"}}),n("v-uni-view",{staticClass:"detail"},[n("v-uni-view",[t._v(t._s(t.dataList.name)+" "+t._s(t.dataList.brand))]),n("v-uni-view",[n("v-uni-text",[t._v("藏品编号：")]),t._v(t._s(t.dataList.spec))],1),n("v-uni-view",[t._v("此藏品所有人："+t._s(t.dataList.belonguser))]),n("v-uni-view",[t._v("此藏所有人出售价："),n("v-uni-text",[t._v("￥"+t._s(t.dataList.price))]),t._v("元")],1),0==t.dataList.express_fee?n("v-uni-view",[t._v("快递：包邮")]):n("v-uni-view",[t._v("快递："+t._s(t.dataList.express_fee)+"元")])],1),n("v-uni-view",{staticClass:"shop_detail_bottom"},[n("v-uni-view",{staticClass:"header"},[t._v("商品详情")]),n("v-uni-view",{staticClass:"detail_content"})],1)],1),t.dataList.stock<=0?n("v-uni-view",{staticClass:"buy_btn_zhezhao"},[t._v("该藏品已经被抢光啦！")]):t._e(),n("v-uni-view",{staticClass:"buy_btn"},[n("v-uni-view",[n("v-uni-image",{attrs:{src:i("6d89"),mode:""}}),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toshouye.apply(void 0,arguments)}}},[t._v("首页")])],1),t.isShop?n("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("立即抢购")]):n("v-uni-view",{staticClass:"buy"},[t._v("购买中...")])],1),n("u-popup",{attrs:{mode:"center"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-uni-view",{staticClass:"box_popup"},[n("v-uni-view",[t._v("提示")]),n("v-uni-view",[t._v("您还没有填写收货地址")]),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[t._v("再看看")]),n("v-uni-view",{staticClass:"ok",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ok.apply(void 0,arguments)}}},[t._v("去填写")])],1)],1)],1)],1)},r=[]},bd90:function(t,e,i){"use strict";i.r(e);var n=i("302e"),a=i("c29f");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"82439704",null,!1,n["a"],o);e["default"]=u.exports},c09d:function(t,e,i){"use strict";var n=i("6d2d"),a=i.n(n);a.a},c29f:function(t,e,i){"use strict";i.r(e);var n=i("a540"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},dfaf:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-11f7ed28]{height:calc(100vh - %?0?%);background:#f6f6f6;position:relative}.page .box_popup[data-v-11f7ed28]{width:%?662?%;text-align:center}.page .box_popup uni-view[data-v-11f7ed28]:nth-child(1){margin-top:%?32?%;color:#333;font-size:%?32?%;font-family:PingFang SC;font-weight:500}.page .box_popup uni-view[data-v-11f7ed28]:nth-child(2){margin-top:%?38?%;color:#999;font-size:%?28?%;font-family:PingFang SC;font-weight:500}.page .box_popup .btn[data-v-11f7ed28]{display:flex;margin-top:%?58?%}.page .box_popup .btn uni-view[data-v-11f7ed28]{width:50%;border-top:%?2?% solid #e6e6e6;opacity:1;text-align:center;line-height:%?100?%}.page .box_popup .btn .cancel[data-v-11f7ed28]{border-right:%?2?% solid #e6e6e6;color:#999;font-size:%?36?%;font-family:PingFang SC;font-weight:500}.page .box_popup .btn .ok[data-v-11f7ed28]{color:#1fb31d;margin-top:%?32?%;font-size:%?36?%;font-family:PingFang SC;font-weight:500}.page .wrap .detail[data-v-11f7ed28]{background-color:#fff;padding:%?20?% %?32?%;height:%?328?%;display:flex;flex-direction:column;justify-content:space-around}.page .wrap .detail uni-view[data-v-11f7ed28]:nth-child(1){color:#333;font-size:%?36?%;font-family:PingFang SC;font-weight:500}.page .wrap .detail uni-view[data-v-11f7ed28]:nth-child(2){font-weight:600}.page .wrap .detail uni-view:nth-child(2) uni-text[data-v-11f7ed28]{font-weight:400}.page .wrap .detail uni-view[data-v-11f7ed28]:nth-child(4){color:red;font-size:%?24?%;font-family:苹方-简;font-weight:400}.page .wrap .detail uni-view:nth-child(4) uni-text[data-v-11f7ed28]{font-weight:600}.page .wrap .shop_detail_bottom[data-v-11f7ed28]{margin-top:%?20?%}.page .wrap .shop_detail_bottom .header[data-v-11f7ed28]{background-color:#fff;color:#333;padding:%?40?% %?20?%;font-size:%?32?%;font-family:PingFang SC;font-weight:500}.page .wrap .shop_detail_bottom .detail_content[data-v-11f7ed28]{background-color:#fff;margin-top:%?4?%;height:%?200?%}.page .buy_btn_zhezhao[data-v-11f7ed28]{color:#fff;background:rgba(0,0,0,.6);line-height:%?104?%;width:100%;font-size:%?32?%;font-family:PingFang SC;font-weight:500;text-align:center;position:fixed;bottom:0;z-index:99}.page .buy_btn[data-v-11f7ed28]{display:flex;background-color:#fff;height:%?104?%;position:fixed;bottom:0;width:100%}.page .buy_btn uni-view[data-v-11f7ed28]:nth-child(1){width:50%;color:#999;margin-left:%?56?%}.page .buy_btn uni-view:nth-child(1) uni-image[data-v-11f7ed28]{width:%?54?%;height:%?54?%}.page .buy_btn .buy[data-v-11f7ed28]{width:50%;background-color:#d11a1a;color:#fff;line-height:%?104?%;font-size:%?32?%;font-family:PingFang SC;font-weight:500;text-align:center}',""]),t.exports=e},dfe2:function(t,e,i){"use strict";i.r(e);var n=i("bc07"),a=i("98ce");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b305");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"11f7ed28",null,!1,n["a"],o);e["default"]=u.exports},ead3:function(t,e,i){var n=i("dfaf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("cdb9ecf2",n,!0,{sourceMap:!1,shadowMode:!1})},f3bd:function(t,e,i){"use strict";i.r(e);var n=i("009e"),a=i("718b");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c09d");var o,s=i("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"b5a02ffc",null,!1,n["a"],o);e["default"]=u.exports}}]);