const prefix = 'antv';

export default {
  name: `${prefix}-menu-item`,
  props: {
    keyVal: {
      type: String,
      required: true,
    },
    onMouseEnter: {
      type: Function,
      default: () => undefined,
    },
    onMouseLeave: {
      type: Function,
      default: () => undefined,
    },
    disabled: false,
    click: {
      type: Function,
      default: () => undefined,
    },
  },
  data() {
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
      active: false,
    };
  },
  computed: {
    isSelected() {
      return this.selectedKeys.indexOf(this.keyVal) !== -1;
    },
    indentStyle() {
      const { indent } = this;
      if (this.mode === 'inline') {
        return { paddingLeft: `${indent}px` };
      }
      return false;
    },
    classes() {
      return {
        [this.getSelectedCls]: this.isSelected,
        [this.getDisabledCls]: this.disabled,
      };
    },
    getSelectedCls() {
      return this.isSelected ? `${this.prefixCls}-item-selected` : '';
    },
    getDisabledCls() {
      return `${this.prefixCls}-item-disabled`;
    },
  },
  watch: {
    isSelected(val) {
      this.active = val;
    },
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      const info = {
        key: this.keyVal,
        item: this,
        domEvent: e,
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
    handleMouseLeave(e) {
      const parentMenu = this.$parent;
      parentMenu.menuItemInstance = this;
      parentMenu.menuItemMouseLeaveFn = () => {
        if (this.active) {
          this.onItemHover({
            key: this.keyVal,
            item: this,
            hover: false,
            domEvent: e,
            trigger: 'mouseleave',
          });
        }
      };
      parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
      this.onMouseLeave({
        key: this.keyVal,
        domEvent: e,
      });
    },
    handleMouseEnter(e) {
      const parentMenu = this.$parent;
      this.clearMenuItemMouseLeaveTimer();
      if (parentMenu.subMenuInstance) {
        parentMenu.subMenuInstance.clearSubMenuTimers();
      }
      this.onItemHover({
        key: this.keyVal,
        item: this,
        hover: true,
        domEvent: e,
        trigger: 'mouseenter',
      });
      this.onMouseEnter({
        key: this.keyVal,
        domEvent: e,
      });
    },
    clearMenuItemMouseLeaveTimer() {
      const parentMenu = this.$parent;
      if (parentMenu.menuItemMouseLeaveTimer) {
        clearTimeout(parentMenu.menuItemMouseLeaveTimer);
        parentMenu.menuItemMouseLeaveTimer = null;
        parentMenu.menuItemMouseLeaveFn = null;
      }
    },
  },
  render(h) {
    const data = {
      class: [`${this.prefixCls}-item`, this.classes],
      style: this.indentStyle,
      on: {
        click: this.handleClick,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave,
      },
    };
    return h('div', data, this.$slots.default);
  },
};
