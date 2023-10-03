import"./base-05c0202d.js";import{E as ge,a as Oe,i as Se,t as Te,u as Le,P as ke,b as Ae,c as Me,d as Ne,e as $e,f as Be,h as Fe,g as Re,j as je,k as He,l as Pe}from"./moment-83e75407.js";import{s as Ue}from"./supabaseClient-81f287cc.js";import{E as Ve,b as Ie,c as We,a as qe}from"./el-input-4480579d.js";import{a as Ye,e as Ge,g as q,u as Je}from"./index-606af5b7.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";import{s as z,b as y,t as A,w as E,e as Y,d as p,c as G,F as J,v as be,k as Ze,f as Ke,x as we,g as re,y as H,z as P,A as Qe,h as k,B as Xe,C as U,D as ee,o as et,E as ze,G as ve,H as tt,i as g,n as nt,I as rt}from"./index-b5bc2e0e.js";const at="80px",ot={__name:"BudgetDrawer",props:["tableName","controlButton","dialog","form","editID","tableData"],emits:["updatePageData","update:dialog"],setup(e,{emit:t}){const n=e,o=z(),r=z(!1),a=()=>{if(r.value)return;let v={};for(let u in n.form)v[u]=n.form[u];ge.confirm("Do you want to submit?").then(async()=>{r.value=!0,n.controlButton==="Add"?Ye(n.tableName,v):Ge(n.tableName,v,n.editID),r.value=!1,o.value.close(),t("update:dialog",!1),t("updatePageData"),q()}).catch(()=>{console.log("catch error")})},l=()=>{r.value=!1,t("update:dialog",!1)};return(v,u)=>{const s=Ve,i=Ie,b=We,O=qe,c=Oe;return y(),A(c,{ref_key:"drawerRef",ref:o,"model-value":n.dialog,title:e.controlButton,"before-close":l,direction:"ltr",size:"70%",class:"demo-drawer"},{default:E(()=>[Y("div",null,[p(b,{model:e.form,class:"input-value"},{default:E(()=>[(y(!0),G(J,null,be(e.form,(M,T)=>(y(),G(J,null,[T!=="id"?(y(),A(i,{key:0,label:T,"label-width":at},{default:E(()=>[p(s,{modelValue:e.form[T],"onUpdate:modelValue":B=>e.form[T]=B,autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):Ze("",!0)],64))),256))]),_:1},8,["model"]),Y("div",null,[p(O,{type:"primary",loading:r.value,onClick:u[0]||(u[0]=M=>a())},{default:E(()=>[Ke(we(r.value?"Submitting ...":"Submit"),1)]),_:1},8,["loading"])])])]),_:1},8,["model-value","title"])}}},it=me(ot,[["__scopeId","data-v-7ba59205"]]);var Q=null;function st(e){return Q||(Q=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),Q(e)}var X=null;function lt(e){X||(X=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),X(e)}function ut(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function V(e,t){t===void 0&&(t={});var n=document.createElement(e);return Object.keys(t).forEach(function(o){n[o]=t[o]}),n}function ye(e,t,n){var o=window.getComputedStyle(e,n||null)||{display:"none"};return o[t]}function te(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(ye(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var ct='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',ne=0,W=null;function dt(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=vt.bind(e));var n=e.__resize_listeners__;if(!n){if(e.__resize_listeners__=[],window.ResizeObserver){var o=e.offsetWidth,r=e.offsetHeight,a=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===o&&e.offsetHeight===r)||Z(e)}),l=te(e),v=l.detached,u=l.rendered;e.__resize_observer_triggered__=v===!1&&u===!1,e.__resize_observer__=a,a.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){Z(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(ne||(W=ut(ct)),pt(e),e.__resize_rendered__=te(e).rendered,window.MutationObserver){var s=new MutationObserver(e.__resize_mutation_handler__);s.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=s}}e.__resize_listeners__.push(t),ne++}function _t(e,t){var n=e.__resize_listeners__;if(n){if(t&&n.splice(n.indexOf(t),1),!n.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",ae),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--ne&&W&&W.parentNode.removeChild(W)}}function ft(e){var t=e.__resize_last__,n=t.width,o=t.height,r=e.offsetWidth,a=e.offsetHeight;return r!==n||a!==o?{width:r,height:a}:null}function vt(){var e=te(this),t=e.rendered,n=e.detached;t!==this.__resize_rendered__&&(!n&&this.__resize_triggers__&&(oe(this),this.addEventListener("scroll",ae,!0)),this.__resize_rendered__=t,Z(this))}function ae(){var e=this;oe(this),this.__resize_raf__&&lt(this.__resize_raf__),this.__resize_raf__=st(function(){var t=ft(e);t&&(e.__resize_last__=t,Z(e))})}function Z(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function pt(e){var t=ye(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var n=V("div",{className:"resize-triggers"}),o=V("div",{className:"resize-expand-trigger"}),r=V("div"),a=V("div",{className:"resize-contract-trigger"});o.appendChild(r),n.appendChild(o),n.appendChild(a),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:o,expandChild:r,contract:a},oe(e),e.addEventListener("scroll",ae,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function oe(e){var t=e.__resize_triggers__,n=t.expand,o=t.expandChild,r=t.contract,a=r.scrollWidth,l=r.scrollHeight,v=n.offsetWidth,u=n.offsetHeight,s=n.scrollWidth,i=n.scrollHeight;r.scrollLeft=a,r.scrollTop=l,o.style.width=v+1+"px",o.style.height=u+1+"px",n.scrollLeft=s,n.scrollTop=i}var x=function(){return x=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)};var ht=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function gt(e){return t=Object.create(null),ht.forEach(function(n){t[n]=function(o){return function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[o].apply(e.value,r)}}(n)}),t;var t}var mt={autoresize:[Boolean,Object]},bt=/^on[^a-z]/,wt=function(e){return bt.test(e)};function I(e,t){var n=g(e);return n&&typeof n=="object"&&"value"in n?n.value||t:n||t}var zt="ecLoadingOptions",yt={loading:Boolean,loadingOptions:Object},N=null,Ee="x-vue-echarts",pe=[],$=[];(function(e,t){if(e&&typeof document<"u"){var n,o=t.prepend===!0?"prepend":"append",r=t.singleTag===!0,a=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(r){var l=pe.indexOf(a);l===-1&&(l=pe.push(a)-1,$[l]={}),n=$[l]&&$[l][o]?$[l][o]:$[l][o]=v()}else n=v();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function v(){var u=document.createElement("style");if(u.setAttribute("type","text/css"),t.attributes)for(var s=Object.keys(t.attributes),i=0;i<s.length;i++)u.setAttribute(s[i],t.attributes[s[i]]);var b=o==="prepend"?"afterbegin":"beforeend";return a.insertAdjacentElement(b,u),u}})(`x-vue-echarts{display:block;width:100%;height:100%;min-width:0}x-vue-echarts>div{width:100%;height:100%}
`,{});var Et=function(){if(N!=null)return N;if(typeof HTMLElement>"u"||typeof customElements>"u")return N=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(Ee)}catch{return N=!1}return N=!0}(),Dt="ecTheme",xt="ecInitOptions",Ct="ecUpdateOptions",Ot=re({name:"echarts",props:x(x({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},mt),yt),emits:{},inheritAttrs:!1,setup:function(e,t){var n=t.attrs,o=H(),r=H(),a=H(),l=H(),v=P(Dt,null),u=P(xt,null),s=P(Ct,null),i=Qe(e),b=i.autoresize,O=i.manualUpdate,c=i.loading,M=i.loadingOptions,T=k(function(){return l.value||e.option||null}),B=k(function(){return e.theme||I(v,{})}),le=k(function(){return e.initOptions||I(u,{})}),ue=k(function(){return e.updateOptions||I(s,{})}),De=k(function(){return function(m){var d={};for(var h in m)wt(h)||(d[h]=m[h]);return d}(n)}),xe=Xe().proxy.$listeners;function F(m){if(r.value){var d=a.value=Se(r.value,B.value,le.value);e.group&&(d.group=e.group);var h=xe;h||(h={},Object.keys(n).filter(function(f){return f.indexOf("on")===0&&f.length>2}).forEach(function(f){var _=f.charAt(2).toLowerCase()+f.slice(3);_.substring(_.length-4)==="Once"&&(_="~".concat(_.substring(0,_.length-4))),h[_]=n[f]})),Object.keys(h).forEach(function(f){var _=h[f];if(_){var w=f.toLowerCase();w.charAt(0)==="~"&&(w=w.substring(1),_.__once__=!0);var C=d;if(w.indexOf("zr:")===0&&(C=d.getZr(),w=w.substring(3)),_.__once__){delete _.__once__;var j=_;_=function(){for(var L=[],S=0;S<arguments.length;S++)L[S]=arguments[S];j.apply(void 0,L),C.off(w,_)}}C.on(w,_)}}),b.value?tt(function(){d&&!d.isDisposed()&&d.resize(),D()}):D()}function D(){var f=m||T.value;f&&d.setOption(f,ue.value)}}function K(){a.value&&(a.value.dispose(),a.value=void 0)}var R=null;U(O,function(m){typeof R=="function"&&(R(),R=null),m||(R=U(function(){return e.option},function(d,h){d&&(a.value?a.value.setOption(d,x({notMerge:d!==h},ue.value)):F())},{deep:!0}))},{immediate:!0}),U([B,le],function(){K(),F()},{deep:!0}),ee(function(){e.group&&a.value&&(a.value.group=e.group)});var Ce=gt(a);return function(m,d,h){var D=P(zt,{}),f=k(function(){return x(x({},I(D,{})),h==null?void 0:h.value)});ee(function(){var _=m.value;_&&(d.value?_.showLoading(f.value):_.hideLoading())})}(a,c,M),function(m,d,h){var D=null;U([h,m,d],function(f,_,w){var C=f[0],j=f[1],L=f[2];if(C&&j&&L){var S=L===!0?{}:L,ce=S.throttle,de=ce===void 0?100:ce,_e=S.onResize,fe=function(){j.resize(),_e==null||_e()};D=de?Te(fe,de):fe,dt(C,D)}w(function(){C&&D&&_t(C,D)})})}(a,b,r),et(function(){F()}),ze(function(){Et&&o.value?o.value.__dispose=K:K()}),x({chart:a,root:o,inner:r,setOption:function(m,d){e.manualUpdate&&(l.value=m),a.value?a.value.setOption(m,d||{}):F(m)},nonEventAttrs:De},Ce)},render:function(){var e=x({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",ve(Ee,e,[ve("div",{ref:"inner"})])}}),ie=re({name:"Delete"});const St={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Tt=p("path",{fill:"currentColor",d:"M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"},null,-1);function Lt(e,t,n,o,r,a){return y(),A("svg",St,[Tt])}ie.render=Lt;ie.__file="packages/components/Delete.vue";const kt=ie;var se=re({name:"Edit"});const At={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Mt=p("path",{fill:"currentColor",d:"M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"},null,-1),Nt=p("path",{fill:"currentColor",d:"m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"},null,-1);function $t(e,t,n,o,r,a){return y(),A("svg",At,[Mt,Nt])}se.render=$t;se.__file="packages/components/Edit.vue";const Bt=se;const Ft={class:"price-show"},Rt="pc-screen",jt="mobile-screen",Ht={__name:"BudgetTable",props:["priceAll","form","tableData","echartsData","tableName","isMobileScreen","column"],emits:["update:form"],setup(e,{emit:t}){const n=e;Le([Ae,Me,Ne,$e,Be]);const o=z(!1),r=z(""),a=z(0),l=async s=>{ge.confirm("Do you want to submit?").then(async()=>{const i=n.tableData.splice(s,1);await Ue.from(n.tableName).delete().eq("id",i[0].id),q()}).catch(()=>{console.log("catch error")})},v=()=>{o.value=!0,r.value="Add";let s={};for(let i in n.form)i!=="id"&&(i==="Group"?s[i]=[]:s[i]="");s.Date=Fe().format("YYYY-MM-DD"),t("update:form",s)},u=s=>{a.value=s.id,o.value=!0;const i=JSON.parse(JSON.stringify(s));i.Date="2023-"+i.Date,t("update:form",i),r.value="Edit"};return(s,i)=>{const b=Re,O=je;return y(),G(J,null,[Y("div",{class:nt(e.isMobileScreen?jt:Rt)},[p(O,{data:n.tableData,onRowClick:u,style:{width:"100%"}},{default:E(()=>[(y(!0),G(J,null,be(n.column,c=>(y(),A(b,{key:c.prop,prop:c.prop,label:c.label},null,8,["prop","label"]))),128)),p(b,{fixed:"right",width:"80px"},{header:E(()=>[p(g(ke),{onClick:v,style:{width:"1em",height:"1em"}})]),default:E(c=>[p(g(kt),{onClick:M=>l(c.$index),style:{width:"1em",height:"1em","margin-right":"15px"}},null,8,["onClick"]),p(g(Bt),{onClick:M=>s.handleEdit(c.$index,c.row),style:{width:"1em",height:"1em"}},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),Y("div",Ft,"Price: "+we(n.priceAll),1),p(g(Ot),{option:n.echartsData,autoresize:"","init-options":{width:320,height:320}},null,8,["option"])],2),p(it,{onUpdatePageData:i[0]||(i[0]=c=>g(q)()),tableName:n.tableName,controlButton:r.value,editID:a.value,tableData:n.tableData,dialog:o.value,"onUpdate:dialog":i[1]||(i[1]=c=>o.value=c),form:n.form,"onUpdate:form":i[2]||(i[2]=c=>n.form=c),isMobileScreen:n.isMobileScreen},null,8,["tableName","controlButton","editID","tableData","dialog","form","isMobileScreen"])],64)}}},he=me(Ht,[["__scopeId","data-v-b60b051c"]]),Gt={__name:"index",setup(e){const t=Je(),n=z("left"),o=z("每月定期支出"),r=z(!1);ee(()=>{t.currTab=o.value,q(t.currTab)});const a=(s,i)=>{o.value=s.props.label};rt(()=>{l(),window.addEventListener("resize",l)}),ze(()=>{window.removeEventListener("resize",l)});const l=()=>{document.documentElement.clientWidth<500?(r.value=!0,n.value="top"):(r.value=!1,n.value="left")},v=z([{prop:"Name",label:"Name"},{prop:"Price",label:"Price"}]),u=z([{prop:"Name",label:"Name"},{prop:"Price",label:"Price"},{prop:"Date",label:"Date"}]);return(s,i)=>{const b=Pe,O=He;return y(),A(O,{class:"demo-tabs",onTabClick:a,"tab-position":n.value},{default:E(()=>[p(b,{label:"每月定期支出"},{default:E(()=>[p(he,{tableData:g(t).budgetTable,echartsData:g(t).budgetEchartsData,tableName:"budget-table",priceAll:g(t).monthPriceAll,form:g(t).budgetForm,"onUpdate:form":i[0]||(i[0]=c=>g(t).budgetForm=c),isMobileScreen:r.value,column:v.value},null,8,["tableData","echartsData","priceAll","form","isMobileScreen","column"])]),_:1}),p(b,{label:"买菜开销"},{default:E(()=>[p(he,{tableData:g(t).foodTable,echartsData:g(t).foodEchartsData,tableName:"food-table",priceAll:g(t).foodPriceAll,form:g(t).foodForm,"onUpdate:form":i[1]||(i[1]=c=>g(t).foodForm=c),isMobileScreen:r.value,column:u.value},null,8,["tableData","echartsData","priceAll","form","isMobileScreen","column"])]),_:1})]),_:1},8,["tab-position"])}}};export{Gt as default};
