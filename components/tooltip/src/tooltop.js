import getFirstComponentChild from '@/utils/vdom';
import Popper from '../../vue-popper';

export default {
  name: 'VntTooltip',
  props: {
    prefixCls: {
      type: String,
      default: 'vnt-tooltip'
    }
  },
  methods: {
    handleClick() {
      console.log(111);
    }
  },
  mounted() {
    console.log(this.$el);
  },
  render() {
    const { prefixCls } = this;
    const classes = [
      prefixCls
    ];

    const Content = (
      <transtion name="zoom-big">
        <div class={classes}>
          { this.$slots.content }
        </div>
      </transtion>
    );

    return (
      <Popper value={true}>
        <template slot="target" onClick={this.handleClick}>
          { getFirstComponentChild(this.$slots.default) }
        </template>

        { Content }
      </Popper>
    );
  }
};
