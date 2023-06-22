"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1785],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1846:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2784);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},582:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),l=n(9741),o=n(4253);const s=function(){const e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(9645),u=n(6277);const c="tabItem_ngMb";function p(e){var t,n,l;const{lazy:o,block:p,defaultValue:m,values:d,groupId:v,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:N}=s(),[C,j]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=v){const e=h[v];null!=e&&e!==C&&y.some((t=>t.value===e))&&j(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==C&&(w(t),j(r),null!=v&&N(v,r))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:T,onClick:T},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1841:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(7896),a=(n(2784),n(876)),l=n(582),o=n(1846);const s={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},i=void 0,u={unversionedId:"quick-start",id:"version-1.4.7/quick-start",title:"Quick Start",description:"Native Scroll is the most basic and best scrolling function that a browser can support.",source:"@site/versioned_docs/version-1.4.7/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/egjs-conveyer/ko/docs/1.4.7/quick-start",editUrl:null,tags:[],version:"1.4.7",frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},sidebar:"started",previous:{title:"Installation",permalink:"/egjs-conveyer/ko/docs/1.4.7/"},next:{title:"Use the Methods",permalink:"/egjs-conveyer/ko/docs/1.4.7/use-the-methods"}},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Native Scroll is the most basic and best scrolling function that a browser can support.",(0,a.kt)("br",{parentName:"p"}),"\n","Conveyer adds Drag gestures to your Native Scroll."),(0,a.kt)(l.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"Add the script/CSS to the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')),(0,a.kt)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,a.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n')),(0,a.kt)("p",null,"Then, add some basic HTML layout of Conveyer to your page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="items">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.kt)("p",null,"Then initialize Conveyer instance with JavaScript after."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/react-conveyer";\n\nconst ig = new Conveyer(".items");\n'))),(0,a.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"You can import & use Conveyer as a React Component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  useConveyer(ref);\n\n  return <div className="items" ref={ref}>\n    <div className="item">1</div>\n    <div className="item">2</div>\n    <div className="item">3</div>\n  </div>;\n}\n'))),(0,a.kt)(o.Z,{value:"vue",mdxType:"TabItem"},"You can import & use Conveyer as a Vue Component.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,a.kt)(o.Z,{value:"vue2",mdxType:"TabItem"},(0,a.kt)("b",null,"@vue/composition-api")," is required to use vue2-conveyer.",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Vue from "vue";\nimport VueCompositionAPI from "@vue/composition-api";\n\nVue.use(VueCompositionAPI);\n')),(0,a.kt)("p",null,"You can import & use Conveyer as a Vue Component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n    const { ref } = useConveyer();\n\n    return {\n      ref,\n    };\n  },\n};\n'))),(0,a.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"NgxConveyerModule")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," of your app module to use Conveyer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"import { NgxConveyerModule } from '@egjs/ngx-conveyer';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxConveyerModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="items" [ngxConveyer]="{ horizontal: true }" #conveyer="ngxConveyer">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n'))),(0,a.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can import ",(0,a.kt)("inlineCode",{parentName:"p"},"Conveyer"),' from the "svelte-conveyer" package.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref } = useConveyer();\n<\/script>\n<div class="items" use:ref>\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n</div>\n')))))}m.isMDXComponent=!0}}]);