<template>
  <div class="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    <div
      v-for="(plan, index) in plans"
      :key="index"
      class="card overflow-hidden transition-all duration-300 hover:scale-105"
      :class="{ 'ring-2 ring-primary-500': hovered === index }"
      @mouseenter="hovered = index"
      @mouseleave="hovered = -1"
    >
      <div class="p-6" :class="plan.headerClass">
        <h3 class="text-2xl font-bold text-white">{{ plan.name }}</h3>
      </div>
      <div class="px-6 pb-4">
        <p class="text-dark-400 text-sm">{{ plan.priceText }}</p>
      </div>
      <div class="px-6 pb-6 space-y-3">
        <div v-for="(item, i) in plan.items" :key="i" class="flex items-start space-x-2">
          <font-awesome-icon :icon="['fas', 'check']" class="text-green-400 mt-1 w-4 flex-shrink-0" />
          <span class="text-dark-300 text-sm">{{ item }}</span>
        </div>
      </div>
      <div class="px-6 pb-6">
        <button class="btn w-full" :class="plan.buttonClass" @click="routeToContact">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const hovered = ref(-1)

const plans = [
  {
    name: 'Teams',
    priceText: 'Monthly Charge (Annual option is possible)',
    items: [
      '0 - 5 Members',
      'Central Access Management with Secure Connectivity',
      'Terminal Proxy (SSH, Telnet, RDP, VNC)',
      'Database Proxy (Oracle, PostgreSQL, MSSQL, MySQL)',
      'Activity Monitor',
      'Desktop Client (Mac, Win, Linux)',
      'Military Grade Vault',
    ],
    headerClass: 'bg-gradient-to-r from-blue-600 to-blue-800',
    buttonClass: 'btn-outline',
  },
  {
    name: 'Startups',
    priceText: 'Monthly Charge (Annual option is possible)',
    items: [
      '5 - 20 Members',
      'Video Record For Sessions',
      'Time Based Access',
      'Time window Access',
      'Policy Enforcement for Sessions',
      'Oauth2 Idp Provider',
      'API Support',
    ],
    headerClass: 'bg-gradient-to-r from-amber-600 to-amber-800',
    buttonClass: 'btn-primary',
  },
  {
    name: 'Enterprises',
    priceText: 'Custom pricing available',
    items: [
      'On-Prem install',
      'Native Terminal & Database Proxy',
      'Hardened Linux Agent',
      'LDAP Proxy',
      'IAM Integration (LDAP)',
      'Geo Based Access',
      'Automation (Beta)',
      'SAML IdS Provider (Beta)',
    ],
    headerClass: 'bg-gradient-to-r from-red-600 to-red-800',
    buttonClass: 'btn-accent',
  },
]

function routeToContact() {
  router.push('/contacts')
}
</script>
