const prefix = 'antv';

export default {
  name: 'VntDropdown',
  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    position: {
      type: String,
      default: 'bottomleft',
    },
  },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    this.setChildrenPrefix(this.$children);
  },
  computed: {
    transitionName() {
      // return 'slide-in'
      return this.position.indexOf('top') > 0 ? 'slide-down' : 'slide-up';
    },
  },
  methods: {
    selectItem() {
      this.active = false;
    },
    handleMouseover() {
      this.active = true;
    },
    handleMouseleave() {
      this.active = false;
    },
    handleClick() {
      this.active = !this.active;
    },
    setChildrenPrefix(elm) {
      elm.forEach(e => {
        e.prefixCls = `${prefix}-dropdown-menu`;
        if (e.$children.length > 0) {
          this.setChildrenPrefix(e.$children);
        }
      });
    },
    genButton() {
      this.$slots.button[0].data.on = {
        mouseenter: this.handleMouseover,
      };
      return this.$slots.button;
    },
  },
  render(h) {
    const data = {
      class: [
        `is-${this.position}`,
        `${prefix}-dropdown-list`,
      ],
      props: {
        onSelect: this.selectItem,
      },
      directives: [{
        name: 'show',
        value: this.active,
      }],
    };

    const list = h('transition', {
      props: {
        name: this.transitionName,
      },
    }, [h('div', data, this.$slots.default)]);

    return h('div', {
      class: [`${prefix}-dropdown`],
      on: this.trigger === 'hover' ? {
        mouseleave: this.handleMouseleave,
      } : { click: this.handleClick },
    }, [this.genButton(), list]);
  },
};
