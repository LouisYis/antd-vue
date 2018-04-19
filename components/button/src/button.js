const name = 'antv-button';
export default {
  name,
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    shape: String,
    size: String,
    loading: [Boolean, Number],
  },
  data() {
    return {
      name: 'vk-button',
    };
  },
  computed: {
    classes() {
      const classes = [];
      [this.type, this.shape, this.size].forEach((style) => {
        if (style) {
          classes.push(`is-${style}`);
        }
      });
      return classes;
    },
  },
  render(h) {
    const data = {
      staticClass: name,
      class: this.classes,
    };

    return h('button', data, [this.$slots.default]);
  },
};
