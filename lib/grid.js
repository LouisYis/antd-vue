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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(2);

__webpack_require__(20);

var _row = __webpack_require__(22);

var _row2 = _interopRequireDefault(_row);

var _column = __webpack_require__(23);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = { Row: _row2.default, Column: _column2.default };

exports.default = Grid;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var componentCls = 'antv-row';

exports.default = {
  name: 'antv-row',
  props: {
    gutter: Number,
    type: String,
    align: String,
    justify: String
  },
  computed: {
    propsStyle: function propsStyle() {
      var gutter = this.gutter / 2;
      return {
        marginLeft: '-' + gutter + 'px',
        marginRight: '-' + gutter + 'px'
      };
    },
    typeClass: function typeClass() {
      return this.type ? componentCls + '-' + this.type : componentCls;
    },
    flexAttr: function flexAttr() {
      var classArr = [];
      if (this.type) {
        if (this.align) {
          classArr.push('is-flex-' + this.align);
        }
        if (this.justify) {
          classArr.push('is-flex-' + this.justify);
        }
      }

      return classArr;
    }
  },
  render: function render(h) {
    var _this = this;

    var data = {
      class: [this.typeClass, this.flexAttr],
      style: this.propsStyle
    };

    var columns = this.$slots.default.map(function (item) {
      var tempItem = item;

      if (_this.gutter && item.tempItem) {
        tempItem.data.style = {
          paddingLeft: _this.gutter / 2 + 'px',
          paddingRight: _this.gutter / 2 + 'px'
        };
      }

      return tempItem;
    });

    return h('div', data, columns);
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = 'antv-col';

exports.default = {
  name: 'antv-column',
  props: {
    span: Number,
    offset: Number,
    push: Number,
    pull: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    sizeClass: function sizeClass() {
      var _this = this,
          _Object$assign;

      var span = this.span,
          offset = this.offset,
          push = this.push,
          pull = this.pull;


      var sizeClasses = {};
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
        var _extends2;

        var sizeProp = _this[size];
        var sizeObj = {};
        if (typeof sizeProp === 'number') {
          sizeObj.span = sizeProp;
        } else if ((typeof sizeProp === 'undefined' ? 'undefined' : _typeof(sizeProp)) === 'object') {
          sizeObj = sizeProp || {};
        }

        sizeClasses = _extends({}, sizeClasses, (_extends2 = {}, _defineProperty(_extends2, prefix + '-' + size + '-' + sizeObj.span, sizeObj.span !== undefined), _defineProperty(_extends2, prefix + '-' + size + '-pull-' + sizeObj.pull, sizeObj.pull !== undefined), _defineProperty(_extends2, prefix + '-' + size + '-push-' + sizeObj.push, sizeObj.push !== undefined), _defineProperty(_extends2, prefix + '-' + size + '-offset-' + sizeObj.offset, sizeObj.offset !== undefined), _extends2));
      });

      var classes = Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, prefix + '-' + span, span !== undefined), _defineProperty(_Object$assign, prefix + '-pull-' + pull, pull !== undefined), _defineProperty(_Object$assign, prefix + '-push-' + push, push !== undefined), _defineProperty(_Object$assign, prefix + '-offset-' + offset, offset !== undefined), _Object$assign), sizeClasses);

      return classes;
    }
  },
  render: function render(h) {
    return h('div', { class: this.sizeClass }, [this.$slots.default]);
  }
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });