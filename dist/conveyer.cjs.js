/*
Copyright (c) 2022-present NAVER Corp.
name: @egjs/conveyer
license: MIT
author: NAVER Crop.
repository: https://github.com/naver/egjs-conveyer
version: 1.0.1
*/
'use strict';

var Axes = require('@egjs/axes');
var Component = require('@egjs/component');

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

var OBSERVERS_PATH = "__observers__";

var Observer =
/*#__PURE__*/
function () {
  function Observer(value) {
    this._emitter = new Component();
    this._current = value;
  }

  var __proto = Observer.prototype;
  Object.defineProperty(__proto, "current", {
    get: function () {
      return this._current;
    },
    set: function (value) {
      var isUpdate = value !== this._current;
      this._current = value;

      if (isUpdate) {
        this._emitter.trigger("update", value);
      }
    },
    enumerable: false,
    configurable: true
  });

  __proto.subscribe = function (callback) {
    this._emitter.on("update", callback);
  };

  __proto.unsubscribe = function (callback) {
    this._emitter.off("update", callback);
  };

  return Observer;
}();

function keys(obj) {
  return Object.keys(obj);
}
function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

function withReactiveMethods(ref, methods) {
  var obj = {};
  methods.forEach(function (name) {
    obj[name] = function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      var current = ref.current || ref.value;
      return current[name].apply(current, args);
    };
  });
  return obj;
}
function getObservers(instance) {
  if (!instance[OBSERVERS_PATH]) {
    instance[OBSERVERS_PATH] = {};
  }

  return instance[OBSERVERS_PATH];
}
function getObserver(instance, name, defaultValue) {
  var observers = getObservers(instance);

  if (!observers[name]) {
    observers[name] = new Observer(defaultValue);
  }

  return observers[name];
}
function Reactive(name) {
  return function (prototype, memberName) {
    var publicName = name || memberName;
    Object.defineProperty(prototype, memberName, {
      get: function () {
        return getObserver(this, publicName).current;
      },
      set: function (value) {
        getObserver(this, publicName, value).current = value;
      }
    });

    if (publicName !== memberName) {
      Object.defineProperty(prototype, publicName, {
        get: function () {
          return getObserver(this, publicName).current;
        }
      });
    }
  };
}
function ReactiveSubscribe(Constructor) {
  var prototype = Constructor.prototype;

  prototype["subscribe"] = function (name, callback) {
    if (!(name in this)) {
      return;
    }

    getObserver(this, name).subscribe(callback);
  };

  prototype["unsubscribe"] = function (name, callback) {
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

function withClassMethods(methods) {
  return function (prototype, memberName) {
    methods.forEach(function (name) {
      if (name in prototype) {
        return;
      }

      prototype[name] = function () {
        var _a;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var result = (_a = this[memberName])[name].apply(_a, args); // fix `this` type to return your own `class` instance to the instance using the decorator.


        if (result === this[memberName]) {
          return this;
        } else {
          return result;
        }
      };
    });
  };
}

/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
function isString(val) {
  return typeof val === "string";
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

    _this.items = [];
    _this.pos = 0;
    _this.size = 0;
    _this.scrollSize = 0;
    _this._scrollTimer = 0;
    _this._isDragScroll = false;
    _this._isAnimation = false;
    /**
     * Whether the scroll has reached the start.
     * @ko 스크롤이 시작에 닿았는지 여부.
     * @name Conveyer#isReachStart
     * @type {boolean}
     * @default false
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

    _this._isReachStart = false;
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
     * Updating containers and items.
     * @ko 컨테이너와 아이템들을 업데이트 한다.
     * @method
     */

    _this.update = function () {
      _this.updateItems();

      _this.updateContainer();
    };

    _this._onScroll = function (e) {
      if (e) {
        _this._debounceScroll();
      }

      _this._refreshScroll();

      var size = _this.size;
      var scrollSize = _this.scrollSize;
      var pos = _this.pos; // enter start

      if (pos <= 0 && _this.isReachStart !== true) {
        _this._isReachStart = true;
        /**
         * This event is fired when scroll reach start.
         * @ko 스크롤이 앞에 닿으면 발생하는 이벤트이다.
         * @event Conveyer#reachStart
         */

        _this.trigger("reachStart");
      } else if (pos > 0 && _this.isReachStart !== false) {
        _this._isReachStart = false;
        /**
         * This event is fired when scroll leave start.
         * @ko 스크롤이 앞에서 떠나면 발생하는 이벤트이다.
         * @event Conveyer#leaveStart
         */

        _this.trigger("leaveStart");
      } // enter end


      if (pos >= scrollSize - size && _this.isReachEnd !== true) {
        _this._isReachEnd = true;
        /**
         * This event is fired when scroll reach end.
         * @ko 스크롤이 끝에 닿으면 발생하는 이벤트이다.
         * @event Conveyer#reachEnd
         */

        _this.trigger("reachEnd");
      } else if (pos < scrollSize - size && _this.isReachEnd !== false) {
        _this._isReachEnd = false;
        /**
         * This event is fired when scroll leave end.
         * @ko 스크롤이 끝에서 떠나면 발생하는 이벤트이다.
         * @event Conveyer#leaveEnd
         */

        _this.trigger("leaveEnd");
      }
    };

    _this._onPreventClick = function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this._enableClick();
    };

    _this.options = __assign({
      horizontal: true,
      useDrag: true,
      autoInit: true,
      scrollDebounce: 100
    }, options);
    _this._scrollArea = scrollArea;

    if (_this.options.autoInit) {
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
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
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
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
   * </p>
   */


  __proto.findItem = function (target, options) {
    var _a;

    if (options === void 0) {
      options = {};
    }

    var pos = this.pos;
    var scrollSize = this.scrollSize;
    var size = this.size;
    var hitTest = (_a = options === null || options === void 0 ? void 0 : options.hitTest) !== null && _a !== void 0 ? _a : 1;

    var items = __spreadArray([], this.items, true);

    var length = items.length;
    var endPos = pos + size;
    var sibling = options.sibling;
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

      var selectedItems = __spreadArray([], items, true).reverse().filter(function (item) {
        var itemSize = item.size;
        var dist = item.pos - pos;
        var dist2 = dist + itemSize;
        return dist >= 0 || dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
      }).reverse();

      selectedItem = selectedItems[0] === startVirtualItem && selectedItems[1] || selectedItems[0];
    } else if (target === "end") {
      if (pos > scrollSize - size) {
        return null;
      }

      var selectedItems = items.filter(function (item) {
        var itemSize = item.size;
        var dist = item.pos + itemSize - endPos;
        var dist2 = dist - itemSize;
        return dist <= 0 || dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
      }).reverse();
      selectedItem = selectedItems[0] === endVirtualItem && selectedItems[1] || selectedItems[0];
    } else if (target === "prev") {
      selectedItem = items.filter(function (item) {
        var itemSize = item.size;
        var dist = item.pos + itemSize - pos;
        var dist2 = dist - itemSize;
        return dist <= 0 || dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
      }).reverse()[0];
    } else if (target === "next") {
      selectedItem = items.reverse().filter(function (item) {
        var itemSize = item.size;
        var dist = item.pos - endPos;
        var dist2 = dist + itemSize;
        return dist >= 0 || dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest);
      }).reverse()[0];
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
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
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

    if (isString(target) && options.excludeStand && nextScrollPos === this.pos) {
      var selectedIndex = this.items.indexOf(item);

      if (selectedIndex === -1) {
        return;
      }

      var sibling = target === "start" || target === "prev" ? -1 : 1;
      item = this.items[selectedIndex + sibling];

      if (!item) {
        return;
      }

      nextScrollPos = this._getNextScrollPos(item, options);
    }

    this.scrollBy(nextScrollPos - this.pos, duration);
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

    this.axes.setBy({
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

    this.axes.setBy({
      scroll: this.pos - pos
    }, duration);
  };
  /**
   * Set the items directly to the Conveyer.
   * @ko Conveyer에 아이템들을 직접 설정한다.
   * @param - Items to set on Conveyer <ko>Conveyer에 설정할 아이템들</ko>
   */


  __proto.setItems = function (items) {
    this.items = items;
  };
  /**
   * Update the position and size information of items.
   * @ko 아이템들의 포지션, 사이즈 정보를 업데이트 한다.
   */


  __proto.updateItems = function () {
    var _this = this;

    var scrollAreaElement = this.scrollAreaElement;
    var itemSelector = this.options.itemSelector;
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
    var scrollAreaElement = this.scrollAreaElement;
    var horizontal = this.options.horizontal;
    this.size = horizontal ? scrollAreaElement.clientWidth : scrollAreaElement.clientHeight;
    this.scrollSize = horizontal ? scrollAreaElement.scrollWidth : scrollAreaElement.scrollHeight;

    this._refreshScroll();

    this._onScroll();
  };
  /**
   * If you use the autoInit option as false, you can initialize it directly through the init method.
   * @ko autoInit 옵션을 false로 사용하는 경우 직접 init 메서드를 통해 초기화 할 수 있다.
   */


  __proto.init = function () {
    var _this = this;

    if (this.axes) {
      return;
    }

    var scrollArea = this._scrollArea;
    var el;

    if (isString(scrollArea)) {
      el = document.querySelector(scrollArea);
    } else if (scrollArea instanceof Element) {
      el = scrollArea;
    } else if ("value" in scrollArea || "current" in scrollArea) {
      el = scrollArea.value || scrollArea.current;
    }

    this.scrollAreaElement = el;
    var isDrag = false;
    var scrollAreaElement = this.scrollAreaElement;
    var axes = new Axes({
      scroll: {
        circular: true,
        range: [-1000, 1000]
      }
    }, {
      deceleration: 0.005,
      round: 1
    });
    var isHold = false;
    axes.on({
      "hold": function (e) {
        isHold = true;
        isDrag = false;
        var inputEvent = e.inputEvent.srcEvent;

        if (!inputEvent) {
          return;
        }

        var options = _this.options;

        if (options.preventDefault) {
          inputEvent.preventDefault();
        }

        if (options.preventClickOnDrag) {
          _this._disableClick();
        }
      },
      "change": function (e) {
        if (e.inputEvent && !isHold) {
          return;
        }

        _this._isDragScroll = !!e.inputEvent;
        _this._isAnimation = !!isHold;
        isDrag = true;
        var scroll = e.delta.scroll;

        if (_this.options.horizontal) {
          scrollAreaElement.scrollLeft -= scroll;
        } else {
          scrollAreaElement.scrollTop -= scroll;
        }
      },
      "release": function (e) {
        if (!isDrag) {
          e.setTo(__assign({}, e.depaPos), 0);

          _this._enableClick();
        }

        isDrag = false;
      }
    });
    this.axes = axes;

    if (this.options.useDrag) {
      axes.connect(this.options.horizontal ? "scroll" : ["", "scroll"], new Axes.PanInput(scrollAreaElement, {
        inputType: ["mouse"]
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

    (_a = this.axes) === null || _a === void 0 ? void 0 : _a.destroy();
    this.unsubscribe();
    (_b = this.scrollAreaElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("scroll", this._onScroll);
    window.removeEventListener("resize", this.update);
    this.off();
  };

  __proto._refreshScroll = function () {
    var horizontal = this.options.horizontal;
    var scrollAreaElement = this.scrollAreaElement;
    this.pos = horizontal ? scrollAreaElement.scrollLeft : scrollAreaElement.scrollTop;
  };

  __proto._getItem = function (element) {
    var horizontal = this.options.horizontal;
    return {
      element: element,
      pos: horizontal ? element.offsetLeft : element.offsetTop,
      size: horizontal ? element.offsetWidth : element.offsetHeight
    };
  };

  __proto._getNextScrollPos = function (item, options) {
    var size = this.size;
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

    return scrollPos;
  };

  __proto._enableClick = function () {
    window.removeEventListener("click", this._onPreventClick, true);
  };

  __proto._disableClick = function () {
    window.addEventListener("click", this._onPreventClick, true);
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
      _this._scrollTimer = 0;
      /**
       * This event is fired when finish scroll.
       * @ko 스크롤이 끝나면 발생하는 이벤트이다.
       * @event Conveyer#finishScroll
       * @param {OnFinishScroll} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
       */

      _this.trigger("finishScroll", {
        isDragScroll: _this._isDragScroll,
        isTrusted: _this._isDragScroll || !_this._isAnimation
      });

      _this._isDragScroll = false;
      _this._isAnimation = false;
    }, this.options.scrollDebounce);
  };

  __decorate([Reactive("isReachStart")], Conveyer.prototype, "_isReachStart", void 0);

  __decorate([Reactive("isReachEnd")], Conveyer.prototype, "_isReachEnd", void 0);

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
var CONVEYER_REACTIVE_STATE = {
  "isReachStart": false,
  "isReachEnd": false
};

var REACTIVE_CONVEYER = {
  state: CONVEYER_REACTIVE_STATE,
  methods: CONVEYER_METHODS,
  events: CONVEYER_EVENTS,
  instance: function (data) {
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
    CONVEYER_REACTIVE_STATE: CONVEYER_REACTIVE_STATE,
    REACTIVE_CONVEYER: REACTIVE_CONVEYER,
    withReactiveMethods: withReactiveMethods,
    getObservers: getObservers,
    getObserver: getObserver,
    Reactive: Reactive,
    ReactiveSubscribe: ReactiveSubscribe,
    Observer: Observer,
    withClassMethods: withClassMethods,
    keys: keys,
    camelize: camelize
};

/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */

for (var name in modules) {
  Conveyer[name] = modules[name];
}

module.exports = Conveyer;
//# sourceMappingURL=conveyer.cjs.js.map
