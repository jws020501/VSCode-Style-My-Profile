<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="['item', route.path === path ? 'active' : '']"
    @click="go(path)"
  >
    <component :is="Icon" class="icon" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

defineProps({
  Icon: { type: Object, required: true },
  path: { type: String, required: true },
  title: { type: String, required: true },
});

const router = useRouter();
const route = useRoute();
const go = (p) => router.push(p);
</script>
