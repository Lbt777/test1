import{d as te,r as n,c as me,I as we,u as ye,b as w,a as Ae,N as Be,J as Ce,o as Se,Q as ke,$ as be,ap as Ie,aq as Te,ar as De,w as Ue,e as r,f,g as R,l as t,v as ae,F as M,t as l,h as o,m as A,j as E,s as x,B as P,X as Qe,U as B,a1 as S,a2 as p,as as $e,at as Ge,au as qe,av as se,aw as Fe,ax as Oe,a6 as Re,L as Ee,H as Ne,p as y,y as ze,z as Le,ay as Ve,az as Me,M as xe,A as Pe}from"./index.7af6d45d.js";/* empty css              *//* empty css               */import{_ as He}from"./index.d1d0a248.js";const We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASBAMAAACzwgOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTAB23QB23QB23gB13QB03gB13QBz3wB01gB13QB03gB23ZhS5jsAAAALdFJOUwDdwvRNgR8tFpdphPot7wAAAGhJREFUCNdjYEAGLIqCMDCBIXk3HGxl8EZwNqHKcCE4CgwMs2HszQkMDIwwzhag2ezWUE4AyCZvmFkgwAnhSEAcoQ3mOEA4yRBLoM6DWgIB0bt3b2yAcZh2794O9waH9O4FCE8ViYIpAPzBUd4PZBkqAAAAAElFTkSuQmCC",Ze=k=>(ze("data-v-e5c1b47f"),k=k(),Le(),k),je={class:"main"},Ke={class:"up"},Je={class:"gqc"},Xe={class:"names"},Ye={class:"blance recharge"},ea={class:"gqc"},aa={class:"names"},sa={class:"blance"},ta={class:"gqc"},la={class:"names"},na={class:"sildes"},ca={key:0,class:"u"},oa={key:1,class:"u"},ia={key:0,class:"tips"},ua={class:"box"},ra={class:"titles"},da={class:"userInput"},va={class:"type"},ha={key:0,class:"w_down"},_a=Ze(()=>t("img",{src:We,alt:""},null,-1)),fa=[_a],pa={key:0,class:"estimate"},ga={key:1,class:"tipsBox"},ma={class:"e_tips"},wa={class:"e_tips e_tips_color"},ya={class:"e_tips"},Aa={class:"e_tips e_tips_color"},Ba={class:"btn"},Ca=te({name:"Withdrawal"}),Sa=te({...Ca,setup(k){let d=n({});const _=me(),b=we(),H=ye(),I=n(!1),c=n("USDT"),g=n(""),le=987643;let v=n(!1),T=n(300);const W=n(10),D=n(0),U=n(0),ne=n(se),s=n("withdrawal"),Q=n(""),Z=n([{name:"GQC",value:Ve},{name:"SCT",value:Me}]),j=w(()=>y(_.address)),$=w(()=>y(_.BalanceGQC)),G=w(()=>y(_.BalanceUSDT)),q=w(()=>y(_.BalanceSCT)),ce=w(()=>y(_.withdrawal)),oe=w(()=>y(_.contractInstance)),ie=w(()=>y(_.GQCcontractInstance)),ue=w(()=>y(_.SCTcontractInstance)),i=n(!1),N=n(0),F=n(0),K=n(0);let O=Ae({month:0,strDate:0,year:0});O=Be();async function J(){let e=await Qe();d.value=e.data}const X=(e,a)=>{switch(a){case"GQC":D.value=e.gqcBalance,U.value=$.value;break;case"USDT":D.value=e.usdtBalance,U.value=G.value;break;case"SCT":D.value=e.sctBalance,U.value=q.value;break}},Y=e=>{I.value=!1,c.value!==e.name&&(g.value="",c.value=e.name,ne.value=e.value,X(d.value,e.name),z(c.value,""))};function re(e){z(c.value,+e),s.value==="pendingOrder"?+e?N.value=B(+e/F.value,6):N.value=0:s.value==="withdrawal"&&(c.value==="USDT"?+e&&+e<=d.value.usdtBalance?i.value=!1:i.value=!0:c.value==="GQC"?+e&&+e<=d.value.gqcBalance?i.value=!1:i.value=!0:c.value==="SCT"&&(+e&&+e<=d.value.sctBalance?i.value=!1:i.value=!0))}function de(){s.value!=="pendingOrder"&&(I.value=!0)}const ve=()=>{H.push({path:"transactiondDtailed",query:{type:s.value}})};Ce(async()=>{s.value=b.query.name,Q.value=b.query.value,s.value==="recharge"?b.meta.title="recharge":s.value==="pendingOrder"&&(b.meta.title="pendingOrder"),Y({name:Q.value,value:Z.value.find(e=>e.name===Q.value)})}),Se(async()=>{let e=await ke();F.value=e.data;let a=await be();K.value=a.data,console.log("\u7F13\u5B58",_),await J(),X(d.value,Q.value),await Ie(),await Te(),await De()}),Ue([$,G,q],()=>{z(c.value,0)},{deep:!0,immediate:!0});async function z(e,a){e==="USDT"?!G.value||a===""||G.value<a?i.value=!0:i.value=!1:e==="GQC"?!$.value||a===""||$.value<a?i.value=!0:i.value=!1:e==="SCT"&&(!q.value||a===""||q.value<a?i.value=!0:i.value=!1)}const L=e=>{if(!g.value)return;v.value=!0;let a=setInterval(()=>{T.value>0?(T.value--,T.value==0&&(clearInterval(a),v.value=!1)):(clearInterval(a),v.value=!1)},1e3);switch(e){case"recharge":fe(a,c.value);break;case"pendingOrder":+g.value<200?S(p("greaterThan")):pe(a,+g.value);break;case"withdrawal":he(a,+g.value,c.value);break}};async function he(e,a,u){let h=await $e({amount:a,tokenType:u});h.status===200&&h.data.sign?_e(h.data,e):(S(p("withdrawal")+p("Failed")),v.value=!1,clearInterval(e))}function _e(e,a){ce.value.methods.claimReward(e.tokenAddress,e.address,e.amount,e.sign).send({from:j.value,gasLimit:"300000"}).then(u=>{v.value=!1,clearInterval(a),V()}).catch(u=>{console.log(u),S(p("withdrawal")+p("Failed")),v.value=!1,clearInterval(a)})}function fe(e,a){let u=Ge(qe(+g.value,18),le).toString(),h={Instance:"",address:""};a==="USDT"?h.Instance=oe:a==="GQC"?h.Instance=ie:a==="SCT"&&(h.Instance=ue),h.Instance.value.methods.transfer(se,u).send({from:j.value,gasLimit:"300000"}).then(m=>{console.log(m),ee(m.transactionHash,e)}).catch(m=>{console.log(m),S(p("RechargeFailed")),v.value=!1,clearInterval(e)})}async function pe(e,a){(await Fe({amount:a})).status===200?V():S(p("pendingOrder")+p("Failed")),J(),clearInterval(e)}async function ee(e,a){let u=await Oe(e);console.log(u),u.status===200&&u.data&&u.data.txId?(v.value=!1,clearInterval(a),V()):W.value===0?(S(p("RechargeFailed")),v.value=!1,clearInterval(a)):setTimeout(()=>{W.value--,ee(e,a)},3e3)}function V(){H.push({path:"paymentSucceeded",query:{type:s.value}})}return(e,a)=>{const u=xe,h=Re,m=Ee,ge=Ne;return r(),f(M,null,[R(u,{right:!0,onClickRight:ve}),t("div",je,[t("div",{class:ae(["balance",s.value==="pendingOrder"?"center":""])},[t("div",Ke,[s.value==="pendingOrder"?(r(),f(M,{key:0},[t("div",Je,[t("div",Xe,l(e.$t("my"))+"GQC",1),t("div",Ye,l(o(B)(o(d).gqcBalance,3)),1)]),t("div",ea,[t("div",aa,l(e.$t("my"))+"USDT",1),t("div",sa,l(o(B)(o(d).usdtBalance,3)),1)])],64)):(r(),f(M,{key:1},[t("div",ta,[t("div",la,l(e.$t("my"))+l(c.value),1),t("div",na,[t("div",{class:ae(["blance",s.value==="recharge"?"recharge":""])},l(o(B)(D.value,3)),3),c.value==="GQC"?(r(),f("div",ca,"\u2248"+l(o(B)(o(d).gqcBalance*F.value,3))+" USDT",1)):A("v-if",!0),c.value==="SCT"?(r(),f("div",oa,"\u2248"+l(o(B)(o(d).sctBalance*K.value,3))+" USDT ",1)):A("v-if",!0)])]),A(` <div class="gqc">\r
            <div class="names">{{ $t('my') }}USDT</div>\r
            <div class="blance" :class="type === 'recharge' ? 'recharge' : ''">{{ CoinInfoData.usdtBalance }}</div>\r
          </div> `)],64))]),s.value!=="recharge"&&c.value==="GQC"?(r(),f("div",ia,l(e.$t("GQCIncreased",{price:F.value,time:`${o(O).year}-${o(O).month}-${o(O).strDate}`})),1)):A("v-if",!0)],2),t("div",ua,[t("div",ra,l(e.$t("enterAmount",{type:e.$t(s.value)})),1),t("div",da,[R(h,{modelValue:g.value,"onUpdate:modelValue":[a[0]||(a[0]=C=>g.value=C),re],label:"",type:"number",placeholder:"0.00"},{button:E(()=>[t("div",{class:"w_type",onClick:de},[t("div",va,l(c.value),1),s.value!=="pendingOrder"?(r(),f("div",ha,fa)):A("v-if",!0)])]),_:1},8,["modelValue"])]),s.value==="pendingOrder"?(r(),f("div",pa,l(e.$t("ExpectedAvailability"))+"\uFF1A"+l(N.value)+" GQC ",1)):A("v-if",!0),s.value==="recharge"?(r(),f("div",ga,[t("div",ma,l(e.$t("WalletOnBlockchain")),1),t("div",wa,l(" "+c.value+" "),1),t("div",ya,l(e.$t("balance")+" "),1),t("div",Aa,l(o(B)(U.value,6)),1)])):A("v-if",!0)]),t("div",Ba,[s.value==="recharge"?(r(),x(m,{key:0,type:"primary",block:"",color:"#1F75D9",onClick:a[1]||(a[1]=C=>L(s.value)),disabled:i.value},{default:E(()=>[P(l(e.$t("immediately",{type:e.$t(s.value)})),1)]),_:1},8,["disabled"])):s.value==="pendingOrder"?(r(),x(m,{key:1,type:"primary",block:"",color:"#1F75D9",onClick:a[2]||(a[2]=C=>L(s.value))},{default:E(()=>[P(l(e.$t("immediately",{type:e.$t(s.value)})),1)]),_:1})):(r(),x(m,{key:2,type:"primary",block:"",color:"#1F75D9",onClick:a[3]||(a[3]=C=>L(s.value)),disabled:i.value},{default:E(()=>[P(l(e.$t("immediately",{type:e.$t(s.value)})),1)]),_:1},8,["disabled"]))])]),R(o(He),{showLoading:o(v),countDown:o(T)},null,8,["showLoading","countDown"]),R(ge,{show:I.value,"onUpdate:show":a[4]||(a[4]=C=>I.value=C),actions:Z.value,"cancel-text":e.$t("cancel"),"close-on-click-action":"",onSelect:Y},null,8,["show","actions","cancel-text"])],64)}}});const Da=Pe(Sa,[["__scopeId","data-v-e5c1b47f"],["__file","D:/work/GQC/src/views/withdrawal/index.vue"]]);export{Da as default};
