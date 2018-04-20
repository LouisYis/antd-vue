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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _pagination = __webpack_require__(45);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pagination).default;
  }
});

__webpack_require__(2);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _genButton = __webpack_require__(46);

var _genButton2 = _interopRequireDefault(_genButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  name: 'vk-pagination',
  mixins: [_genButton2.default],
  props: {
    defaultCurrent: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    onChange: {
      type: Function,
      default: function _default() {}
    },
    showSizeChange: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: function _default() {
        return ['10', '20', '30', '40'];
      }
    },
    onSizeChange: {
      type: Function,
      default: function _default() {}
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      name: 'vk-pagination',
      value: this.current
    };
  },

  computed: {
    maxLength: function maxLength() {
      return Math.ceil(this.total / this.pageSize);
    },
    items: function items() {
      var buttonLen = 5;
      // return all item when maxLength less then 5
      if (this.maxLength <= buttonLen) return this.range(1, this.maxLength);

      var itemArr = [];
      var sideLen = Math.floor(buttonLen / 2);
      var start = this.value - sideLen;
      var end = this.value + sideLen;

      // set default
      // if start <= 0 set end 5
      // if end > maxlength set start maxlength - button length
      end = start <= 0 ? buttonLen : end;
      start = end >= this.maxLength ? this.maxLength - buttonLen + 1 : start;
      itemArr = [].concat(_toConsumableArray(this.range(start, end)));
      // add fast jump button
      if (this.value >= buttonLen) itemArr.unshift('prev ' + buttonLen);
      if (this.value <= this.maxLength - buttonLen + 1) itemArr.push('next ' + buttonLen);
      // add frist & last button
      if (this.value > sideLen + 1) itemArr.unshift(1);
      if (this.value < this.maxLength - sideLen) itemArr.push(this.maxLength);
      return itemArr;
    }
  },
  created: function created() {
    this.value = this.defaultCurrent;
  },

  methods: {
    prev: function prev(e) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.value -= size;
      this.$emit('input', this.value);
    },
    next: function next(e) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.value += size;
      this.$emit('input', this.value);
    },
    range: function range(from, to) {
      var range = [];
      var tempfrom = from > 0 ? from : 1;
      var tempto = to >= this.maxLength ? this.maxLength : to;

      for (var i = tempfrom; i <= tempto; i += 1) {
        range.push(i);
      }

      return range;
    }
  },
  render: function render(h) {
    var child = [this.genIcon(h, 'icon-arrow-left', this.value === 1, this.prev),
    // this.genItem(h, [1]),
    this.genItem(h, this.items),
    // this.genItem(h, [this.maxLength]),
    this.genIcon(h, 'icon-arrow-right', this.value === this.maxLength, this.next)];
    return h('ul', {
      staticClass: 'vk-pagination'
    }, child);
  }
};

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  methods: {
    genIcon: function genIcon(h, iconName, disabled, fn) {
      return h('li', {
        staticClass: this.name + '-item',
        class: {
          'is-disabled': disabled
        },
        on: {
          click: disabled ? function () {} : fn
        }
      }, [h('a', [h('i', { class: [iconName] })])]);
    },
    genItem: function genItem(h, item) {
      var _this = this;

      return item.map(function (i) {
        if (typeof i === 'number') {
          return h('li', {
            staticClass: _this.name + '-item',
            class: {
              active: _this.value === i
            },
            on: {
              click: function click(e) {
                e.preventDefault();
                _this.value = i;
                _this.$emit('input', i);
              }
            }
          }, [h('a', [i])]);
        }
        var jumpBtn = i.split(' ');
        return h('li', {
          staticClass: _this.name + '-jump-btn is-' + jumpBtn[0],
          on: {
            click: function click(e) {
              e.preventDefault();
              _this['' + jumpBtn[0]](e, Number(jumpBtn[1]));
            }
          }
        }, [h('a', '...')]);
      });
    }
  }
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });