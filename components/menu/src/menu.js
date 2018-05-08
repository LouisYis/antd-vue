import { MenuMixin } from './menu-mixin';

export default {
  name: 'VntMenu',
  componentName: 'VntMenu',
  mixins: [MenuMixin],
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
      openedIndex: this.defaultOpenIndex ? this.defaultOpenIndex.slice(0) : [],
      activeIndex: undefined
    };
  },
  methods: {
    closeMenu(index) {
      const i = this.openedIndex.indexOf(index);

      if (i >= 0) {
        this.openedIndex.splice(i, 1);
      }
    },
    openMenu(index) {
      this.openedIndex.push(index);
    },
    handleSubmenuClick(submenu) {
      const { index } = submenu;
      const isOpen = this.openedIndex.indexOf(submenu.index);

      if (isOpen >= 0) {
        this.closeMenu(index);
      } else {
        this.openMenu(index);
      }

      this.$emit('open-change', submenu, this.openedIndex);
    },
    handleItemClick(item) {
      const { index } = item;

      this.activeIndex = index;
      this.$emit('on-select', item, index);
    }
  },
  mounted() {
    this.$on('submenu-clicked', this.handleSubmenuClick);
    this.$on('item-clicked', this.handleItemClick);
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
