<!-- BARU: script untuk tombol Copy email -->
<script setup>
import { ref } from 'vue'
import { CONTACT } from '../data.js'

const copied = ref(false)
const waText = encodeURIComponent('Halo Christian, saya melihat portfolio Anda dan ingin berdiskusi.')
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(CONTACT.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    window.prompt('Salin email ini:', CONTACT.email) // cadangan kalau clipboard diblokir browser
  }
}
</script>

<template>
  <section class="page-section">
    <div class="container fade-in"> <!-- samakan dengan class yang kamu pakai di halaman lain (fade atau fade-in) -->
      <h2 class="text-center mb-5">Contact</h2>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card text-center"><div class="card-body">
            <h5>Location</h5>
            <p>Jl. Dr Susilo 2E No.105, Grogol, Grogol Petamburan, Jakarta Barat, DKI Jakarta<br>Indonesia</p>

            <!-- //HAPUS: <a href="mailto:csidebang02@gmail.com" class="btn btn-warning">✉ csidebang02@gmail.com</a> -->

            <!-- BARU: tombol kontak -->
            <div class="contact-buttons">
              <a :href="'mailto:' + CONTACT.email" class="btn btn-warning">✉ Email</a>
              <a :href="'https://wa.me/' + CONTACT.whatsapp + '?text=' + waText" target="_blank" rel="noopener" class="btn btn-success">💬 WhatsApp</a>
              <a :href="CONTACT.linkedin" target="_blank" rel="noopener" class="btn btn-primary">in LinkedIn</a>
            </div>
            <p class="mt-3 mb-0">
              <small class="text-muted">{{ CONTACT.email }}</small>
              <button class="copy-btn" @click="copyEmail">{{ copied ? '✓ Copied' : 'Copy' }}</button>
            </p>
          </div></div>
        </div>
      </div>
    </div>
  </section>
</template>