<template>
  <a :href="href" :class="classes" :target="target" v-if="href">
    <i :class="icon" v-if="icon"></i>
    <span><slot></slot></span>
  </a>

  <button :class="classes" v-on="listener" v-else>
    <Icon :type="icon" v-if="icon"></Icon>
    <Icon :type="loading" :spin="true" v-if="!icon && loading"></Icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import Icon from '../../icon';

export default {
  components: {
    Icon
  },
  name: "VntButton",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    icon: String,
    type: String,
    shape: String,
    size: String,
    ghost: String,
    loading: Boolean,
    href: String,
    target: String
  },
  data() {
    return {
      timeout: null,
      clicked: false
    };
  },
  computed: {
    classes() {
      const { type, shape, size, ghost, clicked, loading } = this;

      return [
        {
          [`vnt-btn-${type}`]: type,
          [`vnt-btn-${shape}`]: shape,
          [`vnt-btn-${size}`]: size,
          [`vnt-btn-background-ghost`]: ghost,
          [`vnt-btn-loading`]: loading,
          [`vnt-btn-clicked`]: clicked
        },
        "vnt-btn"
      ];
    },
    listener() {
      return { ...this.$listener, click: this.handleClick }
    }
  },
  methods: {
    handleClick(e) {
      this.clicked = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.clicked = false;
      }, 500);

      const onClick = this.$listeners.click;
      if (onClick) onClick(e);
    }
  }
};
</script>

