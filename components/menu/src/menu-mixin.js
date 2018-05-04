export default {
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
    }
  }
};
