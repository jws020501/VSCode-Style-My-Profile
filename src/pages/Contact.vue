<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2 class="contact_tit">Contact with me! 🤙</h2>
    <div class="contact_item">
      <CodeBlock>
        <CodeLine>
          <span class="socials">.socials</span> {
        </CodeLine>
        <CodeLine v-for="(item, idx) in socialItems" :key="idx">
          <span class="social_item">{{ item.social }}:</span>
          <a :href="item.href" target="_blank" rel="noopener noreferrer">
            {{ item.link }}
          </a>
          <span>;</span>
        </CodeLine>
        <CodeLine>}</CodeLine>
      </CodeBlock>
    </div>
    <div class="contact_item">
      <EmailForm />
    </div>
  </div>
</template>

<script setup>
import CodeBlock from '../components/CodeBlock.vue';
import CodeLine from '../components/CodeLine.vue';
import EmailForm from '../components/EmailForm.vue';

const socialItems = [
  { social: 'email', link: 'jws020501@naver.com', href: 'mailto:jws020501@naver.com' },
  { social: 'github', link: 'jws020501', href: 'https://github.com/jws020501' },
  { social: 'instagram', link: '@seok_my_xick', href: 'https://www.instagram.com/seok_my_xick/' },
  { social: 'blog', link: '@jws020501', href: 'https://velog.io/@jws020501' },
];
</script>
