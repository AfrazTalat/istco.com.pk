import{d as y,h as k,i as A,a2 as C,k as m,j as w,y as B,o as r,c as u,b as p,e as l,a as f,F as L,r as x,l as g,z as P,B as N}from"./entry.8386a641.js";import{_ as V}from"./sub-header.vue.3da031ff.js";import{P as F,_ as H}from"./Pagination.c256d5c1.js";import{L as S}from"./loader.bbe813a0.js";import{u as $}from"./products.755ff10f.js";import"./bootstrap-vue-next.66697143.js";import"./blue_arrow.e00911fa.js";function h(c){let e,a=c[0],t=1;for(;t<c.length;){const s=c[t],i=c[t+1];if(t+=2,(s==="optionalAccess"||s==="optionalCall")&&a==null)return;s==="access"||s==="optionalAccess"?(e=a,a=i(a)):(s==="call"||s==="optionalCall")&&(a=i((...n)=>a.call(e,...n)),e=void 0)}return a}const j={class:"all-products"},z={class:"container"},D={key:0,class:"row"},M=y({__name:"[brand]",async setup(c){let e,a;k();const{webTitle:t}=A(),s=C(),i=$(),n=m(!1),_=m();w({title:t(h([_,"access",d=>d.value,"optionalAccess",d=>d.name]))});const b=([e,a]=B(()=>P("products",()=>i.fetchProducts({brand_id:s.params.brand}).finally(()=>n.value=!1))),e=await e,a(),e).data.value;return(d,E)=>(r(),u("div",null,[p(V,{brand:l(_)},null,8,["brand"]),f("section",j,[f("div",z,[p(S,{loading:l(n)},null,8,["loading"]),l(n)?g("",!0):(r(),u("div",D,[(r(!0),u(L,null,x(h([l,"call",o=>o(b),"optionalAccess",o=>o.list]),(o,v)=>(r(),u("div",{class:"col-lg-3 col-12 mb-5 px-1",key:v},[o?(r(),N(H,{key:0,product:o},null,8,["product"])):g("",!0)]))),128))])),p(F,{pagination:l(i).products.pagination,loading:l(n)},null,8,["pagination","loading"])])])]))}});export{M as default};
