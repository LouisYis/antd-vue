export default {
  name: 'VntRow',
  componentName: 'VntRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    align: {
      type: String,
      default: 'top'
    },
    gutter: {
      type: [Number, Object],
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    },
    type: String
  },
  render(h) {
    const typeCls = this.type ? `vnt-row-${this.type}` : 'vnt-row';
    const style = {
      marginLeft: `-${this.gutter / 2}px`
    };
    style.marginRight = style.marginLeft;

    return h(this.tag, {
      class: [
        typeCls,
        `is-justify-${this.justify}`,
        `is-align-${this.align}`
      ],
      style
    }, [this.$slots.default]);
  }
};
