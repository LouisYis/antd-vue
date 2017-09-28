export default {
  name: 'antv-menu',
  props: {
    type: {
      type: String,
      default: 'vertical'
    },
    defaultSelect: String,
    onSelect: Function,
    inlineIndent: {
      type: Number,
      default: 16
    },
    autoClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'vk-menu',
      init: false,
      menuItem: [],
      subMenu: [],
      currentMenu: null
    }
  },
  computed: {
    classes() {
      return [
        `is-${this.type}`
      ]
    }
  },
  mounted() {
    this.initMenuChild(this.$children)

    // set default select when mounted
    this.handleClick(this.defaultSelect).then(() => {
      this.init = true
    })
  },
  methods: {
    handleClick(key) {
      let promises = []
      // clear all sub menu status when clicked
      this.subMenu.forEach(e => {
        e.active = false
        e.isSelected = false
        if (this.type !== 'inline' || this.autoClose) e.isOpen = false
        return Promise.resolve()
      })

      // clear menu item status & set selected
      return Promise.all(promises).then(() => {
        this.menuItem.forEach((e, i) => {
          if (e.keyVal === key) {
            this.selectItem(e)

            // callback when select item
            this.onSelect && this.onSelect(e, key)
          } else {
            e.active = false
          }
        })
      })
    },
    selectItem(elm) {
      elm.$parent.active = true
      elm.$parent.isSelected = true
      elm.active = true
    },
    initMenuChild(elm, pos) {
      // init default setting
      // loop child & set key or other style
      elm && elm.forEach((e, i) => {
        e.key = pos ? `${pos}.${i}` : `${i}`
        if (this.type === 'inline') this.setMenuItemStyle(e)

        if (e.$children.length > 0) {
          e.type = this.type
          this.subMenu.push(e)
          this.initMenuChild(e.$children, e.key)
        } else {
          // set item's key
          e.$on('menu-item-click', this.handleClick)
          this.menuItem.push(e)
        }
      })
    },
    // set item indent
    setMenuItemStyle(elm) {
      const pos = elm.key.split('.').length
      elm.indent = {
        paddingLeft: `${pos * this.inlineIndent}px`
      }
    }
  },
  render(h) {
    const data = {
      staticClass: this.name,
      class: this.classes
    }

    return h('div', data, this.$slots.default)
  }
}
