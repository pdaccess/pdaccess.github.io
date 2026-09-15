<template>
  <div>
    <Section :full="true">
      <template #head>
        <div class="container-narrow">
          <div class="text-center space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Open-Source Privileged Access Management
            </h1>
            <p class="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto text-balance">
              PDAccess offers compliant agile, secure and next generation <strong class="text-primary-400">PAM&amp;IAM</strong> solution
              for <strong class="text-primary-400">CLOUDS</strong> and <strong class="text-primary-400">ON-PREM</strong> environments
            </p>
            <div class="flex flex-wrap justify-center gap-2 pt-4">
              <span class="badge badge-primary">#PAM</span>
              <span class="badge badge-primary">#IAM</span>
              <span class="badge badge-primary">#CloudSecurity</span>
              <span class="badge badge-success">#OpenSource</span>
            </div>
          </div>
        </div>
      </template>

      <div class="container-narrow">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div v-show="!showEmail" class="flex flex-col sm:flex-row gap-4">
              <a href="#protocols" class="btn btn-outline">More Info</a>
              <button @click="sendEmail" class="btn btn-primary">Demo Request</button>
            </div>

            <div v-show="showEmail" class="space-y-4 card p-6">
              <div>
                <label class="label">Email Address</label>
                <input
                  :class="['input', { 'border-accent-500 ring-2 ring-accent-500/20': showErrorMessage }]"
                  type="email"
                  v-model="email"
                  placeholder="Enter your e-mail address"
                />
                <p class="text-accent-400 text-sm mt-1" v-show="showErrorMessage">{{ errorMessage }}</p>
              </div>
              <div>
                <label class="label">First Name</label>
                <input class="input" type="text" v-model="firstName" placeholder="First Name" />
              </div>
              <div>
                <label class="label">Last Name</label>
                <input class="input" type="text" v-model="lastName" placeholder="Last Name" />
              </div>
              <div>
                <label class="label">Company</label>
                <input class="input" type="text" v-model="company" placeholder="Name of your company" />
              </div>
              <div class="flex gap-3 pt-2">
                <button class="btn btn-primary" @click="sendEmail" v-show="!showEmail">Send</button>
                <button class="btn btn-secondary" @click="showEmail = false" v-show="showEmail">Cancel</button>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="relative overflow-hidden rounded-xl shadow-2xl bg-dark-800 p-4">
              <img :src="`/screen/web_login2.png`" alt="PDAccess Web Interface" class="w-full rounded-lg" />
            </div>
            <div class="absolute -bottom-6 -right-6 w-2/3">
              <div class="relative overflow-hidden rounded-xl shadow-2xl bg-dark-800 p-3">
                <img :src="`/screen/terminal_login2.png`" alt="PDAccess Terminal" class="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <MainDetail />

    <section class="py-16 bg-dark-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainDetail from '~/views/MainDetail.vue'
import Section from '~/components/Section.vue'

definePageMeta({ layout: 'default' })

const runtimeConfig = useRuntimeConfig()
const publicPath = runtimeConfig.public.appUrl || ''

const router = useRouter()
const showEmail = ref(false)
const showErrorMessage = ref(false)
const errorMessage = ref<string | null>(null)
const email = ref('')
const firstName = ref('')
const lastName = ref('')
const company = ref('')
const emailText = ref('Demo Request')

async function sendEmail() {
  if (showEmail.value || email.value) {
    if (!email.value) {
      errorMessage.value = 'please enter valid email address'
      showErrorMessage.value = true
      return
    }
    if (!firstName.value) {
      errorMessage.value = 'please enter valid firstName'
      showErrorMessage.value = true
      return
    }
    if (!lastName.value) {
      errorMessage.value = 'please enter valid lastName'
      showErrorMessage.value = true
      return
    }
    if (!company.value) {
      errorMessage.value = 'please enter valid company'
      showErrorMessage.value = true
      return
    }

    showErrorMessage.value = false
    const data = new FormData()
    data.append('mauticform[email]', email.value)
    data.append('mauticform[first_name]', firstName.value)
    data.append('mauticform[last_name]', lastName.value)
    data.append('mauticform[company]', company.value)
    data.append('mauticform[formId]', '10')
    data.append('mauticform[return]', 'https://www.pdaccess.com')
    data.append('mauticform[formName]', 'pdaaccountformnew')
    data.append('mauticform[messenger]', '1')

    try {
      await $fetch('https://m.pdaccess.com/form/submit?formId=10', {
        method: 'POST',
        body: data,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      })
      email.value = ''
      showEmail.value = !showEmail.value
      emailText.value = 'Check your email!'
      router.push('/thanks')
    } catch (err) {
      console.error(err)
      showErrorMessage.value = true
      errorMessage.value = String(err)
    }
  } else {
    showEmail.value = !showEmail.value
    showErrorMessage.value = !showErrorMessage.value
  }
}
</script>
