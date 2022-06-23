"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8090],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||v[p]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(2784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(2784),i=n(2389),s=n(9443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(3616),c=n(6010),u="tabItem_vU9c";function v(e){var t,n,i,s=e.lazy,v=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),x=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(g),E=w[0],T=w[1],j=[],R=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=x[m];null!=O&&O!==E&&h.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==E&&(R(t),T(r),null!=m&&N(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;n=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;n=j[a]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":v},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:C,onClick:C},i,{className:(0,c.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},1542:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return v},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(2784),n(3905)),s=n(9960),l=n(4996),o=n(6396),c=n(8215),u=["components"],v={title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},d=void 0,p={unversionedId:"subscribe-to-reactive-properties",id:"subscribe-to-reactive-properties",title:"Subscribe to Reactive Properties",description:"You can subscribe by detecting only changes in properties instead of events.",source:"@site/docs/subscribe-to-reactive-properties.mdx",sourceDirName:".",slug:"/subscribe-to-reactive-properties",permalink:"/egjs-conveyer/docs/next/subscribe-to-reactive-properties",editUrl:null,tags:[],version:"current",frontMatter:{title:"Subscribe to Reactive Properties",id:"subscribe-to-reactive-properties",slug:"/subscribe-to-reactive-properties",custom_edit_url:null},sidebar:"started",previous:{title:"Listen to Events",permalink:"/egjs-conveyer/docs/next/listen-to-events"}},m=[],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can subscribe by detecting only changes in ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/api/Conveyer#properties"},"properties")," instead of events."),(0,i.kt)("p",null,"You can use reactive properties as a hook."),(0,i.kt)(o.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue2"},{label:"Vue@3",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'conveyer.subscribe("isReachStart", value => {\n  console.log(value);\n});\n'))),(0,i.kt)(c.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const { isReachStart, isReachEnd } = useConveyer(ref);\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" disabled={isReachStart}>Prev</button>\n      <button className="next" disabled={isReachEnd}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n'))),(0,i.kt)(c.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,i.kt)(c.Z,{value:"vue2",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="container">\n  <button id="prev" :disabled="isReachStart">prev</button>\n  <button id="next" :disabled="isReachEnd">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n      const { ref, isReachStart, isReachEnd } = useConveyer();\n      return {\n        ref,\n        scrollIntoView,\n        isReachStart,\n        isReachEnd,\n      };\n    },\n  });\n};\n'))),(0,i.kt)(c.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,i.kt)("br",{parentName:"p"}),"\n","See ",(0,i.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" [disabled]="conveyer?.isReachStart">prev</button>\n  <button id="next" [disabled]="conveyer?.isReachEnd">next</button>\n  <div\n    class="items"\n    ngxConveyer\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n'))),(0,i.kt)(c.Z,{value:"svelte",mdxType:"TabItem"},(0,i.kt)("p",null,"You need to use $-prefix to read reactiver properties in svelte."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values"},"https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref, isReachStart, isReachEnd } = useConveyer();\n\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" disabled={$isReachStart}>Prev</button>\n    <button class="next" disabled={$isReachEnd}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,i.kt)("p",null,"See all available events at ",(0,i.kt)(s.Z,{to:(0,l.Z)("docs/api/Conveyer#events"),mdxType:"Link"},"Conveyer#events"),"."))}b.isMDXComponent=!0}}]);