import{_ as re}from"./index.56f13488.js";import{d as ae,c as me,I as he,r as l,h as o,b as h,J as pe,o as fe,Y as ge,am as U,e as i,f as u,g as w,l as a,t as s,F as $,m as D,j as X,B as ee,n as Te,a_ as ye,a2 as T,a3 as y,a$ as Se,av as W,M as be,a7 as Be,N as ke,y as Ae,z as we,b0 as De,V as p,A as Ie}from"./index.6d07faca.js";/* empty css               */import{_ as Ne}from"./sct.56d54253.js";import{_ as se}from"./usdt.0ec2b9d9.js";import{D as Ce}from"./Debounce.72fd6245.js";const S=I=>(Ae("data-v-d2468f89"),I=I(),we(),I),Le={class:"pages"},Fe={class:"time"},Ue={class:"time"},$e={style:{color:"#FF765A"}},ze={key:0,class:"time"},Pe={key:1,class:"num"},Re={class:"title"},Ve={class:"input"},qe={class:"unit"},xe={class:"item"},Ee={class:"bg"},Me=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:Ne,alt:""})]),a("div",{class:"name"},"SCT")],-1)),Oe={class:"rig"},We={key:0,class:"tipsBox"},je={class:"e_tips"},Je=S(()=>a("div",{class:"e_tips e_tips_color"}," SCT ",-1)),Ke={class:"e_tips"},Ye={class:"e_tips e_tips_color"},Ze={class:"item"},Ge={class:"bg"},He=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USTD")],-1)),Qe={class:"rig"},Xe={key:0,class:"tipsBox"},ea={class:"e_tips"},aa=S(()=>a("div",{class:"e_tips e_tips_color"}," USTD ",-1)),sa={class:"e_tips"},ta={class:"e_tips e_tips_color"},la={class:"item"},oa={class:"bg"},na=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USDT")],-1)),ca={key:0,class:"rig"},ia={key:1,class:"rig"},ua={key:0,class:"tipsBox"},da=S(()=>a("div",{class:"e_tips e_tips_color"}," USDT ",-1)),va={class:"e_tips"},_a={class:"e_tips e_tips_color"},ra=ae({name:"casting"}),ma=ae({...ra,setup(I){const{proxy:j}=Te(),n=me(),z=he(),c=l(""),_=l(""),N=l(""),P=l(""),d=l(0),v=l(0),f=l(),g=l(!0),b=l(!0),m=l(!1),r=l(!1),C=l(300),R=l("-"),J=l(0),V=l(0),q=1e8,te=2592e6,B=o(h(()=>n.address)),x=h(()=>n.BalanceSCT),E=h(()=>n.BalanceUSDT),k=o(h(()=>n.sctPool)),K=h(()=>n.usdtAuthorizationBalance),Y=h(()=>n.sctAuthorizationBalance),le=o(h(()=>n.contractInstance)),oe=o(h(()=>n.SCTcontractInstance)),L=l(!1);pe(async()=>{c.value=z.query.type,_.value=z.query.coin;let e={casting:"casting",ReleasePledge:"ReleasePledge"};z.meta.title=e[c.value]}),fe(async()=>{c.value==="ReleasePledge"&&(_.value==="SLT"&&await G(),await Z()),A()});const ne=async()=>{c.value==="casting"?(await ye({amount:+f.value})).status===200&&(T(y("Success")),f.value="",b.value=!1,A()):(await Se()).status===200&&(T(y("Success")),b.value=!1,A())},A=async()=>{let e=await ge();if(_.value==="SAT"){N.value=e.data.satTotalBalance;let t=e.data.satStakeTime?new Date(e.data.satStakeTime).getTime()+te:0;R.value=j.getUnixToDate("yyyy-mm-dd hh:mm:ss",t)}else N.value=e.data.sltTotalBalance;P.value=e.data.usdtBalance},Z=async()=>{await k.methods.slefLpBurnClimeAmount(B).call().then(e=>{v.value=U(e[0],18),d.value=U(e[1],18),+d.value&&+v.value&&Date.now()/1e3>V.value&&(g.value=!1)}).catch(e=>{console.log(e)})},G=async()=>{await k.methods.getAddressInfo(B).call().then(e=>{V.value=Number(e.lastStakeTime)+2592e3,R.value=j.getUnixToDate("yyyy-mm-dd hh:mm:ss",V.value),J.value=U(e.lockNum,18)}).catch(e=>{console.log(e)})},ce=()=>{L.value=!1,m.value=!0,r.value=!0;let e=setInterval(async()=>{C.value>0?C.value--:(clearInterval(e),m.value=!1)},1e3);if(c.value==="ReleasePledge")ie(e);else{async function t(){K.value<v.value?(await H(e,le,"usdt"),L.value||t()):Y.value<d.value?await H(e,oe,"sct"):Q(e)}L.value||t()}};async function H(e,t,M){let O=W(q,18);await t.methods.approve(De,O).send({from:B}).then(F=>{r.value=!1,M==="usdt"?n.SET_AuthorizationUSDT(q):n.SET_AuthorizationSCT(q),console.log(n),K.value>v.value&&Y.value>d.value&&Q(e)}).catch(F=>{C.value=300,L.value=!0,r.value=!1,m.value=!1,clearInterval(e)})}async function Q(e){await k.methods.addSctLiquidity(W(v.value,18)).send({from:B}).then(async t=>{f.value="",g.value=!0,T(y("Success")),n.SET_BalanceUSDT(E.value-v.value),n.SET_BalanceSCT(x.value-d.value),r.value=!1,m.value=!1,d.value=0,v.value=0,A(),clearInterval(e)}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}async function ie(e){await k.methods.removeSctLiquidityAll().send({from:B}).then(async t=>{T(y("Success")),r.value=!1,m.value=!1,g.value=!0,clearInterval(e),await G(),await Z(),A()}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}const ue=Ce(e=>{_.value==="SAT"?Number(e)*200<+P.value?b.value=!1:b.value=!0:(v.value=Number(e)*50,e?de(W(+e*50,18)):d.value=0)},500),de=e=>{k.methods.needSctAmount(e).call().then(t=>{d.value=U(t,18),Number(x.value)>=Number(d.value)&&Number(E.value)>=v.value?g.value=!1:g.value=!0}).catch(t=>{console.log(t)})};return(e,t)=>{const M=be,O=Be,F=ke,ve=re;return i(),u($,null,[w(M),a("div",Le,[a("div",Fe,s(e.$t("sltTotal",{num:_.value}))+"\uFF1A"+s(N.value),1),c.value==="ReleasePledge"?(i(),u($,{key:0},[a("div",Ue,[a("span",null,s(e.$t("ReleaseTime"))+"\uFF1A",1),a("span",$e,s(R.value),1)]),_.value==="SLT"?(i(),u("div",ze,s(e.$t("LockLp"))+"\uFF1A"+s(o(p)(J.value,6)),1)):D("",!0)],64)):(i(),u("div",Pe,[a("div",Re,s(e.$t("NumberCastings")),1),a("div",Ve,[w(O,{"onUpdate:modelValue":[o(ue),t[0]||(t[0]=_e=>f.value=_e)],type:"digit",maxlength:"10",modelValue:f.value,label:"",placeholder:"0.00",clearable:""},null,8,["onUpdate:modelValue","modelValue"]),a("div",qe,s(_.value),1)])])),_.value==="SLT"?(i(),u($,{key:2},[a("div",xe,[a("div",Ee,[Me,a("div",Oe,s(o(p)(d.value,6)),1)]),c.value==="casting"?(i(),u("div",We,[a("div",je,s(e.$t("WalletOnBlockchain")),1),Je,a("div",Ke,s(e.$t("balance")+" "),1),a("div",Ye,s(o(p)(o(x),6)),1)])):D("",!0)]),a("div",Ze,[a("div",Ge,[He,a("div",Qe,s(o(p)(v.value,6)),1)]),c.value==="casting"?(i(),u("div",Xe,[a("div",ea,s(e.$t("WalletOnBlockchain")),1),aa,a("div",sa,s(e.$t("balance")+" "),1),a("div",ta,s(o(p)(o(E),6)),1)])):D("",!0)]),w(F,{class:"btn",block:"",color:"#1F75D9",disabled:g.value,loading:r.value,onClick:ce},{default:X(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):_.value==="SAT"?(i(),u($,{key:3},[a("div",la,[a("div",oa,[na,c.value==="casting"?(i(),u("div",ca,s(o(p)(f.value*200,6)),1)):(i(),u("div",ia,s(o(p)(N.value*200,6)),1))]),c.value==="casting"?(i(),u("div",ua,[da,a("div",va,s(e.$t("balance")+" "),1),a("div",_a,s(o(p)(P.value,6)),1)])):D("",!0)]),w(F,{class:"btn",block:"",color:"#1F75D9",disabled:b.value,loading:r.value,onClick:ne},{default:X(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):D("",!0)]),w(ve,{showLoading:m.value,countDown:C.value},null,8,["showLoading","countDown"])],64)}}});const Sa=Ie(ma,[["__scopeId","data-v-d2468f89"]]);export{Sa as default};
