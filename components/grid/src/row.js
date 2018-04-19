const componentCls = 'antv-row';

export default {
  name: 'antv-row',
  props: {
    gutter: Number,
    type: String,
    align: String,
    justify: String,
  },
  computed: {
    propsStyle() {
      const gutter = this.gutter / 2;
      return {
        marginLeft: `-${gutter}px`,
        marginRight: `-${gutter}px`,
      };
    },
    typeClass() {
      return this.type ? `${componentCls}-${this.type}` : componentCls;
    },
    flexAttr() {
      const classArr = [];
      if (this.type) {
        if (this.align) {
          classArr.push(`is-flex-${this.align}`);
        }
        if (this.justify) {
          classArr.push(`is-flex-${this.justify}`);
        }
      }

      return classArr;
    },
  },
  render(h) {
    const data = {
      class: [this.typeClass, this.flexAttr],
      style: this.propsStyle,
    };

    const columns = this.$slots.default.map((item) => {
      const tempItem = item;

      if (this.gutter && item.tempItem) {
        tempItem.data.style = {
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`,
        };
      }

      return tempItem;
    });

    return h('div', data, columns);
  },
};
