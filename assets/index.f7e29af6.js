import{d as N,r as c,u as Y,J as H,Y as J,e as h,f as C,g as m,l as n,t as u,h as S,j as D,B as K,m as F,F as V,k as X,ao as P,a3 as g,aX as Z,a2 as G,aY as ee,a7 as ae,M as se,H as te,y as ne,z as le,n as _e,V as W,v as oe,N as ie,A as ue}from"./index.b6261eea.js";/* empty css              *//* empty css               */import{_ as ve,a as ge,b as ce,c as re,d as de,e as be,f as pe,g as me,h as fe,i as he,j as Ce,k as Se,l as De,m as Qe,n as Te,o as Ge,p as we,q as Ue,r as ye,s as $e,t as ke,u as Be,v as xe,w as qe,x as Fe,y as Ve,z as We,A as Ie,B as Ne,C as ze,D as Ae,E as Ee,F as Me,G as Re,H as je,I as Le,J as Oe,K as Ye,L as He,M as Je,N as Ke,O as Xe,P as Pe,Q as Ze,R as ea,S as aa,T as sa,U as ta,V as na,W as la,X as _a,Y as oa,Z as ia,$ as ua,a0 as va,a1 as ga,a2 as ca,a3 as ra,a4 as da,a5 as ba,a6 as pa}from"./zhuanzeng.ef96b920.js";import{_ as z}from"./head_down.472857a1.js";import{D as I}from"./Debounce.72fd6245.js";const w=f=>(ne("data-v-a1f28664"),f=f(),le(),f),ma={key:0,class:"main"},fa={class:"box"},ha={class:"blance"},Ca={class:"sles"},Sa={class:"img"},Da=["src"],Qa=w(()=>n("div",{class:"rig"},[n("img",{src:z,alt:""})],-1)),Ta={class:"box"},Ga={class:"blance"},wa={class:"sles"},Ua={class:"img"},ya=["src"],$a=w(()=>n("div",{class:"rig"},[n("img",{src:z,alt:""})],-1)),ka=["onClick"],Ba={class:"van-action-sheet__name"},xa=w(()=>n("div",{class:"van-action-sheet__gap"},null,-1)),qa=N({name:"exchange"}),Fa=N({...qa,setup(f){const{proxy:U}=_e(),y=localStorage.getItem("language"),v=c(!0),A=Y(),b=c(!1),Q=c(0),T=300,p=c(!1),e=c([]),o=c([{name:"GQC",img:"gqcNew",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"SCT",img:"sct",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"USDT",img:"usdt",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"GQQ",img:"guquanquan",balance:0,value:"",inputDisabled:!1,disableds:!1},{name:"WUSD",img:"wusd",balance:0,value:"",inputDisabled:!1,disableds:!1}]),r=c([]),E=()=>{A.push("exchangeRecords")},$=(s,a)=>{Q.value=s,k(s,a),b.value=!0},k=(s,a,_)=>{r.value.length===0&&(r.value=o.value);let i=[];if(o.value=r.value,s===0)o.value.filter(t=>t.disableds=!1),i=o.value,a.name==="SCT"&&(e.value[1]=o.value.filter(t=>t.name==="USDT")[0]),a.name==="USDT"&&(e.value[1]=o.value.filter(t=>t.name==="SCT")[0]),a.name==="GQQ"&&(["USDT","WUSD"].includes(e.value[1].name)||(e.value[1]=o.value.filter(t=>t.name==="WUSD")[0])),a.name==="WUSD"&&(e.value[1]=o.value.filter(t=>t.name==="GQQ")[0]),a.name==="GQC"&&["GQQ","WUSD"].includes(e.value[1].name)&&(e.value[1]=o.value.filter(t=>!["GQQ","WUSD","GQC"].includes(t.name))[0]);else if(s===1){["GQC","SCT","USDT"].includes(e.value[0].name)&&o.value.forEach(d=>{["GQQ","WUSD"].includes(d.name)&&(d.disableds=!0)}),i=o.value;let t=[];e.value[0].name==="SCT"?t=["SCT","GQC"]:e.value[0].name==="USDT"?t=["USDT","GQC"]:e.value[0].name==="GQQ"?t=["SCT","GQC","GQQ"]:e.value[0].name==="WUSD"?t=["SCT","GQC","USDT","WUSD"]:t=["GQC"],i=o.value.filter(d=>!t.includes(d.name))}else i=r.value;_&&(e.value[0].value="",e.value[1].value=""),o.value=i},M=async()=>{P.confirm({title:g("titleTip"),confirmButtonColor:"#1F75D9",confirmButtonText:g("Confirm"),cancelButtonText:g("cancel"),message:g("ConfirmExchange",{num0:e.value[0].value,num1:e.value[1].value,type0:e.value[0].name,type1:e.value[1].name})}).then(async()=>{(await Z({fromToken:e.value[0].name,fromAmount:+e.value[0].value,toToken:e.value[1].name})).status===200&&(e.value[0].value="",e.value[1].value="",v.value=!0,x(),G(g("exchange")+g("Success")))}).catch(()=>{})},R=s=>{s.disableds||(e.value[Q.value]=s,v.value=!0,b.value=!1,k(Q.value,s,"Reset"))},j=I(s=>{if(p.value!==!0){if(+s>e.value[0].balance){G((y==="zh"?e.value[0].name:"")+g("credit")),e.value[0].value="",e.value[1].value="",v.value=!0;return}B(+s,1)}},T),L=I(s=>{if(p.value!==!0){if(+s>e.value[1].balance){G((y==="zh"?e.value[1].name:"")+g("credit")),e.value[0].value="",e.value[1].value="",v.value=!0;return}B(+s,0)}},T),B=async(s,a)=>{let _={fromToken:e.value[0].name,toToken:e.value[1].name};a===0?_.toAmount=s:_.fromAmount=s;let i=await ee(_);i.status===200&&(p.value=!0,e.value[a].value=i.data,U.$refs.input1.blur(),U.$refs.input2.blur(),setTimeout(()=>{v.value=!1},T))};H(async()=>{await x(),e.value=o.value.filter(s=>["GQC","SCT"].includes(s.name))});async function x(){let s=await J(),a=[];r.value.length?a=r.value:a=o.value,a.forEach(_=>{_.name==="GQC"?_.balance=s.data.gqcBalance:_.name==="SCT"?_.balance=s.data.sctBalance:_.name==="USDT"?_.balance=s.data.usdtBalance:_.name==="GQQ"?_.balance=s.data.gqqBalance:_.name==="WUSD"&&(_.balance=s.data.wusdBalance)}),o.value=a}const q=s=>new URL(Object.assign({"../../assets/D_bg.png":ve,"../../assets/D_bg_nft.png":ge,"../../assets/D_bg_sat.png":ce,"../../assets/D_bg_sct.png":re,"../../assets/D_img.png":de,"../../assets/D_img_sat.png":be,"../../assets/D_img_sct.png":pe,"../../assets/Invitation.png":me,"../../assets/assets.png":fe,"../../assets/assets_a.png":he,"../../assets/assetss_bg.png":Ce,"../../assets/banner.png":Se,"../../assets/banner1.png":De,"../../assets/bg.png":Qe,"../../assets/blindBox.png":Te,"../../assets/blindBox_g.png":Ge,"../../assets/choice.png":we,"../../assets/chongzhi.png":Ue,"../../assets/coins.png":ye,"../../assets/copy.png":$e,"../../assets/copyW.png":ke,"../../assets/cqc.png":Be,"../../assets/gqcNew.png":xe,"../../assets/guadan.png":qe,"../../assets/guquanbi.png":Fe,"../../assets/guquanquan.png":Ve,"../../assets/head_down.png":We,"../../assets/head_language.png":Ie,"../../assets/huo0.png":Ne,"../../assets/huo1.png":ze,"../../assets/huo2.png":Ae,"../../assets/huo3.png":Ee,"../../assets/invitationBg.png":Me,"../../assets/invitationCardBg.png":Re,"../../assets/jiaoyimingxi.png":je,"../../assets/line.png":Le,"../../assets/loading.png":Oe,"../../assets/lp.png":Ye,"../../assets/mode1.png":He,"../../assets/mode2.png":Je,"../../assets/nav.png":Ke,"../../assets/noMore.png":Xe,"../../assets/r_wusd.png":Pe,"../../assets/s_left.png":Ze,"../../assets/s_rig.png":ea,"../../assets/sat.png":aa,"../../assets/satbg.png":sa,"../../assets/sct.png":ta,"../../assets/sctbg.png":na,"../../assets/success.png":la,"../../assets/suipian.png":_a,"../../assets/tixian.png":oa,"../../assets/transaction.png":ia,"../../assets/transactionBG.png":ua,"../../assets/transaction_a.png":va,"../../assets/unChoice.png":ga,"../../assets/usdt.png":ca,"../../assets/w_down.png":ra,"../../assets/withdrawal.png":da,"../../assets/wusd.png":ba,"../../assets/zhuanzeng.png":pa})[`../../assets/${s}.png`],self.location).href;return(s,a)=>{const _=ie,i=ae,t=se,d=te;return h(),C(V,null,[m(_,{right:!0,onClickRight:E}),e.value.length?(h(),C("div",ma,[n("div",fa,[n("div",ha,u(s.$t("balance"))+"\uFF1A"+u(S(W)(e.value[0].balance))+" "+u(e.value[0].name==="GQQ"?"":e.value[0].name),1),m(i,{class:"input",ref:"input1",modelValue:e.value[0].value,"onUpdate:modelValue":[a[1]||(a[1]=l=>e.value[0].value=l),a[2]||(a[2]=l=>S(j)(e.value[0].value.toString()))],center:"","input-align":"right",clearable:"",placeholder:"0.00",type:"number",onClear:a[3]||(a[3]=l=>v.value=!0),onFocus:a[4]||(a[4]=l=>p.value=!1)},{label:D(()=>[n("div",Ca,[n("div",Sa,[n("img",{src:q(e.value[0].img),alt:""},null,8,Da)]),n("div",{class:"type",onClick:a[0]||(a[0]=l=>$(0,e.value[0]))},u(e.value[0].name==="GQQ"?s.$t("EquitySecurities"):e.value[0].name),1),Qa])]),_:1},8,["modelValue"])]),n("div",Ta,[n("div",Ga,u(s.$t("balance"))+"\uFF1A"+u(S(W)(e.value[1].balance))+" "+u(e.value[1].name==="GQQ"?"":e.value[1].name),1),m(i,{class:"input",ref:"input2",modelValue:e.value[1].value,"onUpdate:modelValue":[a[6]||(a[6]=l=>e.value[1].value=l),a[7]||(a[7]=l=>S(L)(e.value[1].value.toString()))],center:"","input-align":"right",clearable:"",placeholder:"0.00",type:"number",onClear:a[8]||(a[8]=l=>v.value=!0),onFocus:a[9]||(a[9]=l=>p.value=!1)},{label:D(()=>[n("div",wa,[n("div",Ua,[n("img",{src:q(e.value[1].img),alt:""},null,8,ya)]),n("div",{class:"type",onClick:a[5]||(a[5]=l=>$(1,e.value[1]))},u(e.value[1].name==="GQQ"?s.$t("EquitySecurities"):e.value[1].name),1),$a])]),_:1},8,["modelValue"])]),m(t,{class:"btn",color:"#1F75D9",disabled:v.value,block:"",onClick:M},{default:D(()=>[K(u(s.$t("Confirm")),1)]),_:1},8,["disabled"])])):F("v-if",!0),F(` <van-action-sheet v-model:show="show" :actions="actions" close-on-click-action @select="onSelect"\r
    :cancel-text="$t('cancel')" /> `),m(d,{show:b.value,"onUpdate:show":a[11]||(a[11]=l=>b.value=l),"close-on-click-action":""},{default:D(()=>[(h(!0),C(V,null,X(o.value,(l,O)=>(h(),C("div",{class:"van-action-sheet__content",key:O,onClick:Va=>R(l)},[n("button",{class:oe(["van-action-sheet__item",l.disableds?"van-action-sheet__item--disabled":""]),type:"button"},[n("span",Ba,u(l.name==="GQQ"?s.$t("EquitySecurities"):l.name),1)],2)],8,ka))),128)),xa,n("button",{class:"van-action-sheet__cancel",type:"button",onClick:a[10]||(a[10]=l=>b.value=!1)},u(s.$t("cancel")),1)]),_:1},8,["show"])],64)}}});const Ma=ue(Fa,[["__scopeId","data-v-a1f28664"],["__file","D:/work/GQC/src/views/exchange/index.vue"]]);export{Ma as default};
