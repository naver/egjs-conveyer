"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5873],{2247:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(4041);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),y=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},p=function(e){var t=y(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=y(n),m=r,s=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(s,g(g({ref:t},p),{},{components:n})):a.createElement(s,g({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=n[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(9575),r=(n(4041),n(2247));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/Conveyer",id:"version-1.0.2/api/Conveyer",title:"Conveyer",description:"Conveyer adds Drag gestures to your Native Scroll.",source:"@site/versioned_docs/version-1.0.2/api/Conveyer.mdx",sourceDirName:"api",slug:"/api/Conveyer",permalink:"/egjs-conveyer/ko/docs/1.0.2/api/Conveyer",editUrl:null,tags:[],version:"1.0.2",frontMatter:{custom_edit_url:null},sidebar:"api",next:{title:"Component",permalink:"/egjs-conveyer/ko/docs/1.0.2/api/Component"}},o=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"isReachStart",id:"isReachStart",children:[],level:3},{value:"isReachEnd",id:"isReachEnd",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"findElement",id:"findElement",children:[],level:3},{value:"findItem",id:"findItem",children:[],level:3},{value:"scrollIntoView",id:"scrollIntoView",children:[],level:3},{value:"scrollBy",id:"scrollBy",children:[],level:3},{value:"scrollTo",id:"scrollTo",children:[],level:3},{value:"setItems",id:"setItems",children:[],level:3},{value:"updateItems",id:"updateItems",children:[],level:3},{value:"updateContainer",id:"updateContainer",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"trigger",id:"trigger",children:[],level:3},{value:"once",id:"once",children:[],level:3},{value:"hasOn",id:"hasOn",children:[],level:3},{value:"on",id:"on",children:[],level:3},{value:"off",id:"off",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"reachStart",id:"event-reachStart",children:[],level:3},{value:"leaveStart",id:"event-leaveStart",children:[],level:3},{value:"reachEnd",id:"event-reachEnd",children:[],level:3},{value:"leaveEnd",id:"event-leaveEnd",children:[],level:3},{value:"beginScroll",id:"event-beginScroll",children:[],level:3},{value:"finishScroll",id:"event-finishScroll",children:[],level:3}],level:2}],y={toc:o},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Conveyer extends Component\n")),(0,r.yg)("p",null,"Conveyer adds Drag gestures to your Native Scroll."),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("strong",null,"Methods")),(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("strong",null,"Events"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("a",{href:"#isReachStart"},"isReachStart"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#isReachEnd"},"isReachEnd")),(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("a",{href:"#findElement"},"findElement"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#findItem"},"findItem"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#scrollIntoView"},"scrollIntoView"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#scrollBy"},"scrollBy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#scrollTo"},"scrollTo"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#setItems"},"setItems"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateItems"},"updateItems"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateContainer"},"updateContainer"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#update"},"update"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#trigger"},"trigger"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#once"},"once"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#hasOn"},"hasOn"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#on"},"on"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#off"},"off")),(0,r.yg)("div",{className:"col col--4"},(0,r.yg)("a",{href:"#event-reachStart"},"reachStart"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#event-leaveStart"},"leaveStart"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#event-reachEnd"},"reachEnd"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#event-leaveEnd"},"leaveEnd"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#event-beginScroll"},"beginScroll"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#event-finishScroll"},"finishScroll")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new Conveyer(scrollArea, options)\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"scrollArea"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," HTMLElement ","|"," Ref","<","HTMLElement",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"A base element for a module "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"ConveyerOptions"},"ConveyerOptions")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The option object of the InfiniteGrid module "))))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"isReachStart"},"isReachStart"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Whether the scroll has reached the start."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": false"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachStart\n')),(0,r.yg)("h3",{id:"isReachEnd"},"isReachEnd"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Whether the scroll has reached the end."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": false"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachEnd\n')),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"findElement"},"findElement"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Finds an element for that direction."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Options for the ",(0,r.yg)("code",null,"findElement")," method. "))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/examples/Methods"},"direction's example")," page for detailed information",(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView2.png",height:"210"})))),(0,r.yg)("h3",{id:"findItem"},"findItem"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Finds an item for an element or its direction."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"ConveyerItem"},"ConveyerItem")," ","|"," null"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"target"),(0,r.yg)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Options for the ",(0,r.yg)("code",null,"findItem")," method. "))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/examples/Methods"},"direction's example")," page for detailed information",(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView2.png",height:"210"})))),(0,r.yg)("h3",{id:"scrollIntoView"},"scrollIntoView"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Scrolls an element or an item in that direction into the view."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"target"),(0,r.yg)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"ScrollIntoViewOptions"},"ScrollIntoViewOptions")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Options for the ",(0,r.yg)("code",null,"scrollIntoView")," method. "))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/examples/Methods"},"target's example")," page for detailed information",(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"/img/scrollIntoView2.png",height:"210"})))),(0,r.yg)("h3",{id:"scrollBy"},"scrollBy"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Scrolls by the given position amount."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Amount of position to scroll by. "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Duration to scroll by that position. "))))),(0,r.yg)("h3",{id:"scrollTo"},"scrollTo"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Scroll to the given position."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Amount of position to scroll to. "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Duration to scroll to that position. "))))),(0,r.yg)("h3",{id:"setItems"},"setItems"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Set the items directly to the Conveyer."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"ConveyerItem"},"ConveyerItem"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Items to set on Conveyer "))))),(0,r.yg)("h3",{id:"updateItems"},"updateItems"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update the position and size information of items."),(0,r.yg)("h3",{id:"updateContainer"},"updateContainer"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update container size and scroll size."),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Updating containers and items."),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",null),(0,r.yg)("p",null,"If you use the autoInit option as false, you can initialize it directly through the init method."),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Releases the instnace and events."),(0,r.yg)("h3",{id:"trigger"},"trigger"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Trigger a custom event."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",null,"An instance of the component itself"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"event"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The name of the custom event to be triggered or an instance of the ComponentEvent"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"params"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Event data to be sent when triggering a custom event "))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,r.yg)("h3",{id:"once"},"once"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Executed event just one time."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",null,"An instance of the component itself"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The handler function of the event to be attached "))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,r.yg)("h3",{id:"hasOn"},"hasOn"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Checks whether an event has been attached to a component."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",null,"Indicates whether the event is attached. "))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The name of the event to be attached "))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,r.yg)("h3",{id:"on"},"on"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Attaches an event to a component."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",null,"An instance of a component itself"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The handler function of the event to be attached "))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,r.yg)("h3",{id:"off"},"off"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Detaches an event from the component.",(0,r.yg)("br",null),"If the ",(0,r.yg)("code",null,"eventName")," is not given this will detach all event handlers attached.",(0,r.yg)("br",null),"If the ",(0,r.yg)("code",null,"handlerToDetach")," is not given, this will detach all event handlers for ",(0,r.yg)("code",null,"eventName"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",null,"An instance of a component itself "))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The name of the event to be detached "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The handler function of the event to be detached "))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')),(0,r.yg)("h2",{id:"events"},"Events"),(0,r.yg)("h3",{id:"event-reachStart"},"reachStart"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when scroll reach start."),(0,r.yg)("h3",{id:"event-leaveStart"},"leaveStart"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when scroll leave start."),(0,r.yg)("h3",{id:"event-reachEnd"},"reachEnd"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when scroll reach end."),(0,r.yg)("h3",{id:"event-leaveEnd"},"leaveEnd"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when scroll leave end."),(0,r.yg)("h3",{id:"event-beginScroll"},"beginScroll"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when begin scroll."),(0,r.yg)("h3",{id:"event-finishScroll"},"finishScroll"),(0,r.yg)("div",null),(0,r.yg)("p",null,"This event is fired when finish scroll."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"e"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"OnFinishScroll"},"OnFinishScroll")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"The object of data to be sent to an event "))))))}d.isMDXComponent=!0}}]);