<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="inner">
      <HomeVscodeIcon class="icon_vscode"/>
      <br />
      <div class="typewriter">
        <h1>Hello 'Wonseok' World!</h1>
      </div>
      <p class="heading">I'm Backend Developer</p>
      <div class="buttons">
        <button @click="go('/projects')" class="button button_work">View Works</button>
        <button @click="go('/contact')" class="button button_contact">Contact me</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import HomeVscodeIcon from '../components/icons/HomeVscodeIcon.vue';

const router = useRouter();
const go = (path) => router.push(path);
</script>
