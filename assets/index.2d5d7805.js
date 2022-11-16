import{_ as re}from"./index.8cf95785.js";import{d as ae,c as me,M as he,r as l,h as o,b as h,N as pe,o as fe,a0 as ge,ap as U,e as i,f as u,g as A,l as a,t as s,F as z,m as D,j as X,B as ee,n as Te,b1 as ye,a5 as T,a6 as y,b2 as Se,ay as Q,aa as be,Q as ke,y as Be,z as we,b3 as Ae,Y as p,R as De,A as Ce}from"./index.67b6b484.js";/* empty css               *//* empty css               */import{_ as Ne}from"./sct.56d54253.js";import{_ as se}from"./usdt.0ec2b9d9.js";import{D as Ie}from"./Debounce.72fd6245.js";const S=C=>(Be("data-v-72c24d6c"),C=C(),we(),C),Le={class:"pages"},Fe={class:"time"},Ue={class:"time"},ze={style:{color:"#FF765A"}},Pe={key:0,class:"time"},Re={key:1,class:"num"},$e={class:"title"},Ve={class:"input"},qe={class:"unit"},xe={class:"item"},Ee={class:"bg"},Me=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:Ne,alt:""})]),a("div",{class:"name"},"SCT")],-1)),Oe={class:"rig"},Qe={key:0,class:"tipsBox"},We={class:"e_tips"},je=S(()=>a("div",{class:"e_tips e_tips_color"}," SCT ",-1)),Ge={class:"e_tips"},Ke={class:"e_tips e_tips_color"},Ye={class:"item"},Ze={class:"bg"},He=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USTD")],-1)),Je={class:"rig"},Xe={key:0,class:"tipsBox"},ea={class:"e_tips"},aa=S(()=>a("div",{class:"e_tips e_tips_color"}," USTD ",-1)),sa={class:"e_tips"},ta={class:"e_tips e_tips_color"},la={class:"item"},oa={class:"bg"},na=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USDT")],-1)),ca={key:0,class:"rig"},ia={key:1,class:"rig"},ua={key:0,class:"tipsBox"},da=S(()=>a("div",{class:"e_tips e_tips_color"}," USDT ",-1)),va={class:"e_tips"},_a={class:"e_tips e_tips_color"},ra=ae({name:"casting"}),ma=ae({...ra,setup(C){const{proxy:W}=Te(),n=me(),P=he(),c=l(""),_=l(""),N=l(""),R=l(""),d=l(0),v=l(0),f=l(),g=l(!0),b=l(!0),m=l(!1),r=l(!1),I=l(300),$=l("-"),j=l(0),V=l(0),q=1e8,te=2592e6,k=o(h(()=>n.address)),x=h(()=>n.BalanceSCT),E=h(()=>n.BalanceUSDT),B=o(h(()=>n.sctPool)),G=h(()=>n.usdtAuthorizationBalance),K=h(()=>n.sctAuthorizationBalance),le=o(h(()=>n.contractInstance)),oe=o(h(()=>n.SCTcontractInstance)),L=l(!1);pe(async()=>{c.value=P.query.type,_.value=P.query.coin;let e={casting:"casting",ReleasePledge:"ReleasePledge"};P.meta.title=e[c.value]}),fe(async()=>{c.value==="ReleasePledge"&&(_.value==="SLT"&&await Z(),await Y()),w()});const ne=async()=>{c.value==="casting"?(await ye({amount:+f.value})).status===200&&(T(y("Success")),f.value="",b.value=!1,w()):(await Se()).status===200&&(T(y("Success")),b.value=!1,w())},w=async()=>{let e=await ge();if(_.value==="SAT"){N.value=e.data.satTotalBalance;let t=e.data.satStakeTime?new Date(e.data.satStakeTime).getTime()+te:0;$.value=W.getUnixToDate("yyyy-mm-dd hh:mm:ss",t)}else N.value=e.data.sltTotalBalance;R.value=e.data.usdtBalance},Y=async()=>{await B.methods.slefLpBurnClimeAmount(k).call().then(e=>{v.value=U(e[0],18),d.value=U(e[1],18),+d.value&&+v.value&&Date.now()/1e3>V.value&&(g.value=!1)}).catch(e=>{console.log(e)})},Z=async()=>{await B.methods.getAddressInfo(k).call().then(e=>{V.value=Number(e.lastStakeTime)+2592e3,$.value=W.getUnixToDate("yyyy-mm-dd hh:mm:ss",V.value),j.value=U(e.lockNum,18)}).catch(e=>{console.log(e)})},ce=()=>{L.value=!1,m.value=!0,r.value=!0;let e=setInterval(async()=>{I.value>0?I.value--:(clearInterval(e),m.value=!1)},1e3);if(c.value==="ReleasePledge")ie(e);else{async function t(){G.value<v.value?(await H(e,le,"usdt"),L.value||t()):K.value<d.value?await H(e,oe,"sct"):J(e)}L.value||t()}};async function H(e,t,M){let O=Q(q,18);await t.methods.approve(Ae,O).send({from:k}).then(F=>{r.value=!1,M==="usdt"?n.SET_AuthorizationUSDT(q):n.SET_AuthorizationSCT(q),console.log(n),G.value>v.value&&K.value>d.value&&J(e)}).catch(F=>{I.value=300,L.value=!0,r.value=!1,m.value=!1,clearInterval(e)})}async function J(e){await B.methods.addSctLiquidity(Q(v.value,18)).send({from:k}).then(async t=>{f.value="",g.value=!0,T(y("Success")),n.SET_BalanceUSDT(E.value-v.value),n.SET_BalanceSCT(x.value-d.value),r.value=!1,m.value=!1,d.value=0,v.value=0,w(),clearInterval(e)}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}async function ie(e){await B.methods.removeSctLiquidityAll().send({from:k}).then(async t=>{T(y("Success")),r.value=!1,m.value=!1,g.value=!0,clearInterval(e),await Z(),await Y(),w()}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}const ue=Ie(e=>{_.value==="SAT"?Number(e)*200<+R.value?b.value=!1:b.value=!0:(v.value=Number(e)*50,e?de(Q(+e*50,18)):d.value=0)},500),de=e=>{B.methods.needSctAmount(e).call().then(t=>{d.value=U(t,18),Number(x.value)>=Number(d.value)&&Number(E.value)>=v.value?g.value=!1:g.value=!0}).catch(t=>{console.log(t)})};return(e,t)=>{const M=De,O=be,F=ke,ve=re;return i(),u(z,null,[A(M),a("div",Le,[a("div",Fe,s(e.$t("sltTotal",{num:_.value}))+"\uFF1A"+s(N.value),1),c.value==="ReleasePledge"?(i(),u(z,{key:0},[a("div",Ue,[a("span",null,s(e.$t("ReleaseTime"))+"\uFF1A",1),a("span",ze,s($.value),1)]),_.value==="SLT"?(i(),u("div",Pe,s(e.$t("LockLp"))+"\uFF1A"+s(o(p)(j.value,6)),1)):D("v-if",!0)],64)):(i(),u("div",Re,[a("div",$e,s(e.$t("NumberCastings")),1),a("div",Ve,[A(O,{"onUpdate:modelValue":[o(ue),t[0]||(t[0]=_e=>f.value=_e)],type:"digit",maxlength:"10",modelValue:f.value,label:"",placeholder:"0.00",clearable:""},null,8,["onUpdate:modelValue","modelValue"]),a("div",qe,s(_.value),1)])])),_.value==="SLT"?(i(),u(z,{key:2},[a("div",xe,[a("div",Ee,[Me,a("div",Oe,s(o(p)(d.value,6)),1)]),c.value==="casting"?(i(),u("div",Qe,[a("div",We,s(e.$t("WalletOnBlockchain")),1),je,a("div",Ge,s(e.$t("balance")+" "),1),a("div",Ke,s(o(p)(o(x),6)),1)])):D("v-if",!0)]),a("div",Ye,[a("div",Ze,[He,a("div",Je,s(o(p)(v.value,6)),1)]),c.value==="casting"?(i(),u("div",Xe,[a("div",ea,s(e.$t("WalletOnBlockchain")),1),aa,a("div",sa,s(e.$t("balance")+" "),1),a("div",ta,s(o(p)(o(E),6)),1)])):D("v-if",!0)]),A(F,{class:"btn",block:"",color:"#1F75D9",disabled:g.value,loading:r.value,onClick:ce},{default:X(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):_.value==="SAT"?(i(),u(z,{key:3},[a("div",la,[a("div",oa,[na,c.value==="casting"?(i(),u("div",ca,s(o(p)(f.value*200,6)),1)):(i(),u("div",ia,s(o(p)(N.value*200,6)),1))]),c.value==="casting"?(i(),u("div",ua,[da,a("div",va,s(e.$t("balance")+" "),1),a("div",_a,s(o(p)(R.value,6)),1)])):D("v-if",!0)]),A(F,{class:"btn",block:"",color:"#1F75D9",disabled:b.value,loading:r.value,onClick:ne},{default:X(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):D("v-if",!0)]),A(ve,{showLoading:m.value,countDown:I.value},null,8,["showLoading","countDown"])],64)}}});const ba=Ce(ma,[["__scopeId","data-v-72c24d6c"],["__file","D:/work/GQC/src/views/casting/index.vue"]]);export{ba as default};
