"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={id:"tagging-support",title:"Hashtag Support"},i=void 0,l={unversionedId:"features/news feed/tagging-support",id:"features/news feed/tagging-support",title:"Hashtag Support",description:"This section is a work in progress.",source:"@site/docs/features/news feed/tagging.md",sourceDirName:"features/news feed",slug:"/features/news feed/tagging-support",permalink:"/docs/features/news feed/tagging-support",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/docs/features/news feed/tagging.md",tags:[],version:"current",frontMatter:{id:"tagging-support",title:"Hashtag Support"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/features/news feed/news-feed-overview"},next:{title:"Pinned Posts",permalink:"/docs/features/news feed/pinned-posts"}},s={},p=[{value:"Code: TAG",id:"code-tag",level:2},{value:"Overview",id:"overview",level:2},{value:"Problem",id:"problem",level:3},{value:"Goals",id:"goals",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"People and Roles",id:"people-and-roles",level:3},{value:"Context",id:"context",level:2},{value:"Use Cases",id:"use-cases",level:3},{value:"Proposal/Solution",id:"proposalsolution",level:2},{value:"User Experience",id:"user-experience",level:3},{value:"Important Details To Capture",id:"important-details-to-capture",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Tasks and Timeline",id:"tasks-and-timeline",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is a work in progress.")),(0,a.kt)("h2",{id:"code-tag"},"Code: TAG"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored by")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"Xavier Bryson")," ")," ",(0,a.kt)("em",{parentName:"p"},". Last updated on")," ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"14/03/21")," ")),(0,a.kt)("p",null,"This feature aims to ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"enable hashtag support")," ")," with ",(0,a.kt)("em",{parentName:"p"}," ",(0,a.kt)("strong",{parentName:"em"},"the")," ")," ",(0,a.kt)("strong",{parentName:"p"},"addition of hashtags to user posts"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Users of the application need a way to track/group posts :"),"\nSimilarly, users need a way of linking posts of a similar topic/grouping.")),(0,a.kt)("h3",{id:"goals"},"Goals"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Allow for the addition of tags to posts")," :\nAs popularized by social media, tagging of posts provides a familiar medium for tracking content.")),(0,a.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"people-and-roles"},"People and Roles"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Xavier Bryson (Feature Lead)"),": clarify functionality and assumptions.")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("h3",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"proposalsolution"},"Proposal/Solution"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"user-experience"},"User Experience"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Upon creation of a post, a user will have the option of specifying one or more hashtags.")),(0,a.kt)("h3",{id:"important-details-to-capture"},"Important Details To Capture"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"future-work"},"Future Work"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h2",{id:"tasks-and-timeline"},"Tasks and Timeline"),(0,a.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);