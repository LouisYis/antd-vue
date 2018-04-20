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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dropdown = __webpack_require__(16);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dropdown).default;
  }
});

__webpack_require__(2);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var prefix = 'antv';

exports.default = {
  name: 'antv-dropdown',
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    position: {
      type: String,
      default: 'bottomleft'
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    this.setChildrenPrefix(this.$children);
  },

  computed: {
    transitionName: function transitionName() {
      // return 'slide-in'
      return this.position.indexOf('top') > 0 ? 'slide-down' : 'slide-up';
    }
  },
  methods: {
    selectItem: function selectItem() {
      this.active = false;
    },
    handleMouseover: function handleMouseover() {
      this.active = true;
    },
    handleMouseleave: function handleMouseleave() {
      this.active = false;
    },
    handleClick: function handleClick() {
      this.active = !this.active;
    },
    setChildrenPrefix: function setChildrenPrefix(elm) {
      var _this = this;

      elm.forEach(function (e) {
        e.prefixCls = prefix + '-dropdown-menu';
        if (e.$children.length > 0) {
          _this.setChildrenPrefix(e.$children);
        }
      });
    },
    genButton: function genButton() {
      this.$slots.button[0].data.on = {
        mouseenter: this.handleMouseover
      };
      return this.$slots.button;
    }
  },
  render: function render(h) {
    var data = {
      class: ['is-' + this.position, prefix + '-dropdown-list'],
      props: {
        onSelect: this.selectItem
      },
      directives: [{
        name: 'show',
        value: this.active
      }]
    };

    var list = h('transition', {
      props: {
        name: this.transitionName
      }
    }, [h('div', data, this.$slots.default)]);

    return h('div', {
      class: [prefix + '-dropdown'],
      on: this.trigger === 'hover' ? {
        mouseleave: this.handleMouseleave
      } : { click: this.handleClick }
    }, [this.genButton(), list]);
  }
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });