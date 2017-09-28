export default {
  name: 'antv-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    shape: String,
    size: String,
    loading: [Boolean, Number],
    method: Function
  },
  data() {
    return {
      name: 'vk-button'
    }
  },
  computed: {
    classes() {
      const classes = [];
      [this.type, this.shape, this.size].forEach(style => {
        if (style) {
          classes.push(`is-${style}`)
        }
      })
      return classes
    }
  },
  methods: {
    handleClick() {
      this.method && this.method()
    }
  },
  render(h) {
    const data = {
      staticClass: this.name,
      class: this.classes,
      on: {
        click: this.handleClick
      }
    }

    return h('button', data, [ this.$slots.default ])
  }
}
