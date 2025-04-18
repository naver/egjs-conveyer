"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6377],{2247:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(4041);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||v[p]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5019:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var a=n(9575),r=(n(4041),n(2247)),s=n(9631),i=n(5215),l=n(5105),o=n(5312);const c={title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},u=void 0,d={unversionedId:"subscribe-to-reactive-properties",id:"version-1.7.1/subscribe-to-reactive-properties",title:"Subscribe to Reactive Properties",description:"You can subscribe by detecting only changes in properties instead of events.",source:"@site/versioned_docs/version-1.7.1/subscribe-to-reactive-properties.mdx",sourceDirName:".",slug:"/subscribe-to-reactive-properties",permalink:"/egjs-conveyer/docs/1.7.1/subscribe-to-reactive-properties",editUrl:null,tags:[],version:"1.7.1",frontMatter:{title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},sidebar:"started",previous:{title:"Listen to Events",permalink:"/egjs-conveyer/docs/1.7.1/listen-to-events"}},v=[],p={toc:v},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can subscribe by detecting only changes in ",(0,r.yg)("a",{parentName:"p",href:"api/Conveyer#properties"},"properties")," instead of events."),(0,r.yg)("p",null,"You can use reactive properties as a hook."),(0,r.yg)(l.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue2"},{label:"Vue@3",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"js",mdxType:"TabItem"},(0,r.yg)("p",null,"You need to set the inital state in the HTML attributes."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div class="buttons">\n    <button class="prev" disabled>Start</button>\n    <button class="next">End</button>\n  </div>\n  <div class="items horizontal">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n    <div class="item">10</div>\n  </div>\n</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items");\n\nconveyer.subscribe("isReachStart", value => {\n  document.querySelector(".prev").disabled = value;\n});\nconveyer.subscribe("isReachEnd", value => {\n  document.querySelector(".next").disabled = value;\n});\n'))),(0,r.yg)(o.A,{value:"react",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const { isReachStart, isReachEnd } = useConveyer(ref);\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" disabled={isReachStart}>Prev</button>\n      <button className="next" disabled={isReachEnd}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n'))),(0,r.yg)(o.A,{value:"vue",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,r.yg)(o.A,{value:"vue2",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,r.yg)(o.A,{value:"angular",mdxType:"TabItem"},(0,r.yg)("p",null,"There're few ways to interact with child component in Angular.",(0,r.yg)("br",{parentName:"p"}),"\n","See ",(0,r.yg)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" [disabled]="conveyer?.isReachStart">prev</button>\n  <button id="next" [disabled]="conveyer?.isReachEnd">next</button>\n  <div\n    class="items"\n    ngxConveyer\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n'))),(0,r.yg)(o.A,{value:"svelte",mdxType:"TabItem"},(0,r.yg)("p",null,"You need to use $-prefix to read reactiver properties in svelte."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values"},"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref, isReachStart, isReachEnd } = useConveyer();\n\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" disabled={$isReachStart}>Prev</button>\n    <button class="next" disabled={$isReachEnd}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,r.yg)("p",null,"See all available events at ",(0,r.yg)(s.A,{to:(0,i.A)("docs/api/Conveyer#events"),mdxType:"Link"},"Conveyer#events"),"."))}b.isMDXComponent=!0},5105:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(9575),r=n(4041),s=n(213),i=n(8849);const l=function(){const e=(0,r.useContext)(i.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=n(4094),c=n(9546);const u={tabItem:"tabItem_ngMb"};function d(e){const{lazy:t,block:n,defaultValue:s,values:i,groupId:d,className:v}=e,p=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=i??p.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.XI)(m,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??p.find((e=>e.props.default))?.props.value??p[0]?.props.value;if(null!==f&&!m.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=l(),[h,x]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.a_)();if(null!=d){const e=y[d];null!=e&&e!==h&&m.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=m[n].value;a!==h&&(w(t),x(a),null!=d&&g(d,a))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]||N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":n},v)},m.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>N.push(e),onKeyDown:T,onFocus:E,onClick:E},s,{className:(0,c.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":h===t})}),n??t)}))),t?(0,r.cloneElement)(p.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function v(e){const t=(0,s.A)();return r.createElement(d,(0,a.A)({key:String(t)},e))}},5312:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(4041);const r=function(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);