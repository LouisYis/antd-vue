var antd =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _button = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

__webpack_require__(2);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var name = 'antv-button';
exports.default = {
  name: name,
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    shape: String,
    size: String,
    loading: [Boolean, Number]
  },
  data: function data() {
    return {
      name: 'vk-button'
    };
  },

  computed: {
    classes: function classes() {
      var classes = [];
      [this.type, this.shape, this.size].forEach(function (style) {
        if (style) {
          classes.push('is-' + style);
        }
      });
      return classes;
    }
  },
  render: function render(h) {
    var data = {
      staticClass: name,
      class: this.classes
    };

    return h('button', data, [this.$slots.default]);
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(2);

__webpack_require__(35);

var _modal = __webpack_require__(37);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _overlayable = __webpack_require__(38);

var _overlayable2 = _interopRequireDefault(_overlayable);

var _genModal = __webpack_require__(41);

var _genModal2 = _interopRequireDefault(_genModal);

var _transitionHook = __webpack_require__(43);

var _transitionHook2 = _interopRequireDefault(_transitionHook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set component name variables
var componentName = 'antv-modal';

exports.default = {
  name: 'antv-modal',
  mixins: [_genModal2.default, _transitionHook2.default, _overlayable2.default],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    closeable: {
      type: Boolean,
      default: false
    },
    onConfirm: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onCancel: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    width: [String, Number],
    footer: [String, Object],
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    styles: [String, Object, Array],
    wrapClassName: String,
    afterClose: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    mousePosition: Object,
    // container: Object,
    zIndex: Number
  },
  data: function data() {
    return {
      show: false,
      modalShow: false,
      modalOrigin: null
    };
  },

  computed: {
    modalStyle: function modalStyle() {
      return {
        transformOrigin: this.modalOrigin,
        width: this.width
      };
    }
  },
  methods: {
    handleCancel: function handleCancel() {
      this.modalShow = false;
      this.onCancel();
    },
    handleConfirm: function handleConfirm() {
      this.modalShow = false;
      this.onConfirm();
    },
    handleClose: function handleClose() {
      this.modalShow = false;
      this.afterClose();
    }
  },
  render: function render(h) {
    var modal = h('div', {
      class: [componentName + '-wrap', this.wrapClassName],
      style: {
        zIndex: this.zIndex
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    }, [this.genModal(h)]);

    return h('div', [modal, this.genOverlay()]);
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(39);

exports.default = {
  props: {
    hideOverlay: Boolean,
    hasOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      overlayShow: null,
      scrollBarWidth: undefined,
      bodyOverflowing: undefined
    };
  },
  created: function created() {
    this.checkScrollBar();
  },

  watch: {
    overlayShow: function overlayShow(val) {
      if (val) {
        this.setScrollBar();
      } else {
        this.resetScrollBar();
      }
    }
  },
  methods: {
    getScrollBarSize: function getScrollBarSize(refresh) {
      var cache = void 0;

      if (refresh || this.scrollBarWidth === undefined) {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        var outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);
        document.body.appendChild(outer);

        var containerWidth = inner.offsetWidth;
        outerStyle.overflow = 'scroll';
        var hasScrollWidth = inner.offsetWidth;

        if (containerWidth === hasScrollWidth) {
          hasScrollWidth = outer.clientWidth;
        }

        document.body.removeChild(outer);
        cache = containerWidth - hasScrollWidth;
      }

      return cache;
    },
    checkScrollBar: function checkScrollBar() {
      var fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        var docRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = docRect.right - Math.abs(docRect.left);
      }
      this.bodyOverflowing = document.body.clientWidth > fullWindowWidth;
      if (this.bodyOverflowing) {
        this.scrollBarWidth = this.getScrollBarSize();
      }
    },
    setScrollBar: function setScrollBar() {
      if (this.scrollBarWidth) {
        document.body.paddingRight = this.scrollBarWidth;
        document.body.overflow = 'hidden';
      }
    },
    resetScrollBar: function resetScrollBar() {
      document.body.paddingRight = '';
      document.body.overflow = '';
    },
    genOverlay: function genOverlay() {
      if (!this.hasOverlay || this.hideOverlay) return null;

      var overlay = this.$createElement('div', {
        class: 'antv-overlay',
        directives: [{
          name: 'show',
          value: this.overlayShow
        }]
      });
      return this.$createElement('transition', {
        props: {
          name: 'fade'
        }
      }, [overlay]);
    }
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _clickOutside = __webpack_require__(42);

var _clickOutside2 = _interopRequireDefault(_clickOutside);

var _button = __webpack_require__(11);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// set component name variables
var name = 'antv-modal';

exports.default = {
  components: _defineProperty({}, _button2.default.name, _button2.default),
  directives: {
    clickoutside: _clickOutside2.default
  },
  methods: {
    genTitle: function genTitle(h) {
      if (this.$slots.title) return this.$slots.title;

      return h('div', {
        class: name + '-header'
      }, [this.title ? h('div', {
        class: name + '-title'
      }, [this.title]) : '']);
    },
    genFooter: function genFooter(h) {
      if (this.$slots.footer) return this.$slots.footer;

      return h('div', {
        class: name + '-footer'
      }, [this.genButton(h, 'cancel', this.handleCancel), this.genButton(h, 'confirm', this.handleConfirm)]);
    },
    genButton: function genButton(h, type, fn) {
      return h('antv-button', {
        props: {
          type: type === 'confirm' ? 'primary' : 'ghost-default'
        },
        nativeOn: {
          click: fn
        }
      }, [type === 'confirm' ? this.confirmText : this.cancelText]);
    },
    genBody: function genBody(h) {
      return h('div', {
        class: name + '-body'
      }, this.$slots.default);
    },
    genClose: function genClose(h) {
      return this.closeable ? h('button', {
        class: name + '-close',
        on: {
          click: this.handleClose
        }
      }, [h('span', { class: name + '-close-x' })]) : '';
    },
    genModal: function genModal(h) {
      var modal = h('div', {
        class: '' + name,
        ref: 'modal',
        style: [this.modalStyle, this.styles],
        directives: [{
          name: 'show',
          value: this.modalShow
        }, {
          name: 'clickoutside',
          value: this.modalShow,
          expression: 'handleClose'
        }]
      }, [h('div', {
        class: name + '-content',
        style: [this.styles, { width: this.width }]
      }, [this.genClose(h), this.genTitle(h), this.genBody(h), this.genFooter(h)])]);

      return h('transition', {
        props: {
          name: 'zoom'
        },
        on: {
          afterLeave: this.afterLeave,
          beforeEnter: this.beforeEnter
        }
      }, [modal]);
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var clickoutsideContext = '$$clickoutsideContext';

var elVisible = void 0;

exports.default = {
  bind: function bind(el, binding, vnode) {
    elVisible = vnode.context.show;

    var documentHandler = function documentHandler(e) {
      if (vnode.context && !el.contains(e.target)) {
        if (elVisible && vnode.context.maskClosable) {
          vnode.context[el[clickoutsideContext].methodName]();
        }

        if (vnode.context.maskClosable !== undefined) return;

        // component is not modal if it havn't maskClosable attribute,
        // run methods auto
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };

    el[clickoutsideContext] = {
      documentHandler: documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click'
    };

    document.addEventListener(el[clickoutsideContext].arg, documentHandler);
  },
  update: function update(el, binding, vnode) {
    setTimeout(function () {
      elVisible = vnode.context.show;
    }, 0);

    el[clickoutsideContext].methodName = binding.expression;
  },
  unbind: function unbind(el) {
    document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };

  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;

  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

exports.default = {
  data: function data() {
    return {
      modalOffset: null
    };
  },

  watch: {
    value: function value(val) {
      if (val) this.show = val;
    },
    show: function show(val) {
      this.$emit('input', val);
      this.modalShow = val;
    },
    modalShow: function modalShow(val) {
      this.overlayShow = val;
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      if (!this.mousePosition) return;
      // get el's offset everytime
      // set el's display to get clientRect
      el.style.display = 'block';
      el.style.opacity = 0;

      // run offset method only component first show
      if (!this.modalOffset) this.modalOffset = offset(el);
      this.modalOrigin = this.mousePosition.x - this.modalOffset.left + 'px ' + (this.mousePosition.y - this.modalOffset.top) + 'px';

      el.style.opacity = 1;
    },
    afterLeave: function afterLeave() {
      this.show = false;
    }
  }
};

/***/ })
/******/ ]);