import menuMixin from './menu-mixin';
import PopMenu from './sub-pop-menu';

export default {
  name: 'antv-sub-menu',
  components: {
    PopMenu,
  },
  mixins: [menuMixin],
  props: {
    title: String,
    keyVal: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    className: String,
    onMouseLeave: {
      type: Function,
      default: () => undefined,
    },
    onMouseEnter: {
      type: Function,
      default: () => undefined,
    },
    onTitleClick: {
      type: Function,
      default: () => undefined,
    },
    onTitleMouseEnter: {
      type: Function,
      default: () => undefined,
    },
    onTitleMouseLeave: {
      type: Function,
      default: () => undefined,
    },
  },
  data() {
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
      isSubmenu: 1,
    };
  },
  computed: {
    isOpen() {
      return this.openKeys.indexOf(this.keyVal) !== -1;
    },
    classes() {
      return [{
        [this.getOpenCls]: this.isOpen,
        [this.getSelectCls]: this.isSelected,
        [this.getModeCls]: this.mode,
        [this.getThemeCls]: this.theme,
        [this.className]: this.className,
      }, [
        `${this.prefixCls}-submenu`,
      ]];
    },
    getModeCls() {
      return `${this.prefixCls}-submenu-${this.mode}`;
    },
    getOpenCls() {
      return `${this.prefixCls}-submenu-open`;
    },
    getSelectCls() {
      return `${this.prefixCls}-submenu-selected`;
    },
    titleIndent() {
      if (this.mode === 'inline') {
        return { paddingLeft: `${this.indent}px` };
      }
      return false;
    },
  },
  watch: {
    mode(val) {
      if (val === 'inline') {
        this.closeSubMenuOnMouseLeave = false;
        this.openSubMenuOnMouseEnter = false;
      }
    },
    indent() {
      this.$children.forEach((el) => {
        el.indent = this.indent * 2;
      });
    },
    selectedKeys(val) {
      this.setChildSelectedKeys(val);
    },
  },
  methods: {
    setChildSelectedKeys(val) {
      this.$children[0].selectedKeys = val;
    },
    handleMouseEnter(e) {
      this.clearSubMenuLeaveTimer();
      this.MouseEnter({
        key: this.keyVal,
        domEvent: e,
      });
    },
    handleMouseLeave(e) {
      const parentMenu = this.$parent;
      parentMenu.menuInstance = this;
      parentMenu.submenuLeaveFn = () => {
        if (this.isOpen && this.closeSubMenuOnMouseLeave) {
          this.onItemHover({
            key: this.keyVal,
            item: this,
            hover: false,
            trigger: 'mouseleave',
            openChanges: [{
              key: this.keyVal,
              item: this,
              trigger: 'mouseleave',
              open: false,
            }],
          });
        }
        // trigger mouseleave
        this.onMouseLeave({
          key: this.keyVal,
          domEvent: e,
        });
      };
      parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.submenuLeaveFn, 100);
    },
    handleTitleClick(e) {
      this.onTitleClick({
        key: this.keyVal,
        domEvent: e,
      });
      if (this.openSubMenuOnMouseEnter) {
        return;
      }
      this.triggerOpenChange(!this.isOpen, 'click');
    },
    handleTitleMouseEnter(e) {
      const parentMenu = this.$parent;
      this.clearSubMenuTitleLeaveTimer();
      if (parentMenu.menuInstance) {
        parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer();
      }

      const openChanges = [];
      if (this.openSubMenuOnMouseEnter) {
        openChanges.push({
          key: this.keyVal,
          item: this,
          trigger: 'mouseenter',
          open: true,
        });
      }
      this.onItemHover({
        key: this.keyVal,
        item: this,
        hover: true,
        trigger: 'mouseenter',
        openChanges,
      });

      this.onTitleMouseEnter({
        key: this.keyVal,
        domEvent: e,
      });
    },
    handleTitleMouseLeave(e) {
      e.stopPropagation();

      const parentMenu = this.$parent;
      parentMenu.menuInstance = this;
      parentMenu.subMenuTitleLeaveFn = () => {
        if (this.mode === 'inline' && this.isOpen) {
          this.onItemHover({
            key: this.keyVal,
            item: this,
            hover: false,
            trigger: 'mouseleave',
          });
        }

        this.onTitleMouseLeave({
          key: this.keyVal,
          domEvent: e,
        });
      };
      parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
    },
    triggerOpenChange(open, type) {
      this.menuOpenChange({
        key: this.keyVal,
        item: this,
        trigger: type,
        open,
      });
    },
  },
  render(h) {
    let mouseEvent = {};
    let titleMouseEvent = {};

    if (!this.disabled) {
      mouseEvent = {
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave,
      };
      titleMouseEvent = {
        click: this.handleTitleClick,
        mouseenter: this.handleTitleMouseEnter,
        mouseleave: this.handleTitleMouseLeave,
      };
    }
    // render title
    const title = h('div', {
      class: [`${this.prefixCls}-submenu-title`],
      style: this.titleIndent,
      domProps: {
        innerHTML: this.title,
      },
      on: {
        ...titleMouseEvent,
      },
    });

    const data = {
      class: [
        this.classes,
      ],
      on: {
        ...mouseEvent,
      },
    };

    // render list
    const list = h('PopMenu', {
      directives: [{
        name: 'show',
        value: this.isOpen,
      }],
    }, [this.$slots.default]);

    return h('div', data, [
      title,
      list,
    ]);
  },
};
