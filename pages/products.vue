<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useFetch } from '#app'
import Badge from '@/components/ui/badge/Badge.vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import Button from '@/components/ui/button/Button.vue'

const { data: pages } = await useFetch('/api/content/products', {
  key: 'products'
})

// Sort by slug for consistent ordering
const sortedProducts = pages.value?.sort((a: any, b: any) => {
  const order = ['pdaccess_pdvault', 'pdaccess_cloud_security', 'pdaccess_sso', 'pdaccess_linux_host_security']
  const idxA = order.indexOf(a.slug)
  const idxB = order.indexOf(b.slug)
  return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB)
})

// Product capability mapping for display
const productCapabilities = {
  'pdaccess_linux_host_security': [
    { label: 'Authentication', value: 'Per-user, no shared accounts' },
    { label: 'Authorization', value: 'Command-level control' },
    { label: 'Accounting', value: 'Full command logging' },
    { label: 'Protocols', value: 'Agent-based SSH proxy' },
    { label: 'Platforms', value: 'RHEL, CentOS, Ubuntu, Debian, SUSE' },
    { label: 'Compliance', value: 'PCI-DSS, SOX, HIPAA, ISO 27001' },
  ],
  'pdaccess_cloud_security': [
    { label: 'Access Model', value: 'Proxy-based (no exposed interfaces)' },
    { label: 'Protocols', value: 'SSH, RDP, VNC, Telnet, Terminal, SQL' },
    { label: 'Recording', value: 'Video + text session recording' },
    { label: 'Database', value: 'Native SQL client via proxy' },
    { label: 'Cloud', value: 'AWS, Azure, GCP, on-prem, hybrid' },
    { label: 'Compliance', value: 'PCI-DSS, SOX, HIPAA, SOC 2' },
  ],
  'pdaccess_sso': [
    { label: 'Authentication', value: 'OAuth2, SAML 2.0, OIDC' },
    { label: 'Directory', value: 'Active Directory, LDAP/LDAPS' },
    { label: 'Providers', value: 'Local, AD, Custom Identity' },
    { label: 'Groups', value: 'Group sync + role-based access' },
    { label: 'Frameworks', value: 'Java, .NET, Node.js, Python, PHP' },
    { label: 'Compliance', value: 'PCI-DSS, SOX, HIPAA, SOC 2' },
  ],
  'pdaccess_pdvault': [
    { label: 'Encryption', value: 'AES-GCM at rest and in transit' },
    { label: 'Rotation', value: 'Automatic on schedule' },
    { label: 'Injection', value: 'Credentials never exposed to users' },
    { label: 'Systems', value: 'Linux, Windows, DBs, Network' },
    { label: 'Databases', value: 'PostgreSQL, MySQL, Oracle, SQL Server' },
    { label: 'Compliance', value: 'PCI-DSS, SOX, HIPAA, SOC 2' },
  ],
}

useHead({
  title: 'Products — PDAccess',
  meta: [
    { name: 'description', content: 'PDAccess products: Linux Direct Audit & Security, Privileged Access Management, Identity and Access Management, and Password Vault. Enterprise-grade PAM for cloud, on-prem, and hybrid.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Header Navigation -->
    <Header />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Products</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Enterprise-Grade Privileged
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Access Management.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            Four integrated products that cover every aspect of privileged access — from credential management and session recording to identity authentication and Linux security.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/docs" class="inline-flex items-center">
              <Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">
                Read Documentation
              </Button>
            </NuxtLink>
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="sortedProducts && sortedProducts.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            v-for="page in sortedProducts"
            :key="page.slug"
            class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group h-full"
          >
            <NuxtLink :to="page._path" class="block">
              <CardHeader class="pb-4">
                <CardTitle class="text-white group-hover:text-cyan-400 transition-colors text-xl mb-2">
                  {{ page.title }}
                </CardTitle>
                <CardDescription class="text-slate-400 leading-relaxed">
                  {{ page.description }}
                </CardDescription>
              </CardHeader>
              <CardContent class="pt-0">
                <div v-if="page.features && page.features.length" class="space-y-2.5">
                  <li
                    v-for="(feature, fIndex) in page.features"
                    :key="fIndex"
                    class="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span class="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                    <span>{{ feature }}</span>
                  </li>
                </div>
              </CardContent>
            </NuxtLink>
          </Card>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-400 text-lg">No products available yet.</p>
        </div>
      </div>
    </section>

    <!-- Product Capabilities Comparison -->
    <section class="py-16 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Capabilities</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            One Platform.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Every System.</span>
          </h2>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-4">
            Each product addresses a specific access management need, but they work together as a unified security platform.
          </p>
        </div>

        <div v-if="sortedProducts" class="space-y-12">
          <div
            v-for="product in sortedProducts"
            :key="product.slug"
          >
            <div class="flex flex-col lg:flex-row gap-8">
              <!-- Product Info -->
              <div class="lg:w-1/3">
                <NuxtLink :to="product._path" class="group inline-flex items-center gap-3 mb-4">
                  <h3 class="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {{ product.title }}
                  </h3>
                  <span class="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </NuxtLink>
                <p class="text-slate-400 leading-relaxed">{{ product.description }}</p>
              </div>

              <!-- Capabilities Table -->
              <div class="lg:w-2/3">
                <div class="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-slate-800 bg-slate-900/80">
                          <th class="px-6 py-3 text-left text-xs font-semibold text-cyan-400 uppercase tracking-wider w-32">Capability</th>
                          <th class="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(cap, index) in productCapabilities[product.slug]"
                          :key="index"
                          class="border-b border-slate-800/50 last:border-0 hover:bg-slate-800/30 transition-colors"
                        >
                          <td class="px-6 py-3 font-medium text-slate-300">{{ cap.label }}</td>
                          <td class="px-6 py-3 text-slate-400">{{ cap.value }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Unified Platform Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Unified Platform</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            How PDAccess Products Work Together.
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card class="bg-slate-900/50 border-slate-800">
            <CardHeader class="pb-3">
              <div class="text-2xl mb-2">🔐</div>
              <CardTitle class="text-white text-base">Credential Vault</CardTitle>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-sm text-slate-400 leading-relaxed">
                PDAccess Vault stores all credentials encrypted. Passwords rotate automatically and are injected into sessions without ever being seen by users.
              </p>
            </CardContent>
          </Card>
          <Card class="bg-slate-900/50 border-slate-800">
            <CardHeader class="pb-3">
              <div class="text-2xl mb-2">🌐</div>
              <CardTitle class="text-white text-base">Proxy Access</CardTitle>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-sm text-slate-400 leading-relaxed">
                PAM routes all connections through an encrypted proxy. No management interfaces are exposed to the internet. No VPN tunnels required.
              </p>
            </CardContent>
          </Card>
          <Card class="bg-slate-900/50 border-slate-800">
            <CardHeader class="pb-3">
              <div class="text-2xl mb-2">👤</div>
              <CardTitle class="text-white text-base">Identity Management</CardTitle>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-sm text-slate-400 leading-relaxed">
                SSO with OAuth2 and SAML centralizes authentication. LDAP and Active Directory integration syncs identities and groups automatically.
              </p>
            </CardContent>
          </Card>
          <Card class="bg-slate-900/50 border-slate-800">
            <CardHeader class="pb-3">
              <div class="text-2xl mb-2">🛡️</div>
              <CardTitle class="text-white text-base">Linux Security</CardTitle>
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-sm text-slate-400 leading-relaxed">
                Linux Agent eliminates SSH key management. Every command is logged, every user is authenticated, and every session is recorded.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Pricing</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            Choose Your Plan.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Scale with Confidence.</span>
          </h2>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-4">
            Flexible pricing for organizations of every size — from startup to enterprise.
          </p>
        </div>
        <Price />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Need help choosing the right product?
          </h2>
          <p class="text-slate-400 mb-8 max-w-xl mx-auto">
            Our team can help you understand which PDAccess products fit your infrastructure and compliance requirements.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="mailto:sales@pdaccess.com" class="inline-flex">
              <Button class="bg-cyan-500 hover:bg-cyan-600 text-white border-0">
                Contact Sales
              </Button>
            </a>
            <NuxtLink to="/docs" class="inline-flex">
              <Button variant="outline" class="border-slate-600 text-slate-300 hover:bg-slate-800">
                Read Documentation
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
