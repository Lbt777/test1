import{d as I,r as c,u as K,I as O,W as H,e as h,f as C,g as m,l as n,t as u,h as S,j as D,B as J,m as P,F as W,k as X,am as Y,a1 as g,aV as Z,a0 as G,aW as ee,K as ae,a5 as se,L as te,G as ne,y as le,z as _e,n as oe,R as F,v as ie,A as ue}from"./index.a5df18bd.js";/* empty css              *//* empty css               */import{_ as ve,a as ge,b as ce,c as re,d as de,e as be,f as pe,g as me,h as fe,i as he,j as Ce,k as Se,l as De,m as Qe,n as Te,o as Ge,p as Ue,q as ye,r as we,s as Be,t as $e,u as ke,v as xe,w as qe,x as We,y as Fe,z as Ve,A as Ie,B as ze,C as Ae,D as Ee,E as Ne,F as Re,G as Me,H as je,I as Le,J as Ke,K as Oe,L as He,M as Je,N as Pe,O as Xe,P as Ye,Q as Ze,R as ea,S as aa,T as sa,U as ta,V as na,W as la,X as _a,Y as oa,Z as ia,$ as ua,a0 as va,a1 as ga,a2 as ca,a3 as ra,a4 as da,a5 as ba,a6 as pa}from"./zhuanzeng.ef96b920.js";import{_ as z}from"./head_down.472857a1.js";import{D as V}from"./Debounce.72fd6245.js";const U=f=>(le("data-v-16db1468"),f=f(),_e(),f),ma={key:0,class:"main"},fa={class:"box"},ha={class:"blance"},Ca={class:"sles"},Sa={class:"img"},Da=["src"],Qa=U(()=>n("div",{class:"rig"},[n("img",{src:z,alt:""})],-1)),Ta={class:"box"},Ga={class:"blance"},Ua={class:"sles"},ya={class:"img"},wa=["src"],Ba=U(()=>n("div",{class:"rig"},[n("img",{src:z,alt:""})],-1)),$a=["onClick"],ka={class:"van-action-sheet__name"},xa=U(()=>n("div",{class:"van-action-sheet__gap"},null,-1)),qa=I({name:"exchange"}),Wa=I({...qa,setup(f){const{proxy:y}=oe(),w=localStorage.getItem("language"),v=c(!0),A=K(),b=c(!1),Q=c(0),T=300,p=c(!1),e=c([]),o=c([{name:"GQC",img:"gqcNew",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"SCT",img:"sct",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"USDT",img:"usdt",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"GQQ",img:"guquanquan",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"WUSD",img:"wusd",balance:0,value:"",inputDisabled:!1,disableds:!1}]),r=c([]),E=()=>{A.push("exchangeRecords")},B=(s,a)=>{Q.value=s,$(s,a),b.value=!0},$=(s,a,_)=>{r.value.length===0&&(r.value=o.value);let i=[];if(o.value=r.value,s===0)o.value.filter(t=>t.disableds=!1),i=o.value,a.name==="SCT"&&(e.value[1]=o.value.filter(t=>t.name==="USDT")[0]),a.name==="USDT"&&(e.value[1]=o.value.filter(t=>t.name==="SCT")[0]),a.name==="GQQ"&&(["USDT","WUSD"].includes(e.value[1].name)||(e.value[1]=o.value.filter(t=>t.name==="WUSD")[0])),a.name==="WUSD"&&(e.value[1]=o.value.filter(t=>t.name==="GQQ")[0]),a.name==="GQC"&&["GQQ","WUSD"].includes(e.value[1].name)&&(e.value[1]=o.value.filter(t=>!["GQQ","WUSD","GQC"].includes(t.name))[0]);else if(s===1){["GQC","SCT","USDT"].includes(e.value[0].name)&&o.value.forEach(d=>{["GQQ","WUSD"].includes(d.name)&&(d.disableds=!0)}),i=o.value;let t=[];e.value[0].name==="SCT"?t=["SCT","GQC"]:e.value[0].name==="USDT"?t=["USDT","GQC"]:e.value[0].name==="GQQ"?t=["SCT","GQC","GQQ"]:e.value[0].name==="WUSD"?t=["SCT","GQC","USDT","WUSD"]:t=["GQC"],i=o.value.filter(d=>!t.includes(d.name))}else i=r.value;_&&(e.value[0].value="",e.value[1].value=""),o.value=i},N=async()=>{Y.confirm({title:g("titleTip"),confirmButtonColor:"#1F75D9",confirmButtonText:g("Confirm"),cancelButtonText:g("cancel"),message:g("ConfirmExchange",{num0:e.value[0].value,num1:e.value[1].value,type0:e.value[0].name,type1:e.value[1].name})}).then(async()=>{(await Z({fromToken:e.value[0].name,fromAmount:+e.value[0].value,toToken:e.value[1].name})).status===200&&(e.value[0].value="",e.value[1].value="",v.value=!0,x(),G(g("exchange")+g("Success")))}).catch(()=>{})},R=s=>{s.disableds||(e.value[Q.value]=s,v.value=!0,b.value=!1,$(Q.value,s,"Reset"))},M=V(s=>{if(p.value!==!0){if(+s>e.value[0].balance){G((w==="zh"?e.value[0].name:"")+g("credit")),e.value[0].value="",e.value[1].value="",v.value=!0;return}k(+s,1)}},T),j=V(s=>{if(p.value!==!0){if(+s>e.value[1].balance){G((w==="zh"?e.value[1].name:"")+g("credit")),e.value[0].value="",e.value[1].value="",v.value=!0;return}k(+s,0)}},T),k=async(s,a)=>{let _={fromToken:e.value[0].name,toToken:e.value[1].name};a===0?_.toAmount=s:_.fromAmount=s;let i=await ee(_);i.status===200&&(p.value=!0,e.value[a].value=i.data,y.$refs.input1.blur(),y.$refs.input2.blur(),setTimeout(()=>{v.value=!1},T))};O(async()=>{await x(),e.value=o.value.filter(s=>["GQC","SCT"].includes(s.name))});async function x(){let s=await H(),a=[];r.value.length?a=r.value:a=o.value,a.forEach(_=>{_.name==="GQC"?_.balance=s.data.gqcBalance:_.name==="SCT"?_.balance=s.data.sctBalance:_.name==="USDT"?_.balance=s.data.usdtBalance:_.name==="GQQ"?_.balance=s.data.gqqBalance:_.name==="WUSD"&&(_.balance=s.data.wusdBalance)}),o.value=a}const q=s=>new URL(Object.assign({"../../assets/D_bg.png":ve,"../../assets/D_bg_nft.png":ge,"../../assets/D_bg_sat.png":ce,"../../assets/D_bg_sct.png":re,"../../assets/D_img.png":de,"../../assets/D_img_sat.png":be,"../../assets/D_img_sct.png":pe,"../../assets/Invitation.png":me,"../../assets/assets.png":fe,"../../assets/assets_a.png":he,"../../assets/assetss_bg.png":Ce,"../../assets/banner.png":Se,"../../assets/banner1.png":De,"../../assets/bg.png":Qe,"../../assets/blindBox.png":Te,"../../assets/blindBox_g.png":Ge,"../../assets/choice.png":Ue,"../../assets/chongzhi.png":ye,"../../assets/coins.png":we,"../../assets/copy.png":Be,"../../assets/copyW.png":$e,"../../assets/cqc.png":ke,"../../assets/gqcNew.png":xe,"../../assets/guadan.png":qe,"../../assets/guquanbi.png":We,"../../assets/guquanquan.png":Fe,"../../assets/head_down.png":Ve,"../../assets/head_language.png":Ie,"../../assets/huo0.png":ze,"../../assets/huo1.png":Ae,"../../assets/huo2.png":Ee,"../../assets/huo3.png":Ne,"../../assets/invitationBg.png":Re,"../../assets/invitationCardBg.png":Me,"../../assets/jiaoyimingxi.png":je,"../../assets/line.png":Le,"../../assets/loading.png":Ke,"../../assets/lp.png":Oe,"../../assets/mode1.png":He,"../../assets/mode2.png":Je,"../../assets/nav.png":Pe,"../../assets/noMore.png":Xe,"../../assets/r_wusd.png":Ye,"../../assets/s_left.png":Ze,"../../assets/s_rig.png":ea,"../../assets/sat.png":aa,"../../assets/satbg.png":sa,"../../assets/sct.png":ta,"../../assets/sctbg.png":na,"../../assets/success.png":la,"../../assets/suipian.png":_a,"../../assets/tixian.png":oa,"../../assets/transaction.png":ia,"../../assets/transactionBG.png":ua,"../../assets/transaction_a.png":va,"../../assets/unChoice.png":ga,"../../assets/usdt.png":ca,"../../assets/w_down.png":ra,"../../assets/withdrawal.png":da,"../../assets/wusd.png":ba,"../../assets/zhuanzeng.png":pa})[`../../assets/${s}.png`],self.location).href;return(s,a)=>{const _=ae,i=se,t=te,d=ne;return h(),C(W,null,[m(_,{right:!0,onClickRight:E}),e.value.length?(h(),C("div",ma,[n("div",fa,[n("div",ha,u(s.$t("balance"))+"\uFF1A"+u(S(F)(e.value[0].balance))+" "+u(e.value[0].name==="GQQ"?"":e.value[0].name),1),m(i,{class:"input",ref:"input1",modelValue:e.value[0].value,"onUpdate:modelValue":[a[1]||(a[1]=l=>e.value[0].value=l),a[2]||(a[2]=l=>S(M)(e.value[0].value.toString()))],center:"","input-align":"right",clearable:"",placeholder:"0.00",type:"number",onClear:a[3]||(a[3]=l=>v.value=!0),onFocus:a[4]||(a[4]=l=>p.value=!1)},{label:D(()=>[n("div",Ca,[n("div",Sa,[n("img",{src:q(e.value[0].img),alt:""},null,8,Da)]),n("div",{class:"type",onClick:a[0]||(a[0]=l=>B(0,e.value[0]))},u(e.value[0].name==="GQQ"?s.$t("EquitySecurities"):e.value[0].name),1),Qa])]),_:1},8,["modelValue"])]),n("div",Ta,[n("div",Ga,u(s.$t("balance"))+"\uFF1A"+u(S(F)(e.value[1].balance))+" "+u(e.value[1].name==="GQQ"?"":e.value[1].name),1),m(i,{class:"input",ref:"input2",modelValue:e.value[1].value,"onUpdate:modelValue":[a[6]||(a[6]=l=>e.value[1].value=l),a[7]||(a[7]=l=>S(j)(e.value[1].value.toString()))],center:"","input-align":"right",clearable:"",placeholder:"0.00",type:"number",onClear:a[8]||(a[8]=l=>v.value=!0),onFocus:a[9]||(a[9]=l=>p.value=!1)},{label:D(()=>[n("div",Ua,[n("div",ya,[n("img",{src:q(e.value[1].img),alt:""},null,8,wa)]),n("div",{class:"type",onClick:a[5]||(a[5]=l=>B(1,e.value[1]))},u(e.value[1].name==="GQQ"?s.$t("EquitySecurities"):e.value[1].name),1),Ba])]),_:1},8,["modelValue"])]),m(t,{class:"btn",color:"#1F75D9",disabled:v.value,block:"",onClick:N},{default:D(()=>[J(u(s.$t("Confirm")),1)]),_:1},8,["disabled"])])):P("",!0),m(d,{show:b.value,"onUpdate:show":a[11]||(a[11]=l=>b.value=l),"close-on-click-action":""},{default:D(()=>[(h(!0),C(W,null,X(o.value,(l,L)=>(h(),C("div",{class:"van-action-sheet__content",key:L,onClick:Fa=>R(l)},[n("button",{class:ie(["van-action-sheet__item",l.disableds?"van-action-sheet__item--disabled":""]),type:"button"},[n("span",ka,u(l.name==="GQQ"?s.$t("EquitySecurities"):l.name),1)],2)],8,$a))),128)),xa,n("button",{class:"van-action-sheet__cancel",type:"button",onClick:a[10]||(a[10]=l=>b.value=!1)},u(s.$t("cancel")),1)]),_:1},8,["show"])],64)}}});const Ra=ue(Wa,[["__scopeId","data-v-16db1468"]]);export{Ra as default};
