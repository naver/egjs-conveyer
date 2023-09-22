/*
Copyright (c) NAVER Corp.
name: @egjs/conveyer
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-conveyer
version: 1.6.2
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Conveyer = factory());
}(this, (function () { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }

    /*
    Copyright (c) 2015 NAVER Corp.
    name: @egjs/agent
    license: MIT
    author: NAVER Corp.
    repository: git+https://github.com/naver/agent.git
    version: 2.4.2
    */
    function some(arr, callback) {
      var length = arr.length;

      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
          return true;
        }
      }

      return false;
    }
    function find(arr, callback) {
      var length = arr.length;

      for (var i = 0; i < length; ++i) {
        if (callback(arr[i], i)) {
          return arr[i];
        }
      }

      return null;
    }
    function getUserAgentString(agent) {
      var userAgent = agent;

      if (typeof userAgent === "undefined") {
        if (typeof navigator === "undefined" || !navigator) {
          return "";
        }

        userAgent = navigator.userAgent || "";
      }

      return userAgent.toLowerCase();
    }
    function execRegExp(pattern, text) {
      try {
        return new RegExp(pattern, "g").exec(text);
      } catch (e) {
        return null;
      }
    }
    function hasUserAgentData() {
      if (typeof navigator === "undefined" || !navigator || !navigator.userAgentData) {
        return false;
      }

      var userAgentData = navigator.userAgentData;
      var brands = userAgentData.brands || userAgentData.uaList;
      return !!(brands && brands.length);
    }
    function findVersion(versionTest, userAgent) {
      var result = execRegExp("(" + versionTest + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", userAgent);
      return result ? result[3] : "";
    }
    function convertVersion(text) {
      return text.replace(/_/g, ".");
    }
    function findPreset(presets, userAgent) {
      var userPreset = null;
      var version = "-1";
      some(presets, function (preset) {
        var result = execRegExp("(" + preset.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", userAgent);

        if (!result || preset.brand) {
          return false;
        }

        userPreset = preset;
        version = result[3] || "-1";

        if (preset.versionAlias) {
          version = preset.versionAlias;
        } else if (preset.versionTest) {
          version = findVersion(preset.versionTest.toLowerCase(), userAgent) || version;
        }

        version = convertVersion(version);
        return true;
      });
      return {
        preset: userPreset,
        version: version
      };
    }
    function findPresetBrand(presets, brands) {
      var brandInfo = {
        brand: "",
        version: "-1"
      };
      some(presets, function (preset) {
        var result = findBrand(brands, preset);

        if (!result) {
          return false;
        }

        brandInfo.brand = preset.id;
        brandInfo.version = preset.versionAlias || result.version;
        return brandInfo.version !== "-1";
      });
      return brandInfo;
    }
    function findBrand(brands, preset) {
      return find(brands, function (_a) {
        var brand = _a.brand;
        return execRegExp("" + preset.test, brand.toLowerCase());
      });
    }

    var BROWSER_PRESETS = [{
      test: "phantomjs",
      id: "phantomjs"
    }, {
      test: "whale",
      id: "whale"
    }, {
      test: "edgios|edge|edg",
      id: "edge"
    }, {
      test: "msie|trident|windows phone",
      id: "ie",
      versionTest: "iemobile|msie|rv"
    }, {
      test: "miuibrowser",
      id: "miui browser"
    }, {
      test: "samsungbrowser",
      id: "samsung internet"
    }, {
      test: "samsung",
      id: "samsung internet",
      versionTest: "version"
    }, {
      test: "chrome|crios",
      id: "chrome"
    }, {
      test: "firefox|fxios",
      id: "firefox"
    }, {
      test: "android",
      id: "android browser",
      versionTest: "version"
    }, {
      test: "safari|iphone|ipad|ipod",
      id: "safari",
      versionTest: "version"
    }]; // chromium's engine(blink) is based on applewebkit 537.36.

    var CHROMIUM_PRESETS = [{
      test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
      id: "chrome",
      versionTest: "chrome"
    }, {
      test: "chromium",
      id: "chrome"
    }, {
      test: "whale",
      id: "chrome",
      versionAlias: "-1",
      brand: true
    }];
    var WEBKIT_PRESETS = [{
      test: "applewebkit",
      id: "webkit",
      versionTest: "applewebkit|safari"
    }];
    var WEBVIEW_PRESETS = [{
      test: "(?=(iphone|ipad))(?!(.*version))",
      id: "webview"
    }, {
      test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
      id: "webview"
    }, {
      // test webview
      test: "webview",
      id: "webview"
    }];
    var OS_PRESETS = [{
      test: "windows phone",
      id: "windows phone"
    }, {
      test: "windows 2000",
      id: "window",
      versionAlias: "5.0"
    }, {
      test: "windows nt",
      id: "window"
    }, {
      test: "win32|windows",
      id: "window"
    }, {
      test: "iphone|ipad|ipod",
      id: "ios",
      versionTest: "iphone os|cpu os"
    }, {
      test: "macos|macintel|mac os x",
      id: "mac"
    }, {
      test: "android|linux armv81",
      id: "android"
    }, {
      test: "tizen",
      id: "tizen"
    }, {
      test: "webos|web0s",
      id: "webos"
    }];

    function isWebView(userAgent) {
      return !!findPreset(WEBVIEW_PRESETS, userAgent).preset;
    }
    function getLegacyAgent(userAgent) {
      var nextAgent = getUserAgentString(userAgent);
      var isMobile = !!/mobi/g.exec(nextAgent);
      var browser = {
        name: "unknown",
        version: "-1",
        majorVersion: -1,
        webview: isWebView(nextAgent),
        chromium: false,
        chromiumVersion: "-1",
        webkit: false,
        webkitVersion: "-1"
      };
      var os = {
        name: "unknown",
        version: "-1",
        majorVersion: -1
      };

      var _a = findPreset(BROWSER_PRESETS, nextAgent),
          browserPreset = _a.preset,
          browserVersion = _a.version;

      var _b = findPreset(OS_PRESETS, nextAgent),
          osPreset = _b.preset,
          osVersion = _b.version;

      var chromiumPreset = findPreset(CHROMIUM_PRESETS, nextAgent);
      browser.chromium = !!chromiumPreset.preset;
      browser.chromiumVersion = chromiumPreset.version;

      if (!browser.chromium) {
        var webkitPreset = findPreset(WEBKIT_PRESETS, nextAgent);
        browser.webkit = !!webkitPreset.preset;
        browser.webkitVersion = webkitPreset.version;
      }

      if (osPreset) {
        os.name = osPreset.id;
        os.version = osVersion;
        os.majorVersion = parseInt(osVersion, 10);
      }

      if (browserPreset) {
        browser.name = browserPreset.id;
        browser.version = browserVersion; // Early whale bugs

        if (browser.webview && os.name === "ios" && browser.name !== "safari") {
          browser.webview = false;
        }
      }

      browser.majorVersion = parseInt(browser.version, 10);
      return {
        browser: browser,
        os: os,
        isMobile: isMobile,
        isHints: false
      };
    }

    function getClientHintsAgent(osData) {
      var userAgentData = navigator.userAgentData;
      var brands = (userAgentData.uaList || userAgentData.brands).slice();
      var fullVersionList = osData && osData.fullVersionList;
      var isMobile = userAgentData.mobile || false;
      var firstBrand = brands[0];
      var platform = (osData && osData.platform || userAgentData.platform || navigator.platform).toLowerCase();
      var browser = {
        name: firstBrand.brand,
        version: firstBrand.version,
        majorVersion: -1,
        webkit: false,
        webkitVersion: "-1",
        chromium: false,
        chromiumVersion: "-1",
        webview: !!findPresetBrand(WEBVIEW_PRESETS, brands).brand || isWebView(getUserAgentString())
      };
      var os = {
        name: "unknown",
        version: "-1",
        majorVersion: -1
      };
      browser.webkit = !browser.chromium && some(WEBKIT_PRESETS, function (preset) {
        return findBrand(brands, preset);
      });
      var chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);
      browser.chromium = !!chromiumBrand.brand;
      browser.chromiumVersion = chromiumBrand.version;

      if (!browser.chromium) {
        var webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);
        browser.webkit = !!webkitBrand.brand;
        browser.webkitVersion = webkitBrand.version;
      }

      var platfomResult = find(OS_PRESETS, function (preset) {
        return new RegExp("" + preset.test, "g").exec(platform);
      });
      os.name = platfomResult ? platfomResult.id : "";

      if (osData) {
        os.version = osData.platformVersion;
      }

      if (fullVersionList && fullVersionList.length) {
        var browserBrandByFullVersionList = findPresetBrand(BROWSER_PRESETS, fullVersionList);
        browser.name = browserBrandByFullVersionList.brand || browser.name;
        browser.version = browserBrandByFullVersionList.version || browser.version;
      } else {
        var browserBrand = findPresetBrand(BROWSER_PRESETS, brands);
        browser.name = browserBrand.brand || browser.name;
        browser.version = browserBrand.brand && osData ? osData.uaFullVersion : browserBrand.version;
      }

      if (browser.webkit) {
        os.name = isMobile ? "ios" : "mac";
      }

      if (os.name === "ios" && browser.webview) {
        browser.version = "-1";
      }

      os.version = convertVersion(os.version);
      browser.version = convertVersion(browser.version);
      os.majorVersion = parseInt(os.version, 10);
      browser.majorVersion = parseInt(browser.version, 10);
      return {
        browser: browser,
        os: os,
        isMobile: isMobile,
        isHints: true
      };
    }
    /**
     * Extracts browser and operating system information from the user agent string.
     * @ko 유저 에이전트 문자열에서 브라우저와 운영체제 정보를 추출한다.
     * @function eg.agent#agent
     * @param - user agent string to parse <ko>파싱할 유저에이전트 문자열</ko>
     * @return - agent Info <ko> 에이전트 정보 </ko>
     * @example
    import agent from "@egjs/agent";
    // eg.agent();
    const { os, browser, isMobile } = agent();
     */

    function agent(userAgent) {
      if (typeof userAgent === "undefined" && hasUserAgentData()) {
        return getClientHintsAgent();
      } else {
        return getLegacyAgent(userAgent);
      }
    }

    /*
    Copyright (c) NAVER Corp.
    name: @egjs/component
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-component
    version: 3.0.2
    */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    var isUndefined = function (value) {
      return typeof value === "undefined";
    };

    /**
     * Event class to provide additional properties
     * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
     */

    var ComponentEvent =
    /*#__PURE__*/
    function () {
      /**
       * Create a new instance of ComponentEvent.
       * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
       * @param eventType The name of the event.<ko>이벤트 이름.</ko>
       * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
       */
      function ComponentEvent(eventType, props) {
        var e_1, _a;

        this._canceled = false;

        if (props) {
          try {
            for (var _b = __values(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var key = _c.value; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

              this[key] = props[key];
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        this.eventType = eventType;
      }
      /**
       * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
       * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
       */


      var __proto = ComponentEvent.prototype;

      __proto.stop = function () {
        this._canceled = true;
      };
      /**
       * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
       * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
       * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
       */


      __proto.isCanceled = function () {
        return this._canceled;
      };

      return ComponentEvent;
    }();

    /**
     * A class used to manage events in a component
     * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
     */

    var Component =
    /*#__PURE__*/
    function () {
      /**
       * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
       */
      function Component() {
        this._eventHandler = {};
      }
      /**
       * Trigger a custom event.
       * @ko 커스텀 이벤트를 발생시킨다
       * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
       * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
       *   hi: { foo: { a: number; b: boolean } };
       *   someEvent: (foo: number, bar: string) => void;
       *   someOtherEvent: void; // When there's no event argument
       * }> {
       *   some(){
       *     if(this.trigger("beforeHi")){ // When event call to stop return false.
       *       this.trigger("hi");// fire hi event.
       *     }
       *   }
       * }
       *
       * const some = new Some();
       * some.on("beforeHi", e => {
       *   if(condition){
       *     e.stop(); // When event call to stop, `hi` event not call.
       *   }
       *   // `currentTarget` is component instance.
       *   console.log(some === e.currentTarget); // true
       *
       *   typeof e.foo; // number
       *   typeof e.bar; // string
       * });
       * some.on("hi", e => {
       *   typeof e.foo.b; // boolean
       * });
       * // If you want to more know event design. You can see article.
       * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
       * ```
       */


      var __proto = Component.prototype;

      __proto.trigger = function (event) {
        var params = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          params[_i - 1] = arguments[_i];
        }

        var eventName = event instanceof ComponentEvent ? event.eventType : event;

        var handlers = __spread(this._eventHandler[eventName] || []);

        if (handlers.length <= 0) {
          return this;
        }

        if (event instanceof ComponentEvent) {
          event.currentTarget = this;
          handlers.forEach(function (handler) {
            handler(event);
          });
        } else {
          handlers.forEach(function (handler) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            handler.apply(void 0, __spread(params));
          });
        }

        return this;
      };
      /**
       * Executed event just one time.
       * @ko 이벤트가 한번만 실행된다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: ComponentEvent;
       * }> {
       *   hi() {
       *     alert("hi");
       *   }
       *   thing() {
       *     this.once("hi", this.hi);
       *   }
       * }
       *
       * var some = new Some();
       * some.thing();
       * some.trigger(new ComponentEvent("hi"));
       * // fire alert("hi");
       * some.trigger(new ComponentEvent("hi"));
       * // Nothing happens
       * ```
       */


      __proto.once = function (eventName, handlerToAttach) {
        var _this = this;

        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;

          for (var key in eventHash) {
            this.once(key, eventHash[key]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var listener_1 = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            } // eslint-disable-next-line @typescript-eslint/no-unsafe-call


            handlerToAttach.apply(void 0, __spread(args));

            _this.off(eventName, listener_1);
          };

          this.on(eventName, listener_1);
        }

        return this;
      };
      /**
       * Checks whether an event has been attached to a component.
       * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
       * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
       * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
       * @example
       * ```ts
       * import Component from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   some() {
       *     this.hasOn("hi");// check hi event.
       *   }
       * }
       * ```
       */


      __proto.hasOn = function (eventName) {
        return !!this._eventHandler[eventName];
      };
      /**
       * Attaches an event to a component.
       * @ko 컴포넌트에 이벤트를 등록한다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.on("hi",this.hi); //attach event
       *   }
       * }
       * ```
       */


      __proto.on = function (eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined(handlerToAttach)) {
          var eventHash = eventName;

          for (var name in eventHash) {
            this.on(name, eventHash[name]);
          }

          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var handlerList = this._eventHandler[eventName];

          if (isUndefined(handlerList)) {
            this._eventHandler[eventName] = [];
            handlerList = this._eventHandler[eventName];
          }

          handlerList.push(handlerToAttach);
        }

        return this;
      };
      /**
       * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
       * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
       * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
       * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.off("hi",this.hi); //detach event
       *   }
       * }
       * ```
       */


      __proto.off = function (eventName, handlerToDetach) {
        var e_1, _a; // Detach all event handlers.


        if (isUndefined(eventName)) {
          this._eventHandler = {};
          return this;
        } // Detach all handlers for eventname or detach event handlers by object.


        if (isUndefined(handlerToDetach)) {
          if (typeof eventName === "string") {
            delete this._eventHandler[eventName];
            return this;
          } else {
            var eventHash = eventName;

            for (var name in eventHash) {
              this.off(name, eventHash[name]);
            }

            return this;
          }
        } // Detach single event handler


        var handlerList = this._eventHandler[eventName];

        if (handlerList) {
          var idx = 0;

          try {
            for (var handlerList_1 = __values(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
              var handlerFunction = handlerList_1_1.value;

              if (handlerFunction === handlerToDetach) {
                handlerList.splice(idx, 1);

                if (handlerList.length <= 0) {
                  delete this._eventHandler[eventName];
                }

                break;
              }

              idx++;
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }

        return this;
      };
      /**
       * Version info string
       * @ko 버전정보 문자열
       * @name VERSION
       * @static
       * @example
       * Component.VERSION;  // ex) 3.0.0
       * @memberof Component
       */


      Component.VERSION = "3.0.2";
      return Component;
    }();

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */

    var ComponentEvent$1 = ComponentEvent;

    /*
    Copyright (c) NAVER Corp.
    name: @egjs/component
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-component
    version: 3.0.4
    */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    function __values$1(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read$1(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread$1() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
      return ar;
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    var isUndefined$1 = function (value) {
      return typeof value === "undefined";
    };

    // This class name is not matched to file name intentionally
    /**
     * Event class to provide additional properties
     * @ko Component에서 추가적인 프로퍼티를 제공하는 이벤트 클래스
     */
    var ComponentEvent$2 = /*#__PURE__*/function () {
      /**
       * Create a new instance of ComponentEvent.
       * @ko ComponentEvent의 새로운 인스턴스를 생성한다.
       * @param eventType The name of the event.<ko>이벤트 이름.</ko>
       * @param props An object that contains additional event properties.<ko>추가적인 이벤트 프로퍼티 오브젝트.</ko>
       */
      function ComponentEvent(eventType, props) {
        var e_1, _a;
        this._canceled = false;
        if (props) {
          try {
            for (var _b = __values$1(Object.keys(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var key = _c.value;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              this[key] = props[key];
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        this.eventType = eventType;
      }
      /**
       * Stop the event. {@link ComponentEvent#isCanceled} will return `true` after.
       * @ko 이벤트를 중단한다. 이후 {@link ComponentEvent#isCanceled}가 `true`를 반환한다.
       */
      var __proto = ComponentEvent.prototype;
      __proto.stop = function () {
        this._canceled = true;
      };
      /**
       * Returns a boolean value that indicates whether {@link ComponentEvent#stop} is called before.
       * @ko {@link ComponentEvent#stop}이 호출되었는지 여부를 반환한다.
       * @return {boolean} A boolean value that indicates whether {@link ComponentEvent#stop} is called before.<ko>이전에 {@link ComponentEvent#stop}이 불려졌는지 여부를 반환한다.</ko>
       */
      __proto.isCanceled = function () {
        return this._canceled;
      };
      return ComponentEvent;
    }();

    /**
     * A class used to manage events in a component
     * @ko 컴포넌트의 이벤트을 관리할 수 있게 하는 클래스
     */
    var Component$1 = /*#__PURE__*/function () {
      /**
       * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
       */
      function Component() {
        this._eventHandler = {};
      }
      /**
       * Trigger a custom event.
       * @ko 커스텀 이벤트를 발생시킨다
       * @param {string | ComponentEvent} event The name of the custom event to be triggered or an instance of the ComponentEvent<ko>발생할 커스텀 이벤트의 이름 또는 ComponentEvent의 인스턴스</ko>
       * @param {any[]} params Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   beforeHi: ComponentEvent<{ foo: number; bar: string }>;
       *   hi: { foo: { a: number; b: boolean } };
       *   someEvent: (foo: number, bar: string) => void;
       *   someOtherEvent: void; // When there's no event argument
       * }> {
       *   some(){
       *     if(this.trigger("beforeHi")){ // When event call to stop return false.
       *       this.trigger("hi");// fire hi event.
       *     }
       *   }
       * }
       *
       * const some = new Some();
       * some.on("beforeHi", e => {
       *   if(condition){
       *     e.stop(); // When event call to stop, `hi` event not call.
       *   }
       *   // `currentTarget` is component instance.
       *   console.log(some === e.currentTarget); // true
       *
       *   typeof e.foo; // number
       *   typeof e.bar; // string
       * });
       * some.on("hi", e => {
       *   typeof e.foo.b; // boolean
       * });
       * // If you want to more know event design. You can see article.
       * // https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F
       * ```
       */
      var __proto = Component.prototype;
      __proto.trigger = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          params[_i - 1] = arguments[_i];
        }
        var eventName = event instanceof ComponentEvent$2 ? event.eventType : event;
        var handlers = __spread$1(this._eventHandler[eventName] || []);
        if (handlers.length <= 0) {
          return this;
        }
        if (event instanceof ComponentEvent$2) {
          event.currentTarget = this;
          handlers.forEach(function (handler) {
            handler(event);
          });
        } else {
          handlers.forEach(function (handler) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            handler.apply(void 0, __spread$1(params));
          });
        }
        return this;
      };
      /**
       * Executed event just one time.
       * @ko 이벤트가 한번만 실행된다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of the component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: ComponentEvent;
       * }> {
       *   hi() {
       *     alert("hi");
       *   }
       *   thing() {
       *     this.once("hi", this.hi);
       *   }
       * }
       *
       * var some = new Some();
       * some.thing();
       * some.trigger(new ComponentEvent("hi"));
       * // fire alert("hi");
       * some.trigger(new ComponentEvent("hi"));
       * // Nothing happens
       * ```
       */
      __proto.once = function (eventName, handlerToAttach) {
        var _this = this;
        if (typeof eventName === "object" && isUndefined$1(handlerToAttach)) {
          var eventHash = eventName;
          for (var key in eventHash) {
            this.once(key, eventHash[key]);
          }
          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var listener_1 = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            handlerToAttach.apply(void 0, __spread$1(args));
            _this.off(eventName, listener_1);
          };
          this.on(eventName, listener_1);
        }
        return this;
      };
      /**
       * Checks whether an event has been attached to a component.
       * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
       * @param {string} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
       * @return {boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
       * @example
       * ```ts
       * import Component from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   some() {
       *     this.hasOn("hi");// check hi event.
       *   }
       * }
       * ```
       */
      __proto.hasOn = function (eventName) {
        return !!this._eventHandler[eventName];
      };
      /**
       * Attaches an event to a component.
       * @ko 컴포넌트에 이벤트를 등록한다.
       * @param {string} eventName The name of the event to be attached or an event name - event handler mapped object.<ko>등록할 이벤트의 이름 또는 이벤트 이름-핸들러 오브젝트</ko>
       * @param {function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.on("hi",this.hi); //attach event
       *   }
       * }
       * ```
       */
      __proto.on = function (eventName, handlerToAttach) {
        if (typeof eventName === "object" && isUndefined$1(handlerToAttach)) {
          var eventHash = eventName;
          for (var name in eventHash) {
            this.on(name, eventHash[name]);
          }
          return this;
        } else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
          var handlerList = this._eventHandler[eventName];
          if (isUndefined$1(handlerList)) {
            this._eventHandler[eventName] = [];
            handlerList = this._eventHandler[eventName];
          }
          handlerList.push(handlerToAttach);
        }
        return this;
      };
      /**
       * Detaches an event from the component.<br/>If the `eventName` is not given this will detach all event handlers attached.<br/>If the `handlerToDetach` is not given, this will detach all event handlers for `eventName`.
       * @ko 컴포넌트에 등록된 이벤트를 해제한다.<br/>`eventName`이 주어지지 않았을 경우 모든 이벤트 핸들러를 제거한다.<br/>`handlerToAttach`가 주어지지 않았을 경우 `eventName`에 해당하는 모든 이벤트 핸들러를 제거한다.
       * @param {string?} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
       * @param {function?} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
       * @return An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
       * @example
       * ```ts
       * import Component, { ComponentEvent } from "@egjs/component";
       *
       * class Some extends Component<{
       *   hi: void;
       * }> {
       *   hi() {
       *     console.log("hi");
       *   }
       *   some() {
       *     this.off("hi",this.hi); //detach event
       *   }
       * }
       * ```
       */
      __proto.off = function (eventName, handlerToDetach) {
        var e_1, _a;
        // Detach all event handlers.
        if (isUndefined$1(eventName)) {
          this._eventHandler = {};
          return this;
        }
        // Detach all handlers for eventname or detach event handlers by object.
        if (isUndefined$1(handlerToDetach)) {
          if (typeof eventName === "string") {
            delete this._eventHandler[eventName];
            return this;
          } else {
            var eventHash = eventName;
            for (var name in eventHash) {
              this.off(name, eventHash[name]);
            }
            return this;
          }
        }
        // Detach single event handler
        var handlerList = this._eventHandler[eventName];
        if (handlerList) {
          var idx = 0;
          try {
            for (var handlerList_1 = __values$1(handlerList), handlerList_1_1 = handlerList_1.next(); !handlerList_1_1.done; handlerList_1_1 = handlerList_1.next()) {
              var handlerFunction = handlerList_1_1.value;
              if (handlerFunction === handlerToDetach) {
                handlerList.splice(idx, 1);
                if (handlerList.length <= 0) {
                  delete this._eventHandler[eventName];
                }
                break;
              }
              idx++;
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (handlerList_1_1 && !handlerList_1_1.done && (_a = handlerList_1.return)) _a.call(handlerList_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        }
        return this;
      };
      /**
       * Version info string
       * @ko 버전정보 문자열
       * @name VERSION
       * @static
       * @example
       * Component.VERSION;  // ex) 3.0.0
       * @memberof Component
       */
      Component.VERSION = "3.0.4";
      return Component;
    }();

    /*
    Copyright (c) 2022-present NAVER Corp.
    name: @cfcs/core
    license: MIT
    author: NAVER Crop.
    repository: https://github.com/naver/cfcs/tree/main/packages/core
    version: 0.1.0
    */

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */

    /**
     * @hidden
     */
    function keys(obj) {
      return Object.keys(obj);
    }

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    var OBSERVERS_PATH = "__observers__";
    var COMPUTED_PATH = "__computed__";
    var CFCS_DETECTED_DEPENDENCIES_VERSION = 1;
    var CFCS_DETECTED_DEPENDENCIES = "__CFCS_DETECTED_DEPENDENCIES__";

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */
    var extendStatics$1 = function (d, b) {
      extendStatics$1 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };

      return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics$1(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    function getDetectedStack() {
      // Version issues do not occur when you access the native object in the global.
      Object[CFCS_DETECTED_DEPENDENCIES] = Object[CFCS_DETECTED_DEPENDENCIES] || {};
      var versionList = Object[CFCS_DETECTED_DEPENDENCIES];
      versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] = versionList[CFCS_DETECTED_DEPENDENCIES_VERSION] || [];
      return versionList[CFCS_DETECTED_DEPENDENCIES_VERSION];
    }
    function getCurrentDetected() {
      var stack = getDetectedStack();
      return stack[stack.length - 1];
    }
    function detectDependencies(host) {
      var stack = getDetectedStack();
      var observers = [];
      var detected = {
        host: host,
        observers: observers,
        push: function (observer) {
          if (host !== observer && observers.indexOf(observer) === -1) {
            observers.push(observer);
          }
        }
      };
      stack.push(detected);
      return detected;
    }
    function endDetectDependencies() {
      var stack = getDetectedStack();
      return stack.pop();
    }

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    /**
     * Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
     * @category Reactive
     * @see observe
     */

    var Observer =
    /*#__PURE__*/
    function () {
      /**
       *
       */
      function Observer(value) {
        this._emitter = new Component$1();
        this._current = value;
      }

      var __proto = Observer.prototype;
      Object.defineProperty(__proto, "current", {
        /**
         * return the current value.
         */
        get: function () {
          var currentDetected = getCurrentDetected();
          currentDetected === null || currentDetected === void 0 ? void 0 : currentDetected.push(this);
          return this._current;
        },
        set: function (value) {
          this._setCurrent(value);
        },
        enumerable: false,
        configurable: true
      });
      /**
       * When the current value changes, the callback function is called.
       */

      __proto.subscribe = function (callback) {
        this.current;

        this._emitter.on("update", callback);

        return this;
      };
      /**
       * Cancel the registered subscription through callback.
       */


      __proto.unsubscribe = function (callback) {
        this._emitter.off("update", callback);

        return this;
      };

      __proto._setCurrent = function (value) {
        var prevValue = this._current;
        var isUpdate = value !== prevValue;
        this._current = value;

        if (isUpdate) {
          this._emitter.trigger("update", value, prevValue);
        }
      };
      /**
       * @hidden
       */


      __proto.toString = function () {
        return "".concat(this.current);
      };
      /**
       * @hidden
       */


      __proto.valueOf = function () {
        return this.current;
      };

      return Observer;
    }();

    /**
     * @category Reactive
     * @hidden
     */

    var ComputedObserver =
    /*#__PURE__*/
    function (_super) {
      __extends$1(ComputedObserver, _super);
      /**
       * @description Creates a new computed observer from the values of other observers.
       * It is read-only and if you change the value of the observer used inside the callback, its value will be automatically updated.
       * @param _computedCallback A function for observers to be computed.
       */


      function ComputedObserver(_computedCallback) {
        var _this = _super.call(this) || this;

        _this._computedCallback = _computedCallback;
        _this._registered = [];

        _this._onCheckUpdate = function () {
          _this._setCurrent(_this.current);
        };

        _this._current = _this.current;
        return _this;
      }

      var __proto = ComputedObserver.prototype;
      Object.defineProperty(__proto, "current", {
        get: function () {
          var _this = this;

          detectDependencies(this);

          var value = this._computedCallback();

          var results = endDetectDependencies();

          this._registered.forEach(function (observer) {
            observer.unsubscribe(_this._onCheckUpdate);
          });

          results.observers.forEach(function (observer) {
            observer.subscribe(_this._onCheckUpdate);
          });
          this._registered = results.observers;
          return value;
        },
        enumerable: false,
        configurable: true
      });
      return ComputedObserver;
    }(Observer);

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */

    function injectObserve(prototype, memberName, publicName) {
      if (publicName === void 0) {
        publicName = memberName;
      }

      var nextAttributes = {
        configurable: true,
        get: function () {
          return getObserver(this, publicName).current;
        },
        set: function (value) {
          getObserver(this, publicName, value).current = value;
        }
      };
      Object.defineProperty(prototype, memberName, nextAttributes);

      if (publicName !== memberName) {
        Object.defineProperty(prototype, publicName, {
          configurable: true,
          get: function () {
            return getObserver(this, publicName).current;
          }
        });
      }
    }
    /**
     * @description `Observe` is a property decorator and converts the property into a `reactive state`. You can detect its status through `.subscribe`.
     * @category Reactive-Decorator
     * @see ReactiveSubscribe
     * @example
    * ```ts
    import { ReactiveSubscribe, Observe } from "@cfcs/core";

    @ReactiveSubscribe
    class Component {
      // The public name and state name are the same.
      @Observe value1 = 1;
      // If you want to set public name and private properties separately
      @Observe("value2") _value2 = 1;

      constructor() {
        requestAnimationFrame(() => {
          this.value1 = 2;
        });
      }
    }
    interface C
    ```
     */


    function Observe() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (args.length > 1) {
        return injectObserve(args[0], args[1]);
      }

      return function (prototype, memberName) {
        return injectObserve(prototype, memberName, args[0]);
      };
    }
    /**
     * @hidden
     */

    function Reactive() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return Observe.apply(void 0, args);
    }

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    /**
     * @hidden
     */

    function injectReactiveSubscribe(object) {
      object["subscribe"] = function (name, callback) {
        this[name];
        getObserver(this, name).subscribe(callback);
      };

      object["unsubscribe"] = function (name, callback) {
        var _this = this;

        if (!name) {
          keys(getObservers(this)).forEach(function (observerName) {
            _this.unsubscribe(observerName);
          });
          return;
        }

        if (!(name in this)) {
          return;
        }

        getObserver(this, name).unsubscribe(callback);
      };
    }
    /**
     * @description `ReactiveSubscribe` is a class decorator and adds `.subscribe` and `.unsubscribe` methods.
     * @category Reactive-Decorator
     * @see Observe
     * @example
     * ```ts
    import { ReactiveSubscribe, Observe } from "@cfcs/core";

    @ReactiveSubscribe
    class Component {
      @Observe value1 = 1;

      constructor() {
        requestAnimationFrame(() => {
          this.value1 = 2;
        });
      }
    }

    interface Component extends ReactiveSubscribe<{
      value1: number;
      value2: number;
    }> {}

    const component = new Component();

    // 1
    console.log(component.value1);

    component.subscribe("value1", nextValue => {
      // When the change event occurs => (2, 2)
      console.log(nextValue, component.value2);
    });
    ```
     */

    function ReactiveSubscribe(Constructor) {
      var prototype = Constructor.prototype;
      injectReactiveSubscribe(prototype);
    }
    /**
     * @description Creates a mutable ref object. You can access the `.current` value and detect the value change through `.subscribe`.
     * @category Reactive
     * @example
     * ```ts
     * import { observe } from "@cfcs/core";
     *
     * const ob1 = observe(1);
     *
     * ob1.subscribe(nextValue => {
     *   console.log(nextValue);
     * });
     *
     * ob1.current = 2;
     * ```
     */

    function observe(defaultValue) {
      return new Observer(defaultValue);
    }
    /**
     * @hidden
     */

    function computed(computedCallback) {
      return new ComputedObserver(computedCallback);
    }
    /**
     * @hidden
     */

    function defineObservers(instance) {
      var observers = {};
      Object.defineProperty(instance, OBSERVERS_PATH, {
        get: function () {
          return observers;
        }
      });
      return observers;
    }
    /**
     * @hidden
     */

    function getObservers(instance, isComputed) {
      var _a, _b;

      if (!instance[OBSERVERS_PATH]) {
        defineObservers(instance);
      }

      var observers = instance[OBSERVERS_PATH];

      if (!isComputed) {
        var computedList = (_b = (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.prototype) === null || _b === void 0 ? void 0 : _b[COMPUTED_PATH];

        if (computedList) {
          computedList.forEach(function (name) {
            if (!(name in observers) && name in instance) {
              instance[name];
            }
          });
        }
      }

      return observers;
    }
    /**
     * @hidden
     */

    function getObserver(instance, name, defaultValue) {
      var observers = getObservers(instance);

      if (!observers[name]) {
        observers[name] = observe(defaultValue);
      }

      return observers[name];
    }

    /**
     * cfcs
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    /**
     * @description `Computed` is a property decorator.
     * Changes in computed state values are also recognized according to changes in observers used within the getter function.
     * You can detect its status through `.subscribe`.
     * @hidden
     * @category Reactive-Decorator
     * @see ReactiveSubscribe
     * @example
     * ```ts
    const ob1 = observe(0);
    const ob2 = observe(1);

    // When
    @ReactiveSubscribe
    class TestComputed {
      @Computed
      get ob3() {
        return ob1.current + ob2.current;
      }
    }
    const inst = new TestComputed();

    inst.subscribe("ob3", ob3 => {
      console.log(ob3);
    });

    ob1.current = 1;
    ```
     */

    function Computed(prototype, memberName, attributes) {
      var get = attributes.get;

      function getComputed() {
        var observers = getObservers(this, true);

        if (!(memberName in observers)) {
          observers[memberName] = computed(get.bind(this));
        }

        return getObserver(this, memberName).current;
      }

      var nextAttributes = {
        configurable: true,
        get: getComputed
      };
      prototype[COMPUTED_PATH] || (prototype[COMPUTED_PATH] = []);
      var computedList = prototype[COMPUTED_PATH];

      if (computedList.indexOf(memberName) === -1) {
        computedList.push(memberName);
      }

      Object.defineProperty(prototype, memberName, nextAttributes);
      return nextAttributes;
    }

    /*
    Copyright (c) NAVER Corp.
    name: @egjs/axes
    license: MIT
    author: NAVER Corp.
    repository: https://github.com/naver/egjs-axes
    version: 3.9.0
    */

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$2 = function (d, b) {
      extendStatics$2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return extendStatics$2(d, b);
    };
    function __extends$2(d, b) {
      extendStatics$2(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign$1 = function () {
      __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign$1.apply(this, arguments);
    };
    function __decorate$1(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    /* eslint-disable no-new-func, no-nested-ternary */
    var win;
    if (typeof window === "undefined") {
      // window is undefined in node.js
      win = {
        navigator: {
          userAgent: ""
        }
      };
    } else {
      win = window;
    }

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_HORIZONTAL = 2 | 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_VERTICAL = 8 | 16;
    var DIRECTION_ALL = 2 | 4 | 8 | 16;
    var MOUSE_LEFT = "left";
    var MOUSE_RIGHT = "right";
    var MOUSE_MIDDLE = "middle";
    var MOUSE_BUTTON_CODE_MAP = {
      1: MOUSE_LEFT,
      2: MOUSE_MIDDLE,
      3: MOUSE_RIGHT
    };
    var ANY = "any";
    var NONE = "none";
    var SHIFT = "shift";
    var CTRL = "ctrl";
    var ALT = "alt";
    var META = "meta";
    var VELOCITY_INTERVAL = 16;
    var IOS_EDGE_THRESHOLD = 30;
    var IS_IOS_SAFARI = "ontouchstart" in win && agent().browser.name === "safari";
    var TRANSFORM = function () {
      if (typeof document === "undefined") {
        return "";
      }
      var bodyStyle = (document.head || document.getElementsByTagName("head")[0]).style;
      var target = ["transform", "webkitTransform", "msTransform", "mozTransform"];
      for (var i = 0, len = target.length; i < len; i++) {
        if (target[i] in bodyStyle) {
          return target[i];
        }
      }
      return "";
    }();
    var PREVENT_DRAG_CSSPROPS = {
      "-webkit-user-select": "none",
      "-ms-user-select": "none",
      "-moz-user-select": "none",
      "user-select": "none",
      "-webkit-user-drag": "none"
    };

    var toArray = function (nodes) {
      // const el = Array.prototype.slice.call(nodes);
      // for IE8
      var el = [];
      for (var i = 0, len = nodes.length; i < len; i++) {
        el.push(nodes[i]);
      }
      return el;
    };
    var $ = function (param, multi) {
      if (multi === void 0) {
        multi = false;
      }
      var el;
      if (typeof param === "string") {
        // String (HTML, Selector)
        // check if string is HTML tag format
        var match = param.match(/^<([a-z]+)\s*([^>]*)>/);
        // creating element
        if (match) {
          // HTML
          var dummy = document.createElement("div");
          dummy.innerHTML = param;
          el = toArray(dummy.childNodes);
        } else {
          // Selector
          el = toArray(document.querySelectorAll(param));
        }
        if (!multi) {
          el = el.length >= 1 ? el[0] : undefined;
        }
      } else if (param === win) {
        // window
        el = param;
      } else if ("value" in param || "current" in param) {
        el = param.value || param.current;
      } else if (param.nodeName && (param.nodeType === 1 || param.nodeType === 9)) {
        // HTMLElement, Document
        el = param;
      } else if ("jQuery" in win && param instanceof jQuery || param.constructor.prototype.jquery) {
        // jQuery
        el = multi ? param.toArray() : param.get(0);
      } else if (Array.isArray(param)) {
        el = param.map(function (v) {
          return $(v);
        });
        if (!multi) {
          el = el.length >= 1 ? el[0] : undefined;
        }
      }
      return el;
    };
    var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame;
    var caf = win.cancelAnimationFrame || win.webkitCancelAnimationFrame;
    if (raf && !caf) {
      var keyInfo_1 = {};
      var oldraf_1 = raf;
      raf = function (callback) {
        var wrapCallback = function (timestamp) {
          if (keyInfo_1[key]) {
            callback(timestamp);
          }
        };
        var key = oldraf_1(wrapCallback);
        keyInfo_1[key] = true;
        return key;
      };
      caf = function (key) {
        delete keyInfo_1[key];
      };
    } else if (!(raf && caf)) {
      raf = function (callback) {
        return win.setTimeout(function () {
          callback(win.performance && win.performance.now && win.performance.now() || new Date().getTime());
        }, 16);
      };
      caf = win.clearTimeout;
    }
    /**
     * A polyfill for the window.requestAnimationFrame() method.
     * @see  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
     * @private
     */
    var requestAnimationFrame = function (fp) {
      return raf(fp);
    };
    /**
     * A polyfill for the window.cancelAnimationFrame() method. It cancels an animation executed through a call to the requestAnimationFrame() method.
     * @param {Number} key −  The ID value returned through a call to the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드가 반환한 아이디 값</ko>
     * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
     * @private
     */
    var cancelAnimationFrame = function (key) {
      caf(key);
    };
    var map = function (obj, callback) {
      var tranformed = {};
      for (var k in obj) {
        if (k) {
          tranformed[k] = callback(obj[k], k);
        }
      }
      return tranformed;
    };
    var filter = function (obj, callback) {
      var filtered = {};
      for (var k in obj) {
        if (k && callback(obj[k], k)) {
          filtered[k] = obj[k];
        }
      }
      return filtered;
    };
    var every = function (obj, callback) {
      for (var k in obj) {
        if (k && !callback(obj[k], k)) {
          return false;
        }
      }
      return true;
    };
    var equal = function (target, base) {
      return every(target, function (v, k) {
        return v === base[k];
      });
    };
    var roundNumFunc = {};
    var roundNumber = function (num, roundUnit) {
      // Cache for performance
      if (!roundNumFunc[roundUnit]) {
        roundNumFunc[roundUnit] = getRoundFunc(roundUnit);
      }
      return roundNumFunc[roundUnit](num);
    };
    var roundNumbers = function (num, roundUnit) {
      if (!num || !roundUnit) {
        return num;
      }
      return map(num, function (value, key) {
        return roundNumber(value, typeof roundUnit === "number" ? roundUnit : roundUnit[key]);
      });
    };
    var getDecimalPlace = function (val) {
      if (!isFinite(val)) {
        return 0;
      }
      var v = "".concat(val);
      if (v.indexOf("e") >= 0) {
        // Exponential Format
        // 1e-10, 1e-12
        var p = 0;
        var e = 1;
        while (Math.round(val * e) / e !== val) {
          e *= 10;
          p++;
        }
        return p;
      }
      // In general, following has performance benefit.
      // https://jsperf.com/precision-calculation
      return v.indexOf(".") >= 0 ? v.length - v.indexOf(".") - 1 : 0;
    };
    var inversePow = function (n) {
      // replace Math.pow(10, -n) to solve floating point issue.
      // eg. Math.pow(10, -4) => 0.00009999999999999999
      return 1 / Math.pow(10, n);
    };
    var getRoundFunc = function (v) {
      var p = v < 1 ? Math.pow(10, getDecimalPlace(v)) : 1;
      return function (n) {
        if (v === 0) {
          return 0;
        }
        return Math.round(Math.round(n / v) * v * p) / p;
      };
    };
    var getAngle = function (posX, posY) {
      return Math.atan2(posY, posX) * 180 / Math.PI;
    };
    var isCssPropsFromAxes = function (originalCssProps) {
      var same = true;
      Object.keys(PREVENT_DRAG_CSSPROPS).forEach(function (prop) {
        if (!originalCssProps || originalCssProps[prop] !== PREVENT_DRAG_CSSPROPS[prop]) {
          same = false;
        }
      });
      return same;
    };
    var getDirection = function (useHorizontal, useVertical) {
      if (useHorizontal && useVertical) {
        return DIRECTION_ALL;
      } else if (useHorizontal) {
        return DIRECTION_HORIZONTAL;
      } else if (useVertical) {
        return DIRECTION_VERTICAL;
      } else {
        return DIRECTION_NONE;
      }
    };
    var useDirection = function (checkType, direction, userDirection) {
      if (userDirection) {
        return !!(direction === DIRECTION_ALL || direction & checkType && userDirection & checkType);
      } else {
        return !!(direction & checkType);
      }
    };
    var setCssProps = function (element, option, direction) {
      var _a;
      var touchActionMap = (_a = {}, _a[DIRECTION_NONE] = "auto", _a[DIRECTION_ALL] = "none", _a[DIRECTION_VERTICAL] = "pan-x", _a[DIRECTION_HORIZONTAL] = "pan-y", _a);
      var oldCssProps = {};
      if (element && element.style) {
        var touchAction = option.touchAction ? option.touchAction : touchActionMap[direction];
        var newCssProps_1 = __assign$1(__assign$1({}, PREVENT_DRAG_CSSPROPS), {
          "touch-action": element.style["touch-action"] === "none" ? "none" : touchAction
        });
        Object.keys(newCssProps_1).forEach(function (prop) {
          oldCssProps[prop] = element.style[prop];
          element.style[prop] = newCssProps_1[prop];
        });
      }
      return oldCssProps;
    };
    var revertCssProps = function (element, originalCssProps) {
      if (element && element.style && originalCssProps) {
        Object.keys(originalCssProps).forEach(function (prop) {
          element.style[prop] = originalCssProps[prop];
        });
      }
      return;
    };

    var EventManager = /*#__PURE__*/function () {
      function EventManager(_axes) {
        this._axes = _axes;
        this.holdingCount = 0;
      }
      /**
       * This event is fired when a user holds an element on the screen of the device.
       * @ko 사용자가 기기의 화면에 손을 대고 있을 때 발생하는 이벤트
       * @event Axes#hold
       * @type {object}
       * @property {Object.<string, number>} pos coordinate <ko>좌표 정보</ko>
       * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("hold", function(event) {
       *   // event.pos
       *   // event.input
       *   // event.inputEvent
       *   // isTrusted
       * });
       * ```
       */
      var __proto = EventManager.prototype;
      __proto.hold = function (pos, option) {
        var roundPos = this._getRoundPos(pos).roundPos;
        this._axes.trigger(new ComponentEvent$1("hold", {
          pos: roundPos,
          input: option.input || null,
          inputEvent: option.event || null,
          isTrusted: true
        }));
      };
      /**
       * Specifies the coordinates to move after the 'change' event. It works when the holding value of the change event is true.
       * @ko 'change' 이벤트 이후 이동할 좌표를 지정한다. change이벤트의 holding 값이 true일 경우에 동작한다
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("change", function(event) {
       *   event.holding && event.set({x: 10});
       * });
       * ```
       */
      /** Specifies the animation coordinates to move after the 'release' or 'animationStart' events.
       * @ko 'release' 또는 'animationStart' 이벤트 이후 이동할 좌표를 지정한다.
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("animationStart", function(event) {
       *   event.setTo({x: 10}, 2000);
       * });
       * ```
       */
      /**
       * This event is fired when a user release an element on the screen of the device.
       * @ko 사용자가 기기의 화면에서 손을 뗐을 때 발생하는 이벤트
       * @event Axes#release
       * @type {object}
       * @property {Object.<string, number>} depaPos The coordinates when releasing an element<ko>손을 뗐을 때의 좌표 </ko>
       * @property {Object.<string, number>} destPos The coordinates to move to after releasing an element<ko>손을 뗀 뒤에 이동할 좌표</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Object.<string, number>} bounceRatio If the coordinates at the time of release are in the bounce area, the current bounce value divided by the maximum bounce value <ko>손을 뗐을 때의 좌표가 bounce 영역에 있는 경우 현재 bounce된 값을 최대 bounce 값으로 나눈 수치.</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {Object} input The instance of inputType where the event occurred<ko>이벤트가 발생한 inputType 인스턴스</ko>
       * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("release", function(event) {
       *   // event.depaPos
       *   // event.destPos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.setTo
       *   // event.isTrusted
       *
       *   // if you want to change the animation coordinates to move after the 'release' event.
       *   event.setTo({x: 10}, 2000);
       * });
       * ```
       */
      __proto.triggerRelease = function (param) {
        var _a = this._getRoundPos(param.destPos, param.depaPos),
          roundPos = _a.roundPos,
          roundDepa = _a.roundDepa;
        param.destPos = roundPos;
        param.depaPos = roundDepa;
        param.setTo = this._createUserControll(param.destPos, param.duration);
        this._axes.trigger(new ComponentEvent$1("release", __assign$1(__assign$1({}, param), {
          bounceRatio: this._getBounceRatio(roundPos)
        })));
      };
      /**
       * This event is fired when coordinate changes.
       * @ko 좌표가 변경됐을 때 발생하는 이벤트
       * @event Axes#change
       * @type {object}
       * @property {Object.<string, number>} pos  The coordinate <ko>좌표</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Object.<string, number>} bounceRatio If the current coordinates are in the bounce area, the current bounce value divided by the maximum bounce value <ko>현재 좌표가 bounce 영역에 있는 경우 현재 bounce된 값을 최대 bounce 값으로 나눈 수치.</ko>
       * @property {Boolean} holding Indicates whether a user holds an element on the screen of the device.<ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
       * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {Object} inputEvent The event object received from inputType. If the value is changed by animation, it returns 'null'.<ko>inputType으로 부터 받은 이벤트 객체. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {set} set Specifies the coordinates to move after the event. It works when the holding value is true <ko>이벤트 이후 이동할 좌표를 지정한다. holding 값이 true일 경우에 동작한다.</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("change", function(event) {
       *   // event.pos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.holding
       *   // event.set
       *   // event.isTrusted
       *
       *   // if you want to change the coordinates to move after the 'change' event.
       *   // it works when the holding value of the change event is true.
       *   event.holding && event.set({x: 10});
       * });
       * ```
       */
      __proto.triggerChange = function (pos, depaPos, option, holding) {
        var _this = this;
        if (holding === void 0) {
          holding = false;
        }
        var animationManager = this.animationManager;
        var axisManager = animationManager.axisManager;
        var eventInfo = animationManager.getEventInfo();
        var _a = this._getRoundPos(pos, depaPos),
          roundPos = _a.roundPos,
          roundDepa = _a.roundDepa;
        var moveTo = axisManager.moveTo(roundPos, roundDepa);
        var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || (eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.event) || null;
        var param = {
          pos: moveTo.pos,
          delta: moveTo.delta,
          bounceRatio: this._getBounceRatio(moveTo.pos),
          holding: holding,
          inputEvent: inputEvent,
          isTrusted: !!inputEvent,
          input: (option === null || option === void 0 ? void 0 : option.input) || (eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.input) || null,
          set: inputEvent ? this._createUserControll(moveTo.pos) : function () {} // eslint-disable-line @typescript-eslint/no-empty-function
        };

        var event = new ComponentEvent$1("change", param);
        this._axes.trigger(event);
        Object.keys(moveTo.pos).forEach(function (axis) {
          var p = moveTo.pos[axis];
          getObserver(_this._axes, axis, p).current = p;
        });
        if (inputEvent) {
          axisManager.set(param.set().destPos);
        }
        return !event.isCanceled();
      };
      /**
       * This event is fired when animation starts.
       * @ko 에니메이션이 시작할 때 발생한다.
       * @event Axes#animationStart
       * @type {object}
       * @property {Object.<string, number>} depaPos The coordinates when animation starts<ko>애니메이션이 시작 되었을 때의 좌표 </ko>
       * @property {Object.<string, number>} destPos The coordinates to move to. If you change this value, you can run the animation<ko>이동할 좌표. 이값을 변경하여 애니메이션을 동작시킬수 있다</ko>
       * @property {Object.<string, number>} delta  The movement variation of coordinate <ko>좌표의 변화량</ko>
       * @property {Number} duration Duration of the animation (unit: ms). If you change this value, you can control the animation duration time.<ko>애니메이션 진행 시간(단위: ms). 이값을 변경하여 애니메이션의 이동시간을 조절할 수 있다.</ko>
       * @property {Object} input The instance of inputType where the event occurred. If the value is changed by animation, it returns 'null'.<ko>이벤트가 발생한 inputType 인스턴스. 애니메이션에 의해 값이 변경될 경우에는 'null'을 반환한다.</ko>
       * @property {Object} inputEvent The event object received from inputType <ko>inputType으로 부터 받은 이벤트 객체</ko>
       * @property {setTo} setTo Specifies the animation coordinates to move after the event <ko>이벤트 이후 이동할 애니메이션 좌표를 지정한다</ko>
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("release", function(event) {
       *   // event.depaPos
       *   // event.destPos
       *   // event.delta
       *   // event.input
       *   // event.inputEvent
       *   // event.setTo
       *   // event.isTrusted
       *
       *   // if you want to change the animation coordinates to move after the 'animationStart' event.
       *   event.setTo({x: 10}, 2000);
       * });
       * ```
       */
      __proto.triggerAnimationStart = function (param) {
        var _a = this._getRoundPos(param.destPos, param.depaPos),
          roundPos = _a.roundPos,
          roundDepa = _a.roundDepa;
        param.destPos = roundPos;
        param.depaPos = roundDepa;
        param.setTo = this._createUserControll(param.destPos, param.duration);
        var event = new ComponentEvent$1("animationStart", param);
        this._axes.trigger(event);
        return !event.isCanceled();
      };
      /**
       * This event is fired when animation ends.
       * @ko 에니메이션이 끝났을 때 발생한다.
       * @event Axes#animationEnd
       * @type {object}
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("animationEnd", function(event) {
       *   // event.isTrusted
       * });
       * ```
       */
      __proto.triggerAnimationEnd = function (isTrusted) {
        if (isTrusted === void 0) {
          isTrusted = false;
        }
        this._axes.trigger(new ComponentEvent$1("animationEnd", {
          isTrusted: isTrusted
        }));
      };
      /**
       * This event is fired when all actions have been completed.
       * @ko 에니메이션이 끝났을 때 발생한다.
       * @event Axes#finish
       * @type {object}
       * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
       *
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "zoom": {
       *      range: [50, 30]
       *   }
       * }).on("finish", function(event) {
       *   // event.isTrusted
       * });
       * ```
       */
      __proto.triggerFinish = function (isTrusted) {
        if (isTrusted === void 0) {
          isTrusted = false;
        }
        this._axes.trigger(new ComponentEvent$1("finish", {
          isTrusted: isTrusted
        }));
      };
      __proto.setAnimationManager = function (animationManager) {
        this.animationManager = animationManager;
      };
      __proto.destroy = function () {
        this._axes.off();
      };
      __proto._createUserControll = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }
        // to controll
        var userControl = {
          destPos: __assign$1({}, pos),
          duration: duration
        };
        return function (toPos, userDuration) {
          if (toPos) {
            userControl.destPos = __assign$1({}, toPos);
          }
          if (userDuration !== undefined) {
            userControl.duration = userDuration;
          }
          return userControl;
        };
      };
      __proto._getRoundPos = function (pos, depaPos) {
        // round value if round exist
        var roundUnit = this._axes.options.round;
        // if (round == null) {
        //   return {pos, depaPos}; // undefined, undefined
        // }
        return {
          roundPos: roundNumbers(pos, roundUnit),
          roundDepa: roundNumbers(depaPos, roundUnit)
        };
      };
      __proto._getBounceRatio = function (pos) {
        return this._axes.axisManager.map(pos, function (v, opt) {
          if (v < opt.range[0] && opt.bounce[0] !== 0) {
            return (opt.range[0] - v) / opt.bounce[0];
          } else if (v > opt.range[1] && opt.bounce[1] !== 0) {
            return (v - opt.range[1]) / opt.bounce[1];
          } else {
            return 0;
          }
        });
      };
      __decorate$1([Observe], EventManager.prototype, "holdingCount", void 0);
      return EventManager;
    }();

    var InterruptManager = /*#__PURE__*/function () {
      function InterruptManager(_options) {
        this._options = _options;
        this._prevented = false; //  check whether the animation event was prevented
      }
      var __proto = InterruptManager.prototype;
      __proto.isInterrupting = function () {
        // when interruptable is 'true', return value is always 'true'.
        return this._options.interruptable || this._prevented;
      };
      __proto.isInterrupted = function () {
        return !this._options.interruptable && this._prevented;
      };
      __proto.setInterrupt = function (prevented) {
        if (!this._options.interruptable) {
          this._prevented = prevented;
        }
      };
      return InterruptManager;
    }();

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    var getInsidePosition = function (destPos, range, circular, bounce) {
      var toDestPos = destPos;
      var targetRange = [circular[0] ? range[0] : bounce ? range[0] - bounce[0] : range[0], circular[1] ? range[1] : bounce ? range[1] + bounce[1] : range[1]];
      toDestPos = Math.max(targetRange[0], toDestPos);
      toDestPos = Math.min(targetRange[1], toDestPos);
      return toDestPos;
    };
    // determine outside
    var isOutside = function (pos, range) {
      return pos < range[0] || pos > range[1];
    };
    // determine whether position has reached the maximum moveable area
    var isEndofBounce = function (pos, range, bounce, circular) {
      return !circular[0] && pos === range[0] - bounce[0] || !circular[1] && pos === range[1] + bounce[1];
    };
    var getDuration = function (distance, deceleration) {
      var duration = Math.sqrt(distance / deceleration * 2);
      // when duration is under 100, then value is zero
      return duration < 100 ? 0 : duration;
    };
    var isCircularable = function (destPos, range, circular) {
      return circular[1] && destPos > range[1] || circular[0] && destPos < range[0];
    };
    var getCirculatedPos = function (pos, range, circular) {
      var toPos = pos;
      var min = range[0];
      var max = range[1];
      var length = max - min;
      if (circular[1] && pos > max) {
        // right
        toPos = (toPos - max) % length + min;
      }
      if (circular[0] && pos < min) {
        // left
        toPos = (toPos - min) % length + max;
      }
      return toPos;
    };

    var AxisManager = /*#__PURE__*/function () {
      function AxisManager(_axis) {
        var _this = this;
        this._axis = _axis;
        this._complementOptions();
        this._pos = Object.keys(this._axis).reduce(function (pos, v) {
          pos[v] = _this._axis[v].startPos;
          return pos;
        }, {});
      }
      var __proto = AxisManager.prototype;
      __proto.getDelta = function (depaPos, destPos) {
        var fullDepaPos = this.get(depaPos);
        return map(this.get(destPos), function (v, k) {
          return v - fullDepaPos[k];
        });
      };
      __proto.get = function (axes) {
        var _this = this;
        if (axes && Array.isArray(axes)) {
          return axes.reduce(function (acc, v) {
            if (v && v in _this._pos) {
              acc[v] = _this._pos[v];
            }
            return acc;
          }, {});
        } else {
          return __assign$1(__assign$1({}, this._pos), axes || {});
        }
      };
      __proto.moveTo = function (pos, depaPos) {
        if (depaPos === void 0) {
          depaPos = this._pos;
        }
        var delta = map(this._pos, function (v, key) {
          return key in pos && key in depaPos ? pos[key] - depaPos[key] : 0;
        });
        this.set(this.map(pos, function (v, opt) {
          return opt ? getCirculatedPos(v, opt.range, opt.circular) : 0;
        }));
        return {
          pos: __assign$1({}, this._pos),
          delta: delta
        };
      };
      __proto.set = function (pos) {
        for (var k in pos) {
          if (k && k in this._pos) {
            this._pos[k] = pos[k];
          }
        }
      };
      __proto.every = function (pos, callback) {
        var axisOptions = this._axis;
        return every(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };
      __proto.filter = function (pos, callback) {
        var axisOptions = this._axis;
        return filter(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };
      __proto.map = function (pos, callback) {
        var axisOptions = this._axis;
        return map(pos, function (value, key) {
          return callback(value, axisOptions[key], key);
        });
      };
      __proto.isOutside = function (axes) {
        return !this.every(axes ? this.get(axes) : this._pos, function (v, opt) {
          return !isOutside(v, opt.range);
        });
      };
      __proto.getAxisOptions = function (key) {
        return this._axis[key];
      };
      __proto.setAxis = function (axis) {
        var _this = this;
        Object.keys(axis).forEach(function (key) {
          if (!_this._axis[key]) {
            throw new Error("Axis ".concat(key, " does not exist in Axes instance"));
          }
          _this._axis[key] = __assign$1(__assign$1({}, _this._axis[key]), axis[key]);
        });
        this._complementOptions();
      };
      /**
       * set up 'css' expression
       * @private
       */
      __proto._complementOptions = function () {
        var _this = this;
        Object.keys(this._axis).forEach(function (axis) {
          _this._axis[axis] = __assign$1({
            range: [0, 100],
            startPos: _this._axis[axis].range[0],
            bounce: [0, 0],
            circular: [false, false]
          }, _this._axis[axis]);
          ["bounce", "circular"].forEach(function (v) {
            var axisOption = _this._axis;
            var key = axisOption[axis][v];
            if (/string|number|boolean/.test(typeof key)) {
              axisOption[axis][v] = [key, key];
            }
          });
        });
      };
      return AxisManager;
    }();

    var SUPPORT_TOUCH = ("ontouchstart" in win);
    var SUPPORT_POINTER = ("PointerEvent" in win);
    var SUPPORT_MSPOINTER = ("MSPointerEvent" in win);
    var SUPPORT_POINTER_EVENTS = SUPPORT_POINTER || SUPPORT_MSPOINTER;
    var isValidKey = function (event, inputKey) {
      if (!inputKey || inputKey.indexOf(ANY) > -1 || inputKey.indexOf(NONE) > -1 && !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey || inputKey.indexOf(SHIFT) > -1 && event.shiftKey || inputKey.indexOf(CTRL) > -1 && event.ctrlKey || inputKey.indexOf(ALT) > -1 && event.altKey || inputKey.indexOf(META) > -1 && event.metaKey) {
        return true;
      }
      return false;
    };
    var EventInput = /*#__PURE__*/function () {
      function EventInput() {
        var _this = this;
        this._stopContextMenu = function (event) {
          event.preventDefault();
          win.removeEventListener("contextmenu", _this._stopContextMenu);
        };
      }
      var __proto = EventInput.prototype;
      __proto.extendEvent = function (event) {
        var _a;
        var prevEvent = this.prevEvent;
        var center = this._getCenter(event);
        var movement = prevEvent ? this._getMovement(event) : {
          x: 0,
          y: 0
        };
        var scale = prevEvent ? this._getScale(event) : 1;
        var angle = prevEvent ? getAngle(center.x - prevEvent.center.x, center.y - prevEvent.center.y) : 0;
        var deltaX = prevEvent ? prevEvent.deltaX + movement.x : movement.x;
        var deltaY = prevEvent ? prevEvent.deltaY + movement.y : movement.y;
        var offsetX = movement.x;
        var offsetY = movement.y;
        var latestInterval = this._latestInterval;
        var timeStamp = Date.now();
        var deltaTime = latestInterval ? timeStamp - latestInterval.timestamp : 0;
        var velocityX = prevEvent ? prevEvent.velocityX : 0;
        var velocityY = prevEvent ? prevEvent.velocityY : 0;
        if (!latestInterval || deltaTime >= VELOCITY_INTERVAL) {
          if (latestInterval) {
            _a = [(deltaX - latestInterval.deltaX) / deltaTime, (deltaY - latestInterval.deltaY) / deltaTime], velocityX = _a[0], velocityY = _a[1];
          }
          this._latestInterval = {
            timestamp: timeStamp,
            deltaX: deltaX,
            deltaY: deltaY
          };
        }
        return {
          srcEvent: event,
          scale: scale,
          angle: angle,
          center: center,
          deltaX: deltaX,
          deltaY: deltaY,
          offsetX: offsetX,
          offsetY: offsetY,
          velocityX: velocityX,
          velocityY: velocityY,
          preventSystemEvent: true
        };
      };
      __proto._getDistance = function (start, end) {
        var x = end.clientX - start.clientX;
        var y = end.clientY - start.clientY;
        return Math.sqrt(x * x + y * y);
      };
      __proto._getButton = function (event) {
        var buttonCodeMap = {
          1: MOUSE_LEFT,
          2: MOUSE_RIGHT,
          4: MOUSE_MIDDLE
        };
        var button = this._isTouchEvent(event) ? MOUSE_LEFT : buttonCodeMap[event.buttons];
        return button ? button : null;
      };
      __proto._isTouchEvent = function (event) {
        return event.type && event.type.indexOf("touch") > -1;
      };
      __proto._isValidButton = function (button, inputButton) {
        return inputButton.indexOf(button) > -1;
      };
      __proto._isValidEvent = function (event, inputKey, inputButton) {
        return (!inputKey || isValidKey(event, inputKey)) && (!inputButton || this._isValidButton(this._getButton(event), inputButton));
      };
      __proto._preventMouseButton = function (event, button) {
        if (button === MOUSE_RIGHT) {
          win.addEventListener("contextmenu", this._stopContextMenu);
        } else if (button === MOUSE_MIDDLE) {
          event.preventDefault();
        }
      };
      return EventInput;
    }();

    var MouseEventInput = /*#__PURE__*/function (_super) {
      __extends$2(MouseEventInput, _super);
      function MouseEventInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start = ["mousedown"];
        _this.move = ["mousemove"];
        _this.end = ["mouseup"];
        return _this;
      }
      var __proto = MouseEventInput.prototype;
      __proto.onEventStart = function (event, inputKey, inputButton) {
        var button = this._getButton(event);
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        this._preventMouseButton(event, button);
        return this.extendEvent(event);
      };
      __proto.onEventMove = function (event, inputKey, inputButton) {
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        return this.extendEvent(event);
      };
      __proto.onEventEnd = function () {
        return;
      };
      __proto.onRelease = function () {
        this.prevEvent = null;
        return;
      };
      __proto.getTouches = function (event, inputButton) {
        if (inputButton) {
          return this._isValidButton(MOUSE_BUTTON_CODE_MAP[event.which], inputButton) && this.end.indexOf(event.type) === -1 ? 1 : 0;
        }
        return 0;
      };
      __proto._getScale = function () {
        return 1;
      };
      __proto._getCenter = function (event) {
        return {
          x: event.clientX,
          y: event.clientY
        };
      };
      __proto._getMovement = function (event) {
        var prev = this.prevEvent.srcEvent;
        return {
          x: event.clientX - prev.clientX,
          y: event.clientY - prev.clientY
        };
      };
      return MouseEventInput;
    }(EventInput);

    var TouchEventInput = /*#__PURE__*/function (_super) {
      __extends$2(TouchEventInput, _super);
      function TouchEventInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start = ["touchstart"];
        _this.move = ["touchmove"];
        _this.end = ["touchend", "touchcancel"];
        return _this;
      }
      var __proto = TouchEventInput.prototype;
      __proto.onEventStart = function (event, inputKey) {
        this._baseTouches = event.touches;
        if (!this._isValidEvent(event, inputKey)) {
          return null;
        }
        return this.extendEvent(event);
      };
      __proto.onEventMove = function (event, inputKey) {
        if (!this._isValidEvent(event, inputKey)) {
          return null;
        }
        return this.extendEvent(event);
      };
      __proto.onEventEnd = function (event) {
        this._baseTouches = event.touches;
        return;
      };
      __proto.onRelease = function () {
        this.prevEvent = null;
        this._baseTouches = null;
        return;
      };
      __proto.getTouches = function (event) {
        return event.touches.length;
      };
      __proto._getScale = function (event) {
        if (event.touches.length !== 2 || this._baseTouches.length < 2) {
          return null; // TODO: consider calculating non-pinch gesture scale
        }

        return this._getDistance(event.touches[0], event.touches[1]) / this._getDistance(this._baseTouches[0], this._baseTouches[1]);
      };
      __proto._getCenter = function (event) {
        return {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        };
      };
      __proto._getMovement = function (event) {
        var prev = this.prevEvent.srcEvent;
        if (event.touches[0].identifier !== prev.touches[0].identifier) {
          return {
            x: 0,
            y: 0
          };
        }
        return {
          x: event.touches[0].clientX - prev.touches[0].clientX,
          y: event.touches[0].clientY - prev.touches[0].clientY
        };
      };
      return TouchEventInput;
    }(EventInput);

    var PointerEventInput = /*#__PURE__*/function (_super) {
      __extends$2(PointerEventInput, _super);
      function PointerEventInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start = SUPPORT_POINTER ? ["pointerdown"] : ["MSPointerDown"];
        _this.move = SUPPORT_POINTER ? ["pointermove"] : ["MSPointerMove"];
        _this.end = SUPPORT_POINTER ? ["pointerup", "pointercancel"] : ["MSPointerUp", "MSPointerCancel"];
        // store first, recent inputs for each event id
        _this._firstInputs = [];
        _this._recentInputs = [];
        return _this;
      }
      var __proto = PointerEventInput.prototype;
      __proto.onEventStart = function (event, inputKey, inputButton) {
        var button = this._getButton(event);
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        this._preventMouseButton(event, button);
        this._updatePointerEvent(event);
        return this.extendEvent(event);
      };
      __proto.onEventMove = function (event, inputKey, inputButton) {
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        this._updatePointerEvent(event);
        return this.extendEvent(event);
      };
      __proto.onEventEnd = function (event) {
        this._removePointerEvent(event);
      };
      __proto.onRelease = function () {
        this.prevEvent = null;
        this._firstInputs = [];
        this._recentInputs = [];
        return;
      };
      __proto.getTouches = function () {
        return this._recentInputs.length;
      };
      __proto._getScale = function () {
        if (this._recentInputs.length !== 2) {
          return null; // TODO: consider calculating non-pinch gesture scale
        }

        return this._getDistance(this._recentInputs[0], this._recentInputs[1]) / this._getDistance(this._firstInputs[0], this._firstInputs[1]);
      };
      __proto._getCenter = function (event) {
        return {
          x: event.clientX,
          y: event.clientY
        };
      };
      __proto._getMovement = function (event) {
        var prev = this.prevEvent.srcEvent;
        if (event.pointerId !== prev.pointerId) {
          return {
            x: 0,
            y: 0
          };
        }
        return {
          x: event.clientX - prev.clientX,
          y: event.clientY - prev.clientY
        };
      };
      __proto._updatePointerEvent = function (event) {
        var _this = this;
        var addFlag = false;
        this._recentInputs.forEach(function (e, i) {
          if (e.pointerId === event.pointerId) {
            addFlag = true;
            _this._recentInputs[i] = event;
          }
        });
        if (!addFlag) {
          this._firstInputs.push(event);
          this._recentInputs.push(event);
        }
      };
      __proto._removePointerEvent = function (event) {
        this._firstInputs = this._firstInputs.filter(function (x) {
          return x.pointerId !== event.pointerId;
        });
        this._recentInputs = this._recentInputs.filter(function (x) {
          return x.pointerId !== event.pointerId;
        });
      };
      return PointerEventInput;
    }(EventInput);

    var TouchMouseEventInput = /*#__PURE__*/function (_super) {
      __extends$2(TouchMouseEventInput, _super);
      function TouchMouseEventInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.start = ["mousedown", "touchstart"];
        _this.move = ["mousemove", "touchmove"];
        _this.end = ["mouseup", "touchend", "touchcancel"];
        return _this;
      }
      var __proto = TouchMouseEventInput.prototype;
      __proto.onEventStart = function (event, inputKey, inputButton) {
        var button = this._getButton(event);
        if (this._isTouchEvent(event)) {
          this._baseTouches = event.touches;
        }
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        this._preventMouseButton(event, button);
        return this.extendEvent(event);
      };
      __proto.onEventMove = function (event, inputKey, inputButton) {
        if (!this._isValidEvent(event, inputKey, inputButton)) {
          return null;
        }
        return this.extendEvent(event);
      };
      __proto.onEventEnd = function (event) {
        if (this._isTouchEvent(event)) {
          this._baseTouches = event.touches;
        }
        return;
      };
      __proto.onRelease = function () {
        this.prevEvent = null;
        this._baseTouches = null;
        return;
      };
      __proto.getTouches = function (event, inputButton) {
        if (this._isTouchEvent(event)) {
          return event.touches.length;
        } else {
          return this._isValidButton(MOUSE_BUTTON_CODE_MAP[event.which], inputButton) && this.end.indexOf(event.type) === -1 ? 1 : 0;
        }
      };
      __proto._getScale = function (event) {
        if (this._isTouchEvent(event)) {
          if (event.touches.length !== 2 || this._baseTouches.length < 2) {
            return 1; // TODO: consider calculating non-pinch gesture scale
          }

          return this._getDistance(event.touches[0], event.touches[1]) / this._getDistance(this._baseTouches[0], this._baseTouches[1]);
        }
        return this.prevEvent.scale;
      };
      __proto._getCenter = function (event) {
        if (this._isTouchEvent(event)) {
          return {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
          };
        }
        return {
          x: event.clientX,
          y: event.clientY
        };
      };
      __proto._getMovement = function (event) {
        var _this = this;
        var prev = this.prevEvent.srcEvent;
        var _a = [event, prev].map(function (e) {
            if (_this._isTouchEvent(e)) {
              return {
                id: e.touches[0].identifier,
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
              };
            }
            return {
              id: null,
              x: e.clientX,
              y: e.clientY
            };
          }),
          nextSpot = _a[0],
          prevSpot = _a[1];
        return nextSpot.id === prevSpot.id ? {
          x: nextSpot.x - prevSpot.x,
          y: nextSpot.y - prevSpot.y
        } : {
          x: 0,
          y: 0
        };
      };
      return TouchMouseEventInput;
    }(EventInput);

    var toAxis = function (source, offset) {
      return offset.reduce(function (acc, v, i) {
        if (source[i]) {
          acc[source[i]] = v;
        }
        return acc;
      }, {});
    };
    var convertInputType = function (inputType) {
      if (inputType === void 0) {
        inputType = [];
      }
      var hasTouch = false;
      var hasMouse = false;
      var hasPointer = false;
      inputType.forEach(function (v) {
        switch (v) {
          case "mouse":
            hasMouse = true;
            break;
          case "touch":
            hasTouch = SUPPORT_TOUCH;
            break;
          case "pointer":
            hasPointer = SUPPORT_POINTER_EVENTS;
          // no default
        }
      });

      if (hasPointer) {
        return new PointerEventInput();
      } else if (hasTouch && hasMouse) {
        return new TouchMouseEventInput();
      } else if (hasTouch) {
        return new TouchEventInput();
      } else if (hasMouse) {
        return new MouseEventInput();
      }
      return null;
    };
    function getAddEventOptions(eventName) {
      // The passive default value of the touch event is true.
      // If not a touch event, return false to support ie11
      return eventName.indexOf("touch") > -1 ? {
        passive: false
      } : false;
    }

    var InputObserver = /*#__PURE__*/function () {
      function InputObserver(_a) {
        var options = _a.options,
          interruptManager = _a.interruptManager,
          eventManager = _a.eventManager,
          axisManager = _a.axisManager,
          animationManager = _a.animationManager;
        this._isOutside = false;
        this._moveDistance = null;
        this._isStopped = false;
        this.options = options;
        this._interruptManager = interruptManager;
        this._eventManager = eventManager;
        this._axisManager = axisManager;
        this._animationManager = animationManager;
      }
      var __proto = InputObserver.prototype;
      __proto.get = function (input) {
        return this._axisManager.get(input.axes);
      };
      __proto.hold = function (input, event) {
        if (this._interruptManager.isInterrupted() || !input.axes.length) {
          return;
        }
        var changeOption = {
          input: input,
          event: event
        };
        this._isStopped = false;
        this._interruptManager.setInterrupt(true);
        this._animationManager.stopAnimation(changeOption);
        ++this._eventManager.holdingCount;
        if (!this._moveDistance) {
          this._eventManager.hold(this._axisManager.get(), changeOption);
        }
        this._isOutside = this._axisManager.isOutside(input.axes);
        this._moveDistance = this._axisManager.get(input.axes);
      };
      __proto.change = function (input, event, offset, useAnimation) {
        if (this._isStopped || !this._interruptManager.isInterrupting() || this._axisManager.every(offset, function (v) {
          return v === 0;
        })) {
          return;
        }
        var nativeEvent = event.srcEvent ? event.srcEvent : event;
        if (nativeEvent.__childrenAxesAlreadyChanged) {
          return;
        }
        var depaPos = this._moveDistance || this._axisManager.get(input.axes);
        var destPos;
        // for outside logic
        destPos = map(depaPos, function (v, k) {
          return v + (offset[k] || 0);
        });
        if (this._moveDistance) {
          this._moveDistance = this._axisManager.map(destPos, function (v, _a) {
            var circular = _a.circular,
              range = _a.range;
            return circular && (circular[0] || circular[1]) ? getCirculatedPos(v, range, circular) : v;
          });
        }
        // from outside to inside
        if (this._isOutside && this._axisManager.every(depaPos, function (v, opt) {
          return !isOutside(v, opt.range);
        })) {
          this._isOutside = false;
        }
        depaPos = this._atOutside(depaPos);
        destPos = this._atOutside(destPos);
        if (!this.options.nested || !this._isEndofAxis(offset, depaPos, destPos)) {
          nativeEvent.__childrenAxesAlreadyChanged = true;
        }
        var changeOption = {
          input: input,
          event: event
        };
        if (useAnimation) {
          var duration = this._animationManager.getDuration(destPos, depaPos);
          this._animationManager.animateTo(destPos, duration, changeOption);
        } else {
          var isCanceled = !this._eventManager.triggerChange(destPos, depaPos, changeOption, true);
          if (isCanceled) {
            this._isStopped = true;
            this._moveDistance = null;
            this._animationManager.finish(false);
          }
        }
      };
      __proto.release = function (input, event, velocity, inputDuration) {
        if (this._isStopped || !this._interruptManager.isInterrupting() || !this._moveDistance) {
          return;
        }
        var nativeEvent = event.srcEvent ? event.srcEvent : event;
        if (nativeEvent.__childrenAxesAlreadyReleased) {
          velocity = velocity.map(function () {
            return 0;
          });
        }
        var pos = this._axisManager.get(input.axes);
        var depaPos = this._axisManager.get();
        var displacement = this._animationManager.getDisplacement(velocity);
        var offset = toAxis(input.axes, displacement);
        var destPos = this._axisManager.get(this._axisManager.map(offset, function (v, opt, k) {
          if (opt.circular && (opt.circular[0] || opt.circular[1])) {
            return pos[k] + v;
          } else {
            return getInsidePosition(pos[k] + v, opt.range, opt.circular, opt.bounce);
          }
        }));
        nativeEvent.__childrenAxesAlreadyReleased = true;
        var duration = this._animationManager.getDuration(destPos, pos, inputDuration);
        if (duration === 0) {
          destPos = __assign$1({}, depaPos);
        }
        // prepare params
        var param = {
          depaPos: depaPos,
          destPos: destPos,
          duration: duration,
          delta: this._axisManager.getDelta(depaPos, destPos),
          inputEvent: event,
          input: input,
          isTrusted: true
        };
        --this._eventManager.holdingCount;
        this._eventManager.triggerRelease(param);
        if (this._eventManager.holdingCount === 0) {
          this._moveDistance = null;
        }
        // to contol
        var userWish = this._animationManager.getUserControl(param);
        var isEqual = equal(userWish.destPos, depaPos);
        var changeOption = {
          input: input,
          event: event
        };
        if (isEqual || userWish.duration === 0) {
          if (!isEqual) {
            this._eventManager.triggerChange(userWish.destPos, depaPos, changeOption, true);
          }
          this._interruptManager.setInterrupt(false);
          if (this._axisManager.isOutside()) {
            this._animationManager.restore(changeOption);
          } else {
            this._eventManager.triggerFinish(true);
          }
        } else {
          this._animationManager.animateTo(userWish.destPos, userWish.duration, changeOption);
        }
      };
      // when move pointer is held in outside
      __proto._atOutside = function (pos) {
        var _this = this;
        if (this._isOutside) {
          return this._axisManager.map(pos, function (v, opt) {
            var tn = opt.range[0] - opt.bounce[0];
            var tx = opt.range[1] + opt.bounce[1];
            return v > tx ? tx : v < tn ? tn : v;
          });
        } else {
          return this._axisManager.map(pos, function (v, opt) {
            var min = opt.range[0];
            var max = opt.range[1];
            var out = opt.bounce;
            var circular = opt.circular;
            if (circular[0] && v < min || circular[1] && v > max) {
              return v;
            } else if (v < min) {
              // left
              return min - _this._animationManager.interpolate(min - v, out[0]);
            } else if (v > max) {
              // right
              return max + _this._animationManager.interpolate(v - max, out[1]);
            }
            return v;
          });
        }
      };
      __proto._isEndofAxis = function (offset, depaPos, destPos) {
        return this._axisManager.every(depaPos, function (value, option, key) {
          return offset[key] === 0 || depaPos[key] === destPos[key] && isEndofBounce(value, option.range, option.bounce, option.circular);
        });
      };
      return InputObserver;
    }();

    var clamp = function (value, min, max) {
      return Math.max(Math.min(value, max), min);
    };
    var AnimationManager = /*#__PURE__*/function () {
      function AnimationManager(_a) {
        var options = _a.options,
          interruptManager = _a.interruptManager,
          eventManager = _a.eventManager,
          axisManager = _a.axisManager;
        this._options = options;
        this.interruptManager = interruptManager;
        this.eventManager = eventManager;
        this.axisManager = axisManager;
        this.animationEnd = this.animationEnd.bind(this);
      }
      var __proto = AnimationManager.prototype;
      __proto.getDuration = function (depaPos, destPos, wishDuration) {
        var _this = this;
        var duration;
        if (typeof wishDuration !== "undefined") {
          duration = wishDuration;
        } else {
          var durations_1 = map(destPos, function (v, k) {
            return getDuration(Math.abs(v - depaPos[k]), _this._options.deceleration);
          });
          duration = Object.keys(durations_1).reduce(function (max, v) {
            return Math.max(max, durations_1[v]);
          }, -Infinity);
        }
        return clamp(duration, this._options.minimumDuration, this._options.maximumDuration);
      };
      __proto.getDisplacement = function (velocity) {
        var totalVelocity = Math.pow(velocity.reduce(function (total, v) {
          return total + v * v;
        }, 0), 1 / velocity.length);
        var duration = Math.abs(totalVelocity / -this._options.deceleration);
        return velocity.map(function (v) {
          return v / 2 * duration;
        });
      };
      __proto.stopAnimation = function (option) {
        if (this._animateParam) {
          var orgPos_1 = this.axisManager.get();
          var pos = this.axisManager.map(orgPos_1, function (v, opt) {
            return getCirculatedPos(v, opt.range, opt.circular);
          });
          if (!every(pos, function (v, k) {
            return orgPos_1[k] === v;
          })) {
            this.eventManager.triggerChange(pos, orgPos_1, option, !!option);
          }
          this._animateParam = null;
          if (this._raf) {
            cancelAnimationFrame(this._raf);
          }
          this._raf = null;
          this.eventManager.triggerAnimationEnd(!!(option === null || option === void 0 ? void 0 : option.event));
        }
      };
      __proto.getEventInfo = function () {
        if (this._animateParam && this._animateParam.input && this._animateParam.inputEvent) {
          return {
            input: this._animateParam.input,
            event: this._animateParam.inputEvent
          };
        } else {
          return null;
        }
      };
      __proto.restore = function (option) {
        var pos = this.axisManager.get();
        var destPos = this.axisManager.map(pos, function (v, opt) {
          return Math.min(opt.range[1], Math.max(opt.range[0], v));
        });
        this.stopAnimation();
        this.animateTo(destPos, this.getDuration(pos, destPos), option);
      };
      __proto.animationEnd = function () {
        var beforeParam = this.getEventInfo();
        this._animateParam = null;
        // for Circular
        var circularTargets = this.axisManager.filter(this.axisManager.get(), function (v, opt) {
          return isCircularable(v, opt.range, opt.circular);
        });
        if (Object.keys(circularTargets).length > 0) {
          this.setTo(this.axisManager.map(circularTargets, function (v, opt) {
            return getCirculatedPos(v, opt.range, opt.circular);
          }));
        }
        this.interruptManager.setInterrupt(false);
        this.eventManager.triggerAnimationEnd(!!beforeParam);
        if (this.axisManager.isOutside()) {
          this.restore(beforeParam);
        } else {
          this.finish(!!beforeParam);
        }
      };
      __proto.finish = function (isTrusted) {
        this._animateParam = null;
        this.interruptManager.setInterrupt(false);
        this.eventManager.triggerFinish(isTrusted);
      };
      __proto.getUserControl = function (param) {
        var userWish = param.setTo();
        userWish.destPos = this.axisManager.get(userWish.destPos);
        userWish.duration = clamp(userWish.duration, this._options.minimumDuration, this._options.maximumDuration);
        return userWish;
      };
      __proto.animateTo = function (destPos, duration, option) {
        var _this = this;
        this.stopAnimation();
        var param = this._createAnimationParam(destPos, duration, option);
        var depaPos = __assign$1({}, param.depaPos);
        var retTrigger = this.eventManager.triggerAnimationStart(param);
        // to control
        var userWish = this.getUserControl(param);
        // You can't stop the 'animationStart' event when 'circular' is true.
        if (!retTrigger && this.axisManager.every(userWish.destPos, function (v, opt) {
          return isCircularable(v, opt.range, opt.circular);
        })) {
          console.warn("You can't stop the 'animation' event when 'circular' is true.");
        }
        if (retTrigger && !equal(userWish.destPos, depaPos)) {
          var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || null;
          this._animateLoop({
            depaPos: depaPos,
            destPos: userWish.destPos,
            duration: userWish.duration,
            delta: this.axisManager.getDelta(depaPos, userWish.destPos),
            isTrusted: !!inputEvent,
            inputEvent: inputEvent,
            input: (option === null || option === void 0 ? void 0 : option.input) || null
          }, function () {
            return _this.animationEnd();
          });
        }
      };
      __proto.setTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }
        var axes = Object.keys(pos);
        var orgPos = this.axisManager.get(axes);
        if (equal(pos, orgPos)) {
          return this;
        }
        this.interruptManager.setInterrupt(true);
        var movedPos = filter(pos, function (v, k) {
          return orgPos[k] !== v;
        });
        if (!Object.keys(movedPos).length) {
          return this;
        }
        movedPos = this.axisManager.map(movedPos, function (v, opt) {
          var range = opt.range,
            circular = opt.circular;
          if (circular && (circular[0] || circular[1])) {
            return v;
          } else {
            return getInsidePosition(v, range, circular);
          }
        });
        if (equal(movedPos, orgPos)) {
          return this;
        }
        if (duration > 0) {
          this.animateTo(movedPos, duration);
        } else {
          this.stopAnimation();
          this.eventManager.triggerChange(movedPos);
          this.finish(false);
        }
        return this;
      };
      __proto.setBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }
        return this.setTo(map(this.axisManager.get(Object.keys(pos)), function (v, k) {
          return v + pos[k];
        }), duration);
      };
      __proto.setOptions = function (options) {
        this._options = __assign$1(__assign$1({}, this._options), options);
      };
      __proto._createAnimationParam = function (pos, duration, option) {
        var depaPos = this.axisManager.get();
        var destPos = pos;
        var inputEvent = (option === null || option === void 0 ? void 0 : option.event) || null;
        return {
          depaPos: depaPos,
          destPos: destPos,
          duration: clamp(duration, this._options.minimumDuration, this._options.maximumDuration),
          delta: this.axisManager.getDelta(depaPos, destPos),
          inputEvent: inputEvent,
          input: (option === null || option === void 0 ? void 0 : option.input) || null,
          isTrusted: !!inputEvent,
          done: this.animationEnd
        };
      };
      __proto._animateLoop = function (param, complete) {
        var _this = this;
        if (param.duration) {
          this._animateParam = __assign$1(__assign$1({}, param), {
            startTime: new Date().getTime()
          });
          var originalIntendedPos_1 = map(param.destPos, function (v) {
            return v;
          });
          var state_1 = this._initState(this._animateParam);
          var loop_1 = function () {
            _this._raf = null;
            var animateParam = _this._animateParam;
            var nextState = _this._getNextState(state_1);
            var isCanceled = !_this.eventManager.triggerChange(nextState.pos, state_1.pos);
            state_1 = nextState;
            if (nextState.finished) {
              animateParam.destPos = _this._getFinalPos(animateParam.destPos, originalIntendedPos_1);
              if (!equal(animateParam.destPos, _this.axisManager.get(Object.keys(animateParam.destPos)))) {
                _this.eventManager.triggerChange(animateParam.destPos, nextState.pos);
              }
              complete();
              return;
            } else if (isCanceled) {
              _this.finish(false);
            } else {
              _this._raf = requestAnimationFrame(loop_1);
            }
          };
          loop_1();
        } else {
          this.eventManager.triggerChange(param.destPos);
          complete();
        }
      };
      /**
       * Get estimated final value.
       *
       * If destPos is within the 'error range' of the original intended position, the initial intended position is returned.
       *   - eg. original intended pos: 100, destPos: 100.0000000004 ==> return 100;
       * If dest Pos is outside the 'range of error' compared to the originally intended pos, it is returned rounded based on the originally intended pos.
       *   - eg. original intended pos: 100.123 destPos: 50.12345 => return 50.123
       * @param originalIntendedPos
       * @param destPos
       */
      __proto._getFinalPos = function (destPos, originalIntendedPos) {
        var _this = this;
        // compare destPos and originalIntendedPos
        // eslint-disable-next-line @typescript-eslint/naming-convention
        var ERROR_LIMIT = 0.000001;
        var finalPos = map(destPos, function (value, key) {
          if (value >= originalIntendedPos[key] - ERROR_LIMIT && value <= originalIntendedPos[key] + ERROR_LIMIT) {
            // In error range, return original intended
            return originalIntendedPos[key];
          } else {
            // Out of error range, return rounded pos.
            var roundUnit = _this._getRoundUnit(value, key);
            var result = roundNumber(value, roundUnit);
            return result;
          }
        });
        return finalPos;
      };
      __proto._getRoundUnit = function (val, key) {
        var roundUnit = this._options.round; // manual mode
        var minRoundUnit = null; // auto mode
        // auto mode
        if (!roundUnit) {
          // Get minimum round unit
          var options = this.axisManager.getAxisOptions(key);
          minRoundUnit = inversePow(Math.max(getDecimalPlace(options.range[0]), getDecimalPlace(options.range[1]), getDecimalPlace(val)));
        }
        return minRoundUnit || roundUnit;
      };
      return AnimationManager;
    }();

    var EasingManager = /*#__PURE__*/function (_super) {
      __extends$2(EasingManager, _super);
      function EasingManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._useDuration = true;
        return _this;
      }
      var __proto = EasingManager.prototype;
      __proto.interpolate = function (displacement, threshold) {
        var initSlope = this._easing(0.00001) / 0.00001;
        return this._easing(displacement / (threshold * initSlope)) * threshold;
      };
      __proto.updateAnimation = function (options) {
        var _a;
        var animateParam = this._animateParam;
        if (!animateParam) {
          return;
        }
        var diffTime = new Date().getTime() - animateParam.startTime;
        var pos = (options === null || options === void 0 ? void 0 : options.destPos) || animateParam.destPos;
        var duration = (_a = options === null || options === void 0 ? void 0 : options.duration) !== null && _a !== void 0 ? _a : animateParam.duration;
        if ((options === null || options === void 0 ? void 0 : options.restart) || duration <= diffTime) {
          this.setTo(pos, duration - diffTime);
          return;
        }
        if (options === null || options === void 0 ? void 0 : options.destPos) {
          var currentPos = this.axisManager.get();
          // When destination is changed, new delta should be calculated as remaining percent.
          // For example, moving x:0, y:0 to x:200, y:200 and it has current easing percent of 92%. coordinate is x:184 and y:184
          // If destination changes to x:300, y:300. xdelta:200, ydelta:200 changes to xdelta:116, ydelta:116 and use remaining easingPer as 100%, not 8% as previous.
          // Therefore, original easingPer by time is kept. And divided by (1 - self._initialEasingPer) which means new total easing percent. Like calculating 8% as 100%.
          this._initialEasingPer = this._prevEasingPer;
          animateParam.delta = this.axisManager.getDelta(currentPos, pos);
          animateParam.destPos = pos;
        }
        if (options === null || options === void 0 ? void 0 : options.duration) {
          var ratio = (diffTime + this._durationOffset) / animateParam.duration;
          // Use durationOffset for keeping animation ratio after duration is changed.
          // newRatio = (diffTime + newDurationOffset) / newDuration = oldRatio
          // newDurationOffset = oldRatio * newDuration - diffTime
          this._durationOffset = ratio * duration - diffTime;
          animateParam.duration = duration;
        }
      };
      __proto._initState = function (info) {
        this._initialEasingPer = 0;
        this._prevEasingPer = 0;
        this._durationOffset = 0;
        return {
          pos: info.depaPos,
          easingPer: 0,
          finished: false
        };
      };
      __proto._getNextState = function (prevState) {
        var _this = this;
        var animateParam = this._animateParam;
        var prevPos = prevState.pos;
        var destPos = animateParam.destPos;
        var directions = map(prevPos, function (value, key) {
          return value <= destPos[key] ? 1 : -1;
        });
        var diffTime = new Date().getTime() - animateParam.startTime;
        var ratio = (diffTime + this._durationOffset) / animateParam.duration;
        var easingPer = this._easing(ratio);
        var toPos = this.axisManager.map(prevPos, function (pos, options, key) {
          var nextPos = ratio >= 1 ? destPos[key] : pos + animateParam.delta[key] * (easingPer - _this._prevEasingPer) / (1 - _this._initialEasingPer);
          // Subtract distance from distance already moved.
          // Recalculate the remaining distance.
          // Fix the bouncing phenomenon by changing the range.
          var circulatedPos = getCirculatedPos(nextPos, options.range, options.circular);
          if (nextPos !== circulatedPos) {
            // circular
            var rangeOffset = directions[key] * (options.range[1] - options.range[0]);
            destPos[key] -= rangeOffset;
            prevPos[key] -= rangeOffset;
          }
          return circulatedPos;
        });
        this._prevEasingPer = easingPer;
        return {
          pos: toPos,
          easingPer: easingPer,
          finished: easingPer >= 1
        };
      };
      __proto._easing = function (p) {
        return p > 1 ? 1 : this._options.easing(p);
      };
      return EasingManager;
    }(AnimationManager);

    /**
     * @typedef {Object} AxisOption The Axis information. The key of the axis specifies the name to use as the logical virtual coordinate system.
     * @ko 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.
     * @param {Number[]} [range] The range of coordinate <ko>좌표 범위</ko>
     * @param {Number} [range[0]=0] The coordinate of the minimum <ko>최소 좌표</ko>
     * @param {Number} [range[1]=0] The coordinate of the maximum <ko>최대 좌표</ko>
     * @param {Number} [startPos=range[0]] The coordinates to be moved when creating an instance <ko>인스턴스 생성시 이동할 좌표</ko>
     * @param {Number[]} [bounce] The size of bouncing area. The coordinates can exceed the coordinate area as much as the bouncing area based on user action. If the coordinates does not exceed the bouncing area when an element is dragged, the coordinates where bouncing effects are applied are retuned back into the coordinate area<ko>바운스 영역의 크기. 사용자의 동작에 따라 좌표가 좌표 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 사용자가 끌어다 놓는 동작을 했을 때 좌표가 바운스 영역에 있으면, 바운스 효과가 적용된 좌표가 다시 좌표 영역 안으로 들어온다</ko>
     * @param {Number} [bounce[0]=0] The size of coordinate of the minimum area <ko>최소 좌표 바운스 영역의 크기</ko>
     * @param {Number} [bounce[1]=0] The size of coordinate of the maximum area <ko>최대 좌표 바운스 영역의 크기</ko>
     * @param {Boolean[]} [circular] Indicates whether a circular element is available. If it is set to "true" and an element is dragged outside the coordinate area, the element will appear on the other side.<ko>순환 여부. 'true'로 설정한 방향의 좌표 영역 밖으로 엘리먼트가 이동하면 반대 방향에서 엘리먼트가 나타난다</ko>
     * @param {Boolean} [circular[0]=false] Indicates whether to circulate to the coordinate of the minimum <ko>최소 좌표 방향의 순환 여부</ko>
     * @param {Boolean} [circular[1]=false] Indicates whether to circulate to the coordinate of the maximum <ko>최대 좌표 방향의 순환 여부</ko>
     **/
    /**
     * @typedef {Object} AxesOption The option object of the eg.Axes module
     * @ko eg.Axes 모듈의 옵션 객체
     * @param {Function} [easing=easing.easeOutCubic] The easing function to apply to an animation <ko>애니메이션에 적용할 easing 함수</ko>
     * @param {Number} [maximumDuration=Infinity] Maximum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최대 좌표 이동 시간</ko>
     * @param {Number} [minimumDuration=0] Minimum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최소 좌표 이동 시간</ko>
     * @param {Number} [deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time. <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
     * @param {Boolean} [interruptable=true] Indicates whether an animation is interruptible.
     * - true: It can be paused or stopped by user action or the API.
     * - false: It cannot be paused or stopped by user action or the API while it is running.
     * <ko>진행 중인 애니메이션 중지 가능 여부.
     * - true: 사용자의 동작이나 API로 애니메이션을 중지할 수 있다.
     * - false: 애니메이션이 진행 중일 때는 사용자의 동작이나 API가 적용되지 않는다</ko>
     * @param {Number} [round=null] Rounding unit. For example, 0.1 rounds to 0.1 decimal point(6.1234 => 6.1), 5 rounds to 5 (93 => 95)
     * [Details](https://github.com/naver/egjs-axes/wiki/round-option)<ko>반올림 단위. 예를 들어 0.1 은 소숫점 0.1 까지 반올림(6.1234 => 6.1), 5 는 5 단위로 반올림(93 => 95).
     * [상세내용](https://github.com/naver/egjs-axes/wiki/round-option)</ko>
     * @param {Boolean} [nested=false] Whether the event propagates to other instances when the coordinates reach the end of the movable area <ko>좌표가 이동 가능한 영역의 끝까지 도달했을 때 다른 인스턴스들로의 이벤트 전파 여부</ko>
     **/
    /**
     * A module used to change the information of user action entered by various input devices such as touch screen or mouse into the logical virtual coordinates. You can easily create a UI that responds to user actions.
     * @ko 터치 입력 장치나 마우스와 같은 다양한 입력 장치를 통해 전달 받은 사용자의 동작을 논리적인 가상 좌표로 변경하는 모듈이다. 사용자 동작에 반응하는 UI를 손쉽게 만들수 있다.
     * @extends eg.Component
     *
     * @param {Object.<string, AxisOption>} axis Axis information managed by eg.Axes. The key of the axis specifies the name to use as the logical virtual coordinate system.  <ko>eg.Axes가 관리하는 축 정보. 축의 키는 논리적인 가상 좌표계로 사용할 이름을 지정한다.</ko>
     * @param {AxesOption} [options={}] The option object of the eg.Axes module<ko>eg.Axes 모듈의 옵션 객체</ko>
     * @param {Object.<string, number>} [startPos={}] The coordinates to be moved when creating an instance. It is applied with higher priority than startPos of axisOption.<ko>인스턴스 생성시 이동할 좌표, axisOption의 startPos보다 높은 우선순위로 적용된다.</ko>
     *
     * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
     * @example
     * ```js
     * // 1. Initialize eg.Axes
     * const axes = new eg.Axes({
     *  something1: {
     *    range: [0, 150],
     *    bounce: 50
     *  },
     *  something2: {
     *    range: [0, 200],
     *    bounce: 100
     *  },
     *  somethingN: {
     *    range: [1, 10],
     *  }
     * }, {
     *  deceleration : 0.0024
     * });
     *
     * // 2. attach event handler
     * axes.on({
     *  "hold" : function(evt) {
     *  },
     *  "release" : function(evt) {
     *  },
     *  "animationStart" : function(evt) {
     *  },
     *  "animationEnd" : function(evt) {
     *  },
     *  "change" : function(evt) {
     *  }
     * });
     *
     * // 3. Initialize inputTypes
     * const panInputArea = new eg.Axes.PanInput("#area", {
     *  scale: [0.5, 1]
     * });
     * const panInputHmove = new eg.Axes.PanInput("#hmove");
     * const panInputVmove = new eg.Axes.PanInput("#vmove");
     * const pinchInputArea = new eg.Axes.PinchInput("#area", {
     *  scale: 1.5
     * });
     *
     * // 4. Connect eg.Axes and InputTypes
     * // [PanInput] When the mouse or touchscreen is down and moved.
     * // Connect the 'something2' axis to the mouse or touchscreen x position and
     * // connect the 'somethingN' axis to the mouse or touchscreen y position.
     * axes.connect(["something2", "somethingN"], panInputArea); // or axes.connect("something2 somethingN", panInputArea);
     *
     * // Connect only one 'something1' axis to the mouse or touchscreen x position.
     * axes.connect(["something1"], panInputHmove); // or axes.connect("something1", panInputHmove);
     *
     * // Connect only one 'something2' axis to the mouse or touchscreen y position.
     * axes.connect(["", "something2"], panInputVmove); // or axes.connect(" something2", panInputVmove);
     *
     * // [PinchInput] Connect 'something2' axis when two pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * axes.connect("something2", pinchInputArea);
     * ```
     */
    var Axes = /*#__PURE__*/function (_super) {
      __extends$2(Axes, _super);
      /**
       *
       */
      function Axes(axis, options, startPos) {
        if (axis === void 0) {
          axis = {};
        }
        if (options === void 0) {
          options = {};
        }
        if (startPos === void 0) {
          startPos = {};
        }
        var _this = _super.call(this) || this;
        _this.axis = axis;
        _this._inputs = [];
        _this.options = __assign$1({
          easing: function (x) {
            return 1 - Math.pow(1 - x, 3);
          },
          interruptable: true,
          maximumDuration: Infinity,
          minimumDuration: 0,
          deceleration: 0.0006,
          round: null,
          nested: false
        }, options);
        Object.keys(startPos).forEach(function (key) {
          _this.axis[key].startPos = startPos[key];
        });
        _this.interruptManager = new InterruptManager(_this.options);
        _this.axisManager = new AxisManager(_this.axis);
        _this.eventManager = new EventManager(_this);
        _this.animationManager = new EasingManager(_this);
        _this.inputObserver = new InputObserver(_this);
        _this.eventManager.setAnimationManager(_this.animationManager);
        _this.eventManager.triggerChange(_this.axisManager.get());
        return _this;
      }
      var __proto = Axes.prototype;
      Object.defineProperty(__proto, "holding", {
        /**
         * @name Axes#holding
         * @desc Returns true if at least one input is in progress.
         * @ko 입력이 하나 이상 진행 중인지 여부를 반환한다.
         *
         * @readonly
         * @type {boolean}
         * @example
         * ```js
         * const axes = new eg.Axes({
         *  x: {
         *    range: [0, 100],
         *  },
         * });
         *
         * axes.holding
         * ```
         */
        get: function () {
          return this.eventManager.holdingCount > 0;
        },
        enumerable: false,
        configurable: true
      });
      /**
       * Connect the axis of eg.Axes to the inputType.
       * @ko eg.Axes의 축과 inputType을 연결한다
       * @param {(String[]|String)} axes The name of the axis to associate with inputType <ko>inputType과 연결할 축의 이름</ko>
       * @param {Object} inputType The inputType instance to associate with the axis of eg.Axes <ko>eg.Axes의 축과 연결할 inputType 인스턴스</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   }
       * });
       *
       * axes.connect("x", new eg.Axes.PanInput("#area1"))
       *    .connect("x xOther", new eg.Axes.PanInput("#area2"))
       *    .connect(" xOther", new eg.Axes.PanInput("#area3"))
       *    .connect(["x"], new eg.Axes.PanInput("#area4"))
       *    .connect(["xOther", "x"], new eg.Axes.PanInput("#area5"))
       *    .connect(["", "xOther"], new eg.Axes.PanInput("#area6"));
       * ```
       */
      __proto.connect = function (axes, inputType) {
        var mapped;
        if (typeof axes === "string") {
          mapped = axes.split(" ");
        } else {
          mapped = axes.concat();
        }
        // check same instance
        if (~this._inputs.indexOf(inputType)) {
          this.disconnect(inputType);
        }
        inputType.mapAxes(mapped);
        inputType.connect(this.inputObserver);
        this._inputs.push(inputType);
        return this;
      };
      /**
       * Disconnect the axis of eg.Axes from the inputType.
       * @ko eg.Axes의 축과 inputType의 연결을 끊는다.
       * @param {Object} [inputType] An inputType instance associated with the axis of eg.Axes <ko>eg.Axes의 축과 연결한 inputType 인스턴스</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   }
       * });
       *
       * const input1 = new eg.Axes.PanInput("#area1");
       * const input2 = new eg.Axes.PanInput("#area2");
       * const input3 = new eg.Axes.PanInput("#area3");
       *
       * axes.connect("x", input1);
       *    .connect("x xOther", input2)
       *    .connect(["xOther", "x"], input3);
       *
       * axes.disconnect(input1); // disconnects input1
       * axes.disconnect(); // disconnects all of them
       * ```
       */
      __proto.disconnect = function (inputType) {
        if (inputType) {
          var index = this._inputs.indexOf(inputType);
          if (index >= 0) {
            this._inputs[index].disconnect();
            this._inputs.splice(index, 1);
          }
        } else {
          this._inputs.forEach(function (v) {
            return v.disconnect();
          });
          this._inputs = [];
        }
        return this;
      };
      /**
       * Returns the current position of the coordinates.
       * @ko 좌표의 현재 위치를 반환한다
       * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
       * @return {Object.<string, number>} Axis coordinate information <ko>축 좌표 정보</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       *    "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.get(); // {"x": 0, "xOther": -100, "zoom": 50}
       * axes.get(["x", "zoom"]); // {"x": 0, "zoom": 50}
       * ```
       */
      __proto.get = function (axes) {
        return this.axisManager.get(axes);
      };
      /**
       * Moves an axis to specific coordinates.
       * @ko 좌표를 이동한다.
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       *    "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.setTo({"x": 30, "zoom": 60});
       * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
       *
       * axes.setTo({"x": 100, "xOther": 60}, 1000); // animatation
       *
       * // after 1000 ms
       * axes.get(); // {"x": 100, "xOther": 60, "zoom": 60}
       * ```
       */
      __proto.setTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }
        this.animationManager.setTo(pos, duration);
        return this;
      };
      /**
       * Moves an axis from the current coordinates to specific coordinates.
       * @ko 현재 좌표를 기준으로 좌표를 이동한다.
       * @param {Object.<string, number>} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       *    "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.setBy({"x": 30, "zoom": 10});
       * axes.get(); // {"x": 30, "xOther": -100, "zoom": 60}
       *
       * axes.setBy({"x": 70, "xOther": 60}, 1000); // animatation
       *
       * // after 1000 ms
       * axes.get(); // {"x": 100, "xOther": -40, "zoom": 60}
       * ```
       */
      __proto.setBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }
        this.animationManager.setBy(pos, duration);
        return this;
      };
      /**
       * Change the options of Axes instance.
       * @ko 인스턴스의 옵션을 변경한다.
       * @param {AxesOption} options Axes options to change <ko>변경할 옵션 목록</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       * }, {
       *   round: 10,
       * });
       *
       * axes.setTo({"x": 48});
       * axes.get(); // {"x": 50}
       *
       * axes.setOptions({
       *   round: 1,
       * });
       *
       * axes.setTo({"x": 48});
       * axes.get(); // {"x": 48}
       * ```
       */
      __proto.setOptions = function (options) {
        this.options = __assign$1(__assign$1({}, this.options), options);
        this.animationManager.setOptions(options);
        return this;
      };
      /**
       * Change the information of an existing axis.
       * @ko 존재하는 축의 정보를 변경한다.
       * @param {Object.<string, AxisOption>} axis Axis options to change <ko>변경할 축의 정보</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       * });
       *
       * axes.setTo({"x": 150});
       * axes.get(); // {"x": 100}
       *
       * axes.setAxis({
       *   "x": {
       *      range: [0, 200]
       *   },
       * });
       *
       * axes.setTo({"x": 150});
       * axes.get(); // {"x": 150}
       * ```
       */
      __proto.setAxis = function (axis) {
        this.axisManager.setAxis(axis);
        return this;
      };
      /**
       * Stop an animation in progress.
       * @ko 재생 중인 애니메이션을 정지한다.
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       * });
       *
       * axes.setTo({"x": 10}, 1000); // start animatation
       *
       * // after 500 ms
       * axes.stopAnimation(); // stop animation during movement.
       * ```
       */
      __proto.stopAnimation = function () {
        this.animationManager.stopAnimation();
        this.animationManager.finish(false);
        return this;
      };
      /**
       * Change the destination of an animation in progress.
       * @ko 재생 중인 애니메이션의 목적지와 진행 시간을 변경한다.
       * @param {UpdateAnimationOption} pos The coordinate to move to <ko>이동할 좌표</ko>
       * @return {eg.Axes} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 200]
       *   },
       *   "y": {
       *      range: [0, 200]
       *   }
       * });
       *
       * axes.setTo({"x": 50, "y": 50}, 1000); // trigger animation by setTo
       *
       * // after 500 ms
       * axes.updateAnimation({destPos: {"x": 100, "y": 100}}); // animation will end after 500 ms, at {"x": 100, "y": 100}
       *
       * // after 500 ms
       * axes.setTo({"x": 50, "y": 50}, 1000); // trigger animation by setTo
       *
       * // after 700 ms
       * axes.updateAnimation({destPos: {"x": 100, "y": 100}, duration: 1500, restart: true}); // this works same as axes.setTo({"x": 100, "y": 100}, 800) since restart is true.
       * ```
       */
      __proto.updateAnimation = function (options) {
        this.animationManager.updateAnimation(options);
        return this;
      };
      /**
       * Returns whether there is a coordinate in the bounce area of ​​the target axis.
       * @ko 대상 축 중 bounce영역에 좌표가 존재하는지를 반환한다
       * @param {Object} [axes] The names of the axis <ko>축 이름들</ko>
       * @return {Boolen} Whether the bounce area exists. <ko>bounce 영역 존재 여부</ko>
       * @example
       * ```js
       * const axes = new eg.Axes({
       *   "x": {
       *      range: [0, 100]
       *   },
       *   "xOther": {
       *      range: [-100, 100]
       *   },
       *    "zoom": {
       *      range: [50, 30]
       *   }
       * });
       *
       * axes.isBounceArea(["x"]);
       * axes.isBounceArea(["x", "zoom"]);
       * axes.isBounceArea();
       * ```
       */
      __proto.isBounceArea = function (axes) {
        return this.axisManager.isOutside(axes);
      };
      /**
       * Destroys properties, and events used in a module and disconnect all connections to inputTypes.
       * @ko 모듈에 사용한 속성, 이벤트를 해제한다. 모든 inputType과의 연결을 끊는다.
       */
      __proto.destroy = function () {
        this.disconnect();
        this.eventManager.destroy();
      };
      /**
       * @name VERSION
       * @desc Version info string
       * @ko 버전정보 문자열
       *
       * @constant
       * @type {String}
       * @example
       * ```js
       * eg.Axes.VERSION;  // ex) 3.3.3
       * ```
       */
      Axes.VERSION = "3.9.0";
      /* eslint-enable */
      /**
       * @name TRANSFORM
       * @desc Returns the transform attribute with CSS vendor prefixes.
       * @ko CSS vendor prefixes를 붙인 transform 속성을 반환한다.
       *
       * @constant
       * @type {String}
       * @example
       * ```js
       * eg.Axes.TRANSFORM; // "transform" or "webkitTransform"
       * ```
       */
      Axes.TRANSFORM = TRANSFORM;
      /**
       * @name DIRECTION_NONE
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_NONE = DIRECTION_NONE;
      /**
       * @name DIRECTION_LEFT
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_LEFT = DIRECTION_LEFT;
      /**
       * @name DIRECTION_RIGHT
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_RIGHT = DIRECTION_RIGHT;
      /**
       * @name DIRECTION_UP
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_UP = DIRECTION_UP;
      /**
       * @name DIRECTION_DOWN
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_DOWN = DIRECTION_DOWN;
      /**
       * @name DIRECTION_HORIZONTAL
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
      /**
       * @name DIRECTION_VERTICAL
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
      /**
       * @name DIRECTION_ALL
       * @constant
       * @type {Number}
       */
      Axes.DIRECTION_ALL = DIRECTION_ALL;
      __decorate$1([Computed], Axes.prototype, "holding", null);
      Axes = __decorate$1([ReactiveSubscribe], Axes);
      return Axes;
    }(Component);

    /*
     * Copyright (c) 2015 NAVER Corp.
     * egjs projects are licensed under the MIT license
     */
    // get user's direction
    var getDirectionByAngle = function (angle, thresholdAngle) {
      if (thresholdAngle < 0 || thresholdAngle > 90) {
        return DIRECTION_NONE;
      }
      var toAngle = Math.abs(angle);
      return toAngle > thresholdAngle && toAngle < 180 - thresholdAngle ? DIRECTION_VERTICAL : DIRECTION_HORIZONTAL;
    };
    /**
     * @typedef {Object} PanInputOption The option object of the eg.Axes.PanInput module.
     * @ko eg.Axes.PanInput 모듈의 옵션 객체
     * @param {String[]} [inputType=["touch", "mouse", "pointer"]] Types of input devices
     * - touch: Touch screen
     * - mouse: Mouse
     * - pointer: Mouse and touch <ko>입력 장치 종류
     * - touch: 터치 입력 장치
     * - mouse: 마우스
     * - pointer: 마우스 및 터치</ko>
     * @param {String[]} [inputKey=["any"]] List of key combinations to allow input
     * - any: any key
     * - shift: shift key
     * - ctrl: ctrl key and pinch gesture on the trackpad
     * - alt: alt key
     * - meta: meta key
     * - none: none of these keys are pressed <ko>입력을 허용할 키 조합 목록
     * - any: 아무 키
     * - shift: shift 키
     * - ctrl: ctrl 키 및 트랙패드의 pinch 제스쳐
     * - alt: alt 키
     * - meta: meta 키
     * - none: 아무 키도 눌리지 않은 상태 </ko>
     * @param {String[]} [inputButton=["left"]] List of buttons to allow input
     * - left: Left mouse button and normal touch
     * - middle: Mouse wheel press
     * - right: Right mouse button <ko>입력을 허용할 버튼 목록
     * - left: 마우스 왼쪽 버튼
     * - middle: 마우스 휠 눌림
     * - right: 마우스 오른쪽 버튼 </ko>
     * @param {Number[]} [scale] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
     * @param {Number} [scale[0]=1] horizontal axis scale <ko>수평축 배율</ko>
     * @param {Number} [scale[1]=1] vertical axis scale <ko>수직축 배율</ko>
     * @param {Number} [thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
     * @param {Number} [threshold=0] Minimal pan distance required before recognizing <ko>사용자의 Pan 동작을 인식하기 위해산 최소한의 거리</ko>
     * @param {Boolean} [preventClickOnDrag=false] Whether to cancel the {@link https://developer.mozilla.org/en/docs/Web/API/Element/click_event click} event when the user finishes dragging more than 1 pixel <ko>사용자가 1픽셀 이상 드래그를 마쳤을 때 {@link https://developer.mozilla.org/ko/docs/Web/API/Element/click_event click} 이벤트 취소 여부</ko>
     * @param {Boolean} [preventDefaultOnDrag=false] Whether to use the {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} when the user starts dragging <ko>사용자가 드래그를 시작할 때 {@link https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault preventDefault} 실행 여부</ko>
     * @param {Number} [iOSEdgeSwipeThreshold=30] Area (px) that can go to the next page when swiping the right edge in iOS safari <ko>iOS Safari에서 오른쪽 엣지를 스와이프 하는 경우 다음 페이지로 넘어갈 수 있는 영역(px)</ko>
     * @param {String} [touchAction=null] Value that overrides the element's "touch-action" css property. If set to null, it is automatically set to prevent scrolling in the direction of the connected axis. <ko>엘리먼트의 "touch-action" CSS 속성을 덮어쓰는 값. 만약 null로 설정된 경우, 연결된 축 방향으로의 스크롤을 방지하게끔 자동으로 설정된다.</ko>
     **/
    /**
     * A module that passes the amount of change to eg.Axes when the mouse or touchscreen is down and moved. use less than two axes.
     * @ko 마우스나 터치 스크린을 누르고 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
     *
     * @example
     * ```js
     * const pan = new eg.Axes.PanInput("#area", {
     *     inputType: ["touch"],
     *     scale: [1, 1.3],
     * });
     *
     * // Connect the 'something2' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
     * // Connect the 'somethingN' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
     * axes.connect(["something2", "somethingN"], pan); // or axes.connect("something2 somethingN", pan);
     *
     * // Connect only one 'something1' axis to the mouse or touchscreen x position when the mouse or touchscreen is down and moved.
     * axes.connect(["something1"], pan); // or axes.connect("something1", pan);
     *
     * // Connect only one 'something2' axis to the mouse or touchscreen y position when the mouse or touchscreen is down and moved.
     * axes.connect(["", "something2"], pan); // or axes.connect(" something2", pan);
     * ```
     * @param {String|HTMLElement|Ref<HTMLElement>|jQuery} element An element to use the eg.Axes.PanInput module <ko>eg.Axes.PanInput 모듈을 사용할 엘리먼트</ko>
     * @param {PanInputOption} [options={}] The option object of the eg.Axes.PanInput module<ko>eg.Axes.PanInput 모듈의 옵션 객체</ko>
     */
    var PanInput = /*#__PURE__*/function () {
      /**
       *
       */
      function PanInput(el, options) {
        var _this = this;
        this.axes = [];
        this.element = null;
        this._enabled = false;
        this._activeEvent = null;
        this._atRightEdge = false;
        this._rightEdgeTimer = 0;
        this._dragged = false;
        this._isOverThreshold = false;
        this._preventClickWhenDragged = function (e) {
          if (_this._dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          _this._dragged = false;
        };
        this._voidFunction = function () {};
        this.element = $(el);
        this.options = __assign$1({
          inputType: ["touch", "mouse", "pointer"],
          inputKey: [ANY],
          inputButton: [MOUSE_LEFT],
          scale: [1, 1],
          thresholdAngle: 45,
          threshold: 0,
          preventClickOnDrag: false,
          preventDefaultOnDrag: false,
          iOSEdgeSwipeThreshold: IOS_EDGE_THRESHOLD,
          releaseOnScroll: false,
          touchAction: null
        }, options);
        this._onPanstart = this._onPanstart.bind(this);
        this._onPanmove = this._onPanmove.bind(this);
        this._onPanend = this._onPanend.bind(this);
      }
      var __proto = PanInput.prototype;
      __proto.mapAxes = function (axes) {
        this._direction = getDirection(!!axes[0], !!axes[1]);
        this.axes = axes;
      };
      __proto.connect = function (observer) {
        if (this._activeEvent) {
          this._detachElementEvent();
          this._detachWindowEvent(this._activeEvent);
        }
        this._attachElementEvent(observer);
        this._originalCssProps = setCssProps(this.element, this.options, this._direction);
        return this;
      };
      __proto.disconnect = function () {
        this._detachElementEvent();
        this._detachWindowEvent(this._activeEvent);
        if (!isCssPropsFromAxes(this._originalCssProps)) {
          revertCssProps(this.element, this._originalCssProps);
        }
        this._direction = DIRECTION_NONE;
        return this;
      };
      /**
       * Destroys elements, properties, and events used in a module.
       * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
       */
      __proto.destroy = function () {
        this.disconnect();
        this.element = null;
      };
      /**
       * Enables input devices
       * @ko 입력 장치를 사용할 수 있게 한다
       * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */
      __proto.enable = function () {
        this._enabled = true;
        return this;
      };
      /**
       * Disables input devices
       * @ko 입력 장치를 사용할 수 없게 한다.
       * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */
      __proto.disable = function () {
        this._enabled = false;
        return this;
      };
      /**
       * Returns whether to use an input device
       * @ko 입력 장치 사용 여부를 반환한다.
       * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
       */
      __proto.isEnabled = function () {
        return this._enabled;
      };
      /**
       * Releases current user input.
       * @ko 사용자의 입력을 강제로 중단시킨다.
       * @return {PanInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */
      __proto.release = function () {
        var activeEvent = this._activeEvent;
        var prevEvent = activeEvent.prevEvent;
        activeEvent.onRelease();
        this._observer.release(this, prevEvent, [0, 0]);
        this._detachWindowEvent(activeEvent);
        return this;
      };
      __proto._onPanstart = function (event) {
        var _a = this.options,
          inputKey = _a.inputKey,
          inputButton = _a.inputButton,
          preventDefaultOnDrag = _a.preventDefaultOnDrag;
        var activeEvent = this._activeEvent;
        var panEvent = activeEvent.onEventStart(event, inputKey, inputButton);
        if (!panEvent || !this._enabled || activeEvent.getTouches(event, inputButton) > 1) {
          return;
        }
        if (panEvent.srcEvent.cancelable !== false) {
          var edgeThreshold = this.options.iOSEdgeSwipeThreshold;
          this._dragged = false;
          this._isOverThreshold = false;
          this._observer.hold(this, panEvent);
          this._atRightEdge = IS_IOS_SAFARI && panEvent.center.x > window.innerWidth - edgeThreshold;
          this._attachWindowEvent(activeEvent);
          preventDefaultOnDrag && panEvent.srcEvent.type !== "touchstart" && panEvent.srcEvent.preventDefault();
          activeEvent.prevEvent = panEvent;
        }
      };
      __proto._onPanmove = function (event) {
        var _this = this;
        var _a = this.options,
          iOSEdgeSwipeThreshold = _a.iOSEdgeSwipeThreshold,
          preventClickOnDrag = _a.preventClickOnDrag,
          releaseOnScroll = _a.releaseOnScroll,
          inputKey = _a.inputKey,
          inputButton = _a.inputButton,
          threshold = _a.threshold,
          thresholdAngle = _a.thresholdAngle;
        var activeEvent = this._activeEvent;
        var panEvent = activeEvent.onEventMove(event, inputKey, inputButton);
        var touches = activeEvent.getTouches(event, inputButton);
        if (touches === 0 || releaseOnScroll && panEvent && !panEvent.srcEvent.cancelable) {
          this._onPanend(event);
          return;
        }
        if (!panEvent || !this._enabled || touches > 1) {
          return;
        }
        var userDirection = getDirectionByAngle(panEvent.angle, thresholdAngle);
        var useHorizontal = useDirection(DIRECTION_HORIZONTAL, this._direction, userDirection);
        var useVertical = useDirection(DIRECTION_VERTICAL, this._direction, userDirection);
        if (activeEvent.prevEvent && IS_IOS_SAFARI) {
          var swipeLeftToRight = panEvent.center.x < 0;
          if (swipeLeftToRight) {
            // iOS swipe left => right
            this.release();
            return;
          } else if (this._atRightEdge) {
            clearTimeout(this._rightEdgeTimer);
            // - is right to left
            var swipeRightToLeft = panEvent.deltaX < -iOSEdgeSwipeThreshold;
            if (swipeRightToLeft) {
              this._atRightEdge = false;
            } else {
              // iOS swipe right => left
              this._rightEdgeTimer = window.setTimeout(function () {
                return _this.release();
              }, 100);
            }
          }
        }
        var distance = this._getDistance([panEvent.deltaX, panEvent.deltaY], [useHorizontal, useVertical]);
        var offset = this._getOffset([panEvent.offsetX, panEvent.offsetY], [useHorizontal, useVertical]);
        var prevent = offset.some(function (v) {
          return v !== 0;
        });
        if (prevent) {
          if (panEvent.srcEvent.cancelable !== false) {
            panEvent.srcEvent.preventDefault();
          }
          panEvent.srcEvent.stopPropagation();
        }
        panEvent.preventSystemEvent = prevent;
        if (prevent && (this._isOverThreshold || distance >= threshold)) {
          this._dragged = preventClickOnDrag;
          this._isOverThreshold = true;
          this._observer.change(this, panEvent, toAxis(this.axes, offset));
        }
        activeEvent.prevEvent = panEvent;
      };
      __proto._onPanend = function (event) {
        var inputButton = this.options.inputButton;
        var activeEvent = this._activeEvent;
        activeEvent.onEventEnd(event);
        if (!this._enabled || activeEvent.getTouches(event, inputButton) !== 0) {
          return;
        }
        this._detachWindowEvent(activeEvent);
        clearTimeout(this._rightEdgeTimer);
        var prevEvent = activeEvent.prevEvent;
        var velocity = this._isOverThreshold ? this._getOffset([Math.abs(prevEvent.velocityX) * (prevEvent.offsetX < 0 ? -1 : 1), Math.abs(prevEvent.velocityY) * (prevEvent.offsetY < 0 ? -1 : 1)], [useDirection(DIRECTION_HORIZONTAL, this._direction), useDirection(DIRECTION_VERTICAL, this._direction)]) : [0, 0];
        activeEvent.onRelease();
        this._observer.release(this, prevEvent, velocity);
      };
      __proto._attachWindowEvent = function (activeEvent) {
        var _this = this;
        activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
          window.addEventListener(event, _this._onPanmove, getAddEventOptions(event));
        });
        activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.end.forEach(function (event) {
          window.addEventListener(event, _this._onPanend, getAddEventOptions(event));
        });
      };
      __proto._detachWindowEvent = function (activeEvent) {
        var _this = this;
        activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
          window.removeEventListener(event, _this._onPanmove);
        });
        activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.end.forEach(function (event) {
          window.removeEventListener(event, _this._onPanend);
        });
      };
      __proto._getOffset = function (properties, direction) {
        var scale = this.options.scale;
        return [direction[0] ? properties[0] * scale[0] : 0, direction[1] ? properties[1] * scale[1] : 0];
      };
      __proto._getDistance = function (delta, direction) {
        return Math.sqrt(Number(direction[0]) * Math.pow(delta[0], 2) + Number(direction[1]) * Math.pow(delta[1], 2));
      };
      __proto._attachElementEvent = function (observer) {
        var _this = this;
        var activeEvent = convertInputType(this.options.inputType);
        var element = this.element;
        if (!activeEvent) {
          return;
        }
        if (!element) {
          throw new Error("Element to connect input does not exist.");
        }
        this._observer = observer;
        this._enabled = true;
        this._activeEvent = activeEvent;
        element.addEventListener("click", this._preventClickWhenDragged, true);
        activeEvent.start.forEach(function (event) {
          element.addEventListener(event, _this._onPanstart);
        });
        // adding event listener to element prevents invalid behavior in iOS Safari
        activeEvent.move.forEach(function (event) {
          element.addEventListener(event, _this._voidFunction);
        });
      };
      __proto._detachElementEvent = function () {
        var _this = this;
        var activeEvent = this._activeEvent;
        var element = this.element;
        if (element) {
          element.removeEventListener("click", this._preventClickWhenDragged, true);
          activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.start.forEach(function (event) {
            element.removeEventListener(event, _this._onPanstart);
          });
          activeEvent === null || activeEvent === void 0 ? void 0 : activeEvent.move.forEach(function (event) {
            element.removeEventListener(event, _this._voidFunction);
          });
        }
        this._enabled = false;
        this._observer = null;
      };
      return PanInput;
    }();

    /**
     * @typedef {Object} WheelInputOption The option object of the eg.Axes.WheelInput module
     * @ko eg.Axes.WheelInput 모듈의 옵션 객체
     * @param {String[]} [inputKey=["any"]] List of key combinations to allow input
     * - any: any key
     * - shift: shift key
     * - ctrl: ctrl key and pinch gesture on the trackpad
     * - alt: alt key
     * - meta: meta key
     * - none: none of these keys are pressed <ko>입력을 허용할 키 조합 목록
     * - any: 아무 키
     * - shift: shift 키
     * - ctrl: ctrl 키 및 트랙패드의 pinch 제스쳐
     * - alt: alt 키
     * - meta: meta 키
     * - none: 아무 키도 눌리지 않은 상태 </ko>
     * @param {Number} [scale=1] Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
     * @param {Number} [releaseDelay=300] Millisecond that trigger release event after last input<ko>마지막 입력 이후 release 이벤트가 트리거되기까지의 밀리초</ko>
     * @param {Boolean} [useNormalized=true] Whether to calculate scroll speed the same in all browsers<ko>모든 브라우저에서 스크롤 속도를 동일하게 처리할지 여부</ko>
     * @param {Boolean} [useAnimation=false] Whether to process coordinate changes through the mouse wheel as a continuous animation<ko>마우스 휠을 통한 좌표 변화를 연속적인 애니메이션으로 처리할지 여부</ko>
     **/
    /**
     * A module that passes the amount of change to eg.Axes when the mouse wheel is moved. use one axis.
     * @ko 마우스 휠이 움직일때의 변화량을 eg.Axes에 전달하는 모듈. 두개 이하의 축을 사용한다.
     *
     * @example
     * ```js
     * const wheel = new eg.Axes.WheelInput("#area", {
     *     scale: 1
     * });
     *
     * // Connect only one 'something1' axis to the vertical mouse wheel.
     * axes.connect(["something1"], wheel); // or axes.connect("something1", wheel);
     *
     * // Connect only one 'something2' axis to the horizontal mouse wheel.
     * axes.connect(["", "something2"], wheel); // or axes.connect(" something2", pan);
     *
     * // Connect the 'something1' axis to the vertical mouse wheel.
     * // Connect the 'something2' axis to the horizontal mouse wheel.
     * axes.connect(["something1", "something2"], wheel);
     * ```
     * @param {HTMLElement|String|jQuery} element An element to use the eg.Axes.WheelInput module <ko>eg.Axes.WheelInput 모듈을 사용할 엘리먼트</ko>
     * @param {WheelInputOption} [options] The option object of the eg.Axes.WheelInput module<ko>eg.Axes.WheelInput 모듈의 옵션 객체</ko>
     */
    var WheelInput = /*#__PURE__*/function () {
      /**
       *
       */
      function WheelInput(el, options) {
        this.axes = [];
        this.element = null;
        this._enabled = false;
        this._holding = false;
        this._timer = null;
        this.element = $(el);
        this.options = __assign$1({
          inputKey: [ANY],
          scale: 1,
          releaseDelay: 300,
          useNormalized: true,
          useAnimation: false
        }, options);
        this._onWheel = this._onWheel.bind(this);
      }
      var __proto = WheelInput.prototype;
      __proto.mapAxes = function (axes) {
        // vertical mouse wheel is mapped into axes[0]
        this._direction = getDirection(!!axes[1], !!axes[0]);
        this.axes = axes;
      };
      __proto.connect = function (observer) {
        this._detachEvent();
        this._attachEvent(observer);
        return this;
      };
      __proto.disconnect = function () {
        this._detachEvent();
        return this;
      };
      /**
       * Destroys elements, properties, and events used in a module.
       * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
       */
      __proto.destroy = function () {
        this.disconnect();
        this.element = null;
      };
      /**
       * Enables input devices
       * @ko 입력 장치를 사용할 수 있게 한다
       * @return {WheelInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */
      __proto.enable = function () {
        this._enabled = true;
        return this;
      };
      /**
       * Disables input devices
       * @ko 입력 장치를 사용할 수 없게 한다.
       * @return {WheelInput} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
       */
      __proto.disable = function () {
        this._enabled = false;
        return this;
      };
      /**
       * Returns whether to use an input device
       * @ko 입력 장치를 사용 여부를 반환한다.
       * @return {Boolean} Whether to use an input device <ko>입력장치 사용여부</ko>
       */
      __proto.isEnabled = function () {
        return this._enabled;
      };
      __proto._onWheel = function (event) {
        var _this = this;
        if (!this._enabled || !isValidKey(event, this.options.inputKey)) {
          return;
        }
        var offset = this._getOffset([event.deltaY, event.deltaX], [useDirection(DIRECTION_VERTICAL, this._direction), useDirection(DIRECTION_HORIZONTAL, this._direction)]);
        if (offset[0] === 0 && offset[1] === 0) {
          return;
        }
        event.preventDefault();
        if (!this._holding) {
          this._observer.hold(this, event);
          this._holding = true;
        }
        this._observer.change(this, event, toAxis(this.axes, offset), this.options.useAnimation);
        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
          if (_this._holding) {
            _this._holding = false;
            _this._observer.release(_this, event, [0]);
          }
        }, this.options.releaseDelay);
      };
      __proto._getOffset = function (properties, direction) {
        var scale = this.options.scale;
        var useNormalized = this.options.useNormalized;
        return [direction[0] && properties[0] ? (properties[0] > 0 ? -1 : 1) * (useNormalized ? 1 : Math.abs(properties[0])) * scale : 0, direction[1] && properties[1] ? (properties[1] > 0 ? -1 : 1) * (useNormalized ? 1 : Math.abs(properties[1])) * scale : 0];
      };
      __proto._attachEvent = function (observer) {
        var element = this.element;
        if (!element) {
          throw new Error("Element to connect input does not exist.");
        }
        this._observer = observer;
        element.addEventListener("wheel", this._onWheel);
        this._enabled = true;
      };
      __proto._detachEvent = function () {
        var element = this.element;
        if (element) {
          this.element.removeEventListener("wheel", this._onWheel);
        }
        this._enabled = false;
        this._observer = null;
        if (this._timer) {
          clearTimeout(this._timer);
          this._timer = null;
        }
      };
      return WheelInput;
    }();

    var _a, _b;
    /**
     * egjs-conveyer
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */


    var IS_IE = /msie|trident/g.test(typeof window !== "undefined" && ((_b = (_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || "");

    /**
     * egjs-conveyer
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    function isString(val) {
      return typeof val === "string";
    }
    function instanceOfElement(el) {
      return el instanceof Element || el instanceof Node;
    }

    /**
     * Conveyer adds Drag gestures to your Native Scroll.
     * @ko Conveyer는 네이티브 스크롤에 드래그 제스처를 추가합니다.
     * @extends Component
     * @support {"ie": "9+(with polyfill)", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "4.X+"}
     * @example
    ```html
    <div class="items">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <script>
    import Conveyer from "@egjs/conveyer";

    const conveyer = new Conveyer(".items");
    </script>
    ```
     */

    var Conveyer =
    /*#__PURE__*/
    function (_super) {
      __extends(Conveyer, _super);
      /**
       * @param - A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
       * @param - The option object of the InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
       */


      function Conveyer(scrollArea, options) {
        if (options === void 0) {
          options = {};
        }

        var _this = _super.call(this) || this;

        _this._axes = null;
        _this._items = [];
        _this._size = 0;
        _this._scrollSize = 0;
        _this._scrollTimer = 0;
        _this._isWheelScroll = false;
        _this._isDragScroll = false;
        _this._isAnimationScroll = false;
        /**
         * Whether the scroll has reached the start.
         * @ko 스크롤이 시작에 닿았는지 여부.
         * @name Conveyer#isReachStart
         * @type {boolean}
         * @default true
         * @readonly
         * @example
         * ```js
         * import { Conveyer } from "@egjs/conveyer";
         *
         * const conveyer = new Conveyer(".container");
         *
         * conveyer.isReachStart
         * ```
         */

        _this._isReachStart = true;
        /**
         * Whether the scroll has reached the end.
         * @ko 스크롤이 끝에 닿았는지 여부.
         * @name Conveyer#isReachEnd
         * @type {boolean}
         * @default false
         * @readonly
         * @example
         * ```js
         * import { Conveyer } from "@egjs/conveyer";
         *
         * const conveyer = new Conveyer(".container");
         *
         * conveyer.isReachEnd
         * ```
         */

        _this._isReachEnd = false;
        /**
         * the scroll position of the container
         * @ko 컨테이너의 스크롤 위치
         * @name Conveyer#scrollPos
         * @type {number}
         * @default 0
         * @readonly
         * @example
         * ```js
         * import { Conveyer } from "@egjs/conveyer";
         *
         * const conveyer = new Conveyer(".container");
         *
         * conveyer.scrollPos
         * ```
         */

        _this._pos = 0;
        /**
         * Updating containers and items.
         * @ko 컨테이너와 아이템들을 업데이트 한다.
         * @method
         */

        _this.update = function () {
          _this.updateItems();

          _this.updateContainer();
        };

        _this._onScroll = function (e) {
          var _a;

          if (e) {
            _this._debounceScroll();
          }

          _this._refreshScroll();

          var size = _this._size;
          var scrollSize = _this._scrollSize;
          var pos = _this._pos;
          var boundaryMargin = (_a = _this._options.boundaryMargin) !== null && _a !== void 0 ? _a : 0; // enter start

          if (pos <= boundaryMargin && _this.isReachStart !== true) {
            _this._isReachStart = true;
            /**
             * This event is fired when scroll reach start.
             * @ko 스크롤이 앞에 닿으면 발생하는 이벤트이다.
             * @event Conveyer#reachStart
             */

            _this.trigger("reachStart");
          } else if (pos > boundaryMargin && _this.isReachStart !== false) {
            _this._isReachStart = false;
            /**
             * This event is fired when scroll leave start.
             * @ko 스크롤이 앞에서 떠나면 발생하는 이벤트이다.
             * @event Conveyer#leaveStart
             */

            _this.trigger("leaveStart");
          } // enter end


          if (scrollSize - size - pos < 1 + boundaryMargin && _this.isReachEnd !== true) {
            _this._isReachEnd = true;
            /**
             * This event is fired when scroll reach end.
             * @ko 스크롤이 끝에 닿으면 발생하는 이벤트이다.
             * @event Conveyer#reachEnd
             */

            _this.trigger("reachEnd");
          } else if (!(scrollSize - size - pos < 1 + boundaryMargin) && _this.isReachEnd !== false) {
            _this._isReachEnd = false;
            /**
             * This event is fired when scroll leave end.
             * @ko 스크롤이 끝에서 떠나면 발생하는 이벤트이다.
             * @event Conveyer#leaveEnd
             */

            _this.trigger("leaveEnd");
          }
        };

        _this._options = __assign({
          horizontal: true,
          useDrag: true,
          useSideWheel: false,
          autoInit: true,
          boundaryMargin: 0,
          scrollDebounce: 100
        }, options);
        _this._scrollArea = scrollArea;

        if (_this._options.autoInit) {
          _this.init();
        }

        return _this;
      }
      /**
       * Finds an element for that direction.
       * @ko 해당 방향에 대해 엘리먼트를 찾는다.]
       * @see {@link /docs/examples/Methods direction's example} page for detailed information
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `findElement` method. <ko>findElement 메서드의 옵션</ko>
       * @example
       * <p align="center">
       *  <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      var __proto = Conveyer.prototype;

      __proto.findElement = function (direction, options) {
        var _a;

        if (options === void 0) {
          options = {};
        }

        return ((_a = this.findItem(direction, options)) === null || _a === void 0 ? void 0 : _a.element) || null;
      };
      /**
       * Finds an item for an element or its direction.
       * @ko 엘리먼트 또는 해당 방향에 대해 아이템을 찾는다.
       * @see {@link /docs/examples/Methods direction's example} page for detailed information
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `findItem` method. <ko>`findItem` 메서드의 옵션</ko>
       * @example
       * <p align="center">
       *  <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      __proto.findItem = function (target, options) {
        var _a;

        if (options === void 0) {
          options = {};
        }

        var pos = this._pos;
        var scrollSize = this._scrollSize;
        var size = this._size;
        var hitTest = (_a = options === null || options === void 0 ? void 0 : options.hitTest) !== null && _a !== void 0 ? _a : 1;

        var items = __spreadArray([], this._items, true);

        var length = items.length;
        var endPos = pos + size;
        var sibling = options.sibling;
        var intersection = options.intersection;
        var startVirtualItem = {
          pos: 0,
          size: 0
        };
        var endVirtualItem = {
          pos: scrollSize,
          size: 0
        };

        if (items[0].pos > 0) {
          items.unshift(startVirtualItem);
        }

        if (length && items[length - 1].pos + items[length - 1].size < scrollSize) {
          items.push(endVirtualItem);
        }

        var selectedItem;

        if (target === "start") {
          if (pos < 0) {
            return null;
          }

          var selectedItems = items.filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos - pos;
            var dist2 = dist + itemSize;
            return dist >= 0 || dist2 > 0 && intersection || dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          });
          selectedItem = selectedItems[0] === startVirtualItem && selectedItems[1] || selectedItems[0];
        } else if (target === "end") {
          if (pos > scrollSize - size) {
            return null;
          }

          var selectedItems = items.filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos + itemSize - endPos;
            var dist2 = dist - itemSize;
            return dist <= 0 || dist2 < 0 && intersection || dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          }).reverse();
          selectedItem = selectedItems[0] === endVirtualItem && selectedItems[1] || selectedItems[0];
        } else if (target === "prev") {
          selectedItem = items.filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos + itemSize - pos;
            var dist2 = dist - itemSize;
            return dist <= 0 || dist2 < 0 && intersection || dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          }).reverse()[0];
        } else if (target === "next") {
          selectedItem = items.filter(function (item) {
            var itemSize = item.size;
            var dist = item.pos - endPos;
            var dist2 = dist + itemSize;
            return dist >= 0 || dist2 > 0 && intersection || dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
          })[0];
        } else {
          return this._getItem(target);
        }

        if (sibling && selectedItem) {
          var selectedIndex = items.indexOf(selectedItem);

          if (selectedIndex > -1) {
            selectedItem = items[selectedIndex + sibling];
          }
        }

        return selectedItem || null;
      };
      /**
       * Scrolls an element or an item in that direction into the view.
       * @ko 엘리먼트나 해당 방향에 있는 아이템을 뷰안으로 스크롤을 한다.
       * @see {@link /docs/examples/Methods target's example} page for detailed information
       * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
       * @param - Options for the `scrollIntoView` method. <ko>`scrollIntoView` 메서드의 옵션</ko>
       * @example
       * <p align="center">
       *  <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView1.png" height="200" />
       * </p>
       * <p align="center">
       *   <img src="https://naver.github.io/egjs-conveyer/img/scrollIntoView2.png" height="210" />
       * </p>
       */


      __proto.scrollIntoView = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        var item = this.findItem(target, options);

        if (!item) {
          return;
        }

        var duration = options.duration || 0;

        var nextScrollPos = this._getNextScrollPos(item, options);

        if (isString(target) && options.excludeStand && nextScrollPos === this._pos) {
          var selectedIndex = this._items.indexOf(item);

          if (selectedIndex === -1) {
            return;
          }

          var sibling = target === "start" || target === "prev" ? -1 : 1;
          item = this._items[selectedIndex + sibling];

          if (!item) {
            return;
          }

          nextScrollPos = this._getNextScrollPos(item, options);
        }

        this.scrollBy(nextScrollPos - this._pos, duration);
      };
      /**
       * Scrolls by the given position amount.
       * @ko 주어진 위치 양만큼 스크롤한다.
       * @param - Amount of position to scroll by. <ko>스크롤할 위치의 양.</ko>
       * @param - Duration to scroll by that position. <ko>해당 위치만큼 스크롤하는 시간</ko>
       */


      __proto.scrollBy = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this._axes.setBy({
          scroll: -pos
        }, duration);
      };
      /**
       * Scroll to the given position.
       * @ko 주어진 위치로 스크롤한다.
       * @param - Amount of position to scroll to. <ko>스크롤할 위치의 양.</ko>
       * @param - Duration to scroll to that position. <ko>해당 위치로 스크롤하는 시간</ko>
       */


      __proto.scrollTo = function (pos, duration) {
        if (duration === void 0) {
          duration = 0;
        }

        this._axes.setBy({
          scroll: this._pos - pos
        }, duration);
      };
      /**
       * Set the items directly to the Conveyer.
       * @ko Conveyer에 아이템들을 직접 설정한다.
       * @param - Items to set on Conveyer <ko>Conveyer에 설정할 아이템들</ko>
       */


      __proto.setItems = function (items) {
        this._items = items;
      };
      /**
       * Update the position and size information of items.
       * @ko 아이템들의 포지션, 사이즈 정보를 업데이트 한다.
       */


      __proto.updateItems = function () {
        var _this = this;

        var scrollAreaElement = this._scrollAreaElement;
        var itemSelector = this._options.itemSelector;
        var itemElements = [].slice.call(itemSelector ? scrollAreaElement.querySelectorAll(itemSelector) : scrollAreaElement.children);
        this.setItems(itemElements.map(function (el) {
          return _this._getItem(el);
        }));
      };
      /**
       * Update container size and scroll size.
       * @ko 컨테이너의 크기, 스크롤 사이즈를 업데이트 한다.
       */


      __proto.updateContainer = function () {
        var scrollAreaElement = this._scrollAreaElement;
        var horizontal = this._options.horizontal;
        var size = horizontal ? scrollAreaElement.clientWidth : scrollAreaElement.clientHeight;
        var scrollSize = horizontal ? scrollAreaElement.scrollWidth : scrollAreaElement.scrollHeight; // check decimal point

        if (IS_IE && scrollSize === size + 1) {
          var style = getComputedStyle(scrollAreaElement);
          var boxSizing = style.boxSizing;
          var borderSize = horizontal ? (parseFloat(style.borderLeftWidth) || 0) + (parseFloat(style.borderRightWidth) || 0) : (parseFloat(style.borderTopWidth) || 0) + (parseFloat(style.borderBottomWidth) || 0);
          var cssSize = parseFloat(horizontal ? style.width : style.height) || 0;
          var contentSize = cssSize - (boxSizing === "border-box" ? borderSize : 0); // 0 < 0.5 && 0.5 < 1

          if (size < contentSize && contentSize < size + 1) {
            scrollSize = size;
          }
        }

        this._size = size;
        this._scrollSize = scrollSize;

        this._refreshScroll();

        this._onScroll();
      };
      /**
       * If you use the autoInit option as false, you can initialize it directly through the init method.
       * @ko autoInit 옵션을 false로 사용하는 경우 직접 init 메서드를 통해 초기화 할 수 있다.
       */


      __proto.init = function () {
        var _this = this;

        if (this._axes) {
          return;
        }

        var scrollArea = this._scrollArea;
        var el;

        if (isString(scrollArea)) {
          el = document.querySelector(scrollArea);
        } else if (instanceOfElement(scrollArea)) {
          el = scrollArea;
        } else if ("value" in scrollArea || "current" in scrollArea) {
          el = scrollArea.value || scrollArea.current;
        }

        if (!el) {
          return;
        }

        this._scrollAreaElement = el;
        var isDrag = false;
        var scrollAreaElement = this._scrollAreaElement;
        var options = this._options;
        var axes = new Axes({
          scroll: {
            range: [-Infinity, Infinity]
          }
        }, {
          deceleration: 0.005,
          round: 1,
          nested: options.nested
        }, {
          scroll: 0
        });
        var isHold = false;
        axes.on({
          "hold": function (e) {
            isHold = true;
            isDrag = false;

            var nativeEvent = _this._getNativeEvent(e);

            if (!nativeEvent) {
              return;
            }

            if (options.preventDefault) {
              nativeEvent.preventDefault();
            }
          },
          "change": function (e) {
            var nativeEvent = _this._getNativeEvent(e);

            if (options.useSideWheel && _this._isMixedWheel(nativeEvent)) {
              return;
            }

            _this._isWheelScroll = !!nativeEvent && nativeEvent.type === "wheel";
            _this._isDragScroll = !!nativeEvent && !_this._isWheelScroll;
            _this._isAnimationScroll = !_this._isWheelScroll && !isHold;
            isDrag = true;
            var scroll = e.delta.scroll;

            if (options.horizontal) {
              scrollAreaElement.scrollLeft -= scroll;
            } else {
              scrollAreaElement.scrollTop -= scroll;
            }

            if (options.nested) {
              _this._checkNestedMove(nativeEvent);
            }
          },
          "release": function (e) {
            if (!isDrag) {
              e.setTo(__assign({}, e.depaPos), 0);
            }

            isHold = false;
            isDrag = false;
          }
        });
        this._axes = axes;

        if (options.useDrag) {
          axes.connect(options.horizontal ? ["scroll", ""] : ["", "scroll"], new PanInput(scrollAreaElement, {
            preventClickOnDrag: options.preventClickOnDrag,
            preventDefaultOnDrag: options.preventDefaultOnDrag,
            inputType: ["mouse"],
            touchAction: "auto"
          }));
        }

        if (options.useSideWheel) {
          axes.connect(options.horizontal ? ["scroll", ""] : ["", "scroll"], new WheelInput(scrollAreaElement, {
            useNormalized: false
          }));
        }

        scrollAreaElement.addEventListener("scroll", this._onScroll);
        window.addEventListener("resize", this.update);
        this.update();
      };
      /**
       * Releases the instnace and events.
       * @ko 인스턴스와 이벤트를 해제한다.
       */


      __proto.destroy = function () {
        var _a, _b;

        (_a = this._axes) === null || _a === void 0 ? void 0 : _a.destroy();
        this.unsubscribe();
        (_b = this._scrollAreaElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("scroll", this._onScroll);

        if (typeof window !== "undefined") {
          window.removeEventListener("resize", this.update);
        }

        this.off();
        this._axes = null;
      };

      __proto._refreshScroll = function () {
        var horizontal = this._options.horizontal;
        var scrollAreaElement = this._scrollAreaElement;
        this._pos = Math.min(this._scrollSize - this._size, horizontal ? scrollAreaElement.scrollLeft : scrollAreaElement.scrollTop);
      };

      __proto._getItem = function (element) {
        var horizontal = this._options.horizontal;
        return {
          element: element,
          pos: horizontal ? element.offsetLeft : element.offsetTop,
          size: horizontal ? element.offsetWidth : element.offsetHeight
        };
      };

      __proto._getNativeEvent = function (e) {
        var _a, _b;

        return ((_a = e === null || e === void 0 ? void 0 : e.inputEvent) === null || _a === void 0 ? void 0 : _a.srcEvent) ? (_b = e.inputEvent) === null || _b === void 0 ? void 0 : _b.srcEvent : e === null || e === void 0 ? void 0 : e.inputEvent;
      };

      __proto._getNextScrollPos = function (item, options) {
        var size = this._size;
        var scrollSize = this._scrollSize;
        var align = options.align || "start";
        var padding = options.offset || 0;
        var itemPos = item.pos;
        var itemSize = item.size;
        var scrollPos = 0;

        if (align === "start") {
          scrollPos = itemPos - padding;
        } else if (align === "end") {
          scrollPos = itemPos + itemSize - size + padding;
        } else if (align === "center") {
          scrollPos = itemPos + itemSize / 2 - size / 2 + padding;
        }

        scrollPos = Math.max(0, Math.min(scrollPos, scrollSize - size));
        return scrollPos;
      };

      __proto._isMixedWheel = function (nativeEvent) {
        return !!nativeEvent && (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.type) === "wheel" && (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.deltaX) && (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.deltaY);
      };

      __proto._checkNestedMove = function (nativeEvent) {
        if (this.isReachStart || this.isReachEnd) {
          nativeEvent.__childrenAxesAlreadyChanged = false;
        }
      };

      __proto._debounceScroll = function () {
        var _this = this;

        if (!this._scrollTimer) {
          /**
           * This event is fired when begin scroll.
           * @ko 스크롤이 시작하면 발생하는 이벤트이다.
           * @event Conveyer#beginScroll
           */
          this.trigger("beginScroll");
        }

        window.clearTimeout(this._scrollTimer);
        this._scrollTimer = window.setTimeout(function () {
          var isWheelScroll = _this._isWheelScroll;
          var isDragScroll = _this._isDragScroll;
          var isAnimationScroll = _this._isAnimationScroll;
          _this._scrollTimer = 0;
          /**
           * This event is fired when finish scroll.
           * @ko 스크롤이 끝나면 발생하는 이벤트이다.
           * @event Conveyer#finishScroll
           * @param {OnFinishScroll} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
           */

          _this.trigger("finishScroll", {
            isWheelScroll: isWheelScroll,
            isDragScroll: isDragScroll,
            isAnimationScroll: isAnimationScroll,
            isTrusted: isWheelScroll || isDragScroll || !isAnimationScroll
          });

          _this._isWheelScroll = false;
          _this._isDragScroll = false;
          _this._isAnimationScroll = false;
        }, this._options.scrollDebounce);
      };

      __decorate([Reactive("isReachStart")], Conveyer.prototype, "_isReachStart", void 0);

      __decorate([Reactive("isReachEnd")], Conveyer.prototype, "_isReachEnd", void 0);

      __decorate([Reactive("scrollPos")], Conveyer.prototype, "_pos", void 0);

      Conveyer = __decorate([ReactiveSubscribe], Conveyer);
      return Conveyer;
    }(Component);

    /**
     * egjs-conveyer
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */
    var CONVEYER_METHODS = ["update", "findElement", "findItem", "scrollBy", "scrollTo", "scrollIntoView", "setItems", "updateContainer", "updateItems", "init"];
    var CONVEYER_EVENTS = ["reachStart", "reachEnd", "leaveStart", "leaveEnd", "beginScroll", "finishScroll"];

    var REACTIVE_CONVEYER = {
      methods: CONVEYER_METHODS,
      events: CONVEYER_EVENTS,
      created: function (data) {
        return new Conveyer(data.container, __assign(__assign({}, data.props), {
          autoInit: false
        }));
      },
      init: function (instance, data) {
        if (data.props.autoInit !== false) {
          instance.init();
        }
      },
      on: function (instance, name, callback) {
        instance.on(name, callback);
      },
      off: function (instance, name, callback) {
        instance.off(name, callback);
      },
      destroy: function (instance) {
        instance.destroy();
      }
    };

    /**
     * egjs-conveyer
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */

    var modules = {
        __proto__: null,
        'default': Conveyer,
        CONVEYER_METHODS: CONVEYER_METHODS,
        CONVEYER_EVENTS: CONVEYER_EVENTS,
        REACTIVE_CONVEYER: REACTIVE_CONVEYER
    };

    /**
     * egjs-conveyer
     * Copyright (c) 2022-present NAVER Corp.
     * MIT license
     */

    for (var name in modules) {
      Conveyer[name] = modules[name];
    }

    return Conveyer;

})));
//# sourceMappingURL=conveyer.js.map