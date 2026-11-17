<script setup>
import { EXPERIENCES } from '../data.js'
</script>

<template>
  <section class="page-section">
    <div class="container fade-in">
      <h2 class="text-center mb-5">Work Experience</h2>
      <div class="timeline">
        <div v-for="e in EXPERIENCES" :key="e.company + e.period" class="tl-item">
          <small class="text-muted">{{ e.period }}</small>
          <h5 class="mb-0">{{ e.role }}</h5>
          <div class="tl-company">{{ e.company }}</div>
          <p v-if="e.project" class="mt-2 mb-1"><b>Project:</b> {{ e.project }} <small v-if="e.facts" class="text-muted">({{ e.facts }})</small></p>
          <ul class="pl-3">
            <li v-for="pt in e.points" :key="pt">{{ pt }}</li>
          </ul>
          <span v-for="t in e.tools" :key="t" class="badge-custom">{{ t }}</span>
        </div>
      </div>
    </div>
  </section>
</template>