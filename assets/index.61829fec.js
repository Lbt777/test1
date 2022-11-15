import{_ as re}from"./index.40fcac04.js";import{d as ae,c as me,I as he,r as l,h as o,b as h,J as fe,o as pe,X as ge,al as U,e as i,f as u,g as A,l as a,t as s,F as $,m as D,j as Y,B as ee,n as Te,aZ as ye,a1 as T,a2 as y,a_ as Se,au as W,a6 as be,L as ke,y as Be,z as we,a$ as Ae,U as f,M as De,A as Ce}from"./index.62a7870d.js";/* empty css               */import{_ as Ie}from"./sct.56d54253.js";import{_ as se}from"./usdt.0ec2b9d9.js";import{D as Le}from"./Debounce.72fd6245.js";const S=C=>(Be("data-v-72c24d6c"),C=C(),we(),C),Ne={class:"pages"},Fe={class:"time"},Ue={class:"time"},$e={style:{color:"#FF765A"}},ze={key:0,class:"time"},Pe={key:1,class:"num"},Re={class:"title"},Ve={class:"input"},qe={class:"unit"},xe={class:"item"},Ee={class:"bg"},Me=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:Ie,alt:""})]),a("div",{class:"name"},"SCT")],-1)),Oe={class:"rig"},We={key:0,class:"tipsBox"},Ze={class:"e_tips"},je=S(()=>a("div",{class:"e_tips e_tips_color"}," SCT ",-1)),Ge={class:"e_tips"},Je={class:"e_tips e_tips_color"},Ke={class:"item"},Qe={class:"bg"},Xe=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USTD")],-1)),He={class:"rig"},Ye={key:0,class:"tipsBox"},ea={class:"e_tips"},aa=S(()=>a("div",{class:"e_tips e_tips_color"}," USTD ",-1)),sa={class:"e_tips"},ta={class:"e_tips e_tips_color"},la={class:"item"},oa={class:"bg"},na=S(()=>a("div",{class:"left"},[a("div",{class:"img"},[a("img",{src:se,alt:""})]),a("div",{class:"name"},"USDT")],-1)),ca={key:0,class:"rig"},ia={key:1,class:"rig"},ua={key:0,class:"tipsBox"},da=S(()=>a("div",{class:"e_tips e_tips_color"}," USDT ",-1)),va={class:"e_tips"},_a={class:"e_tips e_tips_color"},ra=ae({name:"casting"}),ma=ae({...ra,setup(C){const{proxy:Z}=Te(),n=me(),z=he(),c=l(""),_=l(""),I=l(""),P=l(""),d=l(0),v=l(0),p=l(),g=l(!0),b=l(!0),m=l(!1),r=l(!1),L=l(300),R=l("-"),j=l(0),V=l(0),q=1e8,te=2592e6,k=o(h(()=>n.address)),x=h(()=>n.BalanceSCT),E=h(()=>n.BalanceUSDT),B=o(h(()=>n.sctPool)),G=h(()=>n.usdtAuthorizationBalance),J=h(()=>n.sctAuthorizationBalance),le=o(h(()=>n.contractInstance)),oe=o(h(()=>n.SCTcontractInstance)),N=l(!1);fe(async()=>{c.value=z.query.type,_.value=z.query.coin;let e={casting:"casting",ReleasePledge:"ReleasePledge"};z.meta.title=e[c.value]}),pe(async()=>{c.value==="ReleasePledge"&&(_.value==="SLT"&&await Q(),await K()),w()});const ne=async()=>{c.value==="casting"?(await ye({amount:+p.value})).status===200&&(T(y("Success")),p.value="",b.value=!1,w()):(await Se()).status===200&&(T(y("Success")),b.value=!1,w())},w=async()=>{let e=await ge();if(_.value==="SAT"){I.value=e.data.satTotalBalance;let t=e.data.satStakeTime?new Date(e.data.satStakeTime).getTime()+te:0;R.value=Z.getUnixToDate("yyyy-mm-dd hh:mm:ss",t)}else I.value=e.data.sltTotalBalance;P.value=e.data.usdtBalance},K=async()=>{await B.methods.slefLpBurnClimeAmount(k).call().then(e=>{v.value=U(e[0],18),d.value=U(e[1],18),+d.value&&+v.value&&Date.now()/1e3>V.value&&(g.value=!1)}).catch(e=>{console.log(e)})},Q=async()=>{await B.methods.getAddressInfo(k).call().then(e=>{V.value=Number(e.lastStakeTime)+2592e3,R.value=Z.getUnixToDate("yyyy-mm-dd hh:mm:ss",V.value),j.value=U(e.lockNum,18)}).catch(e=>{console.log(e)})},ce=()=>{N.value=!1,m.value=!0,r.value=!0;let e=setInterval(async()=>{L.value>0?L.value--:(clearInterval(e),m.value=!1)},1e3);if(c.value==="ReleasePledge")ie(e);else{async function t(){G.value<v.value?(await X(e,le,"usdt"),N.value||t()):J.value<d.value?await X(e,oe,"sct"):H(e)}N.value||t()}};async function X(e,t,M){let O=W(q,18);await t.methods.approve(Ae,O).send({from:k}).then(F=>{r.value=!1,M==="usdt"?n.SET_AuthorizationUSDT(q):n.SET_AuthorizationSCT(q),console.log(n),G.value>v.value&&J.value>d.value&&H(e)}).catch(F=>{L.value=300,N.value=!0,r.value=!1,m.value=!1,clearInterval(e)})}async function H(e){await B.methods.addSctLiquidity(W(v.value,18)).send({from:k}).then(async t=>{p.value="",g.value=!0,T(y("Success")),n.SET_BalanceUSDT(E.value-v.value),n.SET_BalanceSCT(x.value-d.value),r.value=!1,m.value=!1,d.value=0,v.value=0,w(),clearInterval(e)}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}async function ie(e){await B.methods.removeSctLiquidityAll().send({from:k}).then(async t=>{T(y("Success")),r.value=!1,m.value=!1,g.value=!0,clearInterval(e),await Q(),await K(),w()}).catch(t=>{T(y("Failed")),r.value=!1,m.value=!1,clearInterval(e)})}const ue=Le(e=>{_.value==="SAT"?Number(e)*200<+P.value?b.value=!1:b.value=!0:(v.value=Number(e)*50,e?de(W(+e*50,18)):d.value=0)},500),de=e=>{B.methods.needSctAmount(e).call().then(t=>{d.value=U(t,18),Number(x.value)>=Number(d.value)&&Number(E.value)>=v.value?g.value=!1:g.value=!0}).catch(t=>{console.log(t)})};return(e,t)=>{const M=De,O=be,F=ke,ve=re;return i(),u($,null,[A(M),a("div",Ne,[a("div",Fe,s(e.$t("sltTotal",{num:_.value}))+"\uFF1A"+s(I.value),1),c.value==="ReleasePledge"?(i(),u($,{key:0},[a("div",Ue,[a("span",null,s(e.$t("ReleaseTime"))+"\uFF1A",1),a("span",$e,s(R.value),1)]),_.value==="SLT"?(i(),u("div",ze,s(e.$t("LockLp"))+"\uFF1A"+s(o(f)(j.value,6)),1)):D("v-if",!0)],64)):(i(),u("div",Pe,[a("div",Re,s(e.$t("NumberCastings")),1),a("div",Ve,[A(O,{"onUpdate:modelValue":[o(ue),t[0]||(t[0]=_e=>p.value=_e)],type:"digit",maxlength:"10",modelValue:p.value,label:"",placeholder:"0.00",clearable:""},null,8,["onUpdate:modelValue","modelValue"]),a("div",qe,s(_.value),1)])])),_.value==="SLT"?(i(),u($,{key:2},[a("div",xe,[a("div",Ee,[Me,a("div",Oe,s(o(f)(d.value,6)),1)]),c.value==="casting"?(i(),u("div",We,[a("div",Ze,s(e.$t("WalletOnBlockchain")),1),je,a("div",Ge,s(e.$t("balance")+" "),1),a("div",Je,s(o(f)(o(x),6)),1)])):D("v-if",!0)]),a("div",Ke,[a("div",Qe,[Xe,a("div",He,s(o(f)(v.value,6)),1)]),c.value==="casting"?(i(),u("div",Ye,[a("div",ea,s(e.$t("WalletOnBlockchain")),1),aa,a("div",sa,s(e.$t("balance")+" "),1),a("div",ta,s(o(f)(o(E),6)),1)])):D("v-if",!0)]),A(F,{class:"btn",block:"",color:"#1F75D9",disabled:g.value,loading:r.value,onClick:ce},{default:Y(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):_.value==="SAT"?(i(),u($,{key:3},[a("div",la,[a("div",oa,[na,c.value==="casting"?(i(),u("div",ca,s(o(f)(p.value*200,6)),1)):(i(),u("div",ia,s(o(f)(I.value*200,6)),1))]),c.value==="casting"?(i(),u("div",ua,[da,a("div",va,s(e.$t("balance")+" "),1),a("div",_a,s(o(f)(P.value,6)),1)])):D("v-if",!0)]),A(F,{class:"btn",block:"",color:"#1F75D9",disabled:b.value,loading:r.value,onClick:ne},{default:Y(()=>[ee(s(e.$t(c.value==="casting"?"casting":"ReleasePledge")),1)]),_:1},8,["disabled","loading"])],64)):D("v-if",!0)]),A(ve,{showLoading:m.value,countDown:L.value},null,8,["showLoading","countDown"])],64)}}});const Sa=Ce(ma,[["__scopeId","data-v-72c24d6c"],["__file","D:/work/GQC/src/views/casting/index.vue"]]);export{Sa as default};