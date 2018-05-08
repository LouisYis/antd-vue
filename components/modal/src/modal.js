import overlayable from '@/mixins/overlayable';
import genModal from '../mixins/gen-modal';
import transitionHook from '../mixins/transition-hook';

// set component name variables
const componentName = 'antv-modal';

export default {
  name: 'VntModal',
  mixins: [genModal, transitionHook, overlayable],
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
    closeable: {
      type: Boolean,
      default: false,
    },
    onConfirm: {
      type: Function,
      default: () => undefined,
    },
    onCancel: {
      type: Function,
      default: () => undefined,
    },
    width: [String, Number],
    footer: [String, Object],
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    styles: [String, Object, Array],
    wrapClassName: String,
    afterClose: {
      type: Function,
      default: () => undefined,
    },
    mousePosition: Object,
    // container: Object,
    zIndex: Number,
  },
  data() {
    return {
      show: false,
      modalShow: false,
      modalOrigin: null,
    };
  },
  computed: {
    modalStyle() {
      return {
        transformOrigin: this.modalOrigin,
        width: this.width,
      };
    },
  },
  methods: {
    handleCancel() {
      this.modalShow = false;
      this.onCancel();
    },
    handleConfirm() {
      this.modalShow = false;
      this.onConfirm();
    },
    handleClose() {
      this.modalShow = false;
      this.afterClose();
    }
  },
  render(h) {
    const modal = h('div', {
      class: [`${componentName}-wrap`, this.wrapClassName],
      style: {
        zIndex: this.zIndex,
      },
      directives: [{
        name: 'show',
        value: this.show,
      }],
    }, [this.genModal(h)]);

    return h('div', [modal, this.genOverlay()]);
  },
};
