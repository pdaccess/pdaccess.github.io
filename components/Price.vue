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
        <p v-if="plan.tag" class="text-xs font-semibold uppercase tracking-wider mt-1" :class="plan.tagClass">{{ plan.tag }}</p>
      </div>
      <div class="px-6 pb-4">
        <p class="text-white text-3xl font-bold">{{ plan.price }}</p>
        <p class="text-muted-foreground text-sm">{{ plan.priceText }}</p>
      </div>
      <div class="px-6 pb-6 space-y-3">
        <div v-for="(item, i) in plan.items" :key="i" class="flex items-start space-x-2">
          <font-awesome-icon :icon="['fas', 'check']" class="text-green-400 mt-1 w-4 flex-shrink-0" />
          <span class="text-muted-foreground text-sm">{{ item }}</span>
        </div>
      </div>
      <div class="px-6 pb-6">
        <button class="btn w-full" :class="plan.buttonClass" @click="routeToContact">
          Contact Sales
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
    price: 'Contact Us',
    priceText: 'Starting at $500/month',
    tag: null,
    tagClass: '',
    items: [
      'Up to 25 privileged users',
      'Up to 500 managed assets (servers, databases, network devices)',
      'Password Vault with automatic rotation (daily, weekly, monthly)',
      'Proxy-based sessions: SSH, RDP, VNC, Telnet, Terminal',
      'Database proxy: PostgreSQL, MySQL, Oracle, SQL Server',
      'Video + text session recording (30-day retention)',
      'Per-user command logging and audit trail',
      'Desktop clients: macOS, Windows, Linux',
      'AES-GCM encrypted credential storage',
      'Email support (business hours)',
    ],
    headerClass: 'bg-gradient-to-r from-slate-700 to-slate-900',
    buttonClass: 'btn-outline',
  },
  {
    name: 'Startups',
    price: 'Contact Us',
    priceText: 'Starting at $1,500/month',
    tag: 'Most Popular',
    tagClass: 'text-amber-400',
    items: [
      'Up to 100 privileged users',
      'Up to 2,000 managed assets',
      'All Teams features, plus:',
      'Video session recording (90-day retention)',
      'OAuth2 and SAML 2.0 SSO integration',
      'Active Directory and LDAP directory sync',
      'Time-based and approval-based access policies',
      'Custom rotation schedules per system',
      'Multi-factor authentication (TOTP, SMS, push)',
      'API access for automation',
      'Compliance reports: PCI-DSS, SOX, HIPAA, SOC 2',
      'Dedicated account manager',
    ],
    headerClass: 'bg-gradient-to-r from-cyan-600 to-blue-700',
    buttonClass: 'btn-primary',
  },
  {
    name: 'Enterprises',
    price: 'Custom',
    priceText: 'Tailored to your infrastructure',
    tag: 'On-Prem / Hybrid',
    tagClass: 'text-emerald-400',
    items: [
      'Unlimited privileged users',
      'Unlimited managed assets',
      'All Startups features, plus:',
      'On-premises or private cloud deployment',
      'Hardened Linux Agent for all Linux/Unix systems',
      'Geo-based and IP-restricted access policies',
      'Dual-approval workflow for sensitive systems',
      'HMAC-chained audit log integrity verification',
      'SIEM integration (Splunk, ELK, QRadar)',
      'Custom SSO identity provider configuration',
      'Automated onboarding/offboarding workflows',
      'Role-based access for Security, IAM, and PAM admins',
      '99.9% SLA with dedicated support',
      'Professional services: deployment, training, and migration',
    ],
    headerClass: 'bg-gradient-to-r from-emerald-700 to-emerald-900',
    buttonClass: 'btn-accent',
  },
]

function routeToContact() {
  router.push('/contacts')
}
</script>
