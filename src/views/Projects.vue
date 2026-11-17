<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { PROJECTS } from '../data.js'
const sel = ref(null)
const filter = ref('All')
const img = (p) => encodeURI('assets/img/project/' + p.img)
const split = (p) => p.tech.split(',').map((t) => t.trim())
const techs = computed(() => ['All', ...new Set(PROJECTS.flatMap(split))])
const shown = computed(() => (filter.value === 'All' ? PROJECTS : PROJECTS.filter((p) => split(p).includes(filter.value))))
const onKey = (e) => e.key === 'Escape' && (sel.value = null)
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="page-section">
    <div class="container fade-in">
      <h2 class="text-center mb-4">My Projects</h2>

      <div class="filters text-center mb-4">
        <button v-for="t in techs" :key="t" :class="{ on: filter === t }" @click="filter = t">{{ t }}</button>
      </div>

      <div class="row">
        <div v-for="p in shown" :key="p.title" class="col-md-4 mb-4">
          <div class="card h-100" role="button" tabindex="0" @click="sel = p" @keydown.enter.prevent="sel = p" @keydown.space.prevent="sel = p">
            <img :src="img(p)" :alt="'Tampilan ' + p.title" loading="lazy">
            <div class="card-body"><h5>{{ p.title }}</h5><p>{{ p.desc }}</p></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="sel" class="pm-backdrop" @click.self="sel = null">
      <div class="pm" role="dialog" aria-modal="true">
        <button class="close text-white" aria-label="Tutup" @click="sel = null">&times;</button>
        <img :src="img(sel)" :alt="'Tampilan ' + sel.title">
        <h3>{{ sel.title }}</h3>
        <p><b>Tech:</b> {{ sel.tech }}</p>
        <p><b>Role:</b> {{ sel.role }}</p>
        <p>{{ sel.feat }}</p>
        <p v-if="sel.problem"><b>Problem:</b> {{ sel.problem }}</p>
        <p v-if="sel.solution"><b>Solution:</b> {{ sel.solution }}</p>
        <p v-if="sel.result"><b>Result:</b> {{ sel.result }}</p>
        <a v-if="sel.demo" :href="sel.demo" target="_blank" rel="noopener" class="btn btn-warning btn-sm mr-2">Live Demo</a>
        <a v-if="sel.github" :href="sel.github" target="_blank" rel="noopener" class="btn btn-outline-light btn-sm">GitHub</a>
      </div>
    </div>
  </section>
</template>