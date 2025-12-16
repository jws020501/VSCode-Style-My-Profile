<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside class="sidebar">
    <div class="sidebar_top">
      <button
        v-for="item in sidebarTopItems"
        :key="item.path"
        :class="{ active: route.path === item.path }"
        @click="go(item.path)"
      >
        <component
          :is="item.Icon"
          class="icon"
        />
      </button>
    </div>
    <div class="sidebar_bottom">
      <button
        v-for="item in sidebarBottomItems"
        :key="item.path"
        :class="{ active: route.path === item.path }"
        @click="go(item.path)"
      >
        <component
          :is="item.Icon"
          class="icon"
          :fill="route.path === item.path ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)'"
        />
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import FilesIcon from './icons/FilesIcon.vue';
import CodeIcon from './icons/CodeIcon.vue';
import PencilIcon from './icons/PencilIcon.vue';
import MailIcon from './icons/MailIcon.vue';
import ExtensionIcon from './icons/ExtensionIcon.vue';
import AccountIcon from './icons/AccountIcon.vue';
import SettingIcon from './icons/SettingIcon.vue';

const router = useRouter();
const route = useRoute();

const sidebarTopItems = [
  { Icon: FilesIcon, path: '/' },
  { Icon: CodeIcon, path: '/projects' },
  { Icon: PencilIcon, path: '/blog' },
  { Icon: MailIcon, path: '/contact' },
  { Icon: ExtensionIcon, path: '/code-examples' },
];

const sidebarBottomItems = [
  { Icon: AccountIcon, path: '/about' },
  { Icon: SettingIcon, path: '/setting' },
];

const go = (path) => router.push(path);
</script>
