/*! For license information please see 4445.9f3984d4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4445],{5161:(e,n,r)=>{function t(e,n){for(var r=e.length,t=0;t<r;++t)if(n(e[t],t))return!0;return!1}function i(e,n){for(var r=e.length,t=0;t<r;++t)if(n(e[t],t))return e[t];return null}function o(e){var n=e;if(void 0===n){if("undefined"==typeof navigator||!navigator)return"";n=navigator.userAgent||""}return n.toLowerCase()}function s(e,n){try{return new RegExp(e,"g").exec(n)}catch(r){return null}}function a(){if("undefined"==typeof navigator||!navigator||!navigator.userAgentData)return!1;var e=navigator.userAgentData,n=e.brands||e.uaList;return!(!n||!n.length)}function u(e){return e.replace(/_/g,".")}function c(e,n){var r=null,i="-1";return t(e,(function(e){var t=s("("+e.test+")((?:\\/|\\s|:)([0-9|\\.|_]+))?",n);return!(!t||e.brand)&&(r=e,i=t[3]||"-1",e.versionAlias?i=e.versionAlias:e.versionTest&&(i=function(e,n){var r=s("("+e+")((?:\\/|\\s|:)([0-9|\\.|_]+))",n);return r?r[3]:""}(e.versionTest.toLowerCase(),n)||i),i=u(i),!0)})),{preset:r,version:i}}function f(e,n){var r={brand:"",version:"-1"};return t(e,(function(e){var t=v(n,e);return!!t&&(r.brand=e.id,r.version=e.versionAlias||t.version,"-1"!==r.version)})),r}function v(e,n){return i(e,(function(e){var r=e.brand;return s(""+n.test,r.toLowerCase())}))}r.d(n,{ZP:()=>y});var d=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],h=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],l=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],p=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],m=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function w(e){return!!c(p,e).preset}function b(e){var n=navigator.userAgentData,r=(n.uaList||n.brands).slice(),s=e&&e.fullVersionList,a=n.mobile||!1,c=r[0],b=(e&&e.platform||n.platform||navigator.platform).toLowerCase(),g={name:c.brand,version:c.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!f(p,r).brand||w(o())},y={name:"unknown",version:"-1",majorVersion:-1};g.webkit=!g.chromium&&t(l,(function(e){return v(r,e)}));var k=f(h,r);if(g.chromium=!!k.brand,g.chromiumVersion=k.version,!g.chromium){var x=f(l,r);g.webkit=!!x.brand,g.webkitVersion=x.version}var V=i(m,(function(e){return new RegExp(""+e.test,"g").exec(b)}));if(y.name=V?V.id:"",e&&(y.version=e.platformVersion),s&&s.length){var j=f(d,s);g.name=j.brand||g.name,g.version=j.version||g.version}else{var _=f(d,r);g.name=_.brand||g.name,g.version=_.brand&&e?e.uaFullVersion:_.version}return g.webkit&&(y.name=a?"ios":"mac"),"ios"===y.name&&g.webview&&(g.version="-1"),y.version=u(y.version),g.version=u(g.version),y.majorVersion=parseInt(y.version,10),g.majorVersion=parseInt(g.version,10),{browser:g,os:y,isMobile:a,isHints:!0}}function g(e){return void 0===e&&a()?b():function(e){var n=o(e),r=!!/mobi/g.exec(n),t={name:"unknown",version:"-1",majorVersion:-1,webview:w(n),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},i={name:"unknown",version:"-1",majorVersion:-1},s=c(d,n),a=s.preset,u=s.version,f=c(m,n),v=f.preset,p=f.version,b=c(h,n);if(t.chromium=!!b.preset,t.chromiumVersion=b.version,!t.chromium){var g=c(l,n);t.webkit=!!g.preset,t.webkitVersion=g.version}return v&&(i.name=v.id,i.version=p,i.majorVersion=parseInt(p,10)),a&&(t.name=a.id,t.version=u,t.webview&&"ios"===i.name&&"safari"!==t.name&&(t.webview=!1)),t.majorVersion=parseInt(t.version,10),{browser:t,os:i,isMobile:r,isHints:!1}}(e)}const y=g},1588:(e,n,r)=>{function t(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,i,o=r.call(e),s=[];try{for(;(void 0===n||n-- >0)&&!(t=o.next()).done;)s.push(t.value)}catch(a){i={error:a}}finally{try{t&&!t.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function o(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(i(arguments[n]));return e}r.d(n,{L:()=>u,Z:()=>c});var s=function(e){return void 0===e},a=function(){function e(e,n){var r,i;if(this._canceled=!1,n)try{for(var o=t(Object.keys(n)),s=o.next();!s.done;s=o.next()){var a=s.value;this[a]=n[a]}}catch(u){r={error:u}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}this.eventType=e}var n=e.prototype;return n.stop=function(){this._canceled=!0},n.isCanceled=function(){return this._canceled},e}(),u=a;const c=function(){function e(){this._eventHandler={}}var n=e.prototype;return n.trigger=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var t=e instanceof a?e.eventType:e,i=o(this._eventHandler[t]||[]);return i.length<=0||(e instanceof a?(e.currentTarget=this,i.forEach((function(n){n(e)}))):i.forEach((function(e){e.apply(void 0,o(n))}))),this},n.once=function(e,n){var r=this;if("object"==typeof e&&s(n)){var t=e;for(var i in t)this.once(i,t[i]);return this}if("string"==typeof e&&"function"==typeof n){var a=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];n.apply(void 0,o(t)),r.off(e,a)};this.on(e,a)}return this},n.hasOn=function(e){return!!this._eventHandler[e]},n.on=function(e,n){if("object"==typeof e&&s(n)){var r=e;for(var t in r)this.on(t,r[t]);return this}if("string"==typeof e&&"function"==typeof n){var i=this._eventHandler[e];s(i)&&(this._eventHandler[e]=[],i=this._eventHandler[e]),i.push(n)}return this},n.off=function(e,n){var r,i;if(s(e))return this._eventHandler={},this;if(s(n)){if("string"==typeof e)return delete this._eventHandler[e],this;var o=e;for(var a in o)this.off(a,o[a]);return this}var u=this._eventHandler[e];if(u){var c=0;try{for(var f=t(u),v=f.next();!v.done;v=f.next()){if(v.value===n){u.splice(c,1),u.length<=0&&delete this._eventHandler[e];break}c++}}catch(d){r={error:d}}finally{try{v&&!v.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}}return this},e.VERSION="3.0.2",e}()},2023:(e,n,r)=>{r.d(n,{H:()=>u,Z:()=>c});var t=function(){function e(){this.keys=[],this.values=[]}var n=e.prototype;return n.get=function(e){return this.values[this.keys.indexOf(e)]},n.set=function(e,n){var r=this.keys,t=this.values,i=r.indexOf(e),o=-1===i?r.length:i;r[o]=e,t[o]=n},e}(),i=function(){function e(){this.object={}}var n=e.prototype;return n.get=function(e){return this.object[e]},n.set=function(e,n){this.object[e]=n},e}(),o="function"==typeof Map,s=function(){function e(){}var n=e.prototype;return n.connect=function(e,n){this.prev=e,this.next=n,e&&(e.next=this),n&&(n.prev=this)},n.disconnect=function(){var e=this.prev,n=this.next;e&&(e.next=n),n&&(n.prev=e)},n.getIndex=function(){for(var e=this,n=-1;e;)e=e.prev,++n;return n},e}();var a=function(){function e(e,n,r,t,i,o,s,a){this.prevList=e,this.list=n,this.added=r,this.removed=t,this.changed=i,this.maintained=o,this.changedBeforeAdded=s,this.fixed=a}var n=e.prototype;return Object.defineProperty(n,"ordered",{get:function(){return this.cacheOrdered||this.caculateOrdered(),this.cacheOrdered},enumerable:!0,configurable:!0}),Object.defineProperty(n,"pureChanged",{get:function(){return this.cachePureChanged||this.caculateOrdered(),this.cachePureChanged},enumerable:!0,configurable:!0}),n.caculateOrdered=function(){var e=function(e,n){var r=[],t=[];return e.forEach((function(e){var n=e[0],i=e[1],o=new s;r[n]=o,t[i]=o})),r.forEach((function(e,n){e.connect(r[n-1])})),e.filter((function(e,r){return!n[r]})).map((function(e,n){var i=e[0],o=e[1];if(i===o)return[0,0];var s=r[i],a=t[o-1],u=s.getIndex();return s.disconnect(),a?s.connect(a,a.next):s.connect(void 0,r[0]),[u,s.getIndex()]}))}(this.changedBeforeAdded,this.fixed),n=this.changed,r=[];this.cacheOrdered=e.filter((function(e,t){var i=e[0],o=e[1],s=n[t],a=s[0],u=s[1];if(i!==o)return r.push([a,u]),!0})),this.cachePureChanged=r},e}();function u(e,n,r){var s=o?Map:r?i:t,u=r||function(e){return e},c=[],f=[],v=[],d=e.map(u),h=n.map(u),l=new s,p=new s,m=[],w=[],b={},g=[],y=0,k=0;return d.forEach((function(e,n){l.set(e,n)})),h.forEach((function(e,n){p.set(e,n)})),d.forEach((function(e,n){var r=p.get(e);void 0===r?(++k,f.push(n)):b[r]=k})),h.forEach((function(e,n){var r=l.get(e);void 0===r?(c.push(n),++y):(v.push([r,n]),k=b[n]||0,m.push([r-k,n-y]),w.push(n===r),r!==n&&g.push([r,n]))})),f.reverse(),new a(e,n,c,f,g,v,m,w)}const c=function(){function e(e,n){void 0===e&&(e=[]),this.findKeyCallback=n,this.list=[].slice.call(e)}return e.prototype.update=function(e){var n=[].slice.call(e),r=u(this.list,n,this.findKeyCallback);return this.list=n,r},e}()}}]);