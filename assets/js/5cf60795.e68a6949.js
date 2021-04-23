(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(176)),o={id:"authentication",title:"Authentication"},c={unversionedId:"talawa-api/authentication",id:"talawa-api/authentication",isDocsHomePage:!1,title:"Authentication",description:"How can a User Authenticate?",source:"@site/docs/talawa-api/authentication.md",slug:"/talawa-api/authentication",permalink:"/talawa-docs/docs/talawa-api/authentication",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/talawa-api/authentication.md",version:"current",sidebar:"someSidebar",previous:{title:"Admin",permalink:"/talawa-docs/docs/talawa-api/constraints/admin"},next:{title:"Functionality",permalink:"/talawa-docs/docs/talawa-api/functionality"}},u=[{value:"How can a <code>User</code> Authenticate?",id:"how-can-a-user-authenticate",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"how-can-a-user-authenticate"},"How can a ",Object(i.b)("inlineCode",{parentName:"h3"},"User")," Authenticate?"),Object(i.b)("blockquote",null,Object(i.b)("h3",{parentName:"blockquote",id:"sign-up"},Object(i.b)("inlineCode",{parentName:"h3"},"Sign Up")),Object(i.b)("p",{parentName:"blockquote"},"A user can authenticate by creating a new account. This can be done by sending request to api with sign up fields.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"image: string\ntokenVersion: number\nfirstName: string\nlastName: string\nemail: string\npassword: string\ncreatedOrganizations: [Organization]\ncreatedEvents: [Event]\njoinedOrganizations: [Organization]\nregisteredEvents: [Event]\neventAdmin: [Event]\nadminFor: [Event]\nmembershipRequests: [MembershipRequest]\norganizationsBlockBy: [Organization]\norganizationUserBelongsTo: [Organization]\n")),Object(i.b)("blockquote",null,Object(i.b)("h3",{parentName:"blockquote",id:"login"},Object(i.b)("inlineCode",{parentName:"h3"},"Login")),Object(i.b)("p",{parentName:"blockquote"},"If a User has already signed up He/She can login to the application by authenticating following Fields .")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"email: string\npassword: string\n")))}l.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);