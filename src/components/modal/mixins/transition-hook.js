function getScroll(w, top) {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`]
  const method = `scroll${top ? 'Top' : 'Left'}`
  if (typeof ret !== 'number') {
    const d = w.document
    ret = d.documentElement[method]

    if (typeof ret !== 'number') {
      ret = d.body[method]
    }
  }

  return ret
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }

  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow

  pos.left += getScroll(w)
  pos.top += getScroll(w, true)
  return pos
}

export default {
  data() {
    return {
      modalOffset: null
    }
  },
  watch: {
    value(val) {
      if (val) this.show = val
    },
    show(val) {
      this.$emit('input', val)
      this.modalShow = val
    },
    modalShow(val) {
      this.overlayShow = val
    }
  },
  methods: {
    beforeEnter(el) {
      if (!this.mousePosition) return
      // get el's offset everytime
      // set el's display to get clientRect
      el.style.display = 'block'
      el.style.opacity = 0

      // run offset method only component first show
      if (!this.modalOffset) this.modalOffset = offset(el)
      this.modalOrigin = `${this.mousePosition.x - this.modalOffset.left}px ${this.mousePosition.y - this.modalOffset.top}px`

      el.style.opacity = 1
    },
    afterLeave() {
      this.show = false
    }
  }
}
