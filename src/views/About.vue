<script setup>
import { ref, onMounted } from 'vue'
import { SOFT_SKILLS, SKILLS } from '../data.js'
const ready = ref(false)
onMounted(() => setTimeout(() => (ready.value = true), 150)) // memicu animasi bar
</script>

<template>
  <section class="page-section">
    <div class="container fade">
      <h2 class="text-center mb-5">About Me</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <p>I am very enthusiastic about majoring in Informatics in mastering and learning intermediate level programming languages. I enjoy challenges and being involved in projects that require me to work within and beyond my comfort and knowledge. Learning new languages and development techniques is important for me and for the success of the organization.</p>
          <h5 class="mt-4">Soft Skills</h5>
          <span v-for="s in SOFT_SKILLS" :key="s" class="badge-custom">{{ s }}</span>
        </div>
        <div class="col-md-6">
          <h5 class="mb-3">Technical Skills</h5>
          <div v-for="s in SKILLS" :key="s.name">
            <p class="mb-1">{{ s.name }} <small class="text-muted">{{ s.level }}%</small></p>
            <div class="progress mb-3"><div class="progress-bar" :style="{ width: ready ? s.level + '%' : '0' }"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
