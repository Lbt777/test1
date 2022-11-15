const u=(t,l)=>{let n=l||500,e;return function(){let r=arguments;e&&clearTimeout(e),e=setTimeout(()=>{e=null,t.apply(this,r)},n)}};export{u as D};
