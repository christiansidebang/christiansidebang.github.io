import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Experience from './views/Experience.vue'
import Contact from './views/Contact.vue'
import './style.css'

// Hash history (#/about) supaya refresh & buka di tab baru aman di hosting statis
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
  ],
  scrollBehavior: () => ({ top: 0 })
})
createApp(App).use(router).mount('#app')
