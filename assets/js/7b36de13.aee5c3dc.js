"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[526],{2247:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>s});var n=r(4041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=c(r),u=a,s=y["".concat(p,".").concat(u)]||y[u]||m[u]||o;return r?n.createElement(s,i(i({ref:t},g),{},{components:r})):n.createElement(s,i({ref:t},g))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6604:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(9575),a=(r(4041),r(2247));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/ScrollIntoViewOptions",id:"version-1.1.0/api/ScrollIntoViewOptions",title:"ScrollIntoViewOptions",description:"Type: TSInterface",source:"@site/versioned_docs/version-1.1.0/api/ScrollIntoViewOptions.mdx",sourceDirName:"api",slug:"/api/ScrollIntoViewOptions",permalink:"/egjs-conveyer/docs/1.1.0/api/ScrollIntoViewOptions",editUrl:null,tags:[],version:"1.1.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FindItemOptions",permalink:"/egjs-conveyer/docs/1.1.0/api/FindItemOptions"},next:{title:"ConveyerItem",permalink:"/egjs-conveyer/docs/1.1.0/api/ConveyerItem"}},p=[],c={toc:p},g="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": TSInterface"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"hitTest"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"size ratio to find items. (default: 1) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"sibling"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"The number of items next to the item's index to return. (default: 0) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"align"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end" ',"|",' "center"'),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Where to arrange the items in the container. (default: ",'"',"start",'"',") "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"excludeStand"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to find the next item except sorting it in place. (default: false) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"offset"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"The value to scroll further from the sort position. (default: 0) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"How long to scroll animation time. (default: 0) "))))))}y.isMDXComponent=!0}}]);