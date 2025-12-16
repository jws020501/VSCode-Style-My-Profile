<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 class="setting_title">Setting Color Themes ⚙️</h2>
    <div class="theme_items">
      <div v-for="(item, idx) in themeItems" :key="idx" class="theme_item">
        <div class="img_wrap">
          <img
            class="theme_img"
            :src="`${process.env.BASE_URL}images${item.img}`"
            :alt="`${item.theme} theme`"
          />
        </div>
        <h3>{{ item.name }}</h3>
        <h5>{{ item.publisher }}</h5>
        <div>
          <input
            type="radio"
            :id="item.theme"
            name="theme"
            :value="item.theme"
            :checked="selectedTheme === item.theme"
            @change="setTheme(item.theme)"
          />
          <label :for="item.theme"> set theme </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const themeItems = [
  { name: 'GitHub Dark', img: '/github-dark.png', publisher: 'GitHub', theme: 'githubDark' },
  { name: 'Dracula', img: '/dracula.png', publisher: 'Dracula Theme', theme: 'dracula' },
];

const selectedTheme = ref(localStorage.getItem('theme') || themeItems[0].theme);

const setTheme = (theme) => {
  selectedTheme.value = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

onMounted(() => {
  setTheme(selectedTheme.value);
});
</script>
