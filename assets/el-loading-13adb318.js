import{s as h,r as $,aj as B,A as E,g as N,G as g,w as P,J as O,d as j,Z as z,T as R,H as _,S as A,a5 as I,V as G,ak as H}from"./index-b5bc2e0e.js";import{Q as Z,H as x,E as q,f as b,G as L}from"./supabaseClient-81f287cc.js";function D(t){let e;const l=h(!1),s=$({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(n){s.text=n}function o(){const n=s.parent,r=d.ns;if(!n.vLoadingAddClassList){let c=n.getAttribute("loading-number");c=Number.parseInt(c)-1,c?n.setAttribute("loading-number",c.toString()):(x(n,r.bm("parent","relative")),n.removeAttribute("loading-number")),x(n,r.bm("parent","hidden"))}i(),m.unmount()}function i(){var n,r;(r=(n=d.$el)==null?void 0:n.parentNode)==null||r.removeChild(d.$el)}function v(){var n;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=window.setTimeout(f,400),s.visible=!1,(n=t.closed)==null||n.call(t))}function f(){if(!l.value)return;const n=s.parent;l.value=!1,n.vLoadingAddClassList=void 0,o()}const u=N({name:"ElLoading",setup(n,{expose:r}){const{ns:c,zIndex:S}=Z("loading");return r({ns:c,zIndex:S}),()=>{const C=s.spinner||s.svg,T=g("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"0 0 50 50",...C?{innerHTML:C}:{}},[g("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),V=s.text?g("p",{class:c.b("text")},[s.text]):void 0;return g(R,{name:c.b("fade"),onAfterLeave:f},{default:P(()=>[O(j("div",{style:{backgroundColor:s.background||""},class:[c.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[g("div",{class:c.b("spinner")},[T,V])]),[[z,s.visible]])])})}}}),m=B(u),d=m.mount(document.createElement("div"));return{...E(s),setText:a,removeElLoadingChild:i,close:v,handleAfterLeave:f,vm:d,get $el(){return d.$el}}}let p;const F=function(t={}){if(!q)return;const e=J(t);if(e.fullscreen&&p)return p;const l=D({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}});K(e,e.parent,l),k(e,e.parent,l),e.parent.vLoadingAddClassList=()=>k(e,e.parent,l);let s=e.parent.getAttribute("loading-number");return s?s=`${Number.parseInt(s)+1}`:s="1",e.parent.setAttribute("loading-number",s),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},J=t=>{var e,l,s,a;let o;return A(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(s=t.lock)!=null?s:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:o}},K=async(t,e,l)=>{const{nextZIndex:s}=l.vm.zIndex||l.vm._.exposed.zIndex,a={};if(t.fullscreen)l.originalPosition.value=b(document.body,"position"),l.originalOverflow.value=b(document.body,"overflow"),a.zIndex=s();else if(t.parent===document.body){l.originalPosition.value=b(document.body,"position"),await _();for(const o of["top","left"]){const i=o==="top"?"scrollTop":"scrollLeft";a[o]=`${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(b(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])a[o]=`${t.target.getBoundingClientRect()[o]}px`}else l.originalPosition.value=b(e,"position");for(const[o,i]of Object.entries(a))l.$el.style[o]=i},k=(t,e,l)=>{const s=l.vm.ns||l.vm._.exposed.ns;["absolute","fixed","sticky"].includes(l.originalPosition.value)?x(e,s.bm("parent","relative")):L(e,s.bm("parent","relative")),t.fullscreen&&t.lock?L(e,s.bm("parent","hidden")):x(e,s.bm("parent","hidden"))},y=Symbol("ElLoading"),w=(t,e)=>{var l,s,a,o;const i=e.instance,v=n=>I(e.value)?e.value[n]:void 0,f=n=>{const r=A(n)&&(i==null?void 0:i[n])||n;return r&&h(r)},u=n=>f(v(n)||t.getAttribute(`element-loading-${H(n)}`)),m=(l=v("fullscreen"))!=null?l:e.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:m,target:(s=v("target"))!=null?s:m?void 0:t,body:(a=v("body"))!=null?a:e.modifiers.body,lock:(o=v("lock"))!=null?o:e.modifiers.lock};t[y]={options:d,instance:F(d)}},M=(t,e)=>{for(const l of Object.keys(e))G(e[l])&&(e[l].value=t[l])},U={mounted(t,e){e.value&&w(t,e)},updated(t,e){const l=t[y];e.oldValue!==e.value&&(e.value&&!e.oldValue?w(t,e):e.value&&e.oldValue?I(e.value)&&M(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[y])==null||e.instance.close()}};export{U as v};