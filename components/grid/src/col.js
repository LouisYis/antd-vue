export default {
  name: 'VntCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    offset: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    span: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'VntRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter / 2 : 0;
    }
  },
  render(h) {
    const classes = [];
    const styles = {};

    if (this.gutter) {
      styles.paddingLeft = this.gutter;
      styles.paddingRight = styles.paddingLeft;
    }

    ['offset', 'order', 'push', 'pull', 'span'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classes.push(prop === 'span' ? `vnt-col-${this[prop]}` : `vnt-col-${prop}-${this[prop]}`);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let sizeProp = {};
      if (typeof this[size] === 'number') {
        sizeProp.span = this[size];
      } else if (typeof this[size] === 'object') {
        sizeProp = this[size];
      }

      Object.keys(sizeProp).forEach(prop => {
        classes.push(prop === 'span' ? `vnt-col-${size}-${sizeProp[prop]}` : `vnt-col-${size}-${prop}-${sizeProp[prop]}`);
      });
    });

    return h(this.tag, {
      class: classes,
      style: styles
    }, this.$slots.default);
  }
};
