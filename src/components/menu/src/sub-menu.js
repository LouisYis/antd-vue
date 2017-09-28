export default {
  name: 'antv-sub-menu',
  props: {
    title: String,
    keyVal: String
  },
  data() {
    return {
      name: 'vk-sub-menu',
      key: null,
      type: null,
      active: false,
      isOpen: false,
      isSelected: false,
      timer: null,
      indent: {}
    }
  },
  watch: {
    // change parent sub menu when state change
    active(newVal, oVal) {
      if (newVal) {
        this.$parent.active = newVal
      }
    },
    isSelected(newVal) {
      this.$parent.isSelected = newVal
    },
    isOpen(newVal) {
      if (this.type !== 'inline') {
        if (!this.isSelected) this.active = newVal
      }
    }
  },
  computed: {
    classes() {
      return {
        'is-open': this.isOpen,
        'active': this.active
      }
    },
    subClasses() {
      return {
        'is-float': this.type !== 'inline'
      }
    },
    transition() {
      return this.type === 'inline' ? 'inline' : 'zoom-big'
    }
  },
  methods: {
    toggleOpen(event) {
      event.stopPropagation()
      this.isOpen = !this.isOpen
    },
    onMouseover() {
      this.active = true
      this.isOpen = true
    },
    onMouseout(e) {
      this.isOpen = false
    }
  },
  render(h) {
    const data = {
      staticClass: this.name,
      class: this.classes
    }

    if (this.type !== 'inline') {
      data.on = {
        mouseleave: this.onMouseout,
        mouseover: this.onMouseover
      }
    }

    // render title
    const title = h('div', {
      staticClass: `${this.name}-title`,
      style: this.indent,
      domProps: {
        innerHTML: this.title
      },
      on: {
        click: this.toggleOpen
      }
    })

    // render list
    const list = h('transition', {
      props: {
        name: this.transition
      }
    }, [ h('ul', {
      staticClass: 'vk-menu',
      class: this.subClasses,
      directives: [{
        name: 'show',
        value: this.isOpen
      }]
    }, [ this.$slots.default ]) ])

    return h('div', data, [
      title,
      list
    ])
  }
}
