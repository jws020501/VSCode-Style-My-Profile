<template>
  <div class="app">
    <Layout />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Layout from './components/Layout.vue';

onMounted(() => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }
});
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
