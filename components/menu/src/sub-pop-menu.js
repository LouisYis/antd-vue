import menuMixin from './menu-mixin';

export default {
  name: 'antv-sub-pop-menu',
  mixins: [menuMixin],
  data() {
    return {
      mode: null,
      openTransitionName: null,
      indent: null,
      prefixCls: null,
    };
  },
  watch: {
    indent() {
      this.$children.forEach((el) => {
        el.indent = this.indent;
      });
    },
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}`,
        `${this.prefixCls}-sub`,
        `${this.prefixCls}-${this.mode}`,
      ];
    },
  },
  render(h) {
    return h('transition', {
      props: {
        name: this.openTransitionName,
      },
    }, [h('div', {
      class: [this.classes],
    }, [this.$slots.default])]);
  },
};
