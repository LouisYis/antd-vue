import Vue from 'vue';
import getFirstComponentChild from '@/utils/vdom';

const PopperJS = Vue.prototype.$isServer ? function PopperJS() {} : require('popper.js').default;

export default {
  name: 'VntPopper',
  props: {
    value: Boolean
  },
  data() {
    return {
      popperInstance: null,
      showPopper: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper(val) {
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },
  methods: {
    initPopperInstance() {
      const { appendToBody } = this;
      const referenceElement = this.$el;
      const popperElement = this.popperNode.$el;

      if (appendToBody) document.body.appendChild(popperElement);
      // document.body.appendChild(popperElement);

      if (!referenceElement || !popperElement) return false;

      if (!this.popperInstance) {
        const PopperInstance = new PopperJS(
          referenceElement,
          popperElement,
          {
            placement: 'top'
          }
        );

        this.popperInstance = PopperInstance;

        this.$nextTick(this.updatePopper);
        return true;
      }

      return false;
    },
    updatePopper() {
      const { popperInstance, initPopperInstance } = this;
      if (popperInstance) {
        popperInstance.update();
      } else {
        initPopperInstance();
      }
    },
    destroyPopper() {
      // if (this.popperInstance) {
      //   this.popperInstance.destroy();
      // }

      // this.popperInstance = undefined;
    }
  },
  beforeCreate() {
    this.popperNode = new Vue({
      data: { node: '' },
      render() {
        return this.node;
      }
    }).$mount();
  },
  render() {
    [this.popperNode.node] = this.$slots.default;

    return getFirstComponentChild(this.$slots.target);
  }
};
