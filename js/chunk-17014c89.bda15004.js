(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17014c89"],{"1cce":function(t,e){var n=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"BuyNF",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Reward",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"amountU",type:"uint256"}],name:"SellNF",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_pair",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"addAutomatedMarketMakerPairs",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"automatedMarketMakerPairs",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"buy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountThisOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],name:"getAmountUsdtOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketingAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pairTempAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"sell",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_marketingAddress",type:"address"},{internalType:"address",name:"_rewardAddress",type:"address"}],name:"setConfAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"},{internalType:"bool",name:"_value",type:"bool"}],name:"setWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdtAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}];t.exports={Nererfall:n}},"1ebe":function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-view"},[e("div",{staticClass:"group-one-wrap"},[e("div",{staticClass:"group-one-box"},[e("div",{staticClass:"one-box1"},[e("div",{staticClass:"text1"},[t._v("总竞拍众筹算力")]),e("div",{staticClass:"text2"},[t._v(t._s(t.crowFundingData.totalPower||0))])]),e("div",{staticClass:"one-box2"},[e("div",{staticClass:"text1"},[t._v("我的竞拍众筹算力")]),e("div",{staticClass:"text2"},[t._v(t._s(t.crowFundingData.power||0))]),e("div",{staticClass:"text3 flex-item-center van-hairline--surround",on:{click:t.navCrowdFundingList}},[e("span",{staticClass:"text4"},[t._v("参与记录")]),e("img",{staticClass:"icon1",attrs:{src:n("d93e"),alt:""}})])])])]),e("div",{staticClass:"group-three-wrap"},[e("div",{staticClass:"group-three-box",staticStyle:{height:"auto"}},[e("div",{staticClass:"three-box1 base-flex-between"},[e("div",{staticClass:"three-inner1"},[e("span",{staticClass:"text1"},[t._v("待释放众筹奖励")]),e("span",{staticClass:"text2"},[t._v(t._s(t.crowFundingData.lockedReward||0))]),e("span",{staticClass:"text3"},[t._v("个leader")])]),e("div")]),e("div",{staticClass:"three-box1 base-flex-between"},[e("div",{staticClass:"three-inner1"},[e("span",{staticClass:"text1"},[t._v("可领取众筹奖励")]),e("span",{staticClass:"text2"},[t._v(t._s(t.crowFundingData.unLockReward||0))]),e("span",{staticClass:"text3"},[t._v("个leader")])]),e("van-button",{staticClass:"bts",attrs:{type:"primary",round:"",size:"small",color:"#1F75D9"},on:{click:t.claimcrowdFunding}},[t._v("领取")])],1)])]),t._m(0),e("div",{staticClass:"group-five-wrap"},[e("div",{staticClass:"group-five-box"},[e("div",{staticClass:"five-box1 flex-center"},[e("img",{staticClass:"left-inner1",attrs:{src:n("95a4"),alt:""}}),e("div",{staticClass:"right-inner1"},[e("div",{staticClass:"flex-center box1"},[e("span",{staticClass:"text1"},[t._v("本轮目标")]),e("span",{staticClass:"text2"},[t._v(t._s(t.dataOneInfo[2]||0)+"个")])]),e("div",{staticClass:"flex-center box1"},[e("span",{staticClass:"text1"},[t._v("已经达成")]),e("span",{staticClass:"text2"},[t._v(t._s(t.dataOneInfo[4]||0)+"个")])]),e("div",{staticClass:"flex-center box1"},[e("span",{staticClass:"text1"},[t._v("本期参与")]),e("span",{staticClass:"text2"},[t._v(t._s(t.dataOneInfo[5]||0)+"个")])]),t._m(1),e("div",{staticClass:"box2"},[t._v("结束倒计时")]),e("div",{staticClass:"box3"},[t._v(t._s(t.timeDateText?t.timeDateText:"- -:- -:- -"))])])]),e("div",{staticClass:"five-box2",on:{click:function(e){t.actionShow=!0}}},[t._v("马上参与")])])]),t._m(2),t.DrawBtnNew?e("div",{staticClass:"winflbg uni-transition flex-item-center",class:t.bgClassNew,on:{click:t.hideDrasNew}},[e("div",{staticClass:"draw-content-1",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"remove-box",on:{click:t.hideDrasNew}},[e("img",{staticClass:"remove-icon",attrs:{src:n("0c23"),alt:""}})]),2==t.contentType?e("div",[e("div",{staticClass:"inner-wrap4"},[e("div",{staticClass:"title"},[t._v(t._s(t.i18n.text39)+" ")]),e("div",{staticClass:"line"}),e("div",{staticClass:"inner-box-four1"},[e("div",{staticClass:"one-inner-4"},[e("span",{staticClass:"text1"},[t._v(t._s(t.i18n.text40)+" ")]),e("span",{staticClass:"text2"},[t._v(t._s(t.account))])])]),e("div",{staticClass:"inner-box4",on:{click:t.login}},[t._v(t._s(t.i18n.text41)+" ")])])]):t._e()])]):t._e(),e("van-overlay",{attrs:{show:t.actionShow},on:{click:function(e){t.actionShow=!1}}},[e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",height:"100%"}},[e("div",{staticClass:"buy-mask-wrap",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"close-wrap",on:{click:function(e){t.actionShow=!1}}},[e("img",{staticClass:"close-img-icon",attrs:{src:n("48b0"),alt:""}})]),e("div",{staticClass:"buy-title"},[t._v("马上参与")]),e("div",{staticStyle:{margin:"20px 0","font-size":"15px"}},[t._v(" Leader余额："+t._s(t.leaderAmount)+" ")]),e("div",{staticClass:"top-buy-wrap"},[e("div",{staticClass:"base-flex-between bottom-buy-box2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.buyAmount,expression:"buyAmount"}],staticClass:"buy-input",attrs:{type:"number",placeholder:"参与数量",maxlength:"20"},domProps:{value:t.buyAmount},on:{input:function(e){e.target.composing||(t.buyAmount=e.target.value)}}}),e("span",{staticClass:"text3"},[t._v("Leader")])])]),e("div",{staticClass:"buy-confirm-btn",on:{click:t.stakeCrowFunding}},[t._v("确定")])])])])],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"group-four-wrap"},[e("div",{staticClass:"group-four-box"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-center box1"},[e("span",{staticClass:"text1"},[t._v("每轮奖励")]),e("span",{staticClass:"text2"},[t._v("20%")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"group-two-wrap"},[e("div",{staticClass:"two-box1 flex-center"},[e("img",{staticClass:"icon1",attrs:{src:n("c537"),alt:""}}),e("span",{staticClass:"text1"},[t._v("玩法说明")]),e("img",{staticClass:"icon1",attrs:{src:n("c537"),alt:""}})]),e("div",{staticClass:"two-box2"},[t._v(" 每个钱包单次最多支付目标额度的5%个币参与，可重复参与。 ")]),e("div",{staticClass:"two-box2"},[t._v(" 初始5000个币（多人参与满为止），每轮加25%币量，当一轮完成时，前一轮参与的人出局，得本金加本金10%的币到可领取奖励，还有10%到用户待释放收益里（每天第一次登陆DAPP时释放1%到可领取奖励，有领导者NFT的人每张加速释放1%）另外5%进回购钱包，当倒计时24小时结束某一轮无法完成时，则前一轮参与的人按比例瓜分，最后一轮支付币量的20%，最后一轮参与的人退回80%,并获得20%币价值的1.2倍的竞拍算力，算力挖NF币，到账价值多少，算力减少多少。 ")]),e("div",{staticClass:"two-box2",staticStyle:{"margin-bottom":"0"}},[t._v(" 竞拍大厅要含有3个正在竞拍众筹中，某一轮24小时倒计时结束没完成目标时结算好奖励和竞拍算力后直接从头开始重启5000币个起的新的一轮竞拍众筹。 ")])])}],r=n("a8f8"),o=n("a235"),u=n("0f2b"),c=(n("2835"),n("53f0"),n("a698"),n("5750"),n("9c57"),n("51d1"),n("0086"),n("afba"),n("022c"),n("0623"),n("6821"),n("b7e2"),n("3279"),n("97d3")),d=n.n(c),l=(n("8c1b"),n("365c")),p=n("58d0"),y=n("9faf"),m=n("b253"),f=(n("1cce"),n("612c")),h=n("fd14"),b=n("5cae"),w=(a={data:function(){return{web3:null,fromAddress:null,usdtAddress:window.globalData.usdtAddress,leaderAddresss:window.globalData.leaderAddresss,mainAddresss:window.globalData.mainAddresss,NererfallAddresss:window.globalData.Nererfall,pancakeRouterAddress:window.globalData.pancakeRouterAddress,usdtContract:null,leaderContract:null,dappMainContract:null,NererfallContract:null,pancakeRouterContract:null,langType:"",langBtn:!1,drawClass:"slide-left-in",headStyle:"background:transparent;",bgBtn:!1,bgClass:"fade-in",bgClassNew:"fade-in",swiperIndex:0,DrawBtnNew:!1,account:"",myInviteUrl:"",tabIndex:0,headerOpacity:"rgba(17,13,53,0)",recordList:[],dataOneInfo:["","","","","",""],timer:null,timeDateText:"",buyAmount:"",actionShow:!1,leaderAmount:0,incomeLeaderNum:null,cycleData:{},crowFundingData:{}}},watch:{"$route.path":{immediate:!0,handler:function(t,e){}}},components:{},created:function(){this.langType=localStorage.getItem("langType");var t=this.getParameterByName("invite","");t&&(this.shareAddress=t),this.getWeb3Connection(),this.getAccountInfo()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},computed:{i18n:function(){return this.langType=localStorage.getItem("langType"),this.$t("message")}}},Object(r["a"])(a,"destroyed",(function(){})),Object(r["a"])(a,"methods",{navCrowdFundingList:function(){this.$router.push("/crowdFundingList")},navReceivingRecords:function(){this.$router.push("/receivingRecords")},countdowm:function(){var t=this;this.changeTime(),this.timer=setInterval((function(){t.changeTime()}),1e3)},changeTime:function(){new Date(this.dataOneInfo[3]);var t=parseInt((new Date).getTime()/1e3),e=1*this.dataOneInfo[3]+86400-t;if(e>0){var n=Math.floor(e/3600),a=Math.floor(e/60%60),i=Math.floor(e%60);n=n<10?"0"+n:n,a=a<10?"0"+a:a,i=i<10?"0"+i:i;var s="";return n>0&&(s="".concat(n,":").concat(a,":").concat(i)),n<=0&&(s="".concat(a,":").concat(i)),this.timeDateText=s,s}return this.timer&&(clearInterval(this.timer),this.timer=null,this.getInitData()),""},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,e=150,n=t>e?150:t;this.headerOpacity="rgba(17,13,53,".concat(n*(1/e),")")},navBack:function(){this.$router.back()},getLeaderBalanceOf:function(){var t=this;this.leaderContract.methods.balanceOf(this.account).call().then((function(e,n){e&&(t.leaderAmount=p.parseNumber(e,18),console.log(t.leaderAmount,"this.leaderAmount"))}))},getoneNum:function(){var t=this;this.dappMainContract.methods.getPairToUsdt(p.pow(1e7,18)).call().then((function(e,n){e&&(t.oneNum=p.parseNumber(e,18)/1e7,console.log(t.oneNum,"oneNum"))}))},withdrawPrincipal:function(){var t=this;return Object(u["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.incomeLeaderNum,"this.incomeLeaderNum"),!(null!=t.incomeLeaderNum&&1*t.incomeLeaderNum>0)){e.next=6;break}return console.log(1111111),t.$toast.loading({message:"loading...",forbidClick:!0,duration:0}),e.next=6,t.dappMainContract.methods.withdrawPrincipal(t.cycleData.round,t.cycleData.cycle).send({from:t.account}).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$toast.clear(),t.$toast("领取成功"),t.getInitData();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$toast.clear()}));case 6:case"end":return e.stop()}}),e)})))()},stakeCrowFunding:function(){var t=this;return Object(u["a"])(Object(o["a"])().mark((function e(){var n,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.buyAmount){e.next=3;break}return t.$toast("请输入参与数量"),e.abrupt("return");case 3:if(!(1*t.buyAmount<100)){e.next=6;break}return t.$toast("参与数量必须大于100"),e.abrupt("return");case 6:if(!(1*t.buyAmount>1*t.leaderAmount)){e.next=9;break}return t.$toast("Leader余额不足"),e.abrupt("return");case 9:if(1*t.buyAmount%100==0){e.next=12;break}return t.$toast("参与数量必须为100的整数倍"),e.abrupt("return");case 12:if(!t.dataOneInfo[2]||!t.dataOneInfo[4]){e.next=16;break}if(!(1*t.buyAmount>1*t.dataOneInfo[2]-1*t.dataOneInfo[4])){e.next=16;break}return t.$toast("超出参与数量"),e.abrupt("return");case 16:return t.$toast.loading({message:"loading...",forbidClick:!0,duration:0}),e.next=19,t.leaderContract.methods.allowance(t.account,t.mainAddresss).call();case 19:if(n=e.sent,console.log(n,"oneCount"),a=p.parseNumber(n,18),!(a<Number(t.buyAmount))){e.next=27;break}return e.next=25,t.leaderContract.methods.approve(t.mainAddresss,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send({from:t.account}).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dappMainContract.methods.stakeCrowFunding(t.dataOneInfo[0],t.dataOneInfo[1],p.pow(t.buyAmount,18)).send({from:t.account}).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$toast.clear(),t.$toast("参与成功"),t.actionShow=!1,t.getInitData();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$toast.clear()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$toast.clear()}));case 25:e.next=29;break;case 27:return e.next=29,t.dappMainContract.methods.stakeCrowFunding(t.dataOneInfo[0],t.dataOneInfo[1],p.pow(t.buyAmount,18)).send({from:t.account}).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$toast.clear(),t.$toast("参与成功"),t.actionShow=!1,t.getInitData();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$toast.clear()}));case 29:case"end":return e.stop()}}),e)})))()},crowFundingVeiw:function(){var t=this;this.dappMainContract.methods.crowFundingVeiw(this.account).call().then((function(e,n){if(e){var a=[];e.forEach((function(t,e){2==e||4==e||5==e?a.push(p.parseNumber(t,18)):a.push(t)})),console.log(e,"crowFundingVeiw"),t.dataOneInfo=a,0!=e[3]&&t.countdowm()}}))},claimcrowdFunding:function(){var t=this;void 0!=this.crowFundingData.unLockReward&&1*this.crowFundingData.unLockReward>0&&(this.$toast.loading({message:"loading...",forbidClick:!0,duration:0}),Object(l["i"])().then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(200!=n.status){e.next=5;break}return e.next=3,t.dappMainContract.methods.clam(n.data.address,n.data.amountLeader,n.data.amountNf,n.data.sign).send({from:t.account}).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$toast.clear(),t.$toast("领取成功"),t.getInitData();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$toast.clear()}));case 3:e.next=6;break;case 5:401==n.status&&(t.$toast.clear(),t.hasToken());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},getcrowFundingData:function(){var t=this;Object(l["n"])().then((function(e){200==e.status?t.crowFundingData=e.data:401==e.status&&t.hasToken()}))},getstakecycle:function(){var t=this;Object(l["q"])().then((function(e){200==e.status?(t.cycleData=e.data,t.dappMainContract.methods.claimAmount(t.account,e.data.round,e.data.cycle).call().then((function(e,n){console.log(e,"getoneNumerr"),e&&(t.incomeLeaderNum=p.parseNumber(e,18))}))):401==e.status&&t.hasToken()}))},getchildren:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;getchildren().then((function(e){if(200==e.status){t.teamList=e.data;var n=0;t.teamList.forEach((function(t){n+=t.childrenCount})),t.teamNum=n}else 401==e.status&&t.hasToken()}))})),hasToken:function(){this.DrawBtnNew&&2==this.contentType||this.showDrawNew(2)},getcrowFundingInfo:function(){var t=this;Object(l["o"])().then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:200==n.status?(t.dataOneInfo=n.data,t.countdowm()):401==n.status&&t.hasToken();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getUserInfo:function(){var t=this;Object(l["getUserInfo"])().then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:200==n.status?(t.selfData=n.data,t.power=n.data.power,t.inviterPower=n.data.inviterPower,t.reward=n.data.reward,t.shareConfirm()):401==n.status&&t.hasToken();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},login:function(){var t=this;this.$toast.loading({message:"loading...",forbidClick:!0,duration:0}),Object(l["s"])(this.account).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){var a,i;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(n,"res"),200!=n.status){e.next=9;break}return e.next=4,t.web3.eth.personal.sign("welcome to Leader, pls sign this message to login! NONCE: "+n.data,t.account).then();case 4:a=e.sent,i={address:t.account,sign:a},Object(l["t"])(i).then(function(){var e=Object(u["a"])(Object(o["a"])().mark((function e(n){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$toast.clear(),200==n.status&&(t.$toast(t.i18n.text75),t.hideDras(),a=localStorage.getItem("tokenList"),a?(a=JSON.parse(a),console.log(a,"tokenList"),a[t.account]=n.data,localStorage.setItem("tokenList",JSON.stringify(a))):localStorage.setItem("tokenList",JSON.stringify(Object(r["a"])({},t.account,n.data))),localStorage.setItem("token",n.data),t.getInitData(),t.hideDrasNew());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10;break;case 9:t.$toast.clear();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showDrawNew:function(t){var e=this;this.contentType=t,this.DrawBtnNew=!0,setTimeout((function(){e.bgClassNew="fade-active"}),0)},hideDrasNew:function(){var t=this;this.bgClassNew="fade-in",setTimeout((function(){t.DrawBtnNew=!1}),330)},showDraw:function(){var t=this;this.bgBtn=!0,this.leftDrawBtn=!0,setTimeout((function(){t.bgClass="fade-active",t.drawClass="slide-right-active"}),0)},hideDras:function(){var t=this;this.bgClass="fade-in",this.drawClass="slide-left-in",setTimeout((function(){t.bgBtn=!1,t.leftDrawBtn=!1}),330)},getInitData:function(){this.getLeaderBalanceOf(),this.getstakecycle(),this.getcrowFundingData(),this.isData=!0},getWeb3Connection:function(){if(void 0==this.web3){var t=b.newBlockchainConnection(d.a.givenProvider);"success"==t.type?this.web3=b.newBlockchainConnection(d.a.givenProvider).web3Instant:this.$dialog.alert({title:this.i18n.text83,message:this.i18n.text84,theme:"round-button"}).then((function(){}))}else this.getAccountInfo()},getAccountInfo:function(){var t=this;this.web3.eth.requestAccounts().then((function(e){t.account=e[0],t.$parent.account=t.account,t.myInviteUrl=window.location.protocol+"//"+window.location.host+"/#/?invite="+t.account,console.log(t.account,"account"),t.web3.eth.getBalance(t.account).then((function(e){console.log(e,"abi"),t.balance=p.parseNumber(e,18),console.log(t.balance,"balance")})),t.usdtContract=new t.web3.eth.Contract(y.usdt,t.usdtAddress),t.leaderContract=new t.web3.eth.Contract(m.leader,t.leaderAddresss),t.dappMainContract=new t.web3.eth.Contract(f.main,t.mainAddresss),t.pancakeRouterContract=new t.web3.eth.Contract(h.pancakeRouter,t.pancakeRouterAddress);var n=localStorage.getItem("tokenList");n?(n=JSON.parse(n),console.log(n,"tokenList"),n.hasOwnProperty(t.account)?(localStorage.setItem("token",n[t.account]),t.getInitData()):t.showDrawNew(2)):t.showDrawNew(2)}))},changLang:function(t){"en"==this.langType?(this._i18n.locale="ch",localStorage.setItem("langType","ch"),this.langType="ch"):"ch"==this.langType&&(this._i18n.locale="en",localStorage.setItem("langType","en"),this.langType="en"),this.hideDras()},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=n.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},copy:function(t){var e=t,n=this;this.$copyText(e).then((function(t){n.$toast(n.i18n.text1)}),(function(t){console.log(t)}))}}),a),v=w,g=(n("5b92"),n("3427")),A=Object(g["a"])(v,i,s,!1,null,"62198855",null);e["default"]=A.exports},"48b0":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6BAMAAAATlVcbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTAA5OSQpNCQmNSQmNyQoNCMoNCMoNC4uMSQpNSQpNFiVUpYAAAAKdFJOUwABkiod3anpBl+XQCWbAAABG0lEQVQ4y33UOw7CMBAEUOdTQIdyAmipOAJNGk6A0kFFbxo6xBXoKJEIYk+JHceO156Nq0irpyTaGSs1f+rn3OBFGzgstrRWFVG/QtOG6KdKIjphSm+1JIwNNdNFB7GldFVFC7Gl3535cIQHqu0Dwp5CHCjEEwU4ogDHNMOMZpjTBCc0wSllOKMM5zTCgEYY0YAhNcfhElKPBerwR6AjlqjDEvVYS5U62KlA3b/SRZg2w3v7+wyVsKMCHuitE7BbTovxuJwaY79XiMNeIZ4iAXAUCYDjNGWYpSnDPIgJToKY4DTDDGcZZjiPf4RB/COMmhMwbE7AuHQe4+aMlayE+Fvs7nYtFGO423FzWmvN3a6lVh2Vepz3OPxm8AfsgiZza9uW3AAAAABJRU5ErkJggg=="},"53f0":function(t,e,n){"use strict";var a=n("2e1a"),i=n("a256"),s=n("0ead"),r=n("7b95"),o=n("2586"),u=n("1a5c"),c=n("d024"),d=n("8827"),l=n("0fc0"),p=n("edc3"),y=n("f426"),m=n("9ae8"),f=y("isConcatSpreadable"),h=m>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},w=!h||!p("concat");a({target:"Array",proto:!0,arity:1,forced:w},{concat:function(t){var e,n,a,i,s,r=o(this),p=l(r,0),y=0;for(e=-1,a=arguments.length;e<a;e++)if(s=-1===e?r:arguments[e],b(s))for(i=u(s),c(y+i),n=0;n<i;n++,y++)n in s&&d(p,y,s[n]);else c(y+1),d(p,y++,s);return p.length=y,p}})},"5b92":function(t,e,n){"use strict";n("a2d2")},"95a4":function(t,e,n){t.exports=n.p+"img/action3.d9531e72.png"},a2d2:function(t,e,n){},c537:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoBAMAAABtB+WqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTAB23gB32gB23gB03QB33QB13gB13QB23QBz3wB33gB23Xxyvs8AAAALdFJOUwDwEa9QwGyN0jItHuxjhwAAAJhJREFUKM/t0L0OQTEAhuHXIX42YrQcm8SC1WJ3E3aL3WK3SIxncQsHQfTmfE5avtWuy/s0bdOmAMfejGpENEJ44BiGEFaOtbrBsE07EubqAsNePWEYqDlfZEr5nid0Qrw+Qc8JFwxN9Y6hpd4w1NUrhrb6xFBTzxjGahdDoe4wLNUJhv93/PgdWijzeKTCKL7rg2zaP2B4AbHg3F15LrtfAAAAAElFTkSuQmCC"},d93e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA2BAMAAAAmFOT3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTP///////////////////////////////////////////////////4sGkswAAAANdFJOUwAKG/LddjC4kMykSF1RCu5nAAAAyUlEQVQoz2NgIAUwHUThst8UQOay3i1EkV57HUWa6+4CZC5j7S0U1eJ3G1Ck595AkZa8G4DiEt+rKNIqdw+gSt9BkU6+uwGZy2ZrjSp9OQGZy21rhiK9F1Wa564TivTZKwqowTAJRToWNZQ47k5Eke5FD6UCFOnaq6j+uo3M1UQJFMa5V3EHKFpwo0UGalRxoEZkL4oHWFHdH4viebSgQQ0Z7rsowboZJVTZUMM8+fIGFMnbuCMbLa5V8IUJF2oi40BNYwwKeNI+AB1SQlNbsAHpAAAAAElFTkSuQmCC"},fd14:function(t,e){var n=[{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"}];t.exports={pancakeRouter:n}}}]);