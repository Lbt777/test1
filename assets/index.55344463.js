import{_ as de}from"./index.ebf9d3d6.js";import{d as P,r as m,o as ue,e as o,f as i,l as a,ae as pe,t as _,af as I,m as r,v as z,F as w,g as R,j as p,B as F,k as E,L as Q,y as j,z as M,A as U,H as ve,u as he,c as me,b as A,I as ye,P as be,ag as fe,ah as we,ai as $e,aj as ke,h as S,E as Ce,s as O,K as De,Q as Se,a3 as qe,p as G,R as Te,ak as Re,al as Fe,a0 as T,a1 as g,am as Be,an as Ne}from"./index.a5df18bd.js";/* empty css               *//* empty css               */import{_ as W,a as V,b as J,c as K,d as H,e as X,f as Y,g as Z,h as x,i as ss,j as es,k as as,l as ts,m as ns,n as _s,o as os,p as is,q as ls,r as cs,s as gs,t as rs,u as ds,v as us,w as ps,x as vs,y as hs,z as ms,A as ys,B as bs,C as fs,D as ws,E as $s,F as ks,G as Cs,H as Ds,I as Ss,J as qs,K as Ts,L as Rs,M as Fs,N as Bs,O as Ns,P as Is,Q as Os,R as zs,S as Ps,T as Ls,U as As,V as Gs,W as Es,X as Qs,Y as js,Z as Ms,$ as Us,a0 as Ws,a1 as Vs,a2 as Js,a3 as Ks,a4 as Hs,a5 as Xs,a6 as Ys}from"./zhuanzeng.ef96b920.js";import{_ as Ie}from"./guquanquan.edd92b80.js";import{_ as Oe}from"./wusd.5810a976.js";const Zs=v=>(j("data-v-2caf5d9e"),v=v(),M(),v),ze={class:"items"},Pe={class:"i_up"},Le={class:"left"},Ae={class:"icon"},Ge=["src"],Ee={class:"main"},Qe={class:"up"},je={class:"mian_center"},Me={class:"up_name"},Ue={key:0,class:"down"},We={class:"rig"},Ve={class:"blac"},Je={class:"buyNumber"},Ke={key:0,class:"buy"},He={key:1,class:"buyTips"},Xe={class:"buyTime"},Ye={key:0,class:"buyTips"},Ze={key:0,class:"i_down"},xe={class:"m_tips"},sa={key:0,class:"NFT"},ea={class:"s_images"},aa=["src"],ta={class:"s_num"},na={key:1,class:"GQC"},_a={class:"m_list"},oa=Zs(()=>a("div",{class:"m_image1"},[a("img",{src:Ie,alt:""})],-1)),ia={class:"nums"},la={class:"m_list"},ca=Zs(()=>a("div",{class:"m_image2"},[a("img",{src:Oe,alt:""})],-1)),ga={class:"nums"},ra={key:0,class:"m_list"},da={class:"m_image3"},ua=["src"],pa=["src"],va={class:"nums"},ha=P({__name:"item",props:{item:{type:Object,required:!0},type:{type:String,required:!1},src:{type:String,required:!0}},emits:["CancelPurchase"],setup(v,{emit:d}){const t=v,y=m("en");ue(()=>{y.value=localStorage.getItem("language")||"en"});const h=n=>new URL(Object.assign({"../../assets/D_bg.png":W,"../../assets/D_bg_nft.png":V,"../../assets/D_bg_sat.png":J,"../../assets/D_bg_sct.png":K,"../../assets/D_img.png":H,"../../assets/D_img_sat.png":X,"../../assets/D_img_sct.png":Y,"../../assets/Invitation.png":Z,"../../assets/assets.png":x,"../../assets/assets_a.png":ss,"../../assets/assetss_bg.png":es,"../../assets/banner.png":as,"../../assets/banner1.png":ts,"../../assets/bg.png":ns,"../../assets/blindBox.png":_s,"../../assets/blindBox_g.png":os,"../../assets/choice.png":is,"../../assets/chongzhi.png":ls,"../../assets/coins.png":cs,"../../assets/copy.png":gs,"../../assets/copyW.png":rs,"../../assets/cqc.png":ds,"../../assets/gqcNew.png":us,"../../assets/guadan.png":ps,"../../assets/guquanbi.png":vs,"../../assets/guquanquan.png":hs,"../../assets/head_down.png":ms,"../../assets/head_language.png":ys,"../../assets/huo0.png":bs,"../../assets/huo1.png":fs,"../../assets/huo2.png":ws,"../../assets/huo3.png":$s,"../../assets/invitationBg.png":ks,"../../assets/invitationCardBg.png":Cs,"../../assets/jiaoyimingxi.png":Ds,"../../assets/line.png":Ss,"../../assets/loading.png":qs,"../../assets/lp.png":Ts,"../../assets/mode1.png":Rs,"../../assets/mode2.png":Fs,"../../assets/nav.png":Bs,"../../assets/noMore.png":Ns,"../../assets/r_wusd.png":Is,"../../assets/s_left.png":Os,"../../assets/s_rig.png":zs,"../../assets/sat.png":Ps,"../../assets/satbg.png":Ls,"../../assets/sct.png":As,"../../assets/sctbg.png":Gs,"../../assets/success.png":Es,"../../assets/suipian.png":Qs,"../../assets/tixian.png":js,"../../assets/transaction.png":Ms,"../../assets/transactionBG.png":Us,"../../assets/transaction_a.png":Ws,"../../assets/unChoice.png":Vs,"../../assets/usdt.png":Js,"../../assets/w_down.png":Ks,"../../assets/withdrawal.png":Hs,"../../assets/wusd.png":Xs,"../../assets/zhuanzeng.png":Ys})[`../../assets/${n}.png`],self.location).href,$=n=>{d("CancelPurchase",n)};return(n,k)=>{const B=Q;return o(),i("div",ze,[a("div",Pe,[a("div",Le,[a("div",Ae,[a("img",{src:h(t.src),alt:""},null,8,Ge)]),a("div",Ee,[a("div",Qe,[a("div",je,[a("div",Me,[a("div",{class:"name",style:pe({fontSize:y.value==="en"&&t.type!=="withdrawal"?"12px":"15px"})},_(t.item.type?n.$t(t.item.action):t.item.action),5),I(n.$slots,"tage",{},void 0,!0)]),t.type!=="pendingOrder"?(o(),i("div",Ue,_(t.item.addtime),1)):r("",!0)]),a("div",We,[a("div",{class:z(["money",t.type==="syntheticRecord"?"syntheticRecord":""])},[a("div",Ve,_(t.type==="syntheticRecord"?n.$t("get"):t.item.totalcoin),1),I(n.$slots,"unit",{},void 0,!0)],2),I(n.$slots,"btn",{},void 0,!0)])]),t.type==="pendingOrder"?(o(),i(w,{key:0},[a("div",Je,[t.item.seller?(o(),i("div",Ke,_(n.$t("PurchaseQuantity"))+"\uFF1A"+_(n.$t("GQC",{num:t.item.outAmount})),1)):r("",!0),y.value!=="en"&&!t.item.seller?(o(),i("div",He,_(n.$t("ExpectedAvailability"))+"\uFF1A"+_(n.$t("GQC",{num:t.item.CurrentlyAvailable})),1)):r("",!0)]),a("div",Xe,_(n.$t("PurchaseTime"))+"\uFF1A"+_(t.item.createdTime),1),y.value==="en"&&!t.item.seller?(o(),i("div",Ye,_(n.$t("ExpectedAvailability"))+"\uFF1A"+_(n.$t("GQC",{num:t.item.CurrentlyAvailable})),1)):r("",!0)],64)):r("",!0)])])]),t.type==="pendingOrder"&&!t.item.seller?(o(),i("div",Ze,[R(B,{round:"",type:"success",size:"mini",color:"#1F75D9",onClick:k[0]||(k[0]=C=>$(t.item.id))},{default:p(()=>[F(_(n.$t("CancelPurchase")),1)]),_:1})])):r("",!0),t.type==="syntheticRecord"?(o(),i("div",{key:1,class:z(["material",y.value==="en"?"flexDirection":""])},[a("div",xe,_(n.$t("SyntheticMaterials")),1),t.item.type==="NFT"?(o(),i("div",sa,[(o(!0),i(w,null,E(t.item.source,(C,f)=>(o(),i("div",{class:"suipian",key:f},[a("div",ea,[a("img",{src:h("12/"+(Number(C.name)-1)),alt:""},null,8,aa)]),a("div",ta,_(n.$t(C.name)),1)]))),128))])):t.item.type==="GQC"?(o(),i("div",na,[a("div",_a,[oa,a("div",ia,_(n.$t("Total",{num:t.item.source[0].amount})),1)]),a("div",la,[ca,a("div",ga,_(n.$t("Total",{num:t.item.source[1].amount})),1)]),t.item.source.length===3?(o(),i("div",ra,[a("div",da,[t.item.source[t.item.source.length-1].name==="13"?(o(),i("img",{key:0,src:h("12/doubles"),alt:""},null,8,ua)):t.item.source[t.item.source.length-1].name==="14"?(o(),i("img",{key:1,src:h("12/vip"),alt:""},null,8,pa)):r("",!0)]),a("div",va,_(n.$t("Total",{num:t.item.source[t.item.source.length-1].amount})),1)])):r("",!0)])):r("",!0)],2)):r("",!0)])}}});const ma=U(ha,[["__scopeId","data-v-2caf5d9e"]]),xs=v=>(j("data-v-94f6a8a3"),v=v(),M(),v),ya={class:"main"},ba={class:"content"},fa=xs(()=>a("div",{class:"unit"},"GQC",-1)),wa=xs(()=>a("div",{class:"unit pendingOrder"},"U",-1)),$a={class:"tags suucess"},ka={key:0,class:"tags syntheticRecordTage"},Ca={key:1,class:"tags suucess"},Da={class:"tags syntheticRecordTage"},Sa={class:"btns"},qa={class:"btns syntheticRecord"},Ta=P({name:"TransactiondDtailed"}),Ra=P({...Ta,setup(v){const d=ve(),t=he(),y=me();let h=m(!1),$=m(300),n=m(!1),k=m(!1);const B=A(()=>G(y.address)),C=A(()=>G(y.withdrawal));let f=m({page:1,size:10});const se=e=>new URL(Object.assign({"../../assets/D_bg.png":W,"../../assets/D_bg_nft.png":V,"../../assets/D_bg_sat.png":J,"../../assets/D_bg_sct.png":K,"../../assets/D_img.png":H,"../../assets/D_img_sat.png":X,"../../assets/D_img_sct.png":Y,"../../assets/Invitation.png":Z,"../../assets/assets.png":x,"../../assets/assets_a.png":ss,"../../assets/assetss_bg.png":es,"../../assets/banner.png":as,"../../assets/banner1.png":ts,"../../assets/bg.png":ns,"../../assets/blindBox.png":_s,"../../assets/blindBox_g.png":os,"../../assets/choice.png":is,"../../assets/chongzhi.png":ls,"../../assets/coins.png":cs,"../../assets/copy.png":gs,"../../assets/copyW.png":rs,"../../assets/cqc.png":ds,"../../assets/gqcNew.png":us,"../../assets/guadan.png":ps,"../../assets/guquanbi.png":vs,"../../assets/guquanquan.png":hs,"../../assets/head_down.png":ms,"../../assets/head_language.png":ys,"../../assets/huo0.png":bs,"../../assets/huo1.png":fs,"../../assets/huo2.png":ws,"../../assets/huo3.png":$s,"../../assets/invitationBg.png":ks,"../../assets/invitationCardBg.png":Cs,"../../assets/jiaoyimingxi.png":Ds,"../../assets/line.png":Ss,"../../assets/loading.png":qs,"../../assets/lp.png":Ts,"../../assets/mode1.png":Rs,"../../assets/mode2.png":Fs,"../../assets/nav.png":Bs,"../../assets/noMore.png":Ns,"../../assets/r_wusd.png":Is,"../../assets/s_left.png":Os,"../../assets/s_rig.png":zs,"../../assets/sat.png":Ps,"../../assets/satbg.png":Ls,"../../assets/sct.png":As,"../../assets/sctbg.png":Gs,"../../assets/success.png":Es,"../../assets/suipian.png":Qs,"../../assets/tixian.png":js,"../../assets/transaction.png":Ms,"../../assets/transactionBG.png":Us,"../../assets/transaction_a.png":Ws,"../../assets/unChoice.png":Vs,"../../assets/usdt.png":Js,"../../assets/w_down.png":Ks,"../../assets/withdrawal.png":Hs,"../../assets/wusd.png":Xs,"../../assets/zhuanzeng.png":Ys})[`../../assets/${e}.png`],self.location).href,b=m([]),c=m(""),D=m("en"),L=m(0);ye(async()=>{c.value=d.query.type,c.value==="withdrawal"?d.meta.title="withdrawalDtailed":c.value==="recharge"?d.meta.title="rechargeDtailed":c.value==="pendingOrder"?d.meta.title="pendingOrderDtailed":c.value==="syntheticRecord"&&(d.meta.title="syntheticRecord"),N(),D.value=localStorage.getItem("language")||"en";let e=await be();L.value=e.data});function ee(e){h.value=!0;let l=setInterval(()=>{$.value>0?$.value--:(clearInterval(l),h.value=!1,T(g("Failed")))},1e3);ae(e,l)}function ae(e,l){C.value.methods.claimReward(e.tokenAddress,e.address,e.amount,e.sign).send({from:B.value,gasLimit:"300000"}).then(s=>{h.value=!1,clearInterval(l),te()}).catch(s=>{console.log(s),T(g("withdrawal")+g("Failed")),h.value=!1,clearInterval(l)})}function te(){t.push({path:"paymentSucceeded",query:{type:"withdrawal"}})}function ne(e,l){l==="recharge"?e.forEach(s=>{s.addtime=s.createdTime,s.totalcoin="+"+s.amount,s.action=s.tokenName,s.img="coins"}):l==="syntheticRecord"?e.forEach(s=>{s.addtime=s.createdTime,s.target=typeof s.target=="string"?JSON.parse(s.target)[0]:s.target,s.source=typeof s.source=="string"?JSON.parse(s.source):s.source,s.action=s.type==="NFT"?"synthesis":"GQCsynthesismode",s.img=s.type==="NFT"?"suipian":"guquanbi"}):l==="pendingOrder"?e.forEach(s=>{s.addtime=s.createdTime,s.totalcoin=s.amount,s.action="buygqc",s.type=999,s.img="coins",s.CurrentlyAvailable=Te(s.amount/L.value)}):l==="withdrawal"&&e.forEach(s=>{s.addtime=s.createdTime,s.totalcoin="-"+Re(s.amount,18),s.action=s.tokenName,s.img="coins"})}async function q(e,l){let s=await e({page:f.value.page,size:f.value.size});b.value=b.value.concat(s.data.records),n.value=!1,s.data.records.length&&ne(b.value,l),s.data.records.length?f.value.page++:k.value=!0,console.log("list",b)}const N=()=>{switch(d.query.type){case"recharge":q(ke,d.query.type);break;case"syntheticRecord":q($e,d.query.type);break;case"pendingOrder":q(we,d.query.type);break;case"withdrawal":q(fe,d.query.type);break}};function _e(e){if(e.type==="NFT"){if(e.target.name==="14")return g("chanceCard",{num:e.target.amount});if(e.target.name==="13")return g("Doubles");if(e.target.type===0)return g("equityCurrencies",{num:e.target.amount})}else return g("equityCurrencies",{num:e.target.amount})}const oe=e=>{Be.confirm({confirmButtonColor:"#1F75D9",confirmButtonText:g("Confirm"),cancelButtonText:g("cancel"),message:g("purchase")}).then(async()=>{(await Ne(e)).status===200?(T(g("cancel")+g("Success")),f.value.page=1,b.value=[],N()):T(g("cancel")+g("Failed"))})};return(e,l)=>{const s=De,ie=Q,le=Se,ce=qe,ge=de;return o(),i(w,null,[R(s),a("div",ya,[a("div",ba,[R(le,{loading:S(n),"onUpdate:loading":l[0]||(l[0]=u=>Ce(n)?n.value=u:n=u),finished:S(k),"finished-text":e.$t("NoMoreData"),onLoad:N,"immediate-check":!1},{default:p(()=>[(o(!0),i(w,null,E(b.value,(u,re)=>(o(),O(S(ma),{item:u,key:re,src:u.img,type:c.value,onCancelPurchase:oe},Fe({_:2},[c.value?void 0:{name:"unit",fn:p(()=>[fa]),key:"0"},c.value==="pendingOrder"?{name:"unit",fn:p(()=>[wa]),key:"1"}:void 0,c.value==="withdrawal"?{name:"tage",fn:p(()=>[a("div",{class:z(["tags",u.unavailable===1?"suucess":"fail"])},[u.unavailable===1?(o(),i(w,{key:0},[F(_(D.value==="en"?e.$t("Success"):e.$t("withdrawal")+e.$t("Success")),1)],64)):u.unavailable===0?(o(),i(w,{key:1},[F(_(D.value==="en"?e.$t("Failed"):e.$t("withdrawal")+e.$t("Failed")),1)],64)):r("",!0)],2)]),key:"2"}:void 0,c.value==="recharge"?{name:"tage",fn:p(()=>[a("div",$a,_(e.$t("RechargeSucceeded")),1)]),key:"3"}:void 0,c.value==="pendingOrder"?{name:"tage",fn:p(()=>[u.seller?(o(),i("div",ka,_(D.value==="en"?e.$t("Success"):e.$t("buy")+e.$t("Success")),1)):(o(),i("div",Ca,_(e.$t("Purchasing")),1))]),key:"4"}:void 0,c.value==="syntheticRecord"?{name:"tage",fn:p(()=>[a("div",Da,_(D.value==="en"?e.$t("Success"):e.$t("syntheticSuccess")),1)]),key:"5"}:void 0,c.value==="withdrawal"?{name:"btn",fn:p(()=>[a("div",Sa,[u.unavailable===0?(o(),O(ie,{key:0,round:"",type:"primary",size:"mini",color:"#1F75D9",loading:!1,onClick:Fa=>ee(u)},{default:p(()=>[F(_(e.$t("ReWithdrawal")),1)]),_:2},1032,["onClick"])):r("",!0)])]),key:"6"}:void 0,c.value==="syntheticRecord"?{name:"btn",fn:p(()=>[a("div",qa,_(_e(u)),1)]),key:"7"}:void 0]),1032,["item","src","type"]))),128))]),_:1},8,["loading","finished","finished-text"]),b.value.length===0?(o(),O(ce,{key:0,class:"empty",image:se("noMore"),description:e.$t("NoData")},null,8,["image","description"])):r("",!0)])]),R(ge,{showLoading:S(h),countDown:S($)},null,8,["showLoading","countDown"])],64)}}});const Aa=U(Ra,[["__scopeId","data-v-94f6a8a3"]]);export{Aa as default};
