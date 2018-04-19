export default {
  name: 'antv-divider',
  props: {
    className: '',
  },
  data() {
    return {
      prefixCls: null,
    };
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-item-divider`,
        this.className,
      ];
    },
  },
  render(h) {
    return h('div', {
      class: this.classes,
    });
  },
};
