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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 11 */,
/* 12 */,
/* 13 */,
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(2);

__webpack_require__(25);

var _menu = __webpack_require__(27);

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(29);

var _menuItem2 = _interopRequireDefault(_menuItem);

var _subMenu = __webpack_require__(30);

var _subMenu2 = _interopRequireDefault(_subMenu);

var _divider = __webpack_require__(32);

var _divider2 = _interopRequireDefault(_divider);

var _itemGroup = __webpack_require__(33);

var _itemGroup2 = _interopRequireDefault(_itemGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.MenuItem = _menuItem2.default;
_menu2.default.SubMenu = _subMenu2.default;
_menu2.default.Divider = _divider2.default;
_menu2.default.ItemGroup = _itemGroup2.default;

exports.default = _menu2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _menuMixin = __webpack_require__(28);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'antv-menu',
  mixins: [_menuMixin2.default],
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    className: String,
    defaultSelectKeys: Array,
    defaultOpenKeys: Array,
    onSelect: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    // onDeselect: Function,
    onClick: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onOpenChange: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    rootStyle: [String, Array],
    inlineIndent: {
      type: Number,
      default: 16
    },
    multiple: {
      type: Boolean,
      default: false
    },
    inlineCollapsed: Boolean,
    selectable: {
      type: Boolean,
      default: true
    },
    openTransitionName: String,
    closeSubMenuOnMouseLeave: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    openSubMenuOnMouseEnter: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    }
  },
  data: function data() {
    return {
      init: false,
      menuItem: [],
      subMenu: [],
      prefixCls: 'antv-menu',
      flatItemArr: [],
      openKeys: []
    };
  },

  computed: {
    classes: function classes() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, this.getModeCls, this.mode), _defineProperty(_ref, this.getThemeCls, this.theme), _defineProperty(_ref, this.className, this.className), _ref), this.getRootCls];
    },
    getModeCls: function getModeCls() {
      return this.prefixCls + '-' + this.mode;
    },
    getThemeCls: function getThemeCls() {
      return this.prefixCls + '-' + this.theme;
    },
    getRootCls: function getRootCls() {
      return this.prefixCls + '-root';
    },
    getTransitionName: function getTransitionName() {
      if (!this.openTransitionName) {
        switch (this.mode) {
          case 'inline':
            return 'collapse';
          case 'horizontal':
            return 'slide-up';
          case 'vertical':
            return 'zoom-big';
          default:
            return '';
        }
      } else {
        return this.openTransitionName;
      }
    }
  },
  watch: {
    // loop children & set child data
    // when selected or open sub menu
    selectedKeys: function selectedKeys() {
      this.loopChildProps();
    },
    openKeys: function openKeys(val) {
      this.loopChildProps();
      this.onOpenChange(val);
    },
    inlineIndent: function inlineIndent(val) {
      this.setChildIndent(val);
    }
  },
  mounted: function mounted() {
    this.flatItemArr = this.getFlatItemArray(this.$children);
    this.setDefaultData();
    this.loopChildProps();
  },

  methods: {
    setDefaultData: function setDefaultData() {
      this.setDefaultOpenKey();
      this.setDefaultSelectKey();
      this.setChildIndent(this.inlineIndent);
    },
    setDefaultOpenKey: function setDefaultOpenKey() {
      this.openKeys = this.defaultOpenKeys || [];
    },
    setDefaultSelectKey: function setDefaultSelectKey() {
      if (this.defaultSelectKeys) {
        this.selectedKeys = this.multiple ? this.defaultSelectKeys : [this.defaultSelectKeys[0]];
      }
    },

    // select item methods
    handleSelect: function handleSelect(selectedInfo) {
      if (this.selectable) {
        var selectedKey = selectedInfo.key;

        if (this.multiple) {
          this.selectedKeys.push(selectedKey);
        } else {
          this.selectedKeys = [selectedKey];
        }
      }

      this.onSelect(_extends({}, selectedInfo, {
        selectedKeys: this.selectedKeys
      }));
    },

    // deselect methods
    handleDeselect: function handleDeselect(selectedInfo) {
      if (this.selectable) {
        var selectedKey = selectedInfo.key;
        var index = this.selectedKeys.indexOf(selectedKey);

        if (index !== -1) {
          this.selectedKeys.splice(index, 1);
        }

        this.onDeselect(selectedInfo);
      }
    },

    // open change handler
    // all submenu open will call this methods
    handleOpenChange: function handleOpenChange(item) {
      var _this = this;

      var handleSingle = function handleSingle(e) {
        var opened = false;
        if (e.open) {
          opened = _this.openKeys.indexOf(e.key) === -1;
          if (opened) {
            _this.openKeys.push(e.key);
          }
        } else {
          var index = _this.openKeys.indexOf(e.key);
          opened = index !== -1;
          if (opened) {
            _this.openKeys.splice(index, 1);
          }
        }
      };

      if (Array.isArray(item)) {
        item.forEach(handleSingle);
      } else {
        handleSingle(item);
      }
    },

    // open change handler
    // all menu item hover will call this methods
    handleItemHover: function handleItemHover(e) {
      var item = e.item;
      var mode = this.mode,
          closeSubMenuOnMouseLeave = this.closeSubMenuOnMouseLeave;
      var _e$openChanges = e.openChanges,
          openChanges = _e$openChanges === undefined ? [] : _e$openChanges;


      if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubmenu) {
        openChanges = openChanges.concat({
          key: item.keyVal,
          item: item,
          originalEvent: e,
          open: e.hover
        });
      }
      if (openChanges.length) {
        this.handleOpenChange(openChanges);
      }
    },
    getFlatItemArray: function getFlatItemArray(children) {
      var childArr = [];
      function loopChildren(elm) {
        if (elm) {
          elm.forEach(function (e) {
            childArr.push(e);
            if (e.$children.length) loopChildren(e.$children, e.key);
          });
        }
      }

      loopChildren(children);
      return childArr;
    },
    setChildrenProps: function setChildrenProps(child) {
      var childPorps = {
        theme: this.theme,
        mode: this.getChildMode(child.key),
        multiple: this.multiple,
        selectedKeys: this.selectedKeys,
        openKeys: this.openKeys,
        itemSelect: this.handleSelect,
        itemDeselect: this.handleDeselect,
        onItemHover: this.handleItemHover,
        menuOpenChange: this.handleOpenChange,
        prefixCls: this.prefixCls,
        // indent: this.inlineIndent,
        openTransitionName: this.getTransitionName,
        openSubMenuOnMouseEnter: this.checkSubMenuDefaultMouseEvent(this.openSubMenuOnMouseEnter),
        closeSubMenuOnMouseLeave: this.checkSubMenuDefaultMouseEvent(this.closeSubMenuOnMouseLeave)
      };
      Object.assign(child, childPorps);
    },
    checkSubMenuDefaultMouseEvent: function checkSubMenuDefaultMouseEvent(defaultVal) {
      if (typeof defaultVal === 'undefined') {
        return this.mode !== 'inline';
      }
      return false;
    },
    getChildMode: function getChildMode(key) {
      if (this.mode === 'horizontal') {
        var isRootChild = key.split('.').length === 1;
        return isRootChild ? this.mode : 'vertical';
      }
      return this.mode;
    },
    loopChildProps: function loopChildProps() {
      var _this2 = this;

      this.flatItemArr.forEach(function (item) {
        _this2.setChildrenProps(item);
      });
    },
    setChildIndent: function setChildIndent(indent) {
      this.$children.forEach(function (el) {
        el.indent = indent;
      });
    }
  },
  render: function render(h) {
    var data = {
      class: ['' + this.prefixCls, this.prefixCls + '-root', this.classes]
    };

    return h('div', data, this.$slots.default);
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  data: function data() {
    return {
      selectedKeys: [],
      // timer
      menuInstance: null,
      subMenuTitleLeaveTimer: null,
      subMenuTitleLeaveFn: null,
      subMenuLeaveTimer: null,
      subMenuLeaveFn: null,
      menuItemMouseLeaveTimer: null,
      menuItemMouseLeaveFn: null
    };
  },

  computed: {
    isSelected: function isSelected() {
      var selectedKeys = this.selectedKeys;

      var isSelected = this.$children.find(function (item) {
        return selectedKeys.indexOf(item.keyVal) !== -1 || item.isSelected;
      });
      return isSelected;
    }
  },
  methods: {
    clearSubMenuTimers: function clearSubMenuTimers() {
      this.clearSubMenuLeaveTimer();
      this.clearSubMenuTitleLeaveTimer();
    },
    clearSubMenuTitleLeaveTimer: function clearSubMenuTitleLeaveTimer() {
      var parentMenu = this.$parent;
      if (parentMenu.subMenuTitleLeaveTimer) {
        clearTimeout(parentMenu.subMenuTitleLeaveTimer);
        parentMenu.subMenuTitleLeaveTimer = null;
        parentMenu.subMenuTitleLeaveFn = null;
      }
    },
    clearSubMenuLeaveTimer: function clearSubMenuLeaveTimer() {
      var parentMenu = this.$parent;
      if (parentMenu.subMenuLeaveTimer) {
        clearTimeout(parentMenu.subMenuLeaveTimer);
        parentMenu.subMenuLeaveTimer = null;
        parentMenu.subMenuLeaveFn = null;
      }
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = 'antv';

exports.default = {
  name: prefix + '-menu-item',
  props: {
    keyVal: {
      type: String,
      required: true
    },
    onMouseEnter: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onMouseLeave: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    disabled: false,
    click: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    }
  },
  data: function data() {
    return {
      theme: null,
      mode: null,
      multiple: null,
      selectedKeys: [],
      indent: null,
      itemSelect: null,
      itemDeselect: null,
      onItemHover: null,
      prefixCls: 'antv',
      active: false
    };
  },

  computed: {
    isSelected: function isSelected() {
      return this.selectedKeys.indexOf(this.keyVal) !== -1;
    },
    indentStyle: function indentStyle() {
      var indent = this.indent;

      if (this.mode === 'inline') {
        return { paddingLeft: indent + 'px' };
      }
      return false;
    },
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, this.getSelectedCls, this.isSelected), _defineProperty(_ref, this.getDisabledCls, this.disabled), _ref;
    },
    getSelectedCls: function getSelectedCls() {
      return this.isSelected ? this.prefixCls + '-item-selected' : '';
    },
    getDisabledCls: function getDisabledCls() {
      return this.prefixCls + '-item-disabled';
    }
  },
  watch: {
    isSelected: function isSelected(val) {
      this.active = val;
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      e.stopPropagation();
      var info = {
        key: this.keyVal,
        item: this,
        domEvent: e
      };
      this.onClick(info);

      if (this.multiple) {
        if (this.isSelected) {
          this.itemDeselect(info);
        } else {
          this.itemSelect(info);
        }
      } else if (!this.isSelected) {
        this.itemSelect(info);
      }
    },
    handleMouseLeave: function handleMouseLeave(e) {
      var _this = this;

      var parentMenu = this.$parent;
      parentMenu.menuItemInstance = this;
      parentMenu.menuItemMouseLeaveFn = function () {
        if (_this.active) {
          _this.onItemHover({
            key: _this.keyVal,
            item: _this,
            hover: false,
            domEvent: e,
            trigger: 'mouseleave'
          });
        }
      };
      parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
      this.onMouseLeave({
        key: this.keyVal,
        domEvent: e
      });
    },
    handleMouseEnter: function handleMouseEnter(e) {
      var parentMenu = this.$parent;
      this.clearMenuItemMouseLeaveTimer();
      if (parentMenu.subMenuInstance) {
        parentMenu.subMenuInstance.clearSubMenuTimers();
      }
      this.onItemHover({
        key: this.keyVal,
        item: this,
        hover: true,
        domEvent: e,
        trigger: 'mouseenter'
      });
      this.onMouseEnter({
        key: this.keyVal,
        domEvent: e
      });
    },
    clearMenuItemMouseLeaveTimer: function clearMenuItemMouseLeaveTimer() {
      var parentMenu = this.$parent;
      if (parentMenu.menuItemMouseLeaveTimer) {
        clearTimeout(parentMenu.menuItemMouseLeaveTimer);
        parentMenu.menuItemMouseLeaveTimer = null;
        parentMenu.menuItemMouseLeaveFn = null;
      }
    }
  },
  render: function render(h) {
    var data = {
      class: [this.prefixCls + '-item', this.classes],
      style: this.indentStyle,
      on: {
        click: this.handleClick,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      }
    };
    return h('div', data, this.$slots.default);
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _menuMixin = __webpack_require__(28);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

var _subPopMenu = __webpack_require__(31);

var _subPopMenu2 = _interopRequireDefault(_subPopMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'antv-sub-menu',
  components: {
    PopMenu: _subPopMenu2.default
  },
  mixins: [_menuMixin2.default],
  props: {
    title: String,
    keyVal: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    className: String,
    onMouseLeave: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onMouseEnter: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onTitleClick: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onTitleMouseEnter: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    onTitleMouseLeave: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    }
  },
  data: function data() {
    return {
      openKeys: [],
      menuOpenChange: null,
      onItemHover: null,
      multiple: null,
      mode: null,
      closeSubMenuOnMouseLeave: true,
      openSubMenuOnMouseEnter: true,
      indent: null,
      prefixCls: 'antv',
      isSubmenu: 1
    };
  },

  computed: {
    isOpen: function isOpen() {
      return this.openKeys.indexOf(this.keyVal) !== -1;
    },
    classes: function classes() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, this.getOpenCls, this.isOpen), _defineProperty(_ref, this.getSelectCls, this.isSelected), _defineProperty(_ref, this.getModeCls, this.mode), _defineProperty(_ref, this.getThemeCls, this.theme), _defineProperty(_ref, this.className, this.className), _ref), [this.prefixCls + '-submenu']];
    },
    getModeCls: function getModeCls() {
      return this.prefixCls + '-submenu-' + this.mode;
    },
    getOpenCls: function getOpenCls() {
      return this.prefixCls + '-submenu-open';
    },
    getSelectCls: function getSelectCls() {
      return this.prefixCls + '-submenu-selected';
    },
    titleIndent: function titleIndent() {
      if (this.mode === 'inline') {
        return { paddingLeft: this.indent + 'px' };
      }
      return false;
    }
  },
  watch: {
    mode: function mode(val) {
      if (val === 'inline') {
        this.closeSubMenuOnMouseLeave = false;
        this.openSubMenuOnMouseEnter = false;
      }
    },
    indent: function indent() {
      var _this = this;

      this.$children.forEach(function (el) {
        el.indent = _this.indent * 2;
      });
    },
    selectedKeys: function selectedKeys(val) {
      this.setChildSelectedKeys(val);
    }
  },
  methods: {
    setChildSelectedKeys: function setChildSelectedKeys(val) {
      this.$children[0].selectedKeys = val;
    },
    handleMouseEnter: function handleMouseEnter(e) {
      this.clearSubMenuLeaveTimer();
      this.MouseEnter({
        key: this.keyVal,
        domEvent: e
      });
    },
    handleMouseLeave: function handleMouseLeave(e) {
      var _this2 = this;

      var parentMenu = this.$parent;
      parentMenu.menuInstance = this;
      parentMenu.submenuLeaveFn = function () {
        if (_this2.isOpen && _this2.closeSubMenuOnMouseLeave) {
          _this2.onItemHover({
            key: _this2.keyVal,
            item: _this2,
            hover: false,
            trigger: 'mouseleave',
            openChanges: [{
              key: _this2.keyVal,
              item: _this2,
              trigger: 'mouseleave',
              open: false
            }]
          });
        }
        // trigger mouseleave
        _this2.onMouseLeave({
          key: _this2.keyVal,
          domEvent: e
        });
      };
      parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.submenuLeaveFn, 100);
    },
    handleTitleClick: function handleTitleClick(e) {
      this.onTitleClick({
        key: this.keyVal,
        domEvent: e
      });
      if (this.openSubMenuOnMouseEnter) {
        return;
      }
      this.triggerOpenChange(!this.isOpen, 'click');
    },
    handleTitleMouseEnter: function handleTitleMouseEnter(e) {
      var parentMenu = this.$parent;
      this.clearSubMenuTitleLeaveTimer();
      if (parentMenu.menuInstance) {
        parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer();
      }

      var openChanges = [];
      if (this.openSubMenuOnMouseEnter) {
        openChanges.push({
          key: this.keyVal,
          item: this,
          trigger: 'mouseenter',
          open: true
        });
      }
      this.onItemHover({
        key: this.keyVal,
        item: this,
        hover: true,
        trigger: 'mouseenter',
        openChanges: openChanges
      });

      this.onTitleMouseEnter({
        key: this.keyVal,
        domEvent: e
      });
    },
    handleTitleMouseLeave: function handleTitleMouseLeave(e) {
      var _this3 = this;

      e.stopPropagation();

      var parentMenu = this.$parent;
      parentMenu.menuInstance = this;
      parentMenu.subMenuTitleLeaveFn = function () {
        if (_this3.mode === 'inline' && _this3.isOpen) {
          _this3.onItemHover({
            key: _this3.keyVal,
            item: _this3,
            hover: false,
            trigger: 'mouseleave'
          });
        }

        _this3.onTitleMouseLeave({
          key: _this3.keyVal,
          domEvent: e
        });
      };
      parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
    },
    triggerOpenChange: function triggerOpenChange(open, type) {
      this.menuOpenChange({
        key: this.keyVal,
        item: this,
        trigger: type,
        open: open
      });
    }
  },
  render: function render(h) {
    var mouseEvent = {};
    var titleMouseEvent = {};

    if (!this.disabled) {
      mouseEvent = {
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      };
      titleMouseEvent = {
        click: this.handleTitleClick,
        mouseenter: this.handleTitleMouseEnter,
        mouseleave: this.handleTitleMouseLeave
      };
    }
    // render title
    var title = h('div', {
      class: [this.prefixCls + '-submenu-title'],
      style: this.titleIndent,
      domProps: {
        innerHTML: this.title
      },
      on: _extends({}, titleMouseEvent)
    });

    var data = {
      class: [this.classes],
      on: _extends({}, mouseEvent)
    };

    // render list
    var list = h('PopMenu', {
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, [this.$slots.default]);

    return h('div', data, [title, list]);
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menuMixin = __webpack_require__(28);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'antv-sub-pop-menu',
  mixins: [_menuMixin2.default],
  data: function data() {
    return {
      mode: null,
      openTransitionName: null,
      indent: null,
      prefixCls: null
    };
  },

  watch: {
    indent: function indent() {
      var _this = this;

      this.$children.forEach(function (el) {
        el.indent = _this.indent;
      });
    }
  },
  computed: {
    classes: function classes() {
      return ['' + this.prefixCls, this.prefixCls + '-sub', this.prefixCls + '-' + this.mode];
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: this.openTransitionName
      }
    }, [h('div', {
      class: [this.classes]
    }, [this.$slots.default])]);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  name: 'antv-divider',
  props: {
    className: ''
  },
  data: function data() {
    return {
      prefixCls: null
    };
  },

  computed: {
    classes: function classes() {
      return [this.prefixCls + '-item-divider', this.className];
    }
  },
  render: function render(h) {
    return h('div', {
      class: this.classes
    });
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menuMixin = __webpack_require__(28);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'antv-item-group',
  mixins: [_menuMixin2.default],
  props: {
    title: String
  },
  data: function data() {
    return {
      prefixCls: null
    };
  },

  methods: {
    genTitle: function genTitle(h) {
      return h('div', {
        class: [this.prefixCls + '-item-group-title']
      }, [this.title]);
    },
    genList: function genList(h) {
      return h('div', {
        class: [this.prefixCls + '-item-group-list']
      }, [this.$slots.default]);
    }
  },
  render: function render(h) {
    return h('div', {
      class: [this.prefixCls + '-item-group']
    }, [this.genTitle(h), this.genList(h)]);
  }
};

/***/ })
/******/ ]);