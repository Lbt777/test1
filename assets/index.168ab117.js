import{d as u,r as _,q as d,o as s,b as o,F as m,z as v,e as p,v as b,A as f,t as g,_ as h}from"./index.0e52a31e.js";const y={class:"tab"},C=["onClick"],k=u({__name:"index",props:{tabList:{type:Array,required:!0},current:{type:Number,default:0}},emits:["tabChange"],setup(a,{emit:c}){const r=a,e=_(0),l=t=>{e.value!==t&&(e.value=t,c("tabChange",t))};return d(()=>{r.current&&(e.value=r.current)}),(t,L)=>(s(),o("div",y,[(s(!0),o(m,null,v(a.tabList,(i,n)=>(s(),o("div",{class:f(["item",e.value===n?"ac":""]),key:n,onClick:x=>l(n)},g(t.$t(i.name)),11,C))),128)),p("div",{class:"bg",style:b({width:100/a.tabList.length+"%",left:`${e.value*100/a.tabList.length}%`})},null,4)]))}});const B=h(k,[["__scopeId","data-v-c28ed6a0"],["__file","D:/work/Daa/src/components/tab/index.vue"]]);export{B as _};
