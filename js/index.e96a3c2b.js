import{d as I,c as N,r as u,a as T,w as B,o as i,b as r,e as s,t as e,u as c,f as y,n as K,K as $,g as L,_ as D,h as P,i as g,j as b,k as F,F as k,B as H,p as O,l as q,m as M,q as W,s as U,v as V,x as J,y as Q,z as X,A as Y,C as Z,D as ss,E as ts,G as es,H as as,I as os,J as ns,L as _s,M as is,N as ls,O as ds,P as cs,Q as rs,R as gs,S as us,T as ps,U as vs,V as ms,W as hs,X as bs,Y as fs,Z as $s,$ as ys,a0 as ws,a1 as Bs,a2 as Ls,a3 as Is,a4 as Cs,a5 as Ss,a6 as Fs,a7 as ks,a8 as Ns,a9 as Ts,aa as Ds,ab as xs,ac as As,ad as zs,ae as Rs,af as Us,ag as Vs}from"./index.b020788b.js";/* empty css              */import{_ as Ps}from"./index.c59c3b77.js";import{c as Hs}from"./indexDataFormat.a9edd7a8.js";const Os=""+new URL("../png/indexTips.76f2540a.png",import.meta.url).href,qs=""+new URL("../png/daa.c155fd42.png",import.meta.url).href,js=""+new URL("../png/bottomBg.96ab0f68.png",import.meta.url).href,Es={class:"bg"},Gs={class:"all indexAll"},Ks={class:"left"},Ms={class:"name"},Ws={class:"num"},Js={class:"price"},Qs={key:0,class:"unit"},Xs={class:"left"},Ys={class:"name"},Zs={class:"num"},st={class:"price"},tt={key:0,class:"unit"},et=I({__name:"nft",props:{isLogin:{type:Boolean,default:!1}},setup(_){const p=_,f=N();let o=u({nftCount:0,outputAmount:0});const l=u(""),v=T(()=>f.Language),m=async()=>{let t=await K();o.value=t.data};B(v,t=>{l.value=t},{deep:!0,immediate:!0}),B(()=>p.isLogin,t=>{t&&m()},{deep:!0,immediate:!0});const d=(t,n)=>n?t.toString().length>=9?l.value==="en"?$(L(t,9)):$(L(t,8)):t:t.toString().length>=5?l.value==="en"?$(t/1e3):$(t/1e4):t;return(t,n)=>(i(),r("div",Es,[s("div",Gs,[s("div",Ks,[s("div",Ms,"NFT "+e(t.$t("TotalSales")),1),s("div",Ws,[s("div",Js,e(d(c(o).nftCount,0)),1),c(o).nftCount>1e4?(i(),r("div",Qs,e(t.$t("thousand")),1)):y("",!0)])]),s("div",Xs,[s("div",Ys,"DUSD "+e(t.$t("totalOtput")),1),s("div",Zs,[s("div",st,e(d(c(o).outputAmount,1)),1),c(o).outputAmount>1e8?(i(),r("div",tt,e(t.$t("million")),1)):y("",!0)])])])]))}});const at=D(et,[["__scopeId","data-v-8f20393e"]]),ot=_=>(O("data-v-c83a89ed"),_=_(),q(),_),nt={class:"bg"},_t={class:"all"},it={class:"hade"},lt=ot(()=>s("div",{class:"headImg"},[s("img",{src:M,alt:""})],-1)),dt={class:"pool"},ct={key:0,class:"stage"},rt={class:"names"},gt={class:"btnBox"},ut={class:"box"},pt={key:0,class:"num"},vt={class:"num1"},mt={class:"num2"},ht={class:"btn"},bt={class:"tips"},ft=I({__name:"fomo",props:{isLogin:{type:Boolean,default:!1}},emits:["isLoginFN"],setup(_,{emit:p}){const f=_,o=u([]),l=N(),v=P(),m=T(()=>l.main),d=()=>{p("isLoginFN",()=>{!o.value[0]||v.push({path:"BlastingHistory",query:{phase:o.value[0]}})})},t=async()=>{await m.value.methods.getFomoView().call().then(n=>{o.value=n}).catch(n=>{console.log(n)})};return B(()=>f.isLogin,n=>{n&&t()},{deep:!0,immediate:!0}),(n,x)=>{const C=H;return i(),r(k,null,[s("div",nt,[s("div",_t,[s("div",it,[lt,s("div",dt,e(n.$t("pool")),1),o.value[0]?(i(),r("div",ct,[s("div",rt,e(n.$t("phase",{num:c(Hs)(+o.value[0]+1)})),1)])):y("",!0)]),s("div",gt,[s("div",ut,[o.value[0]?(i(),r("div",pt,[s("div",vt,e(c($)(L(+o.value[1],18)))+"/",1),s("div",mt,e(L(+o.value[2],18)),1)])):y("",!0)]),s("div",ht,[g(C,{plain:"",size:"mini",onClick:d},{default:b(()=>[F(e(n.$t("BlastingHistory")),1)]),_:1})])])])]),s("div",bt,"* "+e(n.$t("accumulates")),1)],64)}}});const $t=D(ft,[["__scopeId","data-v-c83a89ed"]]),j=_=>(O("data-v-61bda38e"),_=_(),q(),_),yt={class:"page"},wt={class:"info"},Bt=j(()=>s("div",{class:"infoBg"},[s("img",{src:Os,alt:""})],-1)),Lt={class:"tips"},It={class:"tips"},Ct={class:"btn"},St={class:"swBox"},Ft={class:"swBg"},kt={class:"swT"},Nt={class:"swI"},Tt={class:"swI"},Dt={class:"swBg2"},xt={class:"info1"},At={class:"info1"},zt={class:"info1"},Rt={class:"indicators"},Ut={class:"openDaa"},Vt={class:"daa"},Pt=Q('<div class="boxTitle" data-v-61bda38e><div style="display:flex!important;" data-v-61bda38e><div class="title" data-v-61bda38e><div class="daaImg" data-v-61bda38e><img src="'+qs+'" alt="" data-v-61bda38e></div><div class="name" data-v-61bda38e>Open Daa</div></div></div></div>',1),Ht={class:"desc"},Ot={class:"btn"},qt=j(()=>s("div",{class:"bgBootom"},[s("img",{src:js,alt:""})],-1)),jt=I({name:"Index"}),Et=I({...jt,setup(_){const p=N(),{proxy:f}=Us(),o=P(),l=u(0),v=u(0),m=u(0),d=u(!1),t=T(()=>p.address),n=a=>new URL(Object.assign({"../../assets/1st.png":X,"../../assets/2st.png":Y,"../../assets/3st.png":Z,"../../assets/D_bg.png":ss,"../../assets/Increase.png":ts,"../../assets/InvitationBG.png":es,"../../assets/NFTbg.png":as,"../../assets/Popover.png":os,"../../assets/RankBg.png":ns,"../../assets/bannar1.png":_s,"../../assets/bannar2.png":is,"../../assets/bg.png":ls,"../../assets/bgz.png":ds,"../../assets/bottomBg.png":cs,"../../assets/coin.png":rs,"../../assets/copy.png":gs,"../../assets/daa.png":us,"../../assets/down.png":ps,"../../assets/erCodeLogo.png":vs,"../../assets/head_down.png":ms,"../../assets/head_language.png":hs,"../../assets/index.png":bs,"../../assets/index2.png":fs,"../../assets/index3.png":$s,"../../assets/index4.png":ys,"../../assets/index5.png":ws,"../../assets/indexTips.png":Bs,"../../assets/invitationCardBg.png":Ls,"../../assets/l.png":Is,"../../assets/loading.png":Cs,"../../assets/logo.png":Ss,"../../assets/profit.png":Fs,"../../assets/r.png":ks,"../../assets/right.png":Ns,"../../assets/s0.png":Ts,"../../assets/s1.png":Ds,"../../assets/success.png":xs,"../../assets/vip.png":As})[`../../assets/${a}.png`],self.location).href,x=[{name:"NFTminingPool"},{name:"pool"}],C=a=>{l.value=a},A=()=>{S(()=>{d.value=!0,o.push("transactionDetails")})};B(t,a=>{a&&S(()=>{d.value=!0})},{deep:!0,immediate:!0});function S(a){f.userAuthorization(p,async h=>{h&&a()})}return W(()=>{m.value=document.querySelectorAll(".van-swipe-item").length}),(a,h)=>{const z=H,R=zs,E=Rs;return i(),r(k,null,[s("div",yt,[g(c(Ps),{tabList:x,onTabChange:C}),l.value===0?(i(),U(c(at),{key:0,isLogin:d.value},null,8,["isLogin"])):l.value===1?(i(),U(c($t),{key:1,isLogin:d.value,onIsLoginFN:h[0]||(h[0]=w=>S(w))},null,8,["isLogin"])):y("",!0),s("div",wt,[Bt,s("div",Lt,e(a.$t("idleAssets")),1),s("div",It,e(a.$t("SecurePledge")),1),s("div",Ct,[g(z,{color:"#F8CF39",round:"",onClick:A},{default:b(()=>[F(e(a.$t("BuyNow"))+" NFT",1)]),_:1})])]),s("div",St,[g(E,{class:"swipe",ref:"swipe",autoplay:3500,"lazy-render":"","show-indicators":!1,onChange:h[1]||(h[1]=w=>v.value=w)},{default:b(()=>[g(R,null,{default:b(()=>[s("div",{class:"sw",style:V({background:`url(${n("bannar1")})  no-repeat`})},[s("div",Ft,[s("div",kt,e(a.$t("ecology"))+"\uFF1A",1),s("div",Nt,e(a.$t("committed"))+"\uFF1B",1),s("div",Tt,e(a.$t("secondBuild"))+"\u3002",1)])],4)]),_:1}),g(R,null,{default:b(()=>[s("div",{class:"sw",style:V({background:`url(${n("bannar2")})  no-repeat`})},[s("div",Dt,[s("div",xt,e(a.$t("theWorld"))+"\u3000",1),s("div",At,e(a.$t("Public"))+"\u3000",1),s("div",zt,e(a.$t("Integrated"))+"\u3002",1)])],4)]),_:1})]),_:1},512),s("div",Rt,[(i(!0),r(k,null,J(m.value,(w,G)=>(i(),r("i",{class:Vs(["indicator",v.value===G?"indicatorActive":""])},null,2))),256))])]),s("div",Ut,[s("div",Vt,[Pt,s("div",Ht,e(a.$t("community")),1),s("div",Ot,[g(z,{color:"#F8CF39",block:"",round:"",onClick:A},{default:b(()=>[F(e(a.$t("Purchase")),1)]),_:1})])])])]),qt],64)}}});const Jt=D(Et,[["__scopeId","data-v-61bda38e"]]);export{Jt as default};
