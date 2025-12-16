<template>
  <div class="windowbar">
    <div class="window_btn_wrap">
      <VscodeIcon class="icon" />
      <div class="btn_items">
        <p class="btn_item">File</p>
        <p class="btn_item">Edit</p>
        <p class="btn_item">View</p>
        <p class="btn_item">Go</p>
        <p class="btn_item">Run</p>
        <p class="btn_item">Terminal</p>
        <p class="btn_item">Help</p>
      </div>
    </div>
    <p class="window_title">Wonseok Cho - Visual Studio Code</p>
    <div class="window_ic_wrap">
      <span class="window_ic window_ic__green"></span>
      <span class="window_ic window_ic__yellow"></span>
      <span class="window_ic window_ic__red"></span>
    </div>
  </div>
</template>

<script setup>
import VscodeIcon from './icons/VscodeIcon.vue';
</script>
