"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1110],{259:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(9575),a=(n(4041),n(2247)),o=n(5105),l=n(5312);const s={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},i=void 0,u={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"Native Scroll is the most basic and best scrolling function that a browser can support.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/egjs-conveyer/docs/next/quick-start",editUrl:null,tags:[],version:"current",frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},sidebar:"started",previous:{title:"Installation",permalink:"/egjs-conveyer/docs/next/"},next:{title:"Use the Methods",permalink:"/egjs-conveyer/docs/next/use-the-methods"}},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Native Scroll is the most basic and best scrolling function that a browser can support.",(0,a.yg)("br",{parentName:"p"}),"\n","Conveyer adds Drag gestures to your Native Scroll."),(0,a.yg)(o.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.yg)(l.A,{value:"js",mdxType:"TabItem"},(0,a.yg)("p",null,"Add the script/CSS to the page."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')),(0,a.yg)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,a.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,a.yg)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n')),(0,a.yg)("p",null,"Then, add some basic HTML layout of Conveyer to your page."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<div class="items">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.yg)("p",null,"Then initialize Conveyer instance with JavaScript after."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/react-conveyer";\n\nconst ig = new Conveyer(".items");\n'))),(0,a.yg)(l.A,{value:"react",mdxType:"TabItem"},(0,a.yg)("p",null,"You can import & use Conveyer as a React Component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  useConveyer(ref);\n\n  return <div className="items" ref={ref}>\n    <div className="item">1</div>\n    <div className="item">2</div>\n    <div className="item">3</div>\n  </div>;\n}\n'))),(0,a.yg)(l.A,{value:"vue",mdxType:"TabItem"},"You can import & use Conveyer as a Vue Component.",(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,a.yg)(l.A,{value:"vue2",mdxType:"TabItem"},(0,a.yg)("b",null,"@vue/composition-api")," is required to use vue2-conveyer.",(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import Vue from "vue";\nimport VueCompositionAPI from "@vue/composition-api";\n\nVue.use(VueCompositionAPI);\n')),(0,a.yg)("p",null,"You can import & use Conveyer as a Vue Component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,a.yg)(l.A,{value:"angular",mdxType:"TabItem"},(0,a.yg)("p",null,"You can add ",(0,a.yg)("inlineCode",{parentName:"p"},"NgxConveyerModule")," at ",(0,a.yg)("inlineCode",{parentName:"p"},"imports")," of your app module to use Conveyer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { NgxConveyerModule } from '@egjs/ngx-conveyer';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxConveyerModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="items" [ngxConveyer]="{ horizontal: true }" #conveyer="ngxConveyer">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n'))),(0,a.yg)(l.A,{value:"svelte",mdxType:"TabItem"},(0,a.yg)("p",null,"You can import ",(0,a.yg)("inlineCode",{parentName:"p"},"Conveyer"),' from the "svelte-conveyer" package.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref } = useConveyer();\n<\/script>\n<div class="items" use:ref>\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')))))}d.isMDXComponent=!0},2247:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>v});var r=n(4041);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5105:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(9575),a=n(4041),o=n(213),l=n(8849);const s=function(){const e=(0,a.useContext)(l.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(4094),u=n(9546);const c={tabItem:"tabItem_ngMb"};function p(e){const{lazy:t,block:n,defaultValue:o,values:l,groupId:p,className:m}=e,d=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=l??d.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.XI)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=s(),[h,N]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,i.a_)();if(null!=p){const e=f[p];null!=e&&e!==h&&v.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==h&&(j(t),N(r),null!=p&&b(p,r))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]||C[C.length-1];break}}t?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.A)("tabs",{"tabs--block":n},m)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>C.push(e),onKeyDown:w,onFocus:x,onClick:x},o,{className:(0,u.A)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":h===t})}),n??t)}))),t?(0,a.cloneElement)(d.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function m(e){const t=(0,o.A)();return a.createElement(p,(0,r.A)({key:String(t)},e))}},5312:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(4041);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);