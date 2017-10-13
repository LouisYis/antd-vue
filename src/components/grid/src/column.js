const prefix = 'antv-col'

export default {
  name: 'antv-column',
  props: {
    span: Number,
    offset: Number,
    push: Number,
    pull: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    sizeClass() {
      const { span, offset, push, pull } = this

      let sizeClasses = {};
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        const sizeProp = this[size]
        let sizeObj = {}
        if (typeof sizeProp === 'number') {
          sizeObj.span = sizeProp
        } else if (typeof sizeProp === 'object') {
          sizeObj = sizeProp || {}
        }

        sizeClasses = {
          ...sizeClasses,
          [`${prefix}-${size}-${sizeObj.span}`]: sizeObj.span !== undefined,
          [`${prefix}-${size}-pull-${sizeObj.pull}`]: sizeObj.pull !== undefined,
          [`${prefix}-${size}-push-${sizeObj.push}`]: sizeObj.push !== undefined,
          [`${prefix}-${size}-offset-${sizeObj.offset}`]: sizeObj.offset !== undefined
        }
      })

      const classes = Object.assign({
        [`${prefix}-${span}`]: span !== undefined,
        [`${prefix}-pull-${pull}`]: pull !== undefined,
        [`${prefix}-push-${push}`]: push !== undefined,
        [`${prefix}-offset-${offset}`]: offset !== undefined
      }, sizeClasses)
      console.log(classes)
      return classes
    }
  },
  render(h) {
    return h('div', { class: this.sizeClass }, [ this.$slots.default ])
  }
}
