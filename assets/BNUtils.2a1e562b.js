var V=20,z=1,M=1e6,q=1e6,L=-7,S=21,I="[big.js] ",D=I+"Invalid ",j=D+"decimal places",_=D+"rounding mode",m=I+"Division by zero",h={},p=void 0,k=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function O(){function e(r){var i=this;if(!(i instanceof e))return r===p?O():new e(r);r instanceof e?(i.s=r.s,i.e=r.e,i.c=r.c.slice()):F(i,r),i.constructor=e}return e.prototype=h,e.DP=V,e.RM=z,e.NE=L,e.PE=S,e.version="5.2.2",e}function F(e,r){var i,n,t;if(r===0&&1/r<0)r="-0";else if(!k.test(r+=""))throw Error(D+"number");for(e.s=r.charAt(0)=="-"?(r=r.slice(1),-1):1,(i=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(i<0&&(i=n),i+=+r.slice(n+1),r=r.substring(0,n)):i<0&&(i=r.length),t=r.length,n=0;n<t&&r.charAt(n)=="0";)++n;if(n==t)e.c=[e.e=0];else{for(;t>0&&r.charAt(--t)=="0";);for(e.e=i-n-1,e.c=[],i=0;n<=t;)e.c[i++]=+r.charAt(n++)}return e}function A(e,r,i,n){var t=e.c,s=e.e+r+1;if(s<t.length){if(i===1)n=t[s]>=5;else if(i===2)n=t[s]>5||t[s]==5&&(n||s<0||t[s+1]!==p||t[s-1]&1);else if(i===3)n=n||!!t[0];else if(n=!1,i!==0)throw Error(_);if(s<1)t.length=1,n?(e.e=-r,t[0]=1):t[0]=e.e=0;else{if(t.length=s--,n)for(;++t[s]>9;)t[s]=0,s--||(++e.e,t.unshift(1));for(s=t.length;!t[--s];)t.pop()}}else if(i<0||i>3||i!==~~i)throw Error(_);return e}function P(e,r,i,n){var t,s,u=e.constructor,f=!e.c[0];if(i!==p){if(i!==~~i||i<(r==3)||i>M)throw Error(r==3?D+"precision":j);for(e=new u(e),i=n-e.e,e.c.length>++n&&A(e,i,u.RM),r==2&&(n=e.e+i+1);e.c.length<n;)e.c.push(0)}if(t=e.e,s=e.c.join(""),i=s.length,r!=2&&(r==1||r==3&&n<=t||t<=u.NE||t>=u.PE))s=s.charAt(0)+(i>1?"."+s.slice(1):"")+(t<0?"e":"e+")+t;else if(t<0){for(;++t;)s="0"+s;s="0."+s}else if(t>0)if(++t>i)for(t-=i;t--;)s+="0";else t<i&&(s=s.slice(0,t)+"."+s.slice(t));else i>1&&(s=s.charAt(0)+"."+s.slice(1));return e.s<0&&(!f||r==4)?"-"+s:s}h.abs=function(){var e=new this.constructor(this);return e.s=1,e};h.cmp=function(e){var r,i=this,n=i.c,t=(e=new i.constructor(e)).c,s=i.s,u=e.s,f=i.e,c=e.e;if(!n[0]||!t[0])return n[0]?s:t[0]?-u:0;if(s!=u)return s;if(r=s<0,f!=c)return f>c^r?1:-1;for(u=(f=n.length)<(c=t.length)?f:c,s=-1;++s<u;)if(n[s]!=t[s])return n[s]>t[s]^r?1:-1;return f==c?0:f>c^r?1:-1};h.div=function(e){var r=this,i=r.constructor,n=r.c,t=(e=new i(e)).c,s=r.s==e.s?1:-1,u=i.DP;if(u!==~~u||u<0||u>M)throw Error(j);if(!t[0])throw Error(m);if(!n[0])return new i(s*0);var f,c,o,w,l,v=t.slice(),R=f=t.length,x=n.length,a=n.slice(0,f),g=a.length,E=e,B=E.c=[],N=0,d=u+(E.e=r.e-e.e)+1;for(E.s=s,s=d<0?0:d,v.unshift(0);g++<f;)a.push(0);do{for(o=0;o<10;o++){if(f!=(g=a.length))w=f>g?1:-1;else for(l=-1,w=0;++l<f;)if(t[l]!=a[l]){w=t[l]>a[l]?1:-1;break}if(w<0){for(c=g==f?t:v;g;){if(a[--g]<c[g]){for(l=g;l&&!a[--l];)a[l]=9;--a[l],a[g]+=10}a[g]-=c[g]}for(;!a[0];)a.shift()}else break}B[N++]=w?o:++o,a[0]&&w?a[g]=n[R]||0:a=[n[R]]}while((R++<x||a[0]!==p)&&s--);return!B[0]&&N!=1&&(B.shift(),E.e--),N>d&&A(E,u,i.RM,a[0]!==p),E};h.eq=function(e){return!this.cmp(e)};h.gt=function(e){return this.cmp(e)>0};h.gte=function(e){return this.cmp(e)>-1};h.lt=function(e){return this.cmp(e)<0};h.lte=function(e){return this.cmp(e)<1};h.minus=h.sub=function(e){var r,i,n,t,s=this,u=s.constructor,f=s.s,c=(e=new u(e)).s;if(f!=c)return e.s=-c,s.plus(e);var o=s.c.slice(),w=s.e,l=e.c,v=e.e;if(!o[0]||!l[0])return l[0]?(e.s=-c,e):new u(o[0]?s:0);if(f=w-v){for((t=f<0)?(f=-f,n=o):(v=w,n=l),n.reverse(),c=f;c--;)n.push(0);n.reverse()}else for(i=((t=o.length<l.length)?o:l).length,f=c=0;c<i;c++)if(o[c]!=l[c]){t=o[c]<l[c];break}if(t&&(n=o,o=l,l=n,e.s=-e.s),(c=(i=l.length)-(r=o.length))>0)for(;c--;)o[r++]=0;for(c=r;i>f;){if(o[--i]<l[i]){for(r=i;r&&!o[--r];)o[r]=9;--o[r],o[i]+=10}o[i]-=l[i]}for(;o[--c]===0;)o.pop();for(;o[0]===0;)o.shift(),--v;return o[0]||(e.s=1,o=[v=0]),e.c=o,e.e=v,e};h.mod=function(e){var r,i=this,n=i.constructor,t=i.s,s=(e=new n(e)).s;if(!e.c[0])throw Error(m);return i.s=e.s=1,r=e.cmp(i)==1,i.s=t,e.s=s,r?new n(i):(t=n.DP,s=n.RM,n.DP=n.RM=0,i=i.div(e),n.DP=t,n.RM=s,this.minus(i.times(e)))};h.plus=h.add=function(e){var r,i=this,n=i.constructor,t=i.s,s=(e=new n(e)).s;if(t!=s)return e.s=-s,i.minus(e);var u=i.e,f=i.c,c=e.e,o=e.c;if(!f[0]||!o[0])return o[0]?e:new n(f[0]?i:t*0);if(f=f.slice(),t=u-c){for(t>0?(c=u,r=o):(t=-t,r=f),r.reverse();t--;)r.push(0);r.reverse()}for(f.length-o.length<0&&(r=o,o=f,f=r),t=o.length,s=0;t;f[t]%=10)s=(f[--t]=f[t]+o[t]+s)/10|0;for(s&&(f.unshift(s),++c),t=f.length;f[--t]===0;)f.pop();return e.c=f,e.e=c,e};h.pow=function(e){var r=this,i=new r.constructor(1),n=i,t=e<0;if(e!==~~e||e<-q||e>q)throw Error(D+"exponent");for(t&&(e=-e);e&1&&(n=n.times(r)),e>>=1,!!e;)r=r.times(r);return t?i.div(n):n};h.round=function(e,r){var i=this.constructor;if(e===p)e=0;else if(e!==~~e||e<-M||e>M)throw Error(j);return A(new i(this),e,r===p?i.RM:r)};h.sqrt=function(){var e,r,i,n=this,t=n.constructor,s=n.s,u=n.e,f=new t(.5);if(!n.c[0])return new t(n);if(s<0)throw Error(I+"No square root");s=Math.sqrt(n+""),s===0||s===1/0?(r=n.c.join(""),r.length+u&1||(r+="0"),s=Math.sqrt(r),u=((u+1)/2|0)-(u<0||u&1),e=new t((s==1/0?"1e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+u)):e=new t(s),u=e.e+(t.DP+=4);do i=e,e=f.times(i.plus(n.div(i)));while(i.c.slice(0,u).join("")!==e.c.slice(0,u).join(""));return A(e,t.DP-=4,t.RM)};h.times=h.mul=function(e){var r,i=this,n=i.constructor,t=i.c,s=(e=new n(e)).c,u=t.length,f=s.length,c=i.e,o=e.e;if(e.s=i.s==e.s?1:-1,!t[0]||!s[0])return new n(e.s*0);for(e.e=c+o,u<f&&(r=t,t=s,s=r,o=u,u=f,f=o),r=new Array(o=u+f);o--;)r[o]=0;for(c=f;c--;){for(f=0,o=u+c;o>c;)f=r[o]+s[c]*t[o-c-1]+f,r[o--]=f%10,f=f/10|0;r[o]=(r[o]+f)%10}for(f?++e.e:r.shift(),c=r.length;!r[--c];)r.pop();return e.c=r,e};h.toExponential=function(e){return P(this,1,e,e)};h.toFixed=function(e){return P(this,2,e,this.e+e)};h.toPrecision=function(e){return P(this,3,e,e-1)};h.toString=function(){return P(this)};h.valueOf=h.toJSON=function(){return P(this,4)};var b=O();b.PE=50;b.DP=20;function U(e,r){return new b(e).times(new b(10).pow(r)).toString()}function X(e,r){return new b(e).div(new b(Math.pow(10,r)))}export{X as c,U as p};
