import menuMixin from './menu-mixin';

export default {
  name: 'VntItemGroup',
  mixins: [menuMixin],
  props: {
    title: String,
  },
  data() {
    return {
      prefixCls: null,
    };
  },
  methods: {
    genTitle(h) {
      return h('div', {
        class: [`${this.prefixCls}-item-group-title`],
      }, [this.title]);
    },
    genList(h) {
      return h('div', {
        class: [`${this.prefixCls}-item-group-list`],
      }, [this.$slots.default]);
    },
  },
  render(h) {
    return h('div', {
      class: [`${this.prefixCls}-item-group`],
    }, [
      this.genTitle(h),
      this.genList(h),
    ]);
  },
};
