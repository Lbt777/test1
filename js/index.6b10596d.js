import{d as R,c as G,a as B,r as o,aG as H,aH as M,o as n,b as i,i as b,e,s as N,j as L,F as C,x as $,f as I,u as p,b7 as X,b8 as z,aE as J,aL as O,aF as Q,t as c,K as Y,g as Z,k as ee,af as se,aP as ae,B as te,p as ne,l as oe,_ as ie}from"./index.ba78f9ed.js";/* empty css              */import{_ as ce}from"./index.e5c082c3.js";import{_ as le}from"./coin.7ccb08fd.js";import{_ as de}from"./copy.2d0c02af.js";const k=h=>(ne("data-v-bc464d6b"),h=h(),oe(),h),ue={class:"page"},re={class:"tab"},_e={class:"up"},ve={class:"left"},pe={class:"num"},he={class:"rig add"},me={class:"price"},fe=k(()=>e("div",{class:"unit"},"Daa",-1)),ge={class:"down"},ye={class:"time"},be=k(()=>e("div",{class:"icon"},[e("img",{src:le,alt:""})],-1)),ke={class:"cons"},xe={class:"up"},we={class:"left"},Te={class:"num"},De=["onClick"],Le=k(()=>e("img",{src:de,alt:""},null,-1)),Ce=[Le],Ie={key:0,class:"rig reduce"},Se={class:"price"},Be=k(()=>e("div",{class:"unit"},"Daa",-1)),Ne={class:"down"},$e={class:"time"},Re={key:0,class:"tags tag"},We={key:1,class:"btn"},Ve=R({name:"RevenueRecord"}),qe=R({...Ve,setup(h){const S=G(),{proxy:m}=se(),W=B(()=>S.address),V=B(()=>S.main);let d=o(!1),x=o(300);const u=H(),r=o([{address:"",amount:"",createdTime:"",id:0,nonce:0,sign:"",tokenAddress:"",tokenName:"",unavailable:!1,updatedTime:""}]),_=o(1),v=o(!1),w=o(!1),q=o(""),l=o(0),F=o([{name:"exchange"},{name:"Withdrawal"}]),P=a=>{l.value=a,_.value=1,f()},U=async a=>{d.value=!0;let t=setInterval(async()=>{x.value>0?x.value--:(clearInterval(t),d.value=!1)},1e3);E(a.address,a.amount,a.sign,t)},E=(a,t,T,g)=>{V.value.methods.claim(a,t,T).send({from:W.value}).then(y=>{clearInterval(g),d.value=!1,ae(m.i18nText("Withdrawal")+m.i18nText("Success")),_.value=1,f()}).catch(y=>{clearInterval(g),d.value=!1})},f=async()=>{let t=await(l.value===0?X:z)({page:_.value});_.value===1&&(r.value=[]),v.value=!1,r.value=r.value.concat(t.data.records),t.data.records.length<10?w.value=!0:_.value++};return M(()=>{u.query.tpye==="exchange"?(u.meta.title="exchange",l.value=0):u.query.tpye==="Withdrawal"&&(u.meta.title="Withdrawal",l.value=1),q.value=u.query.tpye}),(a,t)=>{const T=J,g=ce,y=O,K=te,j=Q;return n(),i(C,null,[b(T),e("div",ue,[e("div",re,[b(g,{tabList:F.value,current:l.value,onTabChange:P},null,8,["tabList","current"])]),l.value===0?(n(),N(y,{key:0,loading:v.value,"onUpdate:loading":t[0]||(t[0]=s=>v.value=s),finished:w.value,"finished-text":a.$t("finishedText"),onLoad:f},{default:L(()=>[(n(!0),i(C,null,$(r.value,(s,D)=>(n(),i("div",{class:"item items",key:D},[e("div",_e,[e("div",ve,[e("div",pe,"- "+c(s.amountDusd)+" DUSD",1)]),e("div",he,[e("div",me,"+"+c(s.amountDaa),1),fe])]),e("div",ge,[e("div",ye,c(s.createdTime),1)])]))),128))]),_:1},8,["loading","finished","finished-text"])):I("",!0),l.value===1?(n(),N(y,{key:1,loading:v.value,"onUpdate:loading":t[1]||(t[1]=s=>v.value=s),finished:w.value,"finished-text":a.$t("finishedText"),onLoad:f},{default:L(()=>[(n(!0),i(C,null,$(r.value,(s,D)=>(n(),i("div",{class:"item",key:D},[be,e("div",ke,[e("div",xe,[e("div",we,[e("div",Te,c(p(m).plusXing(s.address,6,6,".",5)),1),e("div",{class:"img",onClick:A=>p(m).copy(s.address)},Ce,8,De)]),s.amount?(n(),i("div",Ie,[e("div",Se,"-"+c(p(Y)(Z(s.amount,18))),1),Be])):I("",!0)]),e("div",Ne,[e("div",$e,c(s.createdTime),1),s.unavailable?(n(),i("div",Re,c(a.$t("TSuccess")),1)):(n(),i("div",We,[b(K,{round:"",onClick:A=>U(s)},{default:L(()=>[ee(c(a.$t("retry")),1)]),_:2},1032,["onClick"])]))])])]))),128))]),_:1},8,["loading","finished","finished-text"])):I("",!0)]),b(j,{showLoading:p(d),countDown:p(x)},null,8,["showLoading","countDown"])],64)}}});const je=ie(qe,[["__scopeId","data-v-bc464d6b"]]);export{je as default};
