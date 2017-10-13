const prefix = 'antv'

export default {
  name: `${prefix}-menu-item`,
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
      indent: {},
      onClick: () => void 0,
      prefixCls: 'antv'
    }
  },
  computed: {
    activeClass() {
      return this.active ? `${this.prefixCls}-menu-item-selected` : ''
    }
  },
  methods: {
    handleClick(e) {
      e.stopPropagation()
      if (this.active) return

      this.onClick(this)
    }
  },
  render(h) {
    const data = {
      class: [`${this.prefixCls}-menu-item`, this.activeClass],
      style: this.indent,
      on: {
        click: this.handleClick
      }
    }
    return h('div', data, this.$slots.default)
  }
}
