<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="projects">
    <h2 class="projects_title">Projects</h2>

    <div v-if="loading">Loading repositories…</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="grid_container">
        <article v-for="repo in repos" :key="repo.id" class="project_card">
          <h3 class="project_name">
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
          </h3>
          <p class="project_desc">{{ repo.description || 'No description' }}</p>
          <div class="project_meta">
            <span class="lang">{{ repo.language || '—' }}</span>
            <span class="stars">★ {{ repo.stargazers_count }}</span>
            <span class="updated">Updated: {{ formatDate(repo.updated_at) }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  const repos = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const apikey = process.env.VUE_APP_GIT_AUTH_KEY;

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('ko-KR');
  }

  async function loadRepos() {
    loading.value = true;
    error.value = null;
    try {
      const headers = {};
      if (apikey && apikey !== 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN') {
        headers['Authorization'] = `Bearer ${apikey}`;
      }
      const res = await fetch('https://api.github.com/users/jws020501/repos?sort=updated&per_page=100', {
        headers,
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const data = await res.json();
      repos.value = data.map(r => ({
        id: r.id,
        name: r.name,
        html_url: r.html_url,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        updated_at: r.updated_at,
      })).reduce((acc, repo) => {
        if (repo.description!=null) {
          acc.push(repo);
        }
        return acc;
      }, []);
      console.log(data);
    } catch (err) {
      error.value = err.message || String(err);
    } finally {
      loading.value = false;
    }
  }

  onMounted(loadRepos);
</script>
