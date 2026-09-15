<template>
  <div class="bg-dark-950">
    <section class="section-padding">
      <div class="container-narrow">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Core Features</h2>
          <p class="text-dark-400 text-lg max-w-2xl mx-auto">Next Generation PAM logic with progressive interfaces</p>
        </div>
        <ContentCard />
      </div>
    </section>

    <section class="section-padding bg-dark-900">
      <div class="container-narrow">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">References & Partners</h2>
          <p class="text-dark-400 text-lg max-w-2xl mx-auto">We work with reputable companies and partners which are the best in their fields</p>
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
                class="h-16 md:h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Features for PAM&amp;IAM needs</h2>
          <p class="text-dark-400 text-lg max-w-2xl mx-auto">Comprehensive privileged access management capabilities</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div class="card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
              <img :src="`/animations/663-fingerprint-scan.gif`" alt="Authentication" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Authentication</h3>
            <p class="text-dark-400 text-sm">OAUTH2, SAML, LDAP</p>
          </div>

          <div class="card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
              <img :src="`/animations/plug.gif`" alt="Protocols" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Protocols</h3>
            <p class="text-dark-400 text-sm">SSH, TELNET, VNC, RDP, SQL</p>
          </div>

          <div class="card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
              <img :src="`/animations/computer.gif`" alt="Platforms" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Platforms</h3>
            <p class="text-dark-400 text-sm">Mac, Linux, Windows</p>
          </div>

          <div class="card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
              <img :src="`/animations/696-padlock-tick.gif`" alt="Vault" class="w-12 h-12" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">Vault</h3>
            <p class="text-dark-400 text-sm">Military grade encryption</p>
          </div>
        </div>

        <div class="card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-dark-800">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-dark-200 uppercase tracking-wider w-64">Feature</th>
                  <th class="px-6 py-4 text-left text-sm font-semibold text-dark-200 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-dark-800">
                <tr v-for="(detail, index) in details" :key="index" class="hover:bg-dark-800/50 transition-colors duration-200">
                  <td class="px-6 py-4"><h4 class="font-semibold text-white">{{ detail.title }}</h4></td>
                  <td class="px-6 py-4 text-dark-400 text-sm" v-html="detail.desc" />
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-dark-800/50 border-t border-dark-700">
            <em class="text-accent-400 text-sm">* This feature is supported in enterprise version</em>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContentCard from './ContentCard.vue'

const allRefs = [
  ...[{ src: 'iyzico.jpg' }, { src: 'tcsc.jpg' }, { src: 'tt-pilot.png' }, { src: 'akaunting.png' }],
  ...[{ src: 'turk-telekom.jpg' }, { src: 'turkcell3.png' }, { src: 'yklogo.jpg' }, { src: 'turkcell-global-bilgi.png' }],
  ...[{ src: 'entertech.png' }, { src: 'icube.jpg' }, { src: 'growth-circuit.png' }, { src: 'draper_uni.png' }],
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
