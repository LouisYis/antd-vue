import getFirstComponentChild from '@/utils/vdom';
import { on, off } from '@/utils/dom';
import Popper from '../../vue-popper';

export default {
  name: 'VntTooltip',
  props: {
    prefixCls: {
      type: String,
      default: 'vnt-tooltip'
    }
  },
  data() {
    return {
      showPopper: false
    };
  },
  methods: {
    show() {
      this.showPopper = true;
    },
    hide() {
      this.showPopper = false;
    }
  },
  mounted() {
    const reference = this.$el;

    if (reference) {
      on(reference, 'mouseenter', this.show);
      on(reference, 'mouseleave', this.hide);
    }
  },
  destoryed() {
    const reference = this.$el;

    off(reference, 'mouseenter', this.show);
    off(reference, 'mouseleave', this.hide);
  },
  render() {
    const { prefixCls, showPopper } = this;
    const classes = [
      prefixCls
    ];

    const Content = (
      <transition name="zoom-big">
        <div class={classes} v-show={showPopper}>
          <div class={`${prefixCls}-content`}>
            <div class={`${prefixCls}-inner`}>
              { this.$slots.content }
            </div>
          </div>
        </div>
      </transition>
    );

    return (
      <Popper value={showPopper}>
        <template slot="target">
          { getFirstComponentChild(this.$slots.default) }
        </template>

        { Content }
      </Popper>
    );
  }
};
