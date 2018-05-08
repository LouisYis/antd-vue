import CollapseTransition from '@/transitions/collapse';
import Emitter from '@/mixins/component-emitter';
import { MenuMixin, MenuItemMixin } from './menu-mixin';

export default {
  name: 'VntSubMenu',
  componentName: 'VntSubMenu',
  mixins: [MenuMixin, MenuItemMixin, Emitter],
  components: { CollapseTransition },
  props: {
    index: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: {}
    };
  },
  computed: {
    opened() {
      return this.rootMenu.openedIndex.indexOf(this.index) >= 0;
    },
    active() {
      const { items, subMenus } = this;
      let active = false;

      Object.keys(items).forEach(item => {
        if (items[item].active) active = true;
      });

      Object.keys(subMenus).forEach(subMenu => {
        if (subMenus[subMenu].active) active = true;
      });

      return active;
    }
  },
  methods: {
    handleClick(e) {
      const { rootMenu, disabled } = this;

      if (rootMenu.mode !== 'inline' || disabled) return;
      rootMenu.$emit('submenu-clicked', this, e);
    }
  },
  created() {
    this.parentMenu.addSubMenu(this);
  },
  render() {
    const {
      rootMenu, $slots, indent, opened, handleClick, active
    } = this;
    const { prefixCls, mode } = rootMenu;
    const componentCls = `${prefixCls}-submenu`;

    const classes = [
      componentCls,
      `${componentCls}-${mode}`,
      {
        [`${componentCls}-selected`]: active,
        [`${componentCls}-open`]: opened
      }
    ];

    const submenuClass = [
      prefixCls,
      `${prefixCls}-sub`,
      `${prefixCls}-${mode}`
    ];

    const inlineMenu = (
      <CollapseTransition>
        <ul class={submenuClass} v-show={opened}>
          {$slots.default}
        </ul>
      </CollapseTransition>
    );

    return (
      <li class={classes}>
        <div
          class={`${componentCls}-title`}
          style={indent}
          onClick={handleClick}
        >
          <span>{$slots.title}</span>
          <i class="vnt-menu-submenu-arrow"></i>
        </div>
        {inlineMenu}
      </li>
    );
  }
};
