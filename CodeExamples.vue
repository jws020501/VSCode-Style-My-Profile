<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="code_examples_page">
    <h2 class="blog_title">Code Examples</h2>

    <div v-if="loading">Loading…</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="examples_controls">
        <div class="filters">
          <button :class="{ active: selectedLv === null }" @click="setFilter(null)">All</button>
          <button v-for="n in [1,2,3,4,5]" :key="n" :class="{ active: selectedLv === n }" @click="setFilter(n)">{{ n }}</button>
        </div>
      </div>
      <div class="examples_grid">
        <div v-for="(item, idx) in filteredExamples" :key="idx" class="example_card">
          <div class="card_header">
            <strong class="card_title">{{ item.title }}</strong>
            <span :class="['card_lv', levelClass(item.lv)]">{{ item.lv }}</span>
          </div>
          <div class="card_body">
            <p class="example_desc">{{ item.readme ? item.readme.split('\n')[0] : (item.description || 'No description') }}</p>
          </div>
          <div class="card_footer">
            <button type="button" class="view_btn" @click.prevent="openModal(item)">View</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal -->
  <div v-if="showModal" class="modal_overlay" @click.self="closeModal">
    <div class="modal_box">
      <div class="modal_header">
        <strong>{{ selectedExample && selectedExample.title }}</strong>
        <button class="close_btn" @click="closeModal">✕</button>
      </div>
      <div class="modal_body">
        <div class="modal_tabs">
          <button type="button" :class="{ active: activeTab === 'readme' }" @click="activeTab = 'readme'">README</button>
          <button type="button" :class="{ active: activeTab === 'code' }" @click="activeTab = 'code'">Code</button>
        </div>
        <div v-if="activeTab === 'readme'">
          <div class="modal_readme" v-html="renderedReadme"></div>
        </div>
        <div v-else>
          <div class="modal_code" v-html="renderedCode"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

const examples = ref([]);
const loading = ref(true);
const error = ref(null);
const apikey = process.env.VUE_APP_GIT_AUTH_KEY;

// Enable HTML so markdown-it will render embedded HTML correctly
const md = new MarkdownIt({ html: true });


async function loadExamples() {
  loading.value = true;
    try {
      const headers = {};
      let url = "https://api.github.com/repos/jws020501/codingtest/contents/JavaScript/프로그래머스";
      if (apikey && apikey !== 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN') {
        headers['Authorization'] = `Bearer ${apikey}`;
      }
      
      const res1 = await fetch(url, {
        headers,
      });
      res1.json().then(data =>{
        data.forEach(async item1 => {
          const res2 = await fetch(item1.git_url, {
        headers,
      });
      res2.json().then(data2 =>{
        data2.tree.forEach(async item2=>{
        const res3 = await fetch(item2.url, {
          headers,
        });
        res3.json().then(async data3 =>{
          const readme = data3.tree.find(f => f.path.toLowerCase() === 'readme.md');
          const code = data3.tree.find(f => f.path.toLowerCase() !== 'readme.md');
          if (!readme || !code) return; // skip entries without readme or code
          const readmeurl = readme.url;
          const codeurl = code.url;
          const res4 = await fetch(readmeurl, {
            headers,
          });
          const res5 = await fetch(codeurl, {
            headers,
          });
          const readmedata = await res4.json();
          const codedata = await res5.json();
          if (!readmedata || !readmedata.content || !codedata || !codedata.content) return;
          // Decode base64 -> UTF-8 correctly to preserve Korean characters
          function b64ToUtf8(b64) {
            try {
              const binary = atob(b64);
              const len = binary.length;
              const bytes = new Uint8Array(len);
              for (let i = 0; i < len; i++) {
                bytes[i] = binary.charCodeAt(i);
              }
              // TextDecoder is widely supported in modern browsers
              return new TextDecoder('utf-8').decode(bytes);
            } catch (e) {
              // Fallback for older environments
              try {
                return decodeURIComponent(escape(atob(b64)));
              } catch (e2) {
                return atob(b64);
              }
            }
          }

          const decodedReadme = b64ToUtf8(readmedata.content);
          const decodedCode = b64ToUtf8(codedata.content);
          console.log("readme")
          console.log(decodedReadme);
          console.log("code")
          console.log(decodedCode);
          console.log("title")
          console.log(code);
          const content = ({
            title: code.path,
            readme : decodedReadme,
            code : decodedCode,
            lv : item1.path.split('/')[item1.path.split('/').length -1],
          })
          console.log(content);
          examples.value.push(content)
        })
      })
      })
      });
    }); 
    } catch (err) {
      error.value = err.message || String(err);
    } finally {
      loading.value = false;
    }
}

onMounted(loadExamples);

function levelClass(lv) {
  const n = parseInt(String(lv).trim(), 10);
  if (Number.isNaN(n)) return 'lv-default';
  const clamped = Math.min(Math.max(n, 1), 5);
  return `lv-${clamped}`;
}

const selectedLv = ref(null);

const showModal = ref(false);
const selectedExample = ref(null);
const activeTab = ref('readme');

function openModal(item) {
  selectedExample.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedExample.value = null;
}

const renderedReadme = computed(() => {
  let txt = selectedExample.value?.readme || '';
  if (!txt) return '';

  // Decode simple HTML entities (if any) to let markdown-it parse them correctly
  if (txt.includes('&lt;') || txt.includes('&gt;')) {
    try {
      const tmp = document.createElement('div');
      tmp.innerHTML = txt;
      txt = tmp.textContent || tmp.innerText || txt;
    } catch (e) {
      // ignore and continue with original txt
    }
  }

  // Always pass through markdown-it (with HTML enabled) so it renders Markdown
  // and preserves embedded HTML; then sanitize the resulting HTML.
  try {
    const html = md.render(txt);
    return DOMPurify.sanitize(html);
  } catch (e) {
    return DOMPurify.sanitize('<pre>' + escapeHtml(txt) + '</pre>');
  }
});

const renderedCode = computed(() => {
  const txt = selectedExample.value?.code || '';
  if (!txt) return '';
  // Return markup compatible with vuejs-code-block styling (fallback as HTML string)
  return '<pre class="vuejs-code-block language-javascript"><code class="language-javascript">' + escapeHtml(txt) + '</code></pre>';
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setFilter(n) {
  selectedLv.value = n;
}

const filteredExamples = computed(() => {
  if (selectedLv.value === null) return examples.value;
  return examples.value.filter(it => {
    const n = parseInt(String(it.lv).trim(), 10);
    return !Number.isNaN(n) && n === selectedLv.value;
  });
});
</script>
