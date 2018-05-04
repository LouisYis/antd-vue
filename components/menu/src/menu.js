export default {
  name: 'VntMenu',
  componentName: 'VntMenu',
  props: {
    defaultOpenIndex: Array,
    defaultSelectedIndex: Array,
    forceSubMenuRender: Boolean,
    inlineCollapsed: Boolean,
    inlineIndent: {
      type: Number,
      default: 24
    },
    mode: {
      type: String,
      validator(value) {
        return ['vertical', 'vertical-right', 'horizontal', 'inline'].indexOf(value) > 0;
      },
      default: 'vertical'
    },
    multiple: Boolean,
    openKeys: Array,
    selectable: Boolean,
    selectedKeys: Array,
    styles: [String, Array, Object],
    subMenuCloseDelay: {
      type: Number,
      default: 0.1
    },
    subMenuOpenDelay: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      validator(value) {
        return ['dark', 'light'].indexOf(value) > 0;
      },
      default: 'light'
    },
    onClick: {
      type: Function,
      default: () => undefined
    },
    onDeselect: {
      type: Function,
      default: () => undefined
    },
    onOpenChange: {
      type: Function,
      default: () => undefined
    },
    onSelect: {
      type: Function,
      default: () => undefined
    },
    prefixCls: {
      type: String,
      default: 'vnt-menu'
    }
  },
  provide() {
    return {
      rootMenu: this
    };
  },
  data() {
    return {
      openedMenus: this.defaultOpenIndex ? this.defaultOpenIndex.slice(0) : []
    };
  },
  render() {
    const { prefixCls, mode, theme } = this;
    const menuClass = [
      prefixCls,
      `${prefixCls}-${mode}`,
      `${prefixCls}-${theme}`,
      `${prefixCls}-root`
    ];

    return (
      <ul class={ menuClass }>
        { this.$slots.default }
      </ul>
    );
  }
};
