export default {
  name: 'antv-row',
  props: {
    gutter: Number,
    type: String,
    align: String,
    justify: String
  },
  computed: {
    propsStyle() {
      const gutter = this.gutter / 2
      if (gutter) {
        return {
          marginLeft: `-${gutter}px`,
          marginRight: `-${gutter}px`
        }
      }
    },
    typeClass() {
      return this.type ? `vk-row-${this.type}` : 'vk-row'
    },
    flexAttr() {
      if (this.type) {
        let classArr = []
        if (this.align) {
          classArr.push(`is-flex-${this.align}`)
        }
        if (this.justify) {
          classArr.push(`is-flex-${this.justify}`)
        }

        return classArr
      }
    }
  },
  render(h) {
    const data = {
      class: [this.typeClass, this.flexAttr],
      style: this.propsStyle
    }

    const columns = this.$slots.default.map(item => {
      item.data.style = {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`
      }
      return item
    })

    return h('div', data, columns)
  }
}
