import Modal from './modal'

const name = 'antv-modal'
console.log(Modal.name)

const confirmConstruct = {
  name: name,
  props: {
    title: {
      type: [String, Object],
      default: '标题'
    },
    content: [String, Object],
    onConfirm: Function,
    onCancel: Function,
    width: Number,
    iconType: {
      type: 'String',
      default: 'question-circle'
    },
    confirmText: {
      type: 'String',
      default: '确定'
    },
    confirmType: {
      type: 'String',
      default: 'primary'
    },
    cancelText: {
      type: 'String',
      default: '取消'
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: Number
  },
  components: {
    Modal
  },
  methods: {
    genTitle(h) {
      return h('div', {
        class: [ `${name}-header` ]
      }, [ this.title ])
    },
    genBody(h) {
      return h('div', {
        class: [ `${name}-body` ]
      })
    }
  },
  render(h) {
    return h('Modal', {

    }, [

    ])
  }
}
