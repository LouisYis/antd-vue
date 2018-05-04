import CollapseTransition from '@/transitions/collapse';
import menuMixin from './menu-mixin';

export default {
  name: 'VntSubMenu',
  componentName: 'VntSubMenu',
  mixins: [menuMixin],
  components: { CollapseTransition },
  props: {
    index: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen() {
      return this.rootMenu.openedMenus.indexOf(this.index) >= 0;
    }
  },
  render() {
    const {
      rootMenu, $slots, indent, isOpen
    } = this;
    const { prefixCls, mode } = rootMenu;
    const componentCls = `${prefixCls}-submenu`;

    const classes = [
      componentCls,
      `${componentCls}-${mode}`
    ];

    const submenuClass = [
      prefixCls,
      `${prefixCls}-sub`,
      `${prefixCls}-${mode}`
    ];

    const inlineMenu = (
      <CollapseTransition>
        <ul class={submenuClass} v-show={isOpen}>
          {$slots.default}
        </ul>
      </CollapseTransition>
    );

    return (
      <li class={classes}>
        <div class={`${componentCls}-title`} style={indent}>
          <span>{$slots.title}</span>
        </div>
        {inlineMenu}
      </li>
    );
  }
};
