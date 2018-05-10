import Vue from 'vue';
import getFirstComponentChild from '@/utils/vdom';

const PopperJS = Vue.prototype.$isServer ? function PopperJS() {} : import('popper.js');

export default {
  name: 'VntPopper',
  props: {
    value: Boolean
  },
  data() {
    return {
      popperInstance: null,
      showPopper: undefined
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
      console.log(11);
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },
  methods: {
    initPopperInstance() {
      const { target, getOptions } = this;
      const referenceElement = target.$el || this.$slots.target.$el;
      const popperNode = this.$slots.default.$el;
      console.log(referenceElement);

      if (!this.popperInstance) {
        const PopperInstance = new PopperJS(
          referenceElement,
          popperNode,
          getOptions()
        );

        this.popperInstance = PopperInstance;
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
      if (this.popperInstance) {
        this.popperInstance.destory();
      }

      this.popperInstance = undefined;
    }
  },
  mounted() {

  },
  render() {
    console.log(this.$slots);
    return getFirstComponentChild(this.$slots.target);
    // return null;
  }
};
