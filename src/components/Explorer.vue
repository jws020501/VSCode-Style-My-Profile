<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="explorer">
    <div class="title">Explorer</div>
    <div class="heading" @click="toggleMenu = !toggleMenu">
      <ChevronRightIcon
        class="icon"
        :style="toggleMenu ? { transform: 'rotate(90deg)' } : {}"
      />
      portfolio
    </div>
    <div class="file_list" :style="toggleMenu ? { display: 'block' } : { display: 'none' }">
      <div
        v-for="item in explorerFiles"
        :key="item.path"
        class="file"
        :style="route.path === item.path ? { backgroundColor: 'var(--explorer-hover-bg)' } : {}"
        @click="go(item.path)"
      >
        <component :is="item.Icon" class="icon" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ReactIcon from './icons/VueIcon.vue';
import HtmlIcon from './icons/HtmlIcon.vue';
import CssIcon from './icons/CssIcon.vue';
import JsIcon from './icons/JsIcon.vue';
import JsonIcon from './icons/JsonIcon.vue';
import FolderIcon from './icons/FolderIcon.vue';
import ChevronRightIcon from './icons/ChevronRightIcon.vue';

const router = useRouter();
const route = useRoute();
const toggleMenu = ref(true);

const explorerFiles = [
  { Icon: ReactIcon, path: '/', title: 'home.vue' },
  { Icon: HtmlIcon, path: '/about', title: 'about.html' },
  { Icon: CssIcon, path: '/contact', title: 'contact.css' },
  { Icon: JsIcon, path: '/projects', title: 'projects.js' },
  { Icon: JsonIcon, path: '/blog', title: 'blog.json' },
  { Icon: FolderIcon, path: '/code-examples', title: 'code-examples' },
];

const go = (path) => router.push(path);
</script>
