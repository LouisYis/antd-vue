<template>
  <li
    :class="classes"
    :style="indent"
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>

<script>
import { MenuItemMixin } from './menu-mixin';

export default {
  mixins: [MenuItemMixin],
  props: {
    index: {
      type: String,
      required: true
    }
  },
  computed: {
    active() {
      return this.index === this.rootMenu.activeIndex;
    },
    classes() {
      const { rootMenu, active } = this
      const componentCls = `${rootMenu.prefixCls}-item`;
      return [
        componentCls,
        {
          [`${componentCls}-selected`]: active
        }
      ]
    }
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.rootMenu.$emit('item-clicked', this);
        this.$emit('click', this);
      }
    }
  },
  created() {
    this.parentMenu.addItem(this);
  }
}
</script>
