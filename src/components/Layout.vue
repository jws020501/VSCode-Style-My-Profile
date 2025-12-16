<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <WindowBar />
    <div class="layout">
      <Sidebar />
      <Explorer />
      <div class="main">
        <Tabsbar />
        <div :class="['content']">
          <RouterView />
        </div>
      </div>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import WindowBar from './WindowBar.vue';
import Sidebar from './Sidebar.vue';
import Explorer from './Explorer.vue';
import Tabsbar from './Tabsbar.vue';
import FooterBar from './Footer.vue';

</script>
