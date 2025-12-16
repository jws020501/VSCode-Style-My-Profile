<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <div class="img_wrap">
      <img :src="project.image" class="card_img" :alt="project.description" />
      <div class="copy_tag">
        {{ project.copy === 'personal' ? '🙋‍♀️' : '🏢' }} {{ project.copy }}
      </div>
    </div>
    <div class="card_content">
      <h4 class="card_title">{{ project.name }}</h4>
      <p class="card_desc">{{ project.description }}</p>
      <div class="tags_warp">
        <span class="skill_tag" v-for="(tag, idx) in project.tags" :key="idx">#{{ tag }}</span>
      </div>
      <a
        v-if="project.memo"
        class="memo"
        :href="project.memo"
        target="_blank"
        rel="noopener noreferrer"
      >회고록</a>
      <a
        v-if="project.career"
        class="career"
        :href="project.career"
        target="_blank"
        rel="noopener noreferrer"
      >프로젝트 기술서</a>
      <div class="link_wrap">
        <a
          v-if="project.source_code"
          class="source_code"
          :href="project.source_code"
          target="_blank"
          rel="noopener noreferrer"
        >Github</a>
        <a
          v-if="project.demo"
          class="demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
        >Demo</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
});
</script>
