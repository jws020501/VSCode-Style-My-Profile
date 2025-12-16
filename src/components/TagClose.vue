<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tag" :style="{ paddingLeft: `${(indent || 0) * 0.5}em` }">
    <span>&lt;/</span>
    <span class="tagname_close"> {{ tagname }} </span>
    <span>&gt;</span>
  </div>
</template>

<script setup>
const props = defineProps({
  tagname: { type: String, required: true },
  indent: { type: Number, default: 0 },
});

const { tagname, indent } = props;
</script>
