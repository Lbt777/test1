import{d as $,r as d,c as R,a as f,w as G,o as J,x as T,K as b,I as L,b as h,e as N,f as s,j as g,F as k,J as W,g as u,C as x,E as Y,h as V,M as q,N as H,U as Q,T as D,O as S,a4 as X,W as Z,t as U,_ as ee,$ as ae,G as ne,B as le,Y as se}from"./index.ca884bc4.js";/* empty css              *//* empty css               *//* empty css               */import{t as te}from"./index.57133cf9.js";import{_ as oe}from"./_plugin-vue_export-helper.cdc0426e.js";const ce={class:"page"},ue={class:"uniswap"},re={class:"content"},de={class:"up"},ie={class:"currency"},ve={class:"drop"},me=$({name:"Nft"}),pe=$({...me,setup(_e){const a=d([{num:"",currency:"NF",balance:0},{num:"",currency:"USDT",balance:0}]),i=d(15),v=d(0),c=d(!1),y=d(!0),{proxy:A}=q(),o=R(),m=f(()=>U(o.address)),z=f(()=>U(o.nonce)),p=f(()=>o.nft),F=f(()=>o.usdt);G(z,(e,l)=>{ee(o,async n=>{n&&(console.log("\u5DF2\u767B\u5F55"),w())})}),J(async()=>{o.nonce!==null&&A.userAuthorization(o,e=>{e&&(console.log("\u5DF2\u767B\u5F55"),w())})});const w=async()=>{console.log("nft",p.value),console.log("usdt",F.value),await B(),await j()},I=()=>{let e=+a.value[0].num;e&&e<=a.value[0].balance?(y.value=!1,i.value==15?a.value[1].num=b(e*v.value*(100-i.value)/100,5):a.value[1].num=b(e/v.value*(100-i.value)/100,5)):y.value=!0},O=()=>{D(S("jieshu"))},E=e=>{c.value=!0;let l=H(a.value[0].num,18);console.log(l,a.value[0].currency);try{a.value[0].currency=="NF"?C(l,"sell"):F.value.methods.approve(Q,l).send({from:m.value}).then(n=>{console.log("\u5DF2\u6388\u6743",n),C(l,"buy")}).catch(n=>{console.log(n),c.value=!1})}catch{c.value=!1}},C=(e,l)=>{let n=p.value.methods[l];n(e).send({from:m.value}).then(t=>{c.value=!1,D(S("business")),B()}).catch(t=>{console.log(t),c.value=!1})},B=async()=>{let e=await p.value.methods.balanceOf(m.value).call(),l=await F.value.methods.balanceOf(m.value).call(),n=Number(T(e,18)),t=Number(T(l,18));console.log("nft:"+n,"usdt:"+t),a.value[0].currency=="NF"?(a.value[0].balance=n,a.value[1].balance=t):(a.value[0].balance=t,a.value[1].balance=n)},j=async()=>{let e=await p.value.methods.getAmountUsdtOut(1e5).call();v.value=b(+e/1e5,5),console.log("nft\u4EF7\u683C",v.value)};return(e,l)=>{const n=X,t=se,K=L,M=Z;return h(),N(k,null,[s("div",ce,[g(n,{class:"title",title:e.$t("NFTtransaction"),fixed:"",placeholder:"",border:!1},null,8,["title"]),s("div",ue,[s("div",re,[(h(!0),N(k,null,W(a.value,(r,_)=>(h(),N("div",{class:"exchange",key:_},[s("div",de,[g(t,{modelValue:r.num,"onUpdate:modelValue":[P=>r.num=P,I],type:"number",center:"",label:"",readonly:!!_,placeholder:"0.00"},{button:x(()=>[s("div",ie,u(r.currency),1)]),_:2},1032,["modelValue","onUpdate:modelValue","readonly"])]),s("div",{class:ae(["down",_?"bottom":""])},u(e.$t("balance"))+"\uFF1A"+u(V(b)(r.balance,5)),3),_==0?(h(),ne(K,{key:0,onClick:O,class:"icon",name:"exchange"})):le("",!0)]))),128)),s("div",ve,[s("span",null,u(e.$t("Slippage")),1),s("span",null,u(i.value)+"%",1)]),g(M,{class:"btn",loading:c.value,disabled:y.value,type:"primary",round:"",size:"small",color:"#2560F9",onClick:l[0]||(l[0]=r=>E(a.value))},{default:x(()=>[Y(u(e.$t("exchange")),1)]),_:1},8,["loading","disabled"])])])]),g(V(te),{active:"3"})],64)}}});const Ne=oe(pe,[["__scopeId","data-v-4ecb1f7c"]]);export{Ne as default};
