import genModal from '../mixins/gen-modal'
import transitionHook from '../mixins/transition-hook'

// set component name variables
const componentName = 'antv-modal'

export default {
  name: 'antv-modal',
  mixins: [ genModal, transitionHook ],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    closeable: {
      type: Boolean,
      default: false
    },
    onConfirm: {
      type: Function,
      default: () => void 0
    },
    onCancel: {
      type: Function,
      default: () => void 0
    },
    width: [String | Number],
    footer: [String | Object],
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    styles: [String | Object | Array],
    wrapClassName: String,
    afterClose: {
      type: Function,
      default: () => void 0
    },
    mousePosition: Object,
    container: Object,
    zIndex: Number
  },
  data() {
    return {
      show: false,
      modalShow: false,
      modalOrigin: null
    }
  },
  watch: {
    value(val) {
      if (val) this.show = val
    },
    show(val) {
      this.$emit('input', val)
      this.modalShow = val
    }
  },
  methods: {
    handleCancel() {
      this.modalShow = false
      this.onCancel()
    },
    handleConfirm() {
      this.modalShow = false
      this.onConfirm()
    }
  },
  render(h) {
    return h('div', {
      class: `${componentName}-wrap`,
      style: {
        zIndex: this.zIndex
      },
      directives: [{
        name: 'show',
        value: this.show
      }]
    }, [ this.genModal(h) ])
  }
}
