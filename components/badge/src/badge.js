export default {
  name: 'antv-badge',
  props: {
    color: String,
    backgroundcolor: String,
    type: {
      type: String,
      default: 'primary',
    },
    shape: String,
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      name: 'vk-badge',
    };
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.backgroundcolor,
        color: this.color,
      };
    },
    classes() {
      return {
        [`is-${this.type}`]: this.type,
        [`is-${this.size}`]: this.size,
        [`is-${this.shape}`]: this.shape,
      };
    },
  },
  render(h) {
    const data = {
      staticClass: this.name,
      class: this.classes,
      style: this.styles,
    };
    return h('span', data, this.$slots.default);
  },
};
