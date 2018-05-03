<template>
  <li :class="classes">
    <slot></slot>
  </li>
</template>

<script>
export default {
  inject: ['rootMenu'],
  props: {
    index: String
  },
  computed: {
    classes() {
      const { rootMenu } = this
      return [
        `${rootMenu.prefixCls}-item`
      ]
    }
  }
}
</script>
