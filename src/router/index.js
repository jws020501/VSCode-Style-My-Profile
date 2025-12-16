import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Projects from '../pages/Projects.vue';
import Blog from '../pages/Blog.vue';
import CodeExamples from '../pages/CodeExamples.vue';
import Setting from '../pages/Setting.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
  { path: '/code-examples', component: CodeExamples },
  { path: '/setting', component: Setting },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
