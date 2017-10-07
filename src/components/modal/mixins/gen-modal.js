import Button from '../../../components/button'

// set component name variables
const name = 'antv-modal'

export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    genTitle(h) {
      if (this.$slots.title) return this.$slots.title

      return h('div', {
        class: `${name}-header`
      }, [
        this.title ? h('div', {
          class: `${name}-title`
        }, [ this.title ]) : ''
      ])
    },
    genFooter(h) {
      if (this.$slots.footer) return this.$slots.footer

      return h('div', {
        class: `${name}-footer`
      }, [
        this.genButton(h, 'cancel', this.handleCancel),
        this.genButton(h, 'confirm', this.handleConfirm)
      ])
    },
    genButton(h, type, fn) {
      return h('antv-button', {
        props: {
          type: type === 'confirm' ? 'primary' : 'ghost-default'
        },
        nativeOn: {
          click: fn
        }
      }, [ type === 'confirm' ? this.confirmText : this.cancelText ])
    },
    genBody(h) {
      return h('div', {
        class: `${name}-body`
      }, this.$slots.default)
    },
    genClose(h) {
      return this.closeable ? h('button', {
        class: `${name}-close`,
        on: {
          click: this.handleClose
        }
      }, [ h('span', { class: `${name}-close-x` }) ]) : ''
    },
    genModal(h) {
      const modal = h('div', {
        class: `${name}`,
        ref: 'modal',
        style: [ this.modalStyle, this.styles ],
        directives: [{
          name: 'show',
          value: this.modalShow
        }]
      }, [
        h('div', {
          class: `${name}-content`,
          style: [this.styles, { width: this.width }]
        }, [
          this.genClose(h),
          this.genTitle(h),
          this.genBody(h),
          this.genFooter(h)
        ])
      ])

      return h('transition', {
        props: {
          name: 'zoom'
        },
        on: {
          afterLeave: this.afterLeave,
          beforeEnter: this.beforeEnter
        }
      }, [ modal ])
    }
  }
}
