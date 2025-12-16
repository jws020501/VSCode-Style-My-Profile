<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="blog">
    <h2 class="blog_title">Blog</h2>

    <div v-if="loading">Loading…</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="grid_container">
        <article v-for="post in posts" :key="post.id" class="post">
          <a :href="post.url" target="_blank" rel="noopener noreferrer">
            <div class="post_content">
              <div class="img_wrap" :style="post.image ? { backgroundImage: `url(${post.image})` } : {}"></div>
              <h3 class="post_title">{{ post.title }}</h3>
              <p class="post_excerpt">{{ post.excerpt }}</p>
              <p class="pubdate">
                {{ post.date ? new Date(post.date).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }) : '' }}
              </p>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

function parseExcerptFromDescription(html) {
  if (!html) return '';
  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || '';
    return text.replace(/\s+/g, ' ').trim().slice(0, 240);
  } catch (e) {
    return html.replace(/<[^>]+>/g, '').slice(0, 240);
  }
}

async function fetchRss(url) {
  const res = await fetch(`https://api.codetabs.com/v1/proxy/?quest=`+url)
  if (!res.ok) throw new Error(res.statusText);
  const txt = await res.text();
  const xml = new DOMParser().parseFromString(txt, 'application/xml');
  if (xml.querySelector('parsererror')) throw new Error('Invalid XML from RSS');
  const channelImage = xml.querySelector('channel > image > url')?.textContent || null;
  const items = Array.from(xml.querySelectorAll('channel > item'));
  return items.map((it, idx) => {
    const title = it.querySelector('title')?.textContent?.trim() || '';
    const link = it.querySelector('link')?.textContent?.trim() || it.querySelector('guid')?.textContent?.trim() || `item-${idx}`;
    const pubDate = it.querySelector('pubDate')?.textContent?.trim() || '';
    const descNode = it.querySelector('description');
    const descHtml = descNode ? (descNode.textContent || '') : '';
    // try extract first image from description
    let image = channelImage;
    try {
      const ddoc = new DOMParser().parseFromString(descHtml, 'text/html');
      const imgEl = ddoc.querySelector('img');
      if (imgEl) image = imgEl.getAttribute('src') || image;
    } catch (e) {
      // ignore
    }
    const excerpt = parseExcerptFromDescription(descHtml);
    return { id: link, title, url: link, date: pubDate, image, excerpt, raw: descHtml };
  });
}

async function load() {
  loading.value = true;
  error.value = null;
  try {
    // Try RSS feed first
    try {
      posts.value = await fetchRss('https://api.velog.io/rss/@jws020501');
    } catch (rssErr) {
      // Fallback to local JSON if RSS cannot be fetched (CORS or network)
      const res = await fetch('/data/blog.json');
      if (!res.ok) throw rssErr; // rethrow original RSS error if local also fails
      posts.value = await res.json();
    }
  } catch (err) {
    error.value = err.message || String(err);
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>
