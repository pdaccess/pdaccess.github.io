<template>
  <div :class="isDark ? 'bg-dark-950' : 'bg-white'">
    <section class="section-padding">
      <div class="container-narrow">
        <div class="text-center mb-16">
          <h2 :class="['text-3xl md:text-4xl font-bold mb-4', isDark ? 'text-white' : 'text-gray-900']">Core Features</h2>
          <p :class="['text-lg max-w-2xl mx-auto', isDark ? 'text-dark-400' : 'text-gray-600']">Next Generation PAM logic with progressive interfaces</p>
        </div>
        <ContentCard />
      </div>
    </section>

    <section :class="['section-padding', isDark ? 'bg-dark-900' : 'bg-gray-50']">
      <div class="container-narrow">
        <div class="text-center mb-12">
          <h2 :class="['text-3xl md:text-4xl font-bold mb-4', isDark ? 'text-white' : 'text-gray-900']">References & Partners</h2>
          <p :class="['text-lg max-w-2xl mx-auto', isDark ? 'text-dark-400' : 'text-gray-600']">We work with reputable companies and partners which are the best in their fields</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            v-for="(image, index) in allImages"
            :key="index"
            class="flex items-center justify-center p-6 card hover:scale-105 transition-transform duration-300"
          >
            <figure>
              <img
                :src="`/refs/${image.src}`"
                class="h-16 md:h-20 transition-all duration-300"
                :class="isDark ? 'grayscale opacity-70 hover:opacity-100 hover:grayscale-0' : 'opacity-80 hover:opacity-100'"
                alt="Partner"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="protocols" class="section-padding">
      <div class="container-narrow">
        <div class="text-center mb-16">
          <h2 :class="['text-3xl md:text-4xl font-bold mb-4', isDark ? 'text-white' : 'text-gray-900']">Features for PAM&amp;IAM needs</h2>
          <p :class="['text-lg max-w-2xl mx-auto', isDark ? 'text-dark-400' : 'text-gray-600']">Comprehensive privileged access management capabilities</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="(feature, index) in features" :key="index" class="card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
              <img :src="feature.img" :alt="feature.title" class="w-12 h-12" />
            </div>
            <h3 :class="['text-xl font-semibold mb-2', isDark ? 'text-white' : 'text-gray-900']">{{ feature.title }}</h3>
            <p :class="['text-sm', isDark ? 'text-dark-400' : 'text-gray-600']">{{ feature.desc }}</p>
          </div>
        </div>

        <div class="card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead :class="['bg-dark-800', isDark ? '' : 'bg-gray-100']">
                <tr>
                  <th :class="['px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider w-64', isDark ? 'text-dark-200' : 'text-gray-700']">Feature</th>
                  <th :class="['px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider', isDark ? 'text-dark-200' : 'text-gray-700']">Details</th>
                </tr>
              </thead>
              <tbody :class="[isDark ? 'divide-y divide-dark-800' : 'divide-y divide-gray-200']">
                <tr v-for="(detail, index) in details" :key="index" :class="['transition-colors duration-200', isDark ? 'hover:bg-dark-800/50' : 'hover:bg-gray-50']">
                  <td class="px-6 py-4"><h4 :class="['font-semibold', isDark ? 'text-white' : 'text-gray-900']">{{ detail.title }}</h4></td>
                  <td class="px-6 py-4 text-sm" :class="isDark ? 'text-dark-400' : 'text-gray-600'" v-html="detail.desc" />
                </tr>
              </tbody>
            </table>
          </div>
          <div :class="['px-6 py-4 border-t', isDark ? 'bg-dark-800/50 border-dark-700' : 'bg-gray-50 border-gray-200']">
            <em class="text-sm">* This feature is supported in enterprise version</em>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '~/composables/useTheme'
import ContentCard from './ContentCard.vue'

const { isDark } = useTheme()

const allRefs = [
  ...[{ src: 'iyzico.jpg' }, { src: 'tcsc.jpg' }, { src: 'tt-pilot.png' }, { src: 'akaunting.png' }],
  ...[{ src: 'turk-telekom.jpg' }, { src: 'turkcell3.png' }, { src: 'yklogo.jpg' }, { src: 'turkcell-global-bilgi.png' }],
  ...[{ src: 'entertech.png' }, { src: 'icube.jpg' }, { src: 'growth-circuit.png' }, { src: 'draper_uni.png' }],
]

const allImages = computed(() => allRefs.filter(src => src.src))

const features = [
  { title: 'Authentication', img: '/animations/663-fingerprint-scan.gif', desc: 'OAUTH2, SAML, LDAP' },
  { title: 'Protocols', img: '/animations/plug.gif', desc: 'SSH, TELNET, VNC, RDP, SQL' },
  { title: 'Platforms', img: '/animations/computer.gif', desc: 'Mac, Linux, Windows' },
  { title: 'Vault', img: '/animations/696-padlock-tick.gif', desc: 'Military grade encryption' },
]

const details = [
  { title: 'Privileged Session Protocols - Terminal', desc: 'Rdp, Vnc, Ssh, Telnet' },
  { title: 'Privileged Session Protocols - Databases', desc: 'Postgresql, Mysql, Oracle and MSSQL' },
  { title: 'IAM', desc: 'Rest, Oauth2, SAML, Tacacs<em class="text-accent-400">*</em>, Radius<em class="text-accent-400">*</em>, Ldap<em class="text-accent-400">*</em>' },
  { title: 'Cloud Providers - Public or On-prem', desc: 'AWS, Azure, GCP. Any other cloud platform which has a protocol level access' },
  { title: 'Vault', desc: 'Military grade, encrypted store. All sensitive data is stored here.' },
  { title: 'Passwordless Connectivity', desc: 'Using no password or credential type while connections.' },
  { title: 'Shared Password Management', desc: 'From UI or sharing links' },
  { title: 'Credentials Management', desc: 'You can share credentials with permission: can_see_password' },
  { title: 'Credentials Management 2', desc: 'Each credentials has 2 modes: break the glass and check-in check-out mode' },
  { title: 'Application to Application Password Management', desc: 'Share links with rest calls. supported formats: json, csv, xml. Can be integrated infinite application.' },
  { title: 'Developer integrations - DevSecOps', desc: 'rest call and cli application. Also, cli application can connect using your favorite application (putty, mstsc etc.)' },
  { title: 'Group Management', desc: 'Group all credentials, service etc. together and all management made in groups.' },
  { title: 'MFA', desc: 'Supported with 3 different methods: Google Auth, SMS, E-mail' },
  { title: 'Alarms', desc: 'System wide activities (proxy and logging) regex based and group Managed' },
  { title: 'Notification', desc: 'Controlled by every credentials, group and services. Also user based configuration' },
  { title: 'Deployment Os', desc: 'Linux servers. Centos, Redhat, Ubuntu. ec2 instances or compute engines.' },
  { title: 'Deployment Environment', desc: 'Docker or Docker-compose for easy to use. Kubernetes or Openshift Supported' },
]
</script>
