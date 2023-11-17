import{a4 as j,a5 as P,d as w,k as y,o as l,B as b,w as v,e as d,g,t as r,a6 as C,c as u,a as o,b as h,l as m,F as A,r as S,a0 as z,a1 as D,_ as N,u as R,f as V,a2 as T,h as E,i as F,y as H,j as U,a3 as Y,z as q}from"./entry.8386a641.js";import{k as G,z as J,j as K}from"./bootstrap-vue-next.66697143.js";import{u as M}from"./cart.8c5c86f7.js";import{L as O}from"./loader.bbe813a0.js";import{u as Q}from"./products.755ff10f.js";import"./api.ed48a19e.js";const I=""+new URL("blue_file.87df8d35.svg",import.meta.url).href,W=""+new URL("video_play.7c5ad7f2.png",import.meta.url).href,X=""+new URL("video_icon.c07082e2.svg",import.meta.url).href;var L={exports:{}};(function(n,a){(function(e,s){n.exports=s()})(j,function(e){return function(s,t){if(t==null&&(t={fuzzy:!0}),/youtu\.?be/.test(s)){var c,i=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(c=0;c<i.length;++c)if(i[c].test(s))return i[c].exec(s)[1];if(t.fuzzy){var f=s.split(/[\/\&\?=#\.\s]/g);for(c=0;c<f.length;++c)if(/^[^#\&\?]{11}$/.test(f[c]))return f[c]}}return null}})})(L);var Z=L.exports;const x=P(Z),tt=w({__name:"ProductCartButton",props:{productId:{}},setup(n){const a=n,e=M(),s=y(!1),t=async()=>{s.value||(s.value=!0,await e.addProduct(a.productId,{qty:1}),s.value=!1)};return(c,i)=>{const f=G;return l(),b(f,{variant:"primary",onClick:i[0]||(i[0]=p=>t()),"loading-mode":"fill",loading:d(s)},{default:v(()=>[g(r(c.$t("ecommerce.add_to_cart")),1)]),_:1},8,["loading"])}}});function k(n){let a,e=n[0],s=1;for(;s<n.length;){const t=n[s],c=n[s+1];if(s+=2,(t==="optionalAccess"||t==="optionalCall")&&e==null)return;t==="access"||t==="optionalAccess"?(a=e,e=c(e)):(t==="call"||t==="optionalCall")&&(e=c((...i)=>e.call(a,...i)),a=void 0)}return e}const $=n=>(z("data-v-02d95121"),n=n(),D(),n),et={class:"project-details"},ot={key:0,class:"container"},st={class:"row"},at={class:"col-lg-5 col-12 mb-4"},ct={class:"image-conetnt"},nt={class:"col-lg-6 col-12 ml-auto"},lt={class:"content"},rt={key:0,class:"type"},dt={class:"project-list"},it={key:0},ut=["src","alt"],pt={class:"desc"},_t={class:"buttons-contain data"},mt=["href"],ft=$(()=>o("img",{src:I,class:"standard-img"},null,-1)),ht=$(()=>o("img",{src:I,class:"hover-img"},null,-1)),vt={class:"d-flex align-items-center justify-content-between my-3"},gt={class:"price m-0 flex-flow-1 w-100"},yt={class:"buttons-contain w-auto"},bt=$(()=>o("div",{class:"buttons-contain"},null,-1)),wt={class:"col-12"},$t={class:"more-info"},kt={class:"title"},Ct={class:"title"},At={class:"video-contain"},Bt=["src"],It={key:1,src:W,class:"video-img"},Lt=$(()=>o("img",{src:X,class:"video-icon"},null,-1)),jt=[Lt],Pt=w({__name:"product-details",props:{loading:{type:Boolean,default:!1},product:{}},setup(n){const a=n,e=y(!1),s=C(()=>!a.product||!a.product.youtube_video?null:a.product.youtube_video.includes("youtube.com")?x(a.product.youtube_video):a.product.youtube_video);return C(()=>k([a,"access",t=>t.product,"access",t=>t.images,"optionalAccess",t=>t[0],"optionalAccess",t=>t.preview])),(t,c)=>{const i=K,f=J;return l(),u("section",et,[t.product?(l(),u("div",ot,[o("div",st,[o("div",at,[o("div",ct,[h(f,{class:"flex-grow-1 w-100",controls:""},{default:v(()=>[(l(!0),u(A,null,S(t.product.images,p=>(l(),b(i,{key:k([p,"optionalAccess",_=>_.id]),"img-src":k([p,"optionalAccess",_=>_.preview])},null,8,["img-src"]))),128))]),_:1})])]),o("div",nt,[o("div",lt,[t.product.category?(l(),u("div",rt,r(t.product.category.name),1)):m("",!0),o("h1",null,r(t.product.name),1),o("ul",dt,[t.product.brand?(l(),u("li",it,[o("span",null,r(t.$t("ecommerce.brand")),1),t.product.brand.logo?(l(),u("img",{key:0,src:t.product.brand.logo.preview,alt:t.product.brand.name},null,8,ut)):m("",!0)])):m("",!0)]),o("p",pt,r(t.product.subtitle),1),o("div",_t,[o("h4",null,r(t.$t("ecommerce.more_product_details")),1),t.product.pdf?(l(),u("a",{key:0,href:t.product.pdf.preview,target:"_blank",download:"",class:"btn btn-outline-primary"},[ft,o("span",null,r(t.$t("ecommerce.download_catalog")),1),ht],8,mt)):m("",!0)]),o("div",vt,[o("p",gt,r(t.product.price)+" ر.س",1),o("div",yt,[h(tt,{"product-id":t.product.id},null,8,["product-id"])])]),bt])]),o("div",wt,[o("div",$t,[o("h2",kt,r(t.$t("ecommerce.product_details")),1),o("p",null,r(t.product.description),1),d(s)?(l(),u(A,{key:0},[o("h2",Ct,r(t.$t("ecommerce.watch_product_details")),1),o("div",At,[d(e)==!0?(l(),u("iframe",{key:0,class:"video-frame",src:`https://www.youtube.com/embed/${d(s)}?autoplay=1`,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope;",allowfullscreen:""},null,8,Bt)):m("",!0),d(e)==!1?(l(),u("img",It)):m("",!0),d(e)==!1?(l(),u("a",{key:2,href:"javascript:void(0)",class:"video-play",onClick:c[0]||(c[0]=p=>e.value=!0)},jt)):m("",!0)])],64)):m("",!0)])])])])):m("",!0)])}}});const St=N(Pt,[["__scopeId","data-v-02d95121"]]),zt={class:"sub-header"},Dt={class:"container"},Nt={key:0,class:"row"},Rt={class:"col-12"},Vt={class:"content"},Tt={class:"title"},Et={class:"list"},Ft={key:0},Ht={class:"data"},Ut=w({__name:"product-header",props:{loading:{type:Boolean,default:!1},product:{}},setup(n){const a=R();return(e,s)=>{const t=V;return l(),u("section",zt,[o("div",Dt,[h(O,{loading:e.loading},null,8,["loading"]),e.loading?m("",!0):(l(),u("div",Nt,[o("div",Rt,[o("div",Vt,[o("h4",Tt,r(e.product.name),1),o("ul",Et,[o("li",null,[h(t,{to:d(a)("/"),class:"link"},{default:v(()=>[g(r(e.$t("common.home")),1)]),_:1},8,["to"])]),o("li",null,[h(t,{to:d(a)("/products"),class:"link"},{default:v(()=>[g(r(e.$t("ecommerce.all_products")),1)]),_:1},8,["to"])]),e.product.category?(l(),u("li",Ft,[h(t,{to:d(a)(`/products/category/${e.product.category.id}`),class:"link"},{default:v(()=>[g(r(e.product.category.name),1)]),_:1},8,["to"])])):m("",!0),o("li",null,[o("span",Ht,r(e.product.name),1)])])])])]))])])}}});function B(n){let a,e=n[0],s=1;for(;s<n.length;){const t=n[s],c=n[s+1];if(s+=2,(t==="optionalAccess"||t==="optionalCall")&&e==null)return;t==="access"||t==="optionalAccess"?(a=e,e=c(e)):(t==="call"||t==="optionalCall")&&(e=c((...i)=>e.call(a,...i)),a=void 0)}return e}const Yt={key:0},Wt=w({__name:"[id]",async setup(n){let a,e;const s=T();E();const{webTitle:t}=F(),c=Q(),i=y(!1),f=([a,e]=H(()=>q("product",()=>c.getProduct(+s.params.id))),a=await a,e(),a),p=y(f.data.value);return U({title:t(B([p,"access",_=>_.value,"optionalAccess",_=>_.name])),meta:[{hid:"description",name:"description",content:B([p,"access",_=>_.value,"optionalAccess",_=>_.subtitle])}]}),Y(()=>s.params.id,_=>f.refresh().then(()=>p.value=f.data.value)),(_,qt)=>d(p)?(l(),u("div",Yt,[(l(),b(Ut,{loading:d(i),product:d(p),key:`product-head-${d(p).id}`},null,8,["loading","product"])),(l(),b(St,{loading:d(i),product:d(p),key:`product-body-${d(p).id}`},null,8,["loading","product"]))])):m("",!0)}});export{Wt as default};
