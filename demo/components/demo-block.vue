<template>
  <div class="demo-block">
    <slot name="source"></slot>
    <div class="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock'
}
</script>
