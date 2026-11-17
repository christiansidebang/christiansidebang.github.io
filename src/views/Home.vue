<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const cv = 'assets/img/cv/CV-CHRISTIAN SIDEBANG.pdf'
const foto = 'assets/img/profile/ProfilNew.jpg'
const text = ref('')
const words = ['.Net Developer', 'Full Stack Developer', 'Data Analyst']
let i = 0, j = 0, del = false, t
function type() {
  const w = words[i]
  text.value = w.slice(0, j)
  if (!del && j === w.length) { del = true; t = setTimeout(type, 1200); return }
  if (del && j === 0) { del = false; i = (i + 1) % words.length; t = setTimeout(type, 300); return }
  j += del ? -1 : 1
  t = setTimeout(type, del ? 50 : 100)
}
onMounted(type)
onUnmounted(() => clearTimeout(t))
</script>

<template>
  <section class="hero">
    <div class="container text-center fade">
      <img :src="foto" class="profile-img mb-4" alt="Foto profil Christian Sidebang">
      <h1>Hello, I'm <span>Christian Sidebang</span></h1>
      <p class="lead">{{ text }}<span class="caret">|</span></p>
      <span class="badge-custom">Open to Work</span>
      <div class="mt-4">
        <a :href="cv" target="_blank" rel="noopener" class="btn btn-warning m-1">📄 View CV</a>
        <a :href="cv" download class="btn btn-outline-warning m-1">⬇ Download CV</a>
      </div>
      <div class="mt-2">
        <router-link to="/projects" class="btn btn-warning m-1">See My Work</router-link>
        <router-link to="/contact" class="btn btn-outline-light m-1">Contact Me</router-link>
      </div>
    </div>
  </section>
</template>
