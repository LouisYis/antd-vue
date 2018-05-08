export const MenuItemMixin = {
  inject: ['rootMenu'],
  computed: {
    indent() {
      if (this.rootMenu.mode !== 'inline') return {};
      const indent = this.rootMenu.inlineIndent;

      let parent = this.$parent;
      let padding = indent;
      while (parent && parent.$options.componentName !== 'VntMenu') {
        if (parent.$options.componentName === 'VntSubMenu') {
          padding += indent;
        }
        parent = parent.$parent;
      }

      return { paddingLeft: `${padding}px` };
    },
    indexPath() {
      const path = [this.index];
      let parent = this.$parent;
      while (parent.$options.componentName !== 'VntMenu') {
        if (parent.index) path.unshift(parent.index);
        parent = parent.$parent;
      }

      return path;
    },
    parentMenu() {
      let parent = this.$parent;

      while (parent && ['VntSubMenu', 'VntMenu'].indexOf(parent.$options.componentName) < 0) {
        parent = parent.$parent;
      }

      return parent;
    }
  }
};

export const MenuMixin = {
  data() {
    return {
      items: {},
      subMenus: {}
    };
  },
  methods: {
    addItem(item) {
      this.$set(this.items, item.index, item);
    },
    deleteItem(item) {
      this.$delete(this.items, item.index);
    },
    addSubMenu(item) {
      this.$set(this.subMenus, item.index, item);
    },
    deleteSubMenu(item) {
      this.$delete(this.subMenus, item.index);
    }
  }
};
