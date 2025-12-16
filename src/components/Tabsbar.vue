<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="tabsbar"
    :style="route.path === '/code-examples' ? {} : {}"
  >
    <Tab :Icon="ReactIcon" path="/" title="home.jsx" />
    <Tab :Icon="HtmlIcon" path="/about" title="about.html" />
    <Tab :Icon="CssIcon" path="/contact" title="contact.css" />
    <Tab :Icon="JsIcon" path="/projects" title="projects.js" />
    <Tab :Icon="JsonIcon" path="/blog" title="blog.json" />
    <Tab :Icon="ExtensionIcon" path="/code-examples" title="examples.md" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Tab from './Tab.vue';
import ReactIcon from './icons/VueIcon.vue';
import HtmlIcon from './icons/HtmlIcon.vue';
import CssIcon from './icons/CssIcon.vue';
import JsIcon from './icons/JsIcon.vue';
import JsonIcon from './icons/JsonIcon.vue';
import ExtensionIcon from './icons/ExtensionIcon.vue';

const route = useRoute();
</script>
