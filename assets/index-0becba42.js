import"./base-05c0202d.js";import{E as b}from"./el-card-0ef6ffb1.js";import{E as V,a as E,b as F,c as I}from"./el-input-4480579d.js";import{u as v,a as y,r as f,o as G,b as k,c as A,d as e,w as o,F as B,e as n,f as g}from"./index-b5bc2e0e.js";import{s as h}from"./supabaseClient-81f287cc.js";const C=n("div",{class:"card-header"},[n("span",null,"Admin")],-1),P=n("br",null,null,-1),N=n("div",{class:"card-header"},[n("span",null,"Guest")],-1),R={__name:"index",setup(L){const l=v(),u=y(),r=f({pass:""}),d=f({pass:""});G(()=>{l.signedInAdmin=!1,l.signedInGuest=!1});const w=async()=>{const{data:t,error:s}=await h.auth.signInWithPassword({email:"mopjtv@gmail.com",password:r.pass});!s&&t.user&&t.session&&(u.push({path:"home"}),l.signedInAdmin=!0)},x=async()=>{const{data:t,error:s}=await h.auth.signInWithPassword({email:"deexiao1994@outlook.com",password:d.pass});!s&&t.user&&t.session&&(console.log("dataGuest",t),u.push({path:"home"}),l.signedInGuest=!0)};return(t,s)=>{const m=V,i=E,p=F,c=I,_=b;return k(),A(B,null,[e(_,{class:"box-card"},{header:o(()=>[C]),default:o(()=>[e(c,{model:r,"status-icon":""},{default:o(()=>[e(p,{label:"Password",prop:"pass"},{default:o(()=>[e(m,{modelValue:r.pass,"onUpdate:modelValue":s[0]||(s[0]=a=>r.pass=a),autocomplete:"off",style:{width:"190px"}},null,8,["modelValue"]),e(i,{onClick:s[1]||(s[1]=a=>w()),style:{"margin-left":"10px"}},{default:o(()=>[g("Login")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),P,e(_,{class:"box-card"},{header:o(()=>[N]),default:o(()=>[e(c,{model:d,"status-icon":""},{default:o(()=>[e(p,{label:"Password",prop:"pass"},{default:o(()=>[e(m,{modelValue:d.pass,"onUpdate:modelValue":s[2]||(s[2]=a=>d.pass=a),autocomplete:"off",style:{width:"190px"}},null,8,["modelValue"]),e(i,{onClick:s[3]||(s[3]=a=>x()),style:{"margin-left":"10px"}},{default:o(()=>[g("Login")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],64)}}};export{R as default};
