<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { PAGES, SOCIALS } from './data.js'

const route = useRoute()
const menuOpen = ref(false), light = ref(false), scrolled = ref(false)
const cursor = ref({ x: 0, y: 0 })
const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches

function setTheme(v) {
  light.value = v
  document.body.classList.toggle('light-mode', v)
  try { localStorage.setItem('theme', v ? 'light' : 'dark') } catch (e) {}
}
onMounted(() => {
  let saved = null
  try { saved = localStorage.getItem('theme') } catch (e) {}
  setTheme(saved === 'light')
  window.addEventListener('scroll', () => (scrolled.value = window.scrollY > 50))
  if (hasMouse) window.addEventListener('mousemove', (e) => (cursor.value = { x: e.clientX, y: e.clientY }))
})
</script>

<template>
  <template v-if="hasMouse">
    <div class="cursor" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>
    <div class="cursor-blur" :style="{ left: cursor.x + 'px', top: cursor.y + 'px' }"></div>
  </template>

  <nav class="navbar navbar-expand-lg fixed-top" :class="{ scrolled }">
    <div class="container">
      <a class="navbar-brand" href="#/">Christian Sidebang</a>
      <button class="btn btn-outline-light btn-sm ml-3" aria-label="Ganti tema" @click="setTheme(!light)">{{ light ? '🌙' : '☀️' }}</button>
      <button class="navbar-toggler text-white" aria-label="Menu" @click="menuOpen = !menuOpen">☰</button>
      <div class="collapse navbar-collapse" :class="{ show: menuOpen }">
        <ul class="navbar-nav ml-auto">
          <li v-for="p in PAGES" :key="p.id" class="nav-item" :class="{ active: route.path === p.path }">
            <!-- halaman lain dibuka di tab baru, halaman aktif tidak -->
            <router-link class="nav-link" :to="p.path" @click="menuOpen = false">{{ p.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />

  <div class="social text-center py-4">
    <a v-for="s in SOCIALS" :key="s.name" :href="s.url" target="_blank" rel="noopener">{{ s.name }}</a>
  </div>
  <footer class="text-center"><p>&copy; {{ new Date().getFullYear() }} Christian Sidebang</p></footer>
</template>
