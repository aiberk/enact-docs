"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5419],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(y,s(s({ref:t},p),{},{components:r})):o.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:5},s="Deploy Docs",i={unversionedId:"contributing-to-docs/deploy-docs",id:"contributing-to-docs/deploy-docs",title:"Deploy Docs",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/contributing-to-docs/deploy-docs.md",sourceDirName:"contributing-to-docs",slug:"/contributing-to-docs/deploy-docs",permalink:"/enact-docs/docs/contributing-to-docs/deploy-docs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contributing-to-docs/deploy-docs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/enact-docs/docs/contributing-to-docs/markdown-features"},next:{title:"MDX code snippets",permalink:"/enact-docs/docs/contributing-to-docs/mdx-code-snippets"}},l={},c=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-docs"},"Deploy Docs"),(0,n.kt)("p",null,"Docusaurus is a ",(0,n.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,n.kt)("p",null,"It builds your site as simple ",(0,n.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,n.kt)("h2",{id:"build-your-site"},"Build your site"),(0,n.kt)("p",null,"Build your site ",(0,n.kt)("strong",{parentName:"p"},"for production"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"The static files are generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("h2",{id:"deploy-your-site"},"Deploy your site"),(0,n.kt)("p",null,"Test your production build locally:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,n.kt)("p",null,"You can now deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,n.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,n.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);