"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Converting images to Webp format",s={unversionedId:"tutorials-and-guides/converting-to-webp",id:"tutorials-and-guides/converting-to-webp",title:"Converting images to Webp format",description:"What is Webp?",source:"@site/docs/tutorials-and-guides/converting-to-webp.md",sourceDirName:"tutorials-and-guides",slug:"/tutorials-and-guides/converting-to-webp",permalink:"/enact-docs/docs/tutorials-and-guides/converting-to-webp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials-and-guides/converting-to-webp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials and Guides",permalink:"/enact-docs/docs/category/tutorials-and-guides"},next:{title:"Debugging CSS",permalink:"/enact-docs/docs/tutorials-and-guides/debugging-css"}},l={},p=[{value:"What is Webp?",id:"what-is-webp",level:2},{value:"Why use Webp?",id:"why-use-webp",level:2},{value:"How to convert images to Webp format?",id:"how-to-convert-images-to-webp-format",level:2},{value:"Convert single image to Webp using nodejs",id:"convert-single-image-to-webp-using-nodejs",level:2},{value:"Bulk convert images to Webp format",id:"bulk-convert-images-to-webp-format",level:2},{value:"Convert single image to Webp format using Figma",id:"convert-single-image-to-webp-format-using-figma",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"converting-images-to-webp-format"},"Converting images to Webp format"),(0,o.kt)("h2",{id:"what-is-webp"},"What is Webp?"),(0,o.kt)("p",null,"Webp is a modern image format that provides superior lossless and lossy compression for images on the web. Using Webp, webmasters and web developers can create smaller, richer images that make the web faster."),(0,o.kt)("h2",{id:"why-use-webp"},"Why use Webp?"),(0,o.kt)("p",null,"Usecases for Webp include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Webp lossless images are 26% smaller in size compared to PNGs."),(0,o.kt)("li",{parentName:"ul"},"Webp lossy images are 25-34% smaller than comparable JPEG images at equivalent SSIM quality index."),(0,o.kt)("li",{parentName:"ul"},"Webp supports transparency (also known as alpha channel) at a cost of just 22% additional bytes."),(0,o.kt)("li",{parentName:"ul"},"Animation support: Webp also supports animation, allowing you to encode a single image file as a Webp file with multiple frames that plays in a loop."),(0,o.kt)("li",{parentName:"ul"},"Webp also supports color profiles, including the popular sRGB profile.")),(0,o.kt)("h2",{id:"how-to-convert-images-to-webp-format"},"How to convert images to Webp format?"),(0,o.kt)("h2",{id:"convert-single-image-to-webp-using-nodejs"},"Convert single image to Webp using nodejs"),(0,o.kt)("h2",{id:"bulk-convert-images-to-webp-format"},"Bulk convert images to Webp format"),(0,o.kt)("h2",{id:"convert-single-image-to-webp-format-using-figma"},"Convert single image to Webp format using Figma"))}m.isMDXComponent=!0}}]);