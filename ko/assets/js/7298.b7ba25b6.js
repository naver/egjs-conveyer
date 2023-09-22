"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7298],{5362:(e,t,n)=>{n.d(t,{Bn:()=>l,XP:()=>u,_A:()=>o,kU:()=>f,tG:()=>v});var r=n(1588);function u(e){return Object.keys(e)}function o(e){return e.replace(/[\s-_]([a-z])/g,(function(e,t){return t.toUpperCase()}))}var a=function(){function e(e){this._emitter=new r.Z,this._current=e}var t=e.prototype;return Object.defineProperty(t,"current",{get:function(){return this._current},set:function(e){var t=e!==this._current;this._current=e,t&&this._emitter.trigger("update",e)},enumerable:!1,configurable:!0}),t.subscribe=function(e){this._emitter.on("update",e)},t.unsubscribe=function(e){this._emitter.off("update",e)},e}();function c(e){return e.__observers__||(e.__observers__={}),e.__observers__}function i(e,t,n){var r=c(e);return r[t]||(r[t]=function(e){return new a(e)}(n)),r[t]}function l(e){return function(t,n){var r=e||n;Object.defineProperty(t,n,{get:function(){return i(this,r).current},set:function(e){i(this,r,e).current=e}}),r!==n&&Object.defineProperty(t,r,{get:function(){return i(this,r).current}})}}function s(e){e.subscribe=function(e,t){i(this,e).subscribe(t)},e.unsubscribe=function(e,t){var n=this;e?e in this&&i(this,e).unsubscribe(t):u(c(this)).forEach((function(e){n.unsubscribe(e)}))}}function f(e){s(e.prototype)}function v(e){var t;function n(){var t,n;return null!==(n=null===(t=e.data)||void 0===t?void 0:t.call(e))&&void 0!==n?n:{}}var r={current:(null===(t=e.created)||void 0===t?void 0:t.call(e,n()))||null},o=null;return{state:function(){var t=r.current;if(o)return o;if(e.state)o=e.state;else if(t){var n=c(t);o=u(n).reduce((function(e,t){return e[t]=n[t].current,e}),{})}return o||{}},instance:function(){return r.current},mounted:function(){var t;r.current=(null===(t=e.mounted)||void 0===t?void 0:t.call(e,n()))||r.current},init:function(){var t;null===(t=e.init)||void 0===t||t.call(e,r.current,n())},destroy:function(){var t;null===(t=e.destroy)||void 0===t||t.call(e,r.current,n())},methods:function(){return t=r,n=e.methods,u={},n?(n.forEach((function(e){u[e]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var u=t.current||t.value;return u[e].apply(u,n)}})),u):u;var t,n,u},on:function(t,n){var u;null===(u=e.on)||void 0===u||u.call(e,r.current,t,n)},off:function(t,n){var u;null===(u=e.off)||void 0===u||u.call(e,r.current,t,n)}}}},3566:(e,t,n)=>{n.d(t,{q:()=>o});var r=n(5362),u=n(2784);function o(e){var t=(0,u.useMemo)((function(){return(0,r.tG)(e)}),[]),n=t.state(),o=(0,r.XP)(n),a=(0,u.useState)({})[0];for(var c in n){var i=(0,u.useState)(n[c]);a[c]={getter:!1,set:i[1],value:i[0]}}var l=(0,u.useMemo)((function(){return t.methods()}),[]);(0,u.useEffect)((function(){t.mounted();var e=t.instance();return o.forEach((function(t){e.subscribe(t,(function(e){a[t].getter&&a[t].set(e)}))})),t.init(),function(){t.destroy()}}),[]);var s=o.reduce((function(e,t){return Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t].getter=!0,a[t].value}}),e}),{});return(e.events||[]).forEach((function(e){s[(0,r._A)("on ".concat(e))]=function(n,r){(0,u.useEffect)((function(){return t.on(e,n),function(){t.off(e,n)}}),r)}})),(0,r.XP)(l).forEach((function(e){s[e]=l[e]})),s}},876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=l(n),d=u,p=v["".concat(i,".").concat(d)]||v[d]||f[d]||o;return n?r.createElement(p,a(a({ref:t},s),{},{components:n})):r.createElement(p,a({ref:t},s))}));function d(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,a=new Array(o);a[0]=v;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:u,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1846:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2784);const u=function(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:u},t)}},582:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7896),u=n(2784),o=n(9741),a=n(4253);const c=function(){const e=(0,u.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(9645),l=n(6277);const s="tabItem_ngMb";function f(e){var t,n,o;const{lazy:a,block:f,defaultValue:v,values:d,groupId:p,className:b}=e,m=u.Children.map(e.children,(e=>{if((0,u.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.lx)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===v?v:null!=(t=null!=v?v:null==(n=m.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(o=m[0])?void 0:o.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:E}=c(),[w,_]=(0,u.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,i.o5)();if(null!=p){const e=O[p];null!=e&&e!==w&&h.some((t=>t.value===e))&&_(e)}const k=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==w&&(P(t),_(r),null!=p&&E(p,r))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]||j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]||j[j.length-1];break}}null==(t=n)||t.focus()};return u.createElement("div",{className:"tabs-container"},u.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":f},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return u.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>j.push(e),onKeyDown:T,onFocus:k,onClick:k},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),a?(0,u.cloneElement)(m.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):u.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,u.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function v(e){const t=(0,o.Z)();return u.createElement(f,(0,r.Z)({key:String(t)},e))}}}]);