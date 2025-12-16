<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tag_contents" :style="{ paddingLeft: `${(indent || 0) * 0.5}em` }">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  indent: { type: Number, default: 0 },
});

const { indent } = props;
</script>
