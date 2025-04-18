"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2821],{16:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=t(9575),a=(t(4041),t(2247)),o=t(9631),l=t(5215),s=t(5105),i=t(5312);const c={title:"Use the Methods",id:"use-the-methods",slug:"/use-the-methods",custom_edit_url:null},u=void 0,d={unversionedId:"use-the-methods",id:"version-1.2.0/use-the-methods",title:"Use the Methods",description:"You can see Conveyer's methods.",source:"@site/versioned_docs/version-1.2.0/use-the-methods.mdx",sourceDirName:".",slug:"/use-the-methods",permalink:"/egjs-conveyer/ko/docs/1.2.0/use-the-methods",editUrl:null,tags:[],version:"1.2.0",frontMatter:{title:"Use the Methods",id:"use-the-methods",slug:"/use-the-methods",custom_edit_url:null},sidebar:"started",previous:{title:"Quick Start",permalink:"/egjs-conveyer/ko/docs/1.2.0/quick-start"},next:{title:"Listen to Events",permalink:"/egjs-conveyer/ko/docs/1.2.0/listen-to-events"}},m=[],p={toc:m},v="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(v,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can see Conveyer's ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/Conveyer#methods"},"methods"),"."),(0,a.yg)(s.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"js",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods directly from the Conveyer instance."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const conveyer = new Conveyer("#el", options);\n\nconveyer.scrollIntoView("end", { align: "start "});\n'))),(0,a.yg)(i.A,{value:"react",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods of Conveyer by getting a result of ",(0,a.yg)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const { scrollIntoView } = useConveyer(ref);\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" onClick={() => {\n        // start to end\n        scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n        });\n      }}>Prev</button>\n      <button className="next" onClick={() => {\n        // end to start\n        scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n        });\n      }}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n')),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.yg)(i.A,{value:"vue",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods of Conveyer by getting a result of ",(0,a.yg)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n    const { ref, scrollIntoView } = useConveyer({\n      horizontal: false,\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n    };\n  },\n  methods: {\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    },\n  },\n};\n'))),(0,a.yg)(i.A,{value:"vue2",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods of Conveyer by getting a result of ",(0,a.yg)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n    const { ref, scrollIntoView } = useConveyer({\n      horizontal: false,\n    });\n\n    return {\n      ref,\n      scrollIntoView,\n    };\n  },\n  methods: {\n    prev() {\n      this.scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    },\n    next() {\n      this.scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    },\n  },\n};\n'))),(0,a.yg)(i.A,{value:"angular",mdxType:"TabItem"},(0,a.yg)("p",null,"There're few ways to interact with child component in Angular.",(0,a.yg)("br",{parentName:"p"}),"\n","See ",(0,a.yg)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" (click)="prev()">prev</button>\n  <button id="next" (click)="next()">next</button>\n  <div\n    class="items"\n    ngxConveyer\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},'import { Component, Input, AfterViewInit } from \'@angular/core\';\n\nimport { NgxConveyerDirective } from \'ngx-conveyer\';\n@Component({\n  selector: \'app-root\',\n  templateUrl: \'./app.component.html\',\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild("conveyer") conveyer!: NgxConveyerDirective;\n  prev() {\n    this.conveyer.scrollIntoView("start", {\n      align: "end",\n      duration: 500,\n    });\n  }\n  next() {\n    this.conveyer.scrollIntoView("end", {\n      align: "start",\n      duration: 500,\n    });\n  }\n}\n'))),(0,a.yg)(i.A,{value:"svelte",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref, scrollIntoView } = useConveyer();\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" on:click={() => {\n      // start to end\n      scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    }}>Prev</button>\n    <button class="next" on:click={() => {\n      // end to start\n      scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    }}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,a.yg)("p",null,"See all available methods at our ",(0,a.yg)(o.A,{to:(0,l.A)("docs/api/Conveyer#methods"),mdxType:"Link"},"API")," page."))}f.isMDXComponent=!0},2247:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>v});var r=t(4041);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5105:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(9575),a=t(4041),o=t(213),l=t(8849);const s=function(){const e=(0,a.useContext)(l.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=t(4094),c=t(9546);const u={tabItem:"tabItem_ngMb"};function d(e){const{lazy:n,block:t,defaultValue:o,values:l,groupId:d,className:m}=e,p=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=l??p.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,i.XI)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??p.find((e=>e.props.default))?.props.value??p[0]?.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:h}=s(),[b,w]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.a_)();if(null!=d){const e=g[d];null!=e&&e!==b&&v.some((n=>n.value===e))&&w(e)}const C=e=>{const n=e.currentTarget,t=x.indexOf(n),r=v[t].value;r!==b&&(N(n),w(r),null!=d&&h(d,r))},I=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}n?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},m)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:e=>x.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,c.A)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":b===n})}),t??n)}))),n?(0,a.cloneElement)(p.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==b})))))}function m(e){const n=(0,o.A)();return a.createElement(d,(0,r.A)({key:String(n)},e))}},5312:(e,n,t)=>{t.d(n,{A:()=>a});var r=t(4041);const a=function(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);