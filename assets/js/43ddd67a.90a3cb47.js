"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7842],{2247:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var r=n(4041);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=p(n),d=a,u=y["".concat(c,".").concat(d)]||y[d]||s[d]||o;return n?r.createElement(u,l(l({ref:t},g),{},{components:n})):r.createElement(u,l({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4618:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(9575),a=(n(4041),n(2247));const o={custom_edit_url:null},l=void 0,i={unversionedId:"api/ConveyerOptions",id:"version-1.3.1/api/ConveyerOptions",title:"ConveyerOptions",description:"Type: TSInterface",source:"@site/versioned_docs/version-1.3.1/api/ConveyerOptions.mdx",sourceDirName:"api",slug:"/api/ConveyerOptions",permalink:"/egjs-conveyer/docs/1.3.1/api/ConveyerOptions",editUrl:null,tags:[],version:"1.3.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"CONVEYER_METHODS",permalink:"/egjs-conveyer/docs/1.3.1/api/CONVEYER_METHODS"},next:{title:"OnFinishScroll",permalink:"/egjs-conveyer/docs/1.3.1/api/OnFinishScroll"}},c=[],p={toc:c},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": TSInterface"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"horizontal"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"scroll direction. (true: Horizontal Scroll, false: Vertical Scroll)  (default: true) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"itemSelector"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"selector to find items inside. (default: ",'"','"',") "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"useDrag"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to use drag (default: true) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"useSideWheel"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to use the mouse wheel in a direction aside from the scroll direction (default: false) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"scrollDebounce"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"The maximum amount of time the scroll event does not fire for the finishScroll event to be triggered. (default: 100) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"preventDefault"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to prevent being selected. (default: true) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"preventClickOnDrag"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to prevent click event when dragging. (default: false) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"autoInit"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"Whether to automatically initialize when an instance is created. If set to false, initialization is possible while calling the init method. (default: true) "))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"nested"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("p",null,"If this option is enabled on a Conveyer placed inside an egjs component that has the same scroll direction including the Conveyer itself. The parent component moves in the same direction after the Conveyer reaches the first/last scroll position. "))))))}y.isMDXComponent=!0}}]);