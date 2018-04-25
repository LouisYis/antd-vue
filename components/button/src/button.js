export default {
  name: 'VntButton',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    type: String,
    shape: String,
    size: String,
    loading: [Boolean, Number]
  },
  render(h) {
    const classes = [this.type, this.shape, this.size].map(prop => {
      if (prop) {
        return `vnt-btn-${prop}`;
      }
      return '';
    }).concat('vnt-btn');

    return h(this.tag, { class: classes }, [this.$slots.default]);
  },
};
