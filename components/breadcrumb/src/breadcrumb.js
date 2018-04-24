export default {
  name: 'VntBreadcrumb',
  props: {
    routes: [Object, Array],
    separator: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      name: 'vk-breadcrumb',
    };
  },
  computed: {
    routeObj() {
      if (this.routes) return this.routes;
      if (window && window.location) {
        const temp = [];
        const href = window.location;
        // get history in route history or window's history
        const pathArr = this.$route ? href.hash.split('#')[1] : href.pathname;

        pathArr.split('/').forEach((p, i) => {
          if (p === '') {
            if (i === 0) temp.push('home');
          } else {
            temp.push(p);
          }
        });

        return temp;
      }
      console.warn('location does not support');
      return {};
    },
  },
  methods: {
    genItems(item) {
      const isRouteName = typeof (item.name || item) === 'string';

      return this.$createElement('span', {
        staticClass: `${this.name}-item`,
      }, [
        isRouteName ? this.$createElement('span', { class: `${this.name}-item-name` }, item.name || item) : item,
        this.$createElement('span', { class: `${this.name}-separator` }, this.separator),
      ]);
    },
  },
  render(h) {
    const defaultChild = this.$slots.default || this.routeObj;
    const child = defaultChild.map(item => this.genItems(item));

    return h('div', { staticClass: this.name }, [
      child,
    ]);
  },
};
