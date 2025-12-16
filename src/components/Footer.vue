<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="left">
      <a
        class="icon_wrap"
        href="https://github.com/jws020501"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SourceControlIcon class="icon" fill="#fff" />
        main
      </a>
      <div class="icon_items">
        <span class="icon_wrap icon__error"><ErrorIcon class="icon" /> 0</span>
        <span class="icon_wrap icon__warning"><WarningIcon class="icon" /> 0</span>
      </div>
    </div>
    <div class="right">
      <div class="icon_wrap power">
        <VueIcon class="icon" /> Powered by Vue.js
      </div>
      <div class="icon_wrap">
        <CheckIcon class="icon" /> Prettier
      </div>
      <div class="icon_wrap">
        <BellIcon class="icon" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import SourceControlIcon from './icons/SourceControlIcon.vue';
import ErrorIcon from './icons/ErrorIcon.vue';
import WarningIcon from './icons/WarningIcon.vue';
import VueIcon from './icons/VueIcon.vue';
import CheckIcon from './icons/CheckIcon.vue';
import BellIcon from './icons/BellIcon.vue';
</script>
