export default {
  name: 'antv-dropdown',
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    position: {
      type: String,
      default: 'bottomleft'
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    transitionName() {
      // return 'slide-in'
      return ~this.position.indexOf('top') ? 'slide-down' : 'slide-up'
    }
  },
  methods: {
    selectItem(elm, key) {
      this.active = false
    },
    handleMouseover(e) {
      this.active = true
    },
    handleMouseleave() {
      this.active = false
    },
    handleClick() {
      this.active = !this.active
    }
  },
  render(h) {
    const data = {
      staticClass: 'vk-dropdown-list is-float vk-menu',
      class: [`is-${this.position}`],
      props: {
        onSelect: this.selectItem
      },
      directives: [{
        name: 'show',
        value: this.active
      }]
    }

    const list = h('transition', {
      props: {
        name: this.transitionName
      }
    }, [h('div', data, this.$slots.default)])

    return h('div', {
      staticClass: 'vk-dropdown',
      on: this.trigger === 'hover' ? {
        mouseover: this.handleMouseover,
        mouseleave: this.handleMouseleave
      } : { click: this.handleClick }
    }, [ this.$slots.button, list ])
  }
}
