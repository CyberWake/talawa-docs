"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,v=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(3117),r=(a(7294),a(3905));const o={id:"admin-portal-overview",title:"Overview"},i=void 0,s={unversionedId:"features/admin-portal/admin-portal-overview",id:"features/admin-portal/admin-portal-overview",title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/admin-portal/overview.md",sourceDirName:"features/admin-portal",slug:"/features/admin-portal/admin-portal-overview",permalink:"/docs/features/admin-portal/admin-portal-overview",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/features/admin-portal/overview.md",tags:[],version:"current",frontMatter:{id:"admin-portal-overview",title:"Overview"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/features/features-introduction"},next:{title:"Overview",permalink:"/docs/features/admin-role/admin-role-overview"}},l={},d=[{value:"Overall Guidance",id:"overall-guidance",level:2},{value:"Creating Organizations",id:"creating-organizations",level:3},{value:"Organizational Admins",id:"organizational-admins",level:3},{value:"Front End",id:"front-end",level:3},{value:"Back End",id:"back-end",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,r.kt)("h2",{id:"overall-guidance"},"Overall Guidance"),(0,r.kt)("h3",{id:"creating-organizations"},"Creating Organizations"),(0,r.kt)("p",null,"Organizations should only be created via the portal.\nThe portal should be able to support the creation of multiple organizations to assist in creating the cloud service."),(0,r.kt)("h3",{id:"organizational-admins"},"Organizational Admins"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NB:")," There are two types of admins."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Organizational Creator Admin (OCA)"))," -  The creator of the organization is more like a super admin. Ie, the creator is the only one with privilege to add or delete admins and delete organizations.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NB:"))," OCA has every privilege an organizational admin has."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Organizational Admin"))," - Added by the Creator. Has privilege to the rest of admin privilege."),(0,r.kt)("h3",{id:"front-end"},"Front End"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Screen and functionality allowing admins to  remove group chats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64")),(0,r.kt)("li",{parentName:"ol"},"Screen and functionality allowing  admins to remove events ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64")),(0,r.kt)("li",{parentName:"ol"},"Screen and functionality allowing admins to  remove posts ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64"))),(0,r.kt)("h3",{id:"back-end"},"Back End"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allow users to send requests to join private organizations ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/65"},"Issue #65")),(0,r.kt)("li",{parentName:"ol"},"Allow admins to remove members from an organization.",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/66"},"Issue #66")),(0,r.kt)("li",{parentName:"ol"},"Allow admins to remove group chats ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64")),(0,r.kt)("li",{parentName:"ol"},"Allow admins to remove events ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64")),(0,r.kt)("li",{parentName:"ol"},"Allow admins to remove posts ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PalisadoesFoundation/talawa-admin/issues/64"},"Issue #64"))))}m.isMDXComponent=!0}}]);