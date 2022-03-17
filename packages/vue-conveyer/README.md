
<h1 align="center" style="max-width: 100%;">
  <img width="256" alt="Conveyer Logo" src="https://naver.github.io/egjs-conveyer/img/logo.png" style="max-width: 100%;" /><br/>
  <a href="https://naver.github.io/egjs-conveyer/">Vue 3 Conveyer</a>
</h1>

<p align="center" style="line-height: 2;">
  <a href="https://www.npmjs.com/package/@egjs/vue-conveyer" target="_blank"><img src="https://img.shields.io/npm/v/@egjs/conveyer.svg?style=flat-square&color=007acc&label=version&logo=NPM" alt="version" /></a>
  <a href="https://www.npmjs.com/package/@egjs/vue-conveyer" target="_blank"><img alt="npm weekly downloads" src="https://img.shields.io/npm/dw/@egjs/conveyer?logo=npm&style=flat-square&color=007acc" /></a>
  <a href="https://www.npmjs.com/package/@egjs/vue-conveyer" target="_blank"><img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/minzip/@egjs/vue-conveyer.svg?style=flat-square&label=%F0%9F%92%BE%20gzipped&color=007acc" /></a>
  <a href="https://github.com/naver/egjs-conveyer/actions" target="_blank"><img alt="Github actions" src="https://img.shields.io/github/workflow/status/naver/egjs-conveyer/Run%20tests?style=flat-square" /></a>
  <a href="https://coveralls.io/github/naver/egjs-conveyer?branch=master&style=flat-square" target="_blank"><img alt="Coveralls github" src="https://img.shields.io/coveralls/github/naver/egjs-conveyer.svg?style=flat-square&label=%E2%9C%85%20coverage" /></a>
    <a href="https://github.com/naver/egjs-conveyer/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/static/v1?style=flat-square&label=%F0%9F%93%9C%20license&message=MIT&color=08CE5D" /></a>
    <img src="https://img.shields.io/static/v1.svg?label=&message=TypeScript&color=294E80&style=flat-square&logo=typescript" />
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

```bash
$ npm install @egjs/vue-conveyer
```

## 🏃 Quick Start

###  in the result of the useConveyer method
* You can use [reactive properties](https://naver.github.io/egjs-conveyer/docs/api/Conveyer#properties) and [methods](https://naver.github.io/egjs-conveyer/docs/api/Conveyer#methods).
* You can use [events](https://naver.github.io/egjs-conveyer/docs/api/Conveyer#events) with a camelCase name using the on prefix.

```vue
<template>
  <div class="App">
    <button id="prev" :disabled="isReachStart" @click="prev">PREV</button>
    <button id="next" :disabled="isReachEnd" @click="next">NEXT</button>
    <div class="items" ref="ref">
      <div class="item"><a href="#1">1</a></div>
      <div class="item"><a href="#2">2</a></div>
      <div class="item"><a href="#3">3</a></div>
      <div class="item"><a href="#4">4</a></div>
      <div class="item"><a href="#5">5</a></div>
      <div class="item"><a href="#6">6</a></div>
      <div class="item"><a href="#7">7</a></div>
      <div class="item"><a href="#8">8</a></div>
      <div class="item"><a href="#9">9</a></div>
      <div class="item"><a href="#10">10</a></div>
      <div class="item"><a href="#11">11</a></div>
      <div class="item"><a href="#12">12</a></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useConveyer } from "@egjs/vue-conveyer";

export default defineComponent({
  name: "App",
  setup() {
    const {
      ref,
      // reactive properties
      isReachStart,
      isReachEnd,
      // methods
      scrollIntoView,
      // events
      onBeginScroll,
      onFinishScroll,
    } = useConveyer({
      horizontal: false,
    });

    onBeginScroll(() => {
      console.log("begin scroll");
    });
    onFinishScroll(() => {
      console.log("finish scroll");
    });

    return {
      ref,
      isReachStart,
      isReachEnd,
      scrollIntoView,
    };
  },
  methods: {
    prev() {
      this.scrollIntoView("start", {
        align: "end",
        duration: 500,
      });
    },
    next() {
      this.scrollIntoView("end", {
        align: "start",
        duration: 500,
      });
    },
  },
});
</script>
```

## 🌐 Supported Browsers
|<img width="20" src="https://simpleicons.org/icons/internetexplorer.svg" alt="IE" />|<img width="20" src="https://simpleicons.org/icons/googlechrome.svg" alt="Chrome" />|<img width="20" src="https://simpleicons.org/icons/firefoxbrowser.svg" alt="Firefox" />|<img width="20" src="https://simpleicons.org/icons/safari.svg" alt="Safari" />|<img width="20" src="https://simpleicons.org/icons/apple.svg" alt="iOS" />|<img width="20" src="https://simpleicons.org/icons/android.svg" alt="Android" />|
|:---:|:---:|:---:|:---:|:---:|:---:|
|9+(With polyfill), 11+ for Angular & Svelte|Latest|Latest|Latest|7+|4+|

## 📼 Demos
Check our [Demos](https://naver.github.io/egjs-conveyer/).

## 📖 Documentation
See [Documentation](https://naver.github.io/egjs-conveyer/docs/api/Conveyer) page.

## 🙌 Contributing
See [CONTRIBUTING.md](https://github.com/naver/egjs-conveyer/blob/main/CONTRIBUTING.md).

## 📝 Feedback
Please file an [Issue](https://github.com/naver/egjs-conveyer/issues).


## 📜 License
@egjs/vue-conveyer is released under the [MIT license](https://github.com/naver/egjs-conveyer/blob/main/LICENSE).

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

