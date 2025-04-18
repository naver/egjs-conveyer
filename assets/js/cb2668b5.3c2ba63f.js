"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6825],{2247:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>g});var t=n(4041);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=t.createContext({}),c=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},i=function(e){var a=c(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(g,s(s({ref:a},i),{},{components:n})):t.createElement(g,s({ref:a},i))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[p]="string"==typeof e?e:l,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5105:(e,a,n)=>{n.d(a,{A:()=>d});var t=n(9575),l=n(4041),r=n(213),s=n(8849);const o=function(){const e=(0,l.useContext)(s.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(4094),c=n(9546);const i={tabItem:"tabItem_ngMb"};function p(e){const{lazy:a,block:n,defaultValue:r,values:s,groupId:p,className:d}=e,m=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=s??m.map((e=>{let{props:{value:a,label:n,attributes:t}}=e;return{value:a,label:n,attributes:t}})),y=(0,u.XI)(g,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:h}=o(),[f,T]=(0,l.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.a_)();if(null!=p){const e=b[p];null!=e&&e!==f&&g.some((a=>a.value===e))&&T(e)}const x=e=>{const a=e.currentTarget,n=N.indexOf(a),t=g[n].value;t!==f&&(j(a),T(t),null!=p&&h(p,t))},k=e=>{let a=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;a=N[n]||N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;a=N[n]||N[N.length-1];break}}a?.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":n},d)},g.map((e=>{let{value:a,label:n,attributes:r}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:f===a?0:-1,"aria-selected":f===a,key:a,ref:e=>N.push(e),onKeyDown:k,onFocus:x,onClick:x},r,{className:(0,c.A)("tabs__item",i.tabItem,r?.className,{"tabs__item--active":f===a})}),n??a)}))),a?(0,l.cloneElement)(m.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},m.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==f})))))}function d(e){const a=(0,r.A)();return l.createElement(p,(0,t.A)({key:String(a)},e))}},5312:(e,a,n)=>{n.d(a,{A:()=>l});var t=n(4041);const l=function(e){let{children:a,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",hidden:n,className:l},a)}},6864:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(9575),l=(n(4041),n(2247)),r=n(5105),s=n(5312);const o={title:"Installation",id:"installation",slug:"/",custom_edit_url:null},u=void 0,c={unversionedId:"installation",id:"version-1.0.2/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-1.0.2/installation.mdx",sourceDirName:".",slug:"/",permalink:"/egjs-conveyer/docs/1.0.2/",editUrl:null,tags:[],version:"1.0.2",frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null},sidebar:"started",next:{title:"Quick Start",permalink:"/egjs-conveyer/docs/1.0.2/quick-start"}},i=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",children:[{value:"npm",id:"npm",children:[],level:3},{value:"yarn",id:"yarn",children:[],level:3}],level:2},{value:"CDN Links",id:"cdn-links",children:[{value:"packaged(with dependencies)",id:"packagedwith-dependencies",children:[],level:3}],level:2}],p={toc:i},d="wrapper";function m(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.yg)("p",null,"You can easily install @egjs/Conveyer with package managers like ",(0,l.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.yg)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.yg)("h3",{id:"npm"},"npm"),(0,l.yg)(r.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/conveyer\n"))),(0,l.yg)(s.A,{value:"react",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-conveyer\n"))),(0,l.yg)(s.A,{value:"vue",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-conveyer\n"))),(0,l.yg)(s.A,{value:"vue2",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue2-conveyer\n"))),(0,l.yg)(s.A,{value:"angular",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-conveyer\n"))),(0,l.yg)(s.A,{value:"svelte",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-conveyer\n")))),(0,l.yg)("h3",{id:"yarn"},"yarn"),(0,l.yg)(r.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@3",value:"vue"},{label:"Vue@2",value:"vue2"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/conveyer\n"))),(0,l.yg)(s.A,{value:"react",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-conveyer\n"))),(0,l.yg)(s.A,{value:"vue",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-conveyer\n"))),(0,l.yg)(s.A,{value:"vue2",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue2-conveyer\n"))),(0,l.yg)(s.A,{value:"angular",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-conveyer\n"))),(0,l.yg)(s.A,{value:"svelte",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-conveyer\n")))),(0,l.yg)("h2",{id:"cdn-links"},"CDN Links"),(0,l.yg)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- github --\x3e\n<script src="https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/conveyer/dist/conveyer.min.js" crossorigin="anonymous"><\/script>\n')))}m.isMDXComponent=!0}}]);