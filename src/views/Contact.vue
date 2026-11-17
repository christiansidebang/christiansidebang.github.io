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
    window.prompt('Salin email ini:', CONTACT.email)
  }
}

// form kirim pesan
// //HAPUS: const ENABLE_ATTACHMENT = !!CONTACT.scriptUrl // BARU: ubah ke true kalau paket Web3Forms-mu mendukung lampiran
// UBAH: kolom lampiran tampil hanya kalau scriptUrl sudah diisi (bukan placeholder XXXX)
const ENABLE_ATTACHMENT = !!CONTACT.scriptUrl && !CONTACT.scriptUrl.includes('XXXX')
const MAX_MB = 5
const form = ref({ from: '', subject: '', message: '', hp: '' }) // hp = jebakan untuk bot
const file = ref(null)
const fileEl = ref(null)
const status = ref('') // '', 'sending', 'ok', 'error'
const errMsg = ref('')

function onFile(e) {
  const f = e.target.files[0]
  if (f && f.size > MAX_MB * 1024 * 1024) {
    status.value = 'error'
    errMsg.value = 'Ukuran file maksimal ' + MAX_MB + ' MB.'
    e.target.value = ''
    file.value = null
    return
  }
  status.value = ''
  file.value = f || null
}

// ubah file jadi teks base64 untuk dikirim ke Apps Script
const toBase64 = (f) => new Promise((ok, no) => {
  const r = new FileReader()
  r.onload = () => ok(String(r.result).split(',')[1])
  r.onerror = () => no(new Error('Gagal membaca file'))
  r.readAsDataURL(f)
})

async function send() {
  if (form.value.hp) return // bot terdeteksi, abaikan
  if (!CONTACT.formKey || CONTACT.formKey.startsWith('ISI')) {
    status.value = 'error'
    errMsg.value = 'Form belum dikonfigurasi (Access Key kosong).'
    return
  }
  status.value = 'sending'
  errMsg.value = ''
  try {
    let data
    if (ENABLE_ATTACHMENT && file.value) {
      // BARU: ada lampiran, kirim lewat Google Apps Script
      const payload = {
        from: form.value.from,
        subject: form.value.subject,
        message: form.value.message,
        fileName: file.value.name,
        fileType: file.value.type,
        fileData: await toBase64(file.value)
      }
      // tanpa header Content-Type, supaya tidak kena preflight CORS
      const res = await fetch(CONTACT.scriptUrl, { method: 'POST', body: JSON.stringify(payload) })
      data = await res.json()
    } else {
      // BARU: tanpa lampiran, tetap lewat Web3Forms
      const fd = new FormData()
      fd.append('access_key', CONTACT.formKey)
      fd.append('from_name', 'Portfolio Website')
      fd.append('email', form.value.from)      // jadi alamat Reply-To
      fd.append('subject', form.value.subject)
      fd.append('message', form.value.message)
      // //HAPUS: if (ENABLE_ATTACHMENT && file.value) fd.append('attachment', file.value)
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      data = await res.json()
    }
    if (data.success) {
      status.value = 'ok'
      form.value = { from: '', subject: '', message: '', hp: '' }
      file.value = null
      if (fileEl.value) fileEl.value.value = ''
    } else {
      status.value = 'error'
      errMsg.value = data.message || 'Gagal mengirim pesan.'
    }
  } catch (e) {
    status.value = 'error'
    errMsg.value = 'Koneksi gagal, coba lagi.'
  }
}
</script>

<template>
  <section class="page-section">
    <div class="container fade-in"> <!-- samakan dengan class di halaman lain (fade atau fade-in) -->
      <h2 class="text-center mb-5">Contact</h2>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <!-- kartu kontak -->
          <div class="card text-center"><div class="card-body">
            <h5>Location</h5>
            <p>Jl. Dr Susilo 2E No.105, Grogol, Grogol Petamburan, Jakarta Barat, DKI Jakarta<br>Indonesia</p>
            <div class="contact-buttons">
              <a :href="'https://wa.me/' + CONTACT.whatsapp + '?text=' + waText" target="_blank" rel="noopener" class="btn btn-success">💬 WhatsApp</a>
              <a :href="CONTACT.linkedin" target="_blank" rel="noopener" class="btn btn-primary">in LinkedIn</a>
            </div>
            <p class="mt-3 mb-0">
              <small class="text-muted">{{ CONTACT.email }}</small>
              <button class="copy-btn" @click="copyEmail">{{ copied ? '✓ Copied' : 'Copy' }}</button>
            </p>
          </div></div>

          <!-- kartu form kirim pesan -->
          <div class="card mt-4 compose"><div class="card-body">
            <h5 class="text-center mb-3">Send a Message</h5>
            <form @submit.prevent="send">
              <div class="row-f"><label>To</label><input :value="CONTACT.email" disabled></div>
              <div class="row-f"><label>From</label><input type="email" v-model="form.from" required placeholder="email Anda"></div>
              <div class="row-f"><label>Subject</label><input v-model="form.subject" required maxlength="120" placeholder="Subjek pesan"></div>
              <textarea v-model="form.message" required rows="6" maxlength="3000" placeholder="Tulis pesan Anda..."></textarea>
              <input v-model="form.hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"> <!-- jebakan bot -->

              <div v-if="ENABLE_ATTACHMENT" class="mb-3">
                <label class="d-block mb-1"><small class="text-muted">Lampiran (opsional, maks {{ MAX_MB }} MB)</small></label>
                <input type="file" ref="fileEl" @change="onFile">
              </div>

              <button type="submit" class="btn btn-warning" :disabled="status === 'sending'">
                {{ status === 'sending' ? 'Sending...' : '➤ Send' }}
              </button>
              <p v-if="status === 'ok'" class="mt-3 mb-0 text-success">Pesan terkirim. Terima kasih!</p>
              <p v-if="status === 'error'" class="mt-3 mb-0 text-danger">{{ errMsg }}</p>
            </form>
          </div></div>
        </div>
      </div>
    </div>
  </section>
</template>