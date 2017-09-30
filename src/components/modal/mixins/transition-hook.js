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
  console.log(pos)
  const doc = el.ownerDocument
  const w = doc.defaultView || doc.parentWindow

  pos.left += getScroll(w)
  pos.top += getScroll(w, true)
  return pos
}

export default {
  methods: {
    beforeEnter(el) {
      // get el's offset everytime
      // set el's display to get clientRect
      el.style.display = 'block'
      el.style.opacity = 0

      const modalOffset = offset(el)
      this.modalOrigin = {
        transformOrigin: `${this.mousePosition.x - modalOffset.left}px ${this.mousePosition.y - modalOffset.top}px`
      }

      el.style.opacity = 1
    },
    afterLeave() {
      this.show = false
    }
  }
}
