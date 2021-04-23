(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(176)),o={id:"organization",title:"Organization"},c={unversionedId:"talawa-api/constraints/organization",id:"talawa-api/constraints/organization",isDocsHomePage:!1,title:"Organization",description:"What Is An Organization?",source:"@site/docs/talawa-api/constraints/organization.md",slug:"/talawa-api/constraints/organization",permalink:"/talawa-docs/docs/talawa-api/constraints/organization",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/constraints/organization.md",version:"current",sidebar:"someSidebar",previous:{title:"User",permalink:"/talawa-docs/docs/talawa-api/constraints/user"},next:{title:"Admin",permalink:"/talawa-docs/docs/talawa-api/constraints/admin"}},s=[{value:"What Is An <code>Organization</code>?",id:"what-is-an-organization",children:[]},{value:"How to create <code>Organization</code> ?",id:"how-to-create-organization-",children:[]},{value:"<code>Organization</code> Model",id:"organization-model",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-an-organization"},"What Is An ",Object(i.b)("inlineCode",{parentName:"h2"},"Organization"),"?"),Object(i.b)("p",null,"An organization is simply a body of one or more people. This includes but isn't limited to businesses, schools and religious institutions. An Organization comprises of ",Object(i.b)("inlineCode",{parentName:"p"},"Users"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Administrators"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Group chats"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Events")," and a general news feed."),Object(i.b)("h2",{id:"how-to-create-organization-"},"How to create ",Object(i.b)("inlineCode",{parentName:"h2"},"Organization")," ?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A user should create an account by signing up with their credentials. Steps for signing up are given ",Object(i.b)("a",{parentName:"p",href:"../authentication#sign-up"},"here"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upon creating an account the necessary information would get stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"Database"),". Now to create an ",Object(i.b)("inlineCode",{parentName:"p"},"Organization")," a request should be send to api having given fields."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Organisation Name,"),Object(i.b)("li",{parentName:"ol"},"Privacy Settings (Public Or Private)"),Object(i.b)("li",{parentName:"ol"},"Primary Contact Information"),Object(i.b)("li",{parentName:"ol"},"Organisation Address (If applicable)")))),Object(i.b)("h2",{id:"organization-model"},Object(i.b)("inlineCode",{parentName:"h2"},"Organization")," Model"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"apiUrl: string\nimage: string\nname: string\ndescription: string\nisPublic: string\ncreator: string\nmembers: [User]\nadmins: [User]\ngroupChats: [Message]\nposts: [Post]\nmembershipRequest: [MembershipRequest]\nblockedUser: [User]\nvisibleInSearch: boolean\n")))}p.isMDXComponent=!0},176:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);