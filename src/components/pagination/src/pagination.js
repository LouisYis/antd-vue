import genItem from './gen-button'

export default {
  name: 'vk-pagination',
  mixins: [genItem],
  props: {
    defaultCurrent: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    showSizeChange: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: () => ['10', '20', '30', '40']
    },
    onSizeChange: {
      type: Function,
      default: () => {}
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'vk-pagination',
      value: this.current
    }
  },
  computed: {
    maxLength() {
      return Math.ceil(this.total / this.pageSize)
    },
    items() {
      const buttonLen = 5
      // return all item when maxLength less then 5
      if (this.maxLength <= buttonLen) return this.range(1, this.maxLength)

      let itemArr = []
      const sideLen = Math.floor(buttonLen / 2)
      let start = this.value - sideLen
      let end = this.value + sideLen

      // set default
      // if start <= 0 set end 5
      // if end > maxlength set start maxlength - button length
      end = start <= 0 ? buttonLen : end
      start = end >= this.maxLength ? this.maxLength - buttonLen + 1 : start
      itemArr = [...this.range(start, end)]
      // add fast jump button
      if (this.value >= buttonLen) itemArr.unshift(`prev ${buttonLen}`)
      if (this.value <= this.maxLength - buttonLen + 1) itemArr.push(`next ${buttonLen}`)
      // add frist & last button
      if (this.value > sideLen + 1) itemArr.unshift(1)
      if (this.value < this.maxLength - sideLen) itemArr.push(this.maxLength)
      return itemArr
    }
  },
  created() {
    this.value = this.defaultCurrent
  },
  methods: {
    prev(e, size = 1) {
      this.value -= size
      this.$emit('input', this.value)
    },
    next(e, size = 1) {
      this.value += size
      this.$emit('input', this.value)
    },
    range(from, to) {
      const range = []

      from = from > 0 ? from : 1
      to = to >= this.maxLength ? this.maxLength : to

      for (let i = from; i <= to; i++) {
        range.push(i)
      }

      return range
    }
  },
  render(h) {
    const child = [
      this.genIcon(h, 'icon-arrow-left', this.value === 1, this.prev),
      // this.genItem(h, [1]),
      this.genItem(h, this.items),
      // this.genItem(h, [this.maxLength]),
      this.genIcon(h, 'icon-arrow-right', this.value === this.maxLength, this.next)
    ]
    return h('ul', {
      staticClass: 'vk-pagination'
    }, child)
  }
}
