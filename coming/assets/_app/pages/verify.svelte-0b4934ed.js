import{S as s,i as a,s as t,e as o,t as r,k as c,c as i,a as e,g as n,d as l,n as u,b as f,G as h,f as d,E as p,V as m,I as v,W as b,T as k,F as E,X as g,K as w}from"../chunks/vendor-54cab04d.js";import{m as T}from"../chunks/stores-b93fd071.js";import{f as V,g as y,e as I}from"../chunks/utils-a624e7bb.js";import"../chunks/singletons-bb9012b7.js";function j(s){let a,t,w,T,y,I,j,x,B,N,D,O,U,W,z,F;return{c(){a=o("h2"),t=r("What was word #7?"),w=c(),T=o("form"),y=o("div"),I=o("div"),j=o("input"),x=c(),B=o("div"),N=o("button"),D=r("Back"),O=c(),U=o("button"),W=r("Verify"),this.h()},l(s){a=i(s,"H2",{class:!0});var o=e(a);t=n(o,"What was word #7?"),o.forEach(l),w=u(s),T=i(s,"FORM",{});var r=e(T);y=i(r,"DIV",{class:!0});var c=e(y);I=i(c,"DIV",{class:!0,style:!0});var f=e(I);j=i(f,"INPUT",{id:!0,autofocus:!0,autocapitalize:!0,class:!0}),f.forEach(l),c.forEach(l),x=u(r),B=i(r,"DIV",{class:!0});var h=e(B);N=i(h,"BUTTON",{type:!0});var d=e(N);D=n(d,"Back"),d.forEach(l),O=u(h),U=i(h,"BUTTON",{});var p=e(U);W=n(p,"Verify"),p.forEach(l),h.forEach(l),r.forEach(l),this.h()},h(){f(a,"class","container"),f(j,"id","word"),j.autofocus=!0,f(j,"autocapitalize","off"),f(j,"class","grow"),f(I,"class","container"),h(I,"max-width","200px"),h(I,"margin","0 auto"),f(y,"class","form-field"),f(N,"type","button"),f(B,"class","container mb")},m(o,r){d(o,a,r),p(a,t),d(o,w,r),d(o,T,r),p(T,y),p(y,I),p(I,j),m(j,s[0]),p(T,x),p(T,B),p(B,N),p(N,D),p(B,O),p(B,U),p(U,W),j.focus(),z||(F=[v(j,"input",s[3]),b(V.call(null,j)),v(N,"click",s[2]),v(T,"submit",k(s[1]))],z=!0)},p(s,[a]){1&a&&j.value!==s[0]&&m(j,s[0])},i:E,o:E,d(s){s&&l(a),s&&l(w),s&&l(T),z=!1,g(F)}}}function x(s,a,t){let o,r;w(s,T,(s=>t(4,o=s)));return[r,()=>{console.log(o),r===o.split(" ")[6]?y("/register"):I("Nope")},()=>y("/received"),function(){r=this.value,t(0,r)}]}export default class extends s{constructor(s){super(),a(this,s,x,j,t,{})}}
