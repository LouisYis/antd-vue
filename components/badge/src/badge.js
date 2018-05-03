// TODO:
// 1. optimizer number transition animated

export default {
  name: 'VntBadge',
  props: {
    count: [Number, String, Function],
    dot: Boolean,
    offset: Array,
    overflowCount: {
      type: Number,
      default: 99
    },
    showZero: Boolean,
    status: String,
    text: String,
    title: String,
    styles: [String, Array, Object]
  },
  data() {
    return {
      numberTransitionName: ''
    };
  },
  computed: {
    showBadge() {
      const { count, showZero } = this;
      if (typeof count === 'number' && showZero && count >= 0) {
        return Boolean(String(count));
      }

      return typeof count === 'string' || (typeof count === 'number' && count > 0) || this.dot || this.status;
    },
    numberArray() {
      const { count } = this;

      if (typeof count === 'number' && count >= 0) {
        return String(count).split('');
      }

      return ['0'];
    },
    classes() {
      return {
        'vnt-badge-status': this.status,
        'vnt-badge-not-a-wrapper': !this.$slots.default || this.text
      };
    }
  },
  watch: {
    count(val, oval) {
      if (typeof val === 'number' && typeof oval === 'number' && oval > 0) {
        this.numberTransitionName = `vnt-number-scroll-${val > oval ? 'increase' : 'decrease'}`;
      } else {
        this.numberTransitionName = '';
      }
    }
  },
  methods: {
    genCountBadge() {
      const {
        count, numberArray, numberTransitionName, styles, overflowCount, title
      } = this;
      let content = null;

      const countClasses = {
        'vnt-badge-count': String(count),
        'vnt-badge-multiple-words': numberArray.length > 1
      };

      if (typeof count === 'number') {
        if (count <= overflowCount) {
          content = numberArray.map(i => {
            const current = Number(i);

            return (
              <span class="vnt-scroll-number-only">
                <transition
                  name={numberTransitionName}
                  key={i}
                >
                  {current === Number(i)
                    ? <p key={current}>{current}</p>
                    : <p key={current - 1}>{current - 1}</p>
                  }
                </transition>
              </span>
            );
          });
        } else {
          content = `${overflowCount}+`;
        }
      } else if (typeof count === 'string') {
        content = <span class="ant-scroll-number-only">{count}</span>;
      } else {
        content = count();
      }

      return (
        <sup
          class={['vnt-scroll-number', countClasses]}
          style={styles}
          domPropsTitle={title || count}
        >
          {content}
        </sup>
      );
    },
    genDotBadge() {
      const { status } = this;
      const content = [];
      const dotClasses = {
        'vnt-scroll-number': !status,
        'vnt-badge-dot': !status,
        'vnt-badge-status-dot': status,
        [`vnt-badge-status-${status}`]: status
      };

      content.push(<span class={dotClasses}></span>);


      return content;
    },
    getBadgeContent() {
      if (!String(this.count) || this.dot || this.status) {
        return this.genDotBadge();
      }

      return this.genCountBadge();
    }
  },
  render() {
    const {
      classes, showBadge, getBadgeContent, text, status
    } = this;

    return (
      <span class={['vnt-badge', classes]}>
        {this.$slots.default}

        <transition
          appear-active-class="vnt-badge-zoom-enter"
          enter-active-class="vnt-badge-zoom-enter"
          leave-active-class="vnt-badge-zoom-leave"
        >
          {showBadge ? getBadgeContent() : null}
        </transition>

        {(text && status)
          ? <span class="vnt-badge-status-text">{text}</span>
          : null}
      </span>
    );
  }
};
