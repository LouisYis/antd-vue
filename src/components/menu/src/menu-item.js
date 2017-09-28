export default {
  name: 'antv-menu-item',
  props: {
    keyVal: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false,
      key: null,
      indent: {}
    }
  },
  computed: {
    activeClass() {
      return this.active ? 'active' : ''
    }
  },
  methods: {
    handleClick(e) {
      if (this.active) return

      this.$emit('menu-item-click', this.keyVal)
    }
  },
  render(h) {
    const data = {
      staticClass: 'vk-menu-item',
      class: this.activeClass,
      style: this.indent,
      on: {
        click: this.handleClick
      }
    }
    return h('div', data, this.$slots.default)
  }
}
