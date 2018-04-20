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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _breadcrumb = __webpack_require__(8);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_breadcrumb).default;
  }
});

__webpack_require__(2);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  name: 'antv-breadcrumb',
  props: {
    routes: [Object, Array],
    separator: {
      type: String,
      default: '/'
    }
  },
  data: function data() {
    return {
      name: 'vk-breadcrumb'
    };
  },

  computed: {
    routeObj: function routeObj() {
      if (this.routes) return this.routes;
      if (window && window.location) {
        var temp = [];
        var href = window.location;
        // get history in route history or window's history
        var pathArr = this.$route ? href.hash.split('#')[1] : href.pathname;

        pathArr.split('/').forEach(function (p, i) {
          if (p === '') {
            if (i === 0) temp.push('home');
          } else {
            temp.push(p);
          }
        });

        return temp;
      }
      console.warn('location does not support');
      return {};
    }
  },
  methods: {
    genItems: function genItems(item) {
      var isRouteName = typeof (item.name || item) === 'string';

      return this.$createElement('span', {
        staticClass: this.name + '-item'
      }, [isRouteName ? this.$createElement('span', { class: this.name + '-item-name' }, item.name || item) : item, this.$createElement('span', { class: this.name + '-separator' }, this.separator)]);
    }
  },
  render: function render(h) {
    var _this = this;

    var defaultChild = this.$slots.default || this.routeObj;
    var child = defaultChild.map(function (item) {
      return _this.genItems(item);
    });

    return h('div', { staticClass: this.name }, [child]);
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);