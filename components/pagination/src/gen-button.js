export default {
  methods: {
    genIcon(h, iconName, disabled, fn) {
      return h('li', {
        staticClass: `${this.name}-item`,
        class: {
          'is-disabled': disabled,
        },
        on: {
          click: disabled ? () => {} : fn,
        },
      }, [h('a', [h('i', { class: [iconName] })])]);
    },
    genItem(h, item) {
      return item.map(i => {
        if (typeof i === 'number') {
          return h('li', {
            staticClass: `${this.name}-item`,
            class: {
              active: this.value === i,
            },
            on: {
              click: e => {
                e.preventDefault();
                this.value = i;
                this.$emit('input', i);
              },
            },
          }, [h('a', [i])]);
        }
        const jumpBtn = i.split(' ');
        return h('li', {
          staticClass: `${this.name}-jump-btn is-${jumpBtn[0]}`,
          on: {
            click: e => {
              e.preventDefault();
              this[`${jumpBtn[0]}`](e, Number(jumpBtn[1]));
            },
          },
        }, [h('a', '...')]);
      });
    },
  },
};
