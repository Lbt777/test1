(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"009e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[n("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"u-swiper-item"},[n("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=i?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=i?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=i?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(i)}}},[n("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?n("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":i==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":i==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":i==t.uCurrent}})})):t._e(),"number"==t.mode?[n("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},o=[]},"0b9e":function(t,e,n){t.exports=n.p+"static/img/dkf.243820ea.png"},"302e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-custom",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar fixed",class:[""!=t.bgImage?"none-bg text-white bg-img":"",t.bgClass,1==t.isGrayBg?"nav-bg-gray":"",1==t.isWhiteBg?"nav-bg-white":"",1==t.isGreenBg?"nav-bg-green":""],style:[t.navStyle]},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),n("v-uni-view",{staticClass:"left",style:[{top:t.StatusBar+"px"}]},[t._t("left")],2),n("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._t("content")],2),t._t("right")],2)],1)],1)},o=[]},3030:function(t,e,n){"use strict";var i=n("4ea4");n("26e9"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("906a")),o={components:{footBar:a.default},computed:{swiperList:function(){return this.vuex_config.shuffling_content||[]},menu_list:function(){if(!this.vuex_config.menu_group)return[];var t=this.vuex_config.menu_group.home_menus;if(t.length<=8)return[t];for(var e=[],n=[],i=0,a=t.length;i<a;i++)n.push(t[i]),(i+1)%8==0&&(e.push(n),n=[]);return e}},data:function(){return{painterInfoList:[],paintingMall:[{url:n("4f48"),name:"意境画室",path:"/pages/index/yjhs"},{url:n("86ff"),name:"体验区",path:"/pages/index/tiyanqu"},{url:n("0b9e"),name:"预约",path:"/pages/index/yuyue"}],orderList:[{url:n("888e"),name:"等待付款",path:"/pages/building/building?current=1"},{url:n("73db"),name:"收款确认",path:"/pages/building/building?current=2"},{url:n("727e"),name:"委托代卖",path:"/pages/building/building?current=3"}],list:[],scrollTop:0,gridBorder:!1,gridCol:4,dotStyle:!1,article:[],videoList:[],mid_img:"",bot_img:""}},onShow:function(){},onLoad:function(){var t=this;uni.setNavigationBarTitle({title:this.$store.state.vuex_user.shopname}),this.paintingMall[0].name=this.$store.state.vuex_user.shopname,this.$api.bannerList({shop_id:this.$store.state.vuex_user.shop_id}).then((function(e){return t.list=e.result})),this.$api.indexinfo().then((function(e){t.painterInfoList=e.result.painters.reverse(),t.mid_img=e.result.mid_img,t.bot_img=e.result.bot_img}))},methods:{jumpPage:function(t){uni.navigateTo({url:t}),t||this.$common.errorToShow("暂未开放")},toHjDetail:function(t){uni.navigateTo({url:"/pages/index/jianjie?id=".concat(t)})}},onPageScroll:function(t){this.scrollTop=t.scrollTop}};e.default=o},"34e8":function(t,e,n){"use strict";n("c975"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=i},4846:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-back-top animation-reverse",class:t.animationSlide,style:[{bottom:t.bottom+"rpx",right:t.right+"rpx",borderRadius:"circle"==t.pattern?"99999rpx":"8rpx",zIndex:t.zIndex,fontSize:t.textSize+"rpx"},t.customStyle]},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backToTop.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-top"})],1),n("v-uni-view",{})],1)},o=[]},"4f48":function(t,e,n){t.exports=n.p+"static/img/yjhs.4ba5a563.png"},6021:function(t,e,n){var i=n("b58b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("03f87f38",i,!0,{sourceMap:!1,shadowMode:!1})},"6d2d":function(t,e,n){var i=n("7357");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5211f75e",i,!0,{sourceMap:!1,shadowMode:!1})},"718b":function(t,e,n){"use strict";n.r(e);var i=n("34e8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"727e":function(t,e,n){t.exports=n.p+"static/img/wtdm.fcc19e86.png"},7357:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-swiper-wrap[data-v-b5a02ffc]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-b5a02ffc]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-b5a02ffc]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.u-indicator-item-rect[data-v-b5a02ffc]{width:%?26?%;height:%?8?%;margin:0 %?6?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-b5a02ffc]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-b5a02ffc]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-b5a02ffc]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-b5a02ffc]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-b5a02ffc]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-b5a02ffc]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-b5a02ffc]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-b5a02ffc]{display:flex;flex-direction:row;overflow:hidden;align-items:center}',""]),t.exports=e},"73db":function(t,e,n){t.exports=n.p+"static/img/skqr.7e96b5d9.png"},8439:function(t,e,n){"use strict";n.r(e);var i=n("4846"),a=n("b96f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("df85");var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"32ca430a",null,!1,i["a"],r);e["default"]=d.exports},"86ff":function(t,e,n){t.exports=n.p+"static/img/tyq.c2ae731b.png"},"888e":function(t,e,n){t.exports=n.p+"static/img/ddfk.345cfab6.png"},9258:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cu-back-top",props:{pattern:{type:String,default:"circle"},textSize:{type:[Number,String],default:35},duration:{type:[Number,String],default:100},scrollTop:{type:[Number,String],default:0},top:{type:[Number,String],default:400},bottom:{type:[Number,String],default:200},right:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:"999"},customStyle:{type:Object,default:function(){return{}}}},watch:{scrollTop:function(t,e){t>uni.upx2px(this.top)?this.animationSlide="top-show":""!=this.animationSlide&&(this.animationSlide="top-hidden")}},data:function(){return{animationSlide:""}},methods:{backToTop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration})}}};e.default=i},"9ca1":function(t,e,n){var i=n("ef7a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("001b6680",i,!0,{sourceMap:!1,shadowMode:!1})},a540:function(t,e,n){"use strict";n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{StatusBar:0,CustomBar:0}},name:"cu-navbar",created:function(){var t=this;uni.getSystemInfo({success:function(e){t.StatusBar=e.statusBarHeight,"android"==e.platform?t.CustomBar=e.statusBarHeight+50:t.CustomBar=e.statusBarHeight+45}})},props:{bgClass:{type:String,default:"nav-bg-blue"},whitebgClass:{type:String,default:"bg-white"},bgColor:{type:String,default:""},color:{type:String,default:""},bgLinear:{type:Array,default:function(){return[]}},isBack:{type:[Boolean,String],default:!1},isGrayBg:{type:[Boolean,String],default:!1},isWhiteBg:{type:[Boolean,String],default:!1},isGreenBg:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},computed:{navStyle:function(){var t={height:"".concat(this.CustomBar,"px"),paddingTop:"".concat(this.StatusBar,"px")};this.bgImage&&(t.backgroundImage="url(".concat(this.bgImage,")"));var e=this.bgLinear.length;return e?3==e&&(t.backgroundImage="linear-gradient(".concat(this.bgLinear[0],"deg, ").concat(this.bgLinear[1],", ").concat(this.bgLinear[2],")")):this.bgColor&&(t.backgroundColor=this.bgColor),this.color&&(t.color=this.color),t}},methods:{backPage:function(){uni.navigateBack({delta:1})}}};e.default=i},b21c:function(t,e,n){"use strict";var i=n("6021"),a=n.n(i);a.a},b58b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-1b988f8a]{padding:0 15px;height:calc(100vh - %?0?%);background:url(/static/mainbg2.png) no-repeat;background-size:100%}.page .stateHeight[data-v-1b988f8a]{height:var(–status-bar-height)}.bg-gradual-red[data-v-1b988f8a]{background-image:none}.bg-gradual-red[data-v-1b988f8a] .cu-bar{background:transparent!important}.bg-gradual-red[data-v-1b988f8a] .content{font-size:17px;font-weight:500;line-height:44px;position:absolute;display:block;width:100%;margin:0 -10px;padding:0;text-align:center;white-space:nowrap;color:#000}.container[data-v-1b988f8a]{height:calc(100vh - %?210?%);padding-bottom:%?30?%;overflow-y:scroll}.container[data-v-1b988f8a] uni-swiper{border-radius:10px;overflow:hidden}.container .horn[data-v-1b988f8a]{width:%?29?%;height:%?22?%}.container .sceneryBG[data-v-1b988f8a]{width:100%;height:%?188?%;margin-top:10px;display:block}.container .sceneryBG2[data-v-1b988f8a]{width:100%;height:%?107.5?%;margin-top:%?28?%}.container .painterInfoList1[data-v-1b988f8a]{background:#fff;padding:10px;border:1px solid #e2e2e2;border-radius:10px\r\n  /* 隐藏下方的滚动条 */}.container .painterInfoList1 .boxss[data-v-1b988f8a]{font-family:微软雅黑;font-size:16px;color:#000;font-weight:700;display:inline-block;padding-bottom:10px}.container .painterInfoList1 .title[data-v-1b988f8a]{display:flex;align-items:center;justify-content:center;margin:%?8?% 0 %?18?%}.container .painterInfoList1 .title uni-image[data-v-1b988f8a]{width:%?26?%;height:%?38?%;margin-right:%?10?%;margin-top:%?10?%}.container .painterInfoList1 .title uni-text[data-v-1b988f8a]{font-size:%?32?%;color:#333}.container .painterInfoList1 .box[data-v-1b988f8a]{display:-webkit-box;overflow-x:scroll;-webkit-overflow-scrolling:touch}.container .painterInfoList1 .box .box_list[data-v-1b988f8a]{display:flex;flex-direction:column;align-items:center;width:33%}.container .painterInfoList1 .box .box_list .image[data-v-1b988f8a]{width:100%;height:%?240?%;margin-bottom:%?4?%}.container .painterInfoList1 .box .box_list uni-text[data-v-1b988f8a]{font-size:%?24?%;color:#333}.container .painterInfoList1 .box[data-v-1b988f8a]::-webkit-scrollbar{background-color:initial}.container .painterInfoList1 .box[data-v-1b988f8a]{-ms-overflow-style:none}.container .painterInfoList1 .box[data-v-1b988f8a]{overflow:-moz-scrollbars-none}.container .orderList[data-v-1b988f8a]{margin-top:20px}.container .orderList[data-v-1b988f8a],\r\n.container .paintingMall[data-v-1b988f8a],\r\n.container .painterInfoList[data-v-1b988f8a]{display:flex;flex-direction:column}.container .orderList .title[data-v-1b988f8a],\r\n.container .paintingMall .title[data-v-1b988f8a],\r\n.container .painterInfoList .title[data-v-1b988f8a]{display:flex;flex-direction:row;align-items:center;justify-content:center;margin:%?8?% 0 %?18?%}.container .orderList .title uni-image[data-v-1b988f8a],\r\n.container .paintingMall .title uni-image[data-v-1b988f8a],\r\n.container .painterInfoList .title uni-image[data-v-1b988f8a]{width:%?26?%;height:%?29?%;margin-right:%?8?%}.container .orderList .title uni-text[data-v-1b988f8a],\r\n.container .paintingMall .title uni-text[data-v-1b988f8a],\r\n.container .painterInfoList .title uni-text[data-v-1b988f8a]{font-size:%?32?%;color:#333}.container .orderList .boxs[data-v-1b988f8a],\r\n.container .paintingMall .boxs[data-v-1b988f8a],\r\n.container .painterInfoList .boxs[data-v-1b988f8a]{display:flex;flex-direction:row;align-items:center;justify-content:space-around}.container .orderList .boxs .box[data-v-1b988f8a],\r\n.container .paintingMall .boxs .box[data-v-1b988f8a],\r\n.container .painterInfoList .boxs .box[data-v-1b988f8a]{display:flex;flex-direction:column;align-items:center}.container .orderList .boxs .box uni-image[data-v-1b988f8a],\r\n.container .paintingMall .boxs .box uni-image[data-v-1b988f8a],\r\n.container .painterInfoList .boxs .box uni-image[data-v-1b988f8a]{width:%?96?%;height:%?96?%;margin-bottom:%?4?%}.container .orderList .boxs .box uni-text[data-v-1b988f8a],\r\n.container .paintingMall .boxs .box uni-text[data-v-1b988f8a],\r\n.container .painterInfoList .boxs .box uni-text[data-v-1b988f8a]{font-size:%?24?%;color:#454545}.container .paintingMall[data-v-1b988f8a]{margin-bottom:%?44?%;margin-top:20px}.container .paintingMall .title uni-image[data-v-1b988f8a]{width:%?28?%;height:%?28.5?%}.container .paintingMall .boxs .box uni-image[data-v-1b988f8a]{width:%?92?%;height:%?90?%}.container .painterInfoList .title uni-image[data-v-1b988f8a]{width:%?31.5?%;height:%?43?%;margin-right:%?6?%}.container .painterInfoList .boxs .box uni-image[data-v-1b988f8a]{width:%?202?%;height:%?150?%}.container .indexBG[data-v-1b988f8a]{width:100%;height:%?427?%}.container .topSwiper[data-v-1b988f8a]{margin-top:%?40?%}.swiperCenter .screen-swiper[data-v-1b988f8a]{min-height:%?120?%}.swiperCenter[data-v-1b988f8a]{height:%?160?%;min-height:%?160?%}.swiperCenter .cu-list.grid > .cu-item uni-text[data-v-1b988f8a]{margin-top:0}.swiperCenter .cu-list.grid.no-border[data-v-1b988f8a]{padding-top:%?4?%}.line[data-v-1b988f8a]{width:100%;height:%?2?%;background:#e6e6e6;margin:%?10?% 0}.jcsp .videoBigBox[data-v-1b988f8a]{display:flex;flex-direction:row;overflow-x:auto}.jcsp .videoBigBox .videoBox[data-v-1b988f8a]{width:%?280?%;min-width:%?280?%;height:%?220?%;background-color:#fff;box-shadow:%?0?% %?3?% %?7?% %?0?% rgba(0,0,0,.1);border-radius:%?20?%;padding-bottom:%?20?%}.jcsp .videoBigBox .videoBox uni-image[data-v-1b988f8a]{width:100%;height:%?140?%;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%}.jcsp .videoBigBox .videoBox .bottom[data-v-1b988f8a]{display:flex;flex-direction:column}.jcsp .videoBigBox .videoBox .bottom .name[data-v-1b988f8a]{font-size:%?20?%;color:#595959;margin-bottom:%?6?%}.jcsp .videoBigBox .videoBox .bottom .showBox[data-v-1b988f8a]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:%?24?%;color:#595959}.jcsp .videoBigBox .videoBox .bottom .showBox .bfl[data-v-1b988f8a]{display:flex;flex-direction:row}.jcsp .videoBigBox .videoBox .bottom .showBox .bfl .u-icon[data-v-1b988f8a]{margin-right:%?10?%}.zxdt[data-v-1b988f8a]{margin-bottom:%?36?%}.zxdt .title[data-v-1b988f8a]{margin-bottom:%?30?%}.zxdt .zxdtMKContent[data-v-1b988f8a]{display:flex;flex-direction:column}.zxdt .zxdtMKContent .box[data-v-1b988f8a]{margin-bottom:%?44?%}.zxdt .zxdtMKContent .box .top[data-v-1b988f8a]{display:flex;flex-direction:row;justify-content:space-between}.zxdt .zxdtMKContent .box .top uni-image[data-v-1b988f8a]{width:%?270?%;height:%?188?%;border-radius:%?20?%}.zxdt .zxdtMKContent .box .top .rightContent[data-v-1b988f8a]{width:calc(100% - %?292?%);display:flex;flex-direction:column;justify-content:space-between}.zxdt .zxdtMKContent .box .top .rightContent .name[data-v-1b988f8a]{font-size:%?28?%;font-weight:700;color:#595959;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.zxdt .zxdtMKContent .box .top .rightContent .description[data-v-1b988f8a]{font-size:%?24?%;font-weight:400;color:grey;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.zxdt .zxdtMKContent .box .top .rightContent .createtime[data-v-1b988f8a]{font-size:%?26?%;font-weight:700;color:grey}.oneMK .title[data-v-1b988f8a]{width:100%;display:flex;justify-content:space-between}.oneMK .title .big[data-v-1b988f8a]{font-size:%?36?%;font-weight:700;color:#262626}.oneMK .title .right[data-v-1b988f8a]{display:flex;flex-direction:row;align-items:center;color:grey;font-size:%?22?%}.oneMK .oneMKContent[data-v-1b988f8a]{display:flex;flex-direction:column;margin-top:%?20?%}.oneMK .oneMKContent .box[data-v-1b988f8a]{display:flex;flex-direction:column}.oneMK .oneMKContent .box .top[data-v-1b988f8a]{display:flex;flex-direction:row}.oneMK .oneMKContent .box .top uni-image[data-v-1b988f8a]{width:%?270?%;height:%?218?%;border-radius:%?20?%;margin-right:%?20?%}.oneMK .oneMKContent .box .top .rightContent[data-v-1b988f8a]{display:flex;flex-direction:column;width:calc(100% - %?290?%)}.oneMK .oneMKContent .box .top .rightContent .name[data-v-1b988f8a]{font-size:%?28?%;font-weight:500;color:#262626;margin-bottom:%?16?%;line-height:%?28?%}.oneMK .oneMKContent .box .top .rightContent .tt .area[data-v-1b988f8a]{background:#1b95ff;border-radius:%?10?%;color:#fff;padding:%?6?% %?14?%;font-size:%?20?%;font-weight:500;margin-right:%?18?%}.oneMK .oneMKContent .box .top .rightContent .tt .sx[data-v-1b988f8a]{font-size:%?24?%;font-weight:500;color:#b3b3b3}.oneMK .oneMKContent .box .top .rightContent .price[data-v-1b988f8a]{font-size:%?26?%;font-weight:500;color:#404040;margin:%?16?% 0 %?12?%}.oneMK .oneMKContent .box .top .rightContent .price uni-text[data-v-1b988f8a]{color:#ff5252}.oneMK .oneMKContent .box .top .rightContent .position[data-v-1b988f8a]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.oneMK .oneMKContent .box .top .rightContent .position uni-image[data-v-1b988f8a]{width:%?18?%;height:%?26?%;margin-top:%?4?%}.oneMK .oneMKContent .box .top .rightContent .position uni-text[data-v-1b988f8a]{font-size:%?24?%;font-weight:500;color:#595959}.oneMK .oneMKContent .box .top .rightContent .yj[data-v-1b988f8a]{display:flex;flex-direction:row;align-items:center;margin-top:%?8?%}.oneMK .oneMKContent .box .top .rightContent .yj .yong[data-v-1b988f8a]{width:%?35?%;height:%?35?%;background:#ff1d1d;border-radius:%?10?%;font-size:%?24?%;color:#fff;display:inline-block;text-align:center}.oneMK .oneMKContent .box .top .rightContent .yj .num[data-v-1b988f8a]{color:#ff1d1d;font-size:%?30?%;font-weight:700}.oneMK .oneMKContent .box .top .rightContent .bb[data-v-1b988f8a]{display:flex;flex-direction:column}.oneMK .oneMKContent .box .bottom[data-v-1b988f8a]{display:flex;flex-direction:row;justify-content:space-between;height:%?80?%;align-items:center}.oneMK .oneMKContent .box .bottom .left[data-v-1b988f8a]{display:flex;align-items:center}.oneMK .oneMKContent .box .bottom .left uni-text[data-v-1b988f8a]{font-size:%?24?%;font-weight:500;color:grey}.oneMK .oneMKContent .box .bottom .left uni-image.share[data-v-1b988f8a]{width:%?24?%;height:%?24?%;margin-right:%?22?%}.oneMK .oneMKContent .box .bottom .right[data-v-1b988f8a]{display:flex;align-items:center}.oneMK .oneMKContent .box .bottom .right uni-text[data-v-1b988f8a]{color:grey;font-size:%?20?%}.oneMK .oneMKContent .box .bottom .right .wgBox[data-v-1b988f8a]{display:flex;flex-direction:row;margin-left:%?16?%}.oneMK .oneMKContent .box .bottom .right .wgBox uni-image[data-v-1b988f8a]{width:%?38?%;height:%?38?%;border-radius:50%;margin-right:-6px}.list .item[data-v-1b988f8a]{display:flex;background:#fff}.item-image uni-image[data-v-1b988f8a]{width:%?200?%;height:%?180?%}.item-content[data-v-1b988f8a]{width:68%}.price[data-v-1b988f8a]{color:#e54d42}.list .item-title[data-v-1b988f8a]{position:relative}.list .item-title .tt[data-v-1b988f8a]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:80%}.list .item-title .bb[data-v-1b988f8a]{color:#e54d42;position:absolute;top:0;right:0}',""]),t.exports=e},b96f:function(t,e,n){"use strict";n.r(e);var i=n("9258"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},bd90:function(t,e,n){"use strict";n.r(e);var i=n("302e"),a=n("c29f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"82439704",null,!1,i["a"],r);e["default"]=d.exports},bfe5:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={cuNavbar:n("bd90").default,uSwiper:n("f3bd").default,cuBackTop:n("8439").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("cu-navbar",{staticClass:"bg-gradual-red",attrs:{isGrayBg:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$store.state.vuex_user.shopname))])],2),n("v-uni-view",{staticClass:"container"},[n("u-swiper",{attrs:{list:t.list,name:"imageurl",mode:"none",height:"356"}}),n("v-uni-view",{staticClass:"orderList"},[n("v-uni-view",{staticClass:"boxs"},t._l(t.orderList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jumpPage(e.path)}}},[n("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}),n("v-uni-text",[t._v(t._s(e.name))])],1)})),1)],1),n("v-uni-image",{staticClass:"sceneryBG",attrs:{src:t.mid_img,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"paintingMall"},[n("v-uni-view",{staticClass:"boxs"},t._l(t.paintingMall,(function(e,i){return n("v-uni-view",{key:i,staticClass:"box",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jumpPage(e.path)}}},[n("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}),n("v-uni-text",[t._v(t._s(e.name))])],1)})),1)],1),n("v-uni-view",{staticClass:"painterInfoList1"},[n("v-uni-text",{staticClass:"boxss"},[t._v("画家资料")]),n("v-uni-view",{staticClass:"box"},t._l(t.painterInfoList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"box_list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toHjDetail(e.publish_id)}}},[n("v-uni-image",{staticClass:"image",attrs:{src:e.pic,mode:"aspectFit"}}),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1)],1)],1),n("cu-back-top",{ref:"backtop",attrs:{scrollTop:t.scrollTop}}),n("foot-bar",{attrs:{pageIndex:1}})],1)},o=[]},c09d:function(t,e,n){"use strict";var i=n("6d2d"),a=n.n(i);a.a},c29f:function(t,e,n){"use strict";n.r(e);var i=n("a540"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c7be:function(t,e,n){"use strict";n.r(e);var i=n("3030"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},df85:function(t,e,n){"use strict";var i=n("9ca1"),a=n.n(i);a.a},e92c:function(t,e,n){"use strict";n.r(e);var i=n("bfe5"),a=n("c7be");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b21c");var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"1b988f8a",null,!1,i["a"],r);e["default"]=d.exports},ef7a:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cu-back-top[data-v-32ca430a]{width:%?80?%;height:%?80?%;position:fixed;display:flex;flex-direction:column;justify-content:center;background-color:#e54d42;color:#fff;align-items:center;opacity:0;box-shadow:%?0?% %?0?% %?3?% %?1?% rgba(26,26,26,.2)}.top-show[data-v-32ca430a]{opacity:1}.top-hidden[data-v-32ca430a]{opacity:0}',""]),t.exports=e},f3bd:function(t,e,n){"use strict";n.r(e);var i=n("009e"),a=n("718b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("c09d");var r,s=n("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"b5a02ffc",null,!1,i["a"],r);e["default"]=d.exports}}]);