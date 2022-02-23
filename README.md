<h1 align="center" style="max-width: 100%;">
  <img width="256" alt="Conveyer Logo" src="https://naver.github.io/egjs-conveyer/img/logo.png" style="max-width: 100%;" /><br/>
  <a href="https://naver.github.io/egjs-conveyer/">Conveyer</a>
</h1>

<p align="center" style="line-height: 2;">
  <a href="https://www.npmjs.com/package/@egjs/conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/conveyer.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a>
  <a href="https://www.npmjs.com/package/@egjs/conveyer" target="_blank"><img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/@egjs/conveyer?logo=npm&style=flat-square&color=007acc" /></a>
  <a href="https://www.npmjs.com/package/@egjs/conveyer" target="_blank"><img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/minzip/@egjs/conveyer.svg?style=flat-square&label=%F0%9F%92%BE%20gzipped&color=007acc" /></a>
  <a href="https://github.com/naver/egjs-conveyer/actions" target="_blank"><img alt="Github actions" src="https://img.shields.io/github/workflow/status/naver/egjs-conveyer/Run%20tests?style=flat-square" /></a>
  <a href="https://coveralls.io/github/naver/egjs-conveyer?branch=master&style=flat-square" target="_blank"><img alt="Coveralls github" src="https://img.shields.io/coveralls/github/naver/egjs-conveyer.svg?style=flat-square&label=%E2%9C%85%20coverage" /></a>
  <a href="https://github.com/naver/egjs-conveyer/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/static/v1?style=flat-square&label=%F0%9F%93%9C%20license&message=MIT&color=08CE5D" /></a>
  <img src="https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript" />
</p>
<p align="center" style="line-height: 2;">
  <a href="https://github.com/naver/egjs-conveyer/blob/main/packages/ngx-conveyer/README.md" target="_blank"><img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&logo=Angular&color=dd0031" /></a>
  <a href="https://github.com/naver/egjs-conveyer/blob/main/packages/react-conveyer/README.md" target="_blank"><img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&logo=React&logoColor=white&color=61dafb" /></a>
  <a href="https://github.com/naver/egjs-conveyer/blob/main/packages/vue-conveyer/README.md" target="_blank"><img alt="Vue" src="https://img.shields.io/static/v1.svg?label=&message=Vue3&style=flat-square&logo=Vue.js&logoColor=white&color=42b883" /></a>
    <a href="https://github.com/naver/egjs-conveyer/blob/main/packages/vue2-conveyer/README.md" target="_blank"><img alt="Vue" src="https://img.shields.io/static/v1.svg?label=&message=Vue2&style=flat-square&logo=Vue.js&logoColor=white&color=42b883" /></a>
  <a href="https://github.com/naver/egjs-conveyer/blob/main/packages/svelte-conveyer/README.md" target="_blank"><img alt="Svelte" src="https://img.shields.io/static/v1.svg?label=&message=Svelte&style=flat-square&logo=svelte&logoColor=white&color=FF3E00" /></a>

</p>

<h3 align="center">
  <a href="https://naver.github.io/egjs-conveyer/">Demo</a> / <a href="https://naver.github.io/egjs-conveyer/docs/api/Conveyer">Documentation</a> / <a href="https://naver.github.io/egjs/"><img height="20" src="https://naver.github.io/egjs/img/logo.svg"/> Other components</a>
</h3>

<p align="center">
  <b>Conveyer adds Drag gestures to your Native Scroll.</b><br />📱💻🖥
</p>


-----

## ✨ Features
- You can use Native Scroll-like behavior through Drag.
- By adding easing features such as bounce, elasticity, and back, you can create smooth scrolling animations like Native Scroll.
- Supports Reactive Properties that can change state through properties that automatically detect changes instead of events.
- You can use custom scroll events like onBeginScroll, onFinishScroll, onReachStart, onLeaveStart,

## ⚙️ Installation
#### npm
```bash
$ npm install --save @egjs/conveyer
```

#### CDN
- unpkg: https://unpkg.com/@egjs/conveyer/dist/

## 🏃 Quick Start
#### HTML

```
<div class="items">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
#### ES Modules
```ts
import Conveyer from "@egjs/conveyer";

const conveyer = new Conveyer(".items");
```

#### With CDN
```html
<!-- Packaged with all dependencies -->
<!-- https://naver.github.io/egjs-conveyer/release/latest/dist/conveyer.min.js -->
<script src="https://unpkg.com/@egjs/conveyer/dist/conveyer.min.js"></script>
<script>
const conveyer = new Conveyer(".items");
</script>
```
##  How to use
#### HTML
```html
<button class="prev">prev</button>
<button class="next">next</button>
<div class="items">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```
#### JS
```js
import Conveyer from "@egjs/conveyer";

// Since events occur during initialization, set `autoInit` to false if you want to register events.
const conveyer = new Conveyer(".items", {
  autoInit: false,
});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  // start to end
  conveyer.scrollIntoView("start", {
    align: "end",
    duration: 500,
    excludeStand: true,
  });
});
next.addEventListener("click", () => {
  // end to start
  conveyer.scrollIntoView("end", {
    align: "start",
    duration: 500,
    excludeStand: true,
  });
});
conveyer.subscribe("isReachStart", value => {
  prev.disabled = value;
});
conveyer.subscribe("isReachEnd", value => {
  next.disabled = value;
});

conveyer.init();
```

## 📦 Packages
|Package|Version|Description|
|:-----:|:-----:|:-----:|
|[**@egjs/ngx-conveyer**](https://github.com/naver/egjs-conveyer/blob/main/packages/ngx-conveyer/README.md)|<a href="https://www.npmjs.com/package/@egjs/ngx-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/ngx-conveyer.svg?style=flat-square&color=dd0031&label=%F0%9F%94%96" alt="version" /></a>|<img width="15" src="https://naver.github.io/egjs-conveyer/img/icons/angular.svg" valign="middle" alt="Angular" /> [Angular](https://angular.io/) port of @egjs/conveyer|
|[**@egjs/react-conveyer**](https://github.com/naver/egjs-conveyer/blob/main/packages/react-conveyer/README.md)|<a href="https://www.npmjs.com/package/@egjs/react-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/react-conveyer.svg?style=flat-square&color=00d8ff&label=%F0%9F%94%96" alt="version" /></a>|<img width="15" src="https://naver.github.io/egjs-conveyer/img/icons/react.svg" valign="middle" alt="React" /> [React](https://reactjs.org/) port of @egjs/conveyer|
|[**@egjs/vue-conveyer**](https://github.com/naver/egjs-conveyer/blob/main/packages/vue-conveyer/README.md)|<a href="https://www.npmjs.com/package/@egjs/vue-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/vue-conveyer.svg?style=flat-square&color=42b883&label=%F0%9F%94%96" alt="version" /></a>|<img width="15" src="https://naver.github.io/egjs-conveyer/img/icons/vue.svg" valign="middle" alt="Vue.js" /> [Vue.js@3](https://vuejs.org/v2/guide/index.html) port of @egjs/conveyer|
|[**@egjs/vue2-conveyer**](https://github.com/naver/egjs-conveyer/blob/main/packages/vue2-conveyer/README.md)|<a href="https://www.npmjs.com/package/@egjs/vue2-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/vue2-conveyer.svg?style=flat-square&color=42b883&label=%F0%9F%94%96" alt="version" /></a>|<img width="15" src="https://naver.github.io/egjs-conveyer/img/icons/vue.svg" valign="middle" alt="Vue.js" /> [Vue.js@2](https://v3.vuejs.org/) port of @egjs/conveyer|
|[**@egjs/svelte-conveyer**](https://github.com/naver/egjs-conveyer/blob/main/packages/svelte-conveyer/README.md)|<a href="https://www.npmjs.com/package/@egjs/svelte-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/svelte-conveyer.svg?style=flat-square&color=FF3E00&label=%F0%9F%94%96" alt="version" /></a>|<img width="15" src="https://naver.github.io/egjs-conveyer/img/icons/svelte.svg" valign="middle" alt="Svelte" /> [Svelte](https://svelte.dev/) port of @egjs/conveyer|

## 🌐 Supported Browsers
|<img width="20" src="https://simpleicons.org/icons/internetexplorer.svg" alt="IE" />|<img width="20" src="https://simpleicons.org/icons/googlechrome.svg" alt="Chrome" />|<img width="20" src="https://simpleicons.org/icons/firefoxbrowser.svg" alt="Firefox" />|<img width="20" src="https://simpleicons.org/icons/safari.svg" alt="Safari" />|<img width="20" src="https://simpleicons.org/icons/apple.svg" alt="iOS" />|<img width="20" src="https://simpleicons.org/icons/android.svg" alt="Android" />|
|:---:|:---:|:---:|:---:|:---:|:---:|
|9+(With polyfill), 11+ for Angular & Svelte|Latest|Latest|Latest|7+|4+|

## 📼 Demos
Check our [Demos](https://naver.github.io/egjs-conveyer/).

## 📖 Documentation
See [Documentation](https://naver.github.io/egjs-conveyer/release/latest/doc/index.html) page.

## 🙌 Contributing
See [CONTRIBUTING.md](https://github.com/naver/egjs-conveyer/blob/main/CONTRIBUTING.md).

## 📝 Feedback
Please file an [Issue](https://github.com/naver/egjs-conveyer/issues).


## 📜 License
@egjs/conveyer is released under the [MIT license](LICENSE).

```
Copyright (c) 2022-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

<p align="center">
  <a href="https://naver.github.io/egjs/"><img height="50" src="https://naver.github.io/egjs/img/logotype1_black.svg" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/naver"><img height="50" src="https://naver.github.io/OpenSourceGuide/book/assets/naver_logo.png" /></a>
</p>

