import '../styles/components/overlay.less';

export default {
  props: {
    hideOverlay: Boolean,
    hasOverlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      overlayShow: null,
      scrollBarWidth: undefined,
      bodyOverflowing: undefined,
    };
  },
  created() {
    this.checkScrollBar();
  },
  watch: {
    overlayShow(val) {
      if (val) {
        this.setScrollBar();
      } else {
        this.resetScrollBar();
      }
    },
  },
  methods: {
    getScrollBarSize(refresh) {
      let cache;

      if (refresh || this.scrollBarWidth === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);
        document.body.appendChild(outer);

        const containerWidth = inner.offsetWidth;
        outerStyle.overflow = 'scroll';
        let hasScrollWidth = inner.offsetWidth;

        if (containerWidth === hasScrollWidth) {
          hasScrollWidth = outer.clientWidth;
        }

        document.body.removeChild(outer);
        cache = containerWidth - hasScrollWidth;
      }

      return cache;
    },
    checkScrollBar() {
      let fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        const docRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = docRect.right - Math.abs(docRect.left);
      }
      this.bodyOverflowing = document.body.clientWidth > fullWindowWidth;
      if (this.bodyOverflowing) {
        this.scrollBarWidth = this.getScrollBarSize();
      }
    },
    setScrollBar() {
      if (this.scrollBarWidth) {
        document.body.paddingRight = this.scrollBarWidth;
        document.body.overflow = 'hidden';
      }
    },
    resetScrollBar() {
      document.body.paddingRight = '';
      document.body.overflow = '';
    },
    genOverlay() {
      if (!this.hasOverlay || this.hideOverlay) return null;

      const overlay = this.$createElement('div', {
        class: 'antv-overlay',
        directives: [
          {
            name: 'show',
            value: this.overlayShow,
          },
        ],
      });
      return this.$createElement('transition', {
        props: {
          name: 'fade',
        },
      }, [overlay]);
    },
  },
};
