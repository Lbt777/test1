import{d as u,r as n,e,f as t,g as b,l as s,j as B,F as r,k as C,aY as S,R as D,t as o,h as T,U as R,M as U,y as q,z as I,A as L}from"./index.62a7870d.js";/* empty css               */import{_ as G,a as Q,b as M,c as E,d as N,e as z,f as F,g as V,h as X,i as J,j as K,k as O,l as j,m as P,n as $,o as W,p as Y,q as H,r as Z,s as ss,t as _s,u as es,v as ts,w as as,x as os,y as ns,z as is,A as gs,B as ls,C as cs,D as vs,E as ds,F as ps,G as bs,H as rs,I as us,J as hs,K as ms,L as fs,M as As,N as ks,O as ws,P as ys,Q as xs,R as Bs,S as Cs,T as Ss,U as Ds,V as Ts,W as Rs,X as Us,Y as qs,Z as Is,$ as Ls,a0 as Gs,a1 as Qs,a2 as Ms,a3 as Es,a4 as Ns,a5 as zs,a6 as Fs}from"./zhuanzeng.ef96b920.js";import{_ as h}from"./guquanquan.edd92b80.js";const m=""+new URL("gqcNew.284277f2.png",import.meta.url).href,Vs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAMCAYAAAAnIfI8AAAAAXNSR0IArs4c6QAAAVVJREFUaEPt2LFKw2AUBeBzklpqQUSr4OTgqLuxqzi4OLu6NF1VMBV3oamKdlBJUBx8AvdCBwul6iS+QZ/ATW2SX1oRqUbQ+d6smc6XeyD3EvqogDAB//x+EXbvkOB4AnNdKRWPSJo0Bgqz0bjCBTaumrn5t9GugZn6ouCJ5zrbaSXRgggfGGnxq2FrgcZ++pk7vSRaEGkTIjxvEDzkn9HrGmDyLyXRgggfGInxD8L2SmxwQyD/PT/J+k7J2fr83RoUxL9sjTGyVmMLExLBNLM8ATvhsgHWUxdzsu65S5v9d6ydNmdMJtcBMCuPSROrwC8CtPyK6+yyFrT3DbCnUCqgAkMCUTb7Mk0/7FRhkoriqIAKDAmYJI4KPD67nXu1M3cECgqkAirwIUDgwisXS4Mlvb+HcCS3liBJOX0pmQoIEiAixPajV3Ya/UuWnnkFfXuN+n+Bd6YwV/vOu/UtAAAAAElFTkSuQmCC",Xs=i=>(q("data-v-b74d8bb2"),i=i(),I(),i),Js={class:"main"},Ks={class:"up"},Os={key:0,class:"status"},js={key:1,class:"status"},Ps={class:"time"},$s={class:"down"},Ws={class:"left"},Ys={class:"info"},Hs={class:"icon"},Zs={key:0,src:m,alt:""},s_={key:1,src:h,alt:""},__=["src"],e_={class:"name"},t_={class:"val"},a_={class:"line"},o_={class:"box"},n_={class:"type"},i_=Xs(()=>s("div",{class:"icon"},[s("img",{src:Vs,alt:""})],-1)),g_={class:"left"},l_={class:"info"},c_={class:"icon"},v_={key:0,src:m,alt:""},d_={key:1,src:h,alt:""},p_=["src"],b_={class:"name"},r_={class:"val"},u_=u({name:"exchangeRecords"}),h_=u({...u_,setup(i){const f=n(localStorage.getItem("language")),g=n(!1),c=n(!1),v=n(1),l=n([]),A=n(),k=async()=>{let a=await S({page:v.value});l.value=l.value.concat(a.data.records),g.value=!1,a.data.records<10?c.value=!0:v.value++},d=a=>new URL(Object.assign({"../../assets/D_bg.png":G,"../../assets/D_bg_nft.png":Q,"../../assets/D_bg_sat.png":M,"../../assets/D_bg_sct.png":E,"../../assets/D_img.png":N,"../../assets/D_img_sat.png":z,"../../assets/D_img_sct.png":F,"../../assets/Invitation.png":V,"../../assets/assets.png":X,"../../assets/assets_a.png":J,"../../assets/assetss_bg.png":K,"../../assets/banner.png":O,"../../assets/banner1.png":j,"../../assets/bg.png":P,"../../assets/blindBox.png":$,"../../assets/blindBox_g.png":W,"../../assets/choice.png":Y,"../../assets/chongzhi.png":H,"../../assets/coins.png":Z,"../../assets/copy.png":ss,"../../assets/copyW.png":_s,"../../assets/cqc.png":es,"../../assets/gqcNew.png":ts,"../../assets/guadan.png":as,"../../assets/guquanbi.png":os,"../../assets/guquanquan.png":ns,"../../assets/head_down.png":is,"../../assets/head_language.png":gs,"../../assets/huo0.png":ls,"../../assets/huo1.png":cs,"../../assets/huo2.png":vs,"../../assets/huo3.png":ds,"../../assets/invitationBg.png":ps,"../../assets/invitationCardBg.png":bs,"../../assets/jiaoyimingxi.png":rs,"../../assets/line.png":us,"../../assets/loading.png":hs,"../../assets/lp.png":ms,"../../assets/mode1.png":fs,"../../assets/mode2.png":As,"../../assets/nav.png":ks,"../../assets/noMore.png":ws,"../../assets/r_wusd.png":ys,"../../assets/s_left.png":xs,"../../assets/s_rig.png":Bs,"../../assets/sat.png":Cs,"../../assets/satbg.png":Ss,"../../assets/sct.png":Ds,"../../assets/sctbg.png":Ts,"../../assets/success.png":Rs,"../../assets/suipian.png":Us,"../../assets/tixian.png":qs,"../../assets/transaction.png":Is,"../../assets/transactionBG.png":Ls,"../../assets/transaction_a.png":Gs,"../../assets/unChoice.png":Qs,"../../assets/usdt.png":Ms,"../../assets/w_down.png":Es,"../../assets/withdrawal.png":Ns,"../../assets/wusd.png":zs,"../../assets/zhuanzeng.png":Fs})[`../../assets/${a}.png`],self.location).href;return(a,p)=>{const w=U,y=D;return e(),t(r,null,[b(w),s("div",Js,[b(y,{loading:g.value,"onUpdate:loading":p[0]||(p[0]=_=>g.value=_),finished:c.value,onLoad:k,ref_key:"listRef",ref:A,"finished-text":a.$t("finishedText")},{default:B(()=>[(e(!0),t(r,null,C(l.value,(_,x)=>(e(),t("div",{class:"item",key:x},[s("div",Ks,[f.value==="en"?(e(),t("div",Os,o(a.$t("Success")),1)):(e(),t("div",js,o(a.$t("exchange")+a.$t("Success")),1)),s("div",Ps,o(_.createdTime),1)]),s("div",$s,[s("div",Ws,[s("div",Ys,[s("div",Hs,[_.fromToken==="GQC"?(e(),t("img",Zs)):_.fromToken==="GQQ"?(e(),t("img",s_)):(e(),t("img",{key:2,src:d(_.fromToken.toLowerCase()),alt:""},null,8,__))]),s("div",e_,o(_.fromToken),1)]),s("div",t_,o(_.fromAmount),1)]),s("div",a_,[s("div",o_,[s("div",n_,o(a.$t("exchange")),1),i_])]),s("div",g_,[s("div",l_,[s("div",c_,[_.toToken==="GQC"?(e(),t("img",v_)):_.toToken==="GQQ"?(e(),t("img",d_)):(e(),t("img",{key:2,src:d(_.toToken.toLowerCase()),alt:""},null,8,p_))]),s("div",b_,o(_.toToken),1)]),s("div",r_,o(T(R)(_.toAmount,3)),1)])])]))),128))]),_:1},8,["loading","finished","finished-text"])])],64)}}});const w_=L(h_,[["__scopeId","data-v-b74d8bb2"],["__file","D:/work/GQC/src/views/exchangeRecords/index.vue"]]);export{w_ as default};