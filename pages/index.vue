<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { ref, onMounted, onUnmounted } from 'vue'

// Terminal mockup state
const terminalLines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)
const terminalTexts = [
  'pdaccess connect --protocol ssh --target aws-prod-server-01',
  'Connecting to 52.14.88.123:22 via PDAccess Secure Proxy...',
  'Authenticating via zero-knowledge credential proxy...',
  '[OK] Session established. Raw credentials never exposed.',
  'pdaccess connect --protocol rdp --target azure-vault-win01',
  'Connecting to 10.0.1.50:3389 via PDAccess Secure Proxy...',
  '[OK] RDP session routed through encrypted tunnel.',
  'pdaccess connect --protocol sql --target gcp-prod-db-01',
  'Connecting to 172.16.0.10:5432 via PDAccess Secure Proxy...',
  '[OK] Database session established. Query logged.',
]

let typingInterval: ReturnType<typeof setInterval> | null = null

function typeNextLine() {
  if (currentLineIndex.value >= terminalTexts.length) {
    currentLineIndex.value = 0
    terminalLines.value = []
  }
  const currentText = terminalTexts[currentLineIndex.value]
  if (currentCharIndex.value < currentText.length) {
    if (!terminalLines.value[currentLineIndex.value]) {
      terminalLines.value[currentLineIndex.value] = ''
    }
    terminalLines.value[currentLineIndex.value] += currentText[currentCharIndex.value]
    currentCharIndex.value++
  } else {
    currentLineIndex.value++
    currentCharIndex.value = 0
  }
}

onMounted(() => {
  typingInterval = setInterval(typeNextLine, 30)
})
onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
})

// Cloud inventory mock data
const cloudEnvironments = [
  { name: 'AWS Production', region: 'us-east-1', assets: 247, status: 'active' as const },
  { name: 'Azure Enterprise', region: 'eastus2', assets: 183, status: 'active' as const },
  { name: 'GCP Analytics', region: 'us-central1', assets: 94, status: 'active' as const },
  { name: 'On-Prem Datacenter', region: 'NYC-DC-01', assets: 312, status: 'active' as const },
  { name: 'AWS Staging', region: 'eu-west-1', assets: 56, status: 'active' as const },
]

// Session metrics
const activeConnections = ref(42)
const bandwidthUsage = ref(42)
let metricsInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  metricsInterval = setInterval(() => {
    activeConnections.value = Math.min(99, Math.max(15, activeConnections.value + Math.floor(Math.random() * 7) - 3))
    bandwidthUsage.value = Math.min(100, Math.max(20, bandwidthUsage.value + Math.floor(Math.random() * 10) - 5))
  }, 2000)
})
onUnmounted(() => {
  if (metricsInterval) clearInterval(metricsInterval)
})

// Least privilege enforcement
const enforceLeastPrivilege = ref(true)

// Active sessions data
const activeSessions = ref<Array<{ user: string; protocol: string; target: string; duration: string; status: string }>>([
  { user: 'admin@corp.com', protocol: 'SSH', target: '52.14.88.123:22', duration: '12m', status: 'active' },
  { user: 'devops@corp.com', protocol: 'RDP', target: '10.0.1.50:3389', duration: '45m', status: 'active' },
  { user: 'dba@corp.com', protocol: 'SQL', target: '172.16.0.10:5432', duration: '8m', status: 'active' },
  { user: 'sec@corp.com', protocol: 'VNC', target: '192.168.1.100:5900', duration: '23m', status: 'active' },
  { user: 'ops@corp.com', protocol: 'LDAP', target: '10.0.0.5:389', duration: '3m', status: 'active' },
])

// Navigation menu state
const navActive = ref<string | null>(null)
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Section 1: Global Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" class="w-5 h-5 text-white" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">PDAccess</span>
          </div>
          <NavigationMenu v-model="navActive" class="hidden md:flex">
            <NavigationMenuList class="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 border-0">Products</NavigationMenuTrigger>
                <NavigationMenuContent class="bg-[#0a0a0f]/95 border-slate-800">
                  <div class="grid gap-3 p-4 w-[300px]">
                    <NavigationMenuLink><a href="#session-management" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white"><div class="text-sm font-medium text-white">Session Management</div><p class="text-sm text-slate-400 line-clamp-2">Record, monitor and control privileged sessions across all environments.</p></a></NavigationMenuLink>
                    <NavigationMenuLink><a href="#sapm-vault" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white"><div class="text-sm font-medium text-white">SAPM Password Vault</div><p class="text-sm text-slate-400 line-clamp-2">Zero-knowledge credential proxy with automatic rotation.</p></a></NavigationMenuLink>
                    <NavigationMenuLink><a href="#linux-audit" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white"><div class="text-sm font-medium text-white">Linux Direct Audit</div><p class="text-sm text-slate-400 line-clamp-2">Full command-level audit trail for Linux infrastructure.</p></a></NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger class="bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 border-0">Hybrid Cloud Support</NavigationMenuTrigger>
                <NavigationMenuContent class="bg-[#0a0a0f]/95 border-slate-800">
                  <div class="grid gap-3 p-4 w-[300px]">
                    <NavigationMenuLink><a href="#multi-cloud" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white"><div class="text-sm font-medium text-white">Multi-Cloud Bridge</div><p class="text-sm text-slate-400 line-clamp-2">Unified access across AWS, Azure, GCP and on-prem.</p></a></NavigationMenuLink>
                    <NavigationMenuLink><a href="#protocols" class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-white"><div class="text-sm font-medium text-white">Protocol Support</div><p class="text-sm text-slate-400 line-clamp-2">SSH, RDP, VNC, SQL, LDAP and more.</p></a></NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#compliance" class="text-slate-300 hover:text-white hover:bg-slate-800/50 border-0 rounded-md px-3 py-2 transition-colors">Compliance</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div class="flex items-center gap-3">
            <Button variant="ghost" class="text-slate-300 hover:text-white hover:bg-slate-800/50 border-0">Sign In</Button>
            <Button class="bg-cyan-500 hover:bg-cyan-600 text-white border-0">Deploy One-Click Bridge</Button>
          </div>
        </div>
      </div>
    </nav>
    <!-- Section 2: Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Vaultless &amp; Open-Source PAM</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            One Click to Bridge Any Cloud Asset.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zero Trust Required.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            PDAccess eliminates credential sharing by proxying all privileged access through encrypted tunnels.
            Raw passwords, keys and certificates never touch the user&#39;s machine.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-16">
            <Button class="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-base border-0">Start Free Trial</Button>
            <Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-base">View Documentation</Button>
          </div>
          <div class="max-w-3xl mx-auto">
            <div class="rounded-xl border border-slate-800 bg-[#0d1117] overflow-hidden shadow-2xl shadow-cyan-500/5">
              <div class="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-slate-800">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span class="ml-2 text-xs text-slate-500 font-mono">pdaccess-terminal</span>
              </div>
              <div class="p-6 font-mono text-sm space-y-1 min-h-[280px]">
                <div v-for="(line, index) in terminalLines" :key="index" class="text-green-400">{{ line }}</div>
                <div v-if="isTyping" class="text-cyan-400"><span class="text-green-400">$ </span><span class="animate-pulse">&#9608;</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section 3: Unified Infrastructure Bento Grid -->
    <section id="multi-cloud" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Unified Infrastructure</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            One Platform. Every Cloud.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Zero Compromise.</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card class="lg:col-span-2 bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <CardTitle class="text-white flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-cyan-400" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                Multi-Cloud Unified Bridge
              </CardTitle>
              <CardDescription class="text-slate-400">Connect and manage assets across all major cloud providers and on-premises infrastructure from a single pane of glass.</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div class="text-center p-4 rounded-lg bg-slate-800/50">
                  <AwsIcon class="w-10 h-10 mx-auto mb-2 text-orange-400" />
                  <div class="text-2xl font-bold text-white">247</div>
                  <div class="text-xs text-slate-400">AWS Assets</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-slate-800/50">
                  <AzureIcon class="w-10 h-10 mx-auto mb-2 text-blue-400" />
                  <div class="text-2xl font-bold text-white">183</div>
                  <div class="text-xs text-slate-400">Azure Assets</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-slate-800/50">
                  <GcpIcon class="w-10 h-10 mx-auto mb-2 text-yellow-400" />
                  <div class="text-2xl font-bold text-white">94</div>
                  <div class="text-xs text-slate-400">GCP Assets</div>
                </div>
                <div class="text-center p-4 rounded-lg bg-slate-800/50">
                  <OnPremIcon class="w-10 h-10 mx-auto mb-2 text-green-400" />
                  <div class="text-2xl font-bold text-white">312</div>
                  <div class="text-xs text-slate-400">On-Prem Assets</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <CardTitle class="text-white text-lg">Privileged Session Management</CardTitle>
              <CardDescription class="text-slate-400">Full session recording and real-time monitoring.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul class="space-y-2 text-sm text-slate-300">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>SSH session recording</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>RDP session capture</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Real-time session monitoring</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Instant session termination</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Command-level audit trail</li>
              </ul>
            </CardContent>
          </Card>
          <Card id="linux-audit" class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <CardTitle class="text-white text-lg">Linux Direct Audit</CardTitle>
              <CardDescription class="text-slate-400">Full command-level audit for Linux infrastructure.</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="rounded-lg bg-[#0d1117] border border-slate-800 p-3 font-mono text-xs space-y-1">
                <div class="text-slate-500">$ sudo pdaccess audit --host web-prod-01</div>
                <div class="text-green-400">[OK] Audit session started</div>
                <div class="text-slate-300">[14:23:01] whoami &rarr; root</div>
                <div class="text-slate-300">[14:23:02] cat /etc/shadow</div>
                <div class="text-yellow-400">[ALERT] Sensitive file access</div>
                <div class="text-slate-300">[14:23:05] systemctl restart nginx</div>
                <div class="text-green-400">[OK] All commands logged</div>
              </div>
            </CardContent>
          </Card>
          <Card id="sapm-vault" class="lg:col-span-2 bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors">
            <CardHeader>
              <CardTitle class="text-white flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-cyan-400" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                SAPM Password Vault
              </CardTitle>
              <CardDescription class="text-slate-400">Zero-knowledge credential proxy with automatic rotation and just-in-time access provisioning.</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div class="text-cyan-400 font-semibold mb-1">Zero-Knowledge Proxy</div>
                  <p class="text-sm text-slate-400">Credentials are never exposed to end users. All access is proxied through encrypted tunnels.</p>
                </div>
                <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div class="text-cyan-400 font-semibold mb-1">Automatic Rotation</div>
                  <p class="text-sm text-slate-400">Passwords and keys are rotated on a configurable schedule without service disruption.</p>
                </div>
                <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <div class="text-cyan-400 font-semibold mb-1">Just-in-Time Access</div>
                  <p class="text-sm text-slate-400">Grant time-bound, approval-based access to sensitive systems only when needed.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <!-- Section 4: Hybrid Cloud Operations Interface -->
    <section class="py-20 bg-slate-900/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Operations Interface</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            Hybrid Cloud Operations.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Real-Time Visibility.</span>
          </h2>
        </div>
        <div class="max-w-4xl mx-auto">
          <Tabs default-value="inventory" class="w-full">
            <TabsList class="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700">
              <TabsTrigger value="inventory" class="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">Cloud Inventory</TabsTrigger>
              <TabsTrigger value="sessions" class="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">Session Control Proxy</TabsTrigger>
            </TabsList>
            <TabsContent value="inventory" class="mt-6 space-y-6">
              <Card class="bg-slate-900/50 border-slate-800">
                <CardContent class="p-0">
                  <Table>
                    <TableHeader><TableRow class="hover:bg-slate-800/30"><TableHead>Environment</TableHead><TableHead>Region</TableHead><TableHead>Assets</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                    <TableBody>
                      <TableRow v-for="(env, index) in cloudEnvironments" :key="index" class="hover:bg-slate-800/30">
                        <TableCell class="font-medium text-white">{{ env.name }}</TableCell>
                        <TableCell class="text-slate-400">{{ env.region }}</TableCell>
                        <TableCell class="text-slate-300">{{ env.assets }}</TableCell>
                        <TableCell><span class="inline-flex items-center gap-1.5 text-green-400 text-sm"><span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>Active</span></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card class="bg-slate-900/50 border-slate-800">
                <CardContent class="p-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-white font-medium">Enforce Principle of Least Privilege</div>
                      <div class="text-sm text-slate-400">Automatically restrict access to minimum required permissions</div>
                    </div>
                    <Switch v-model:checked="enforceLeastPrivilege" />
                  </div>
                </CardContent>
              </Card>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card class="bg-slate-900/50 border-slate-800">
                  <CardContent class="p-6 space-y-3">
                    <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Active Connections</span><span class="text-sm font-mono text-cyan-400">{{ activeConnections }}</span></div>
                    <Progress :model-value="activeConnections" class="h-2" />
                  </CardContent>
                </Card>
                <Card class="bg-slate-900/50 border-slate-800">
                  <CardContent class="p-6 space-y-3">
                    <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Bandwidth Usage</span><span class="text-sm font-mono text-cyan-400">{{ bandwidthUsage }}%</span></div>
                    <Progress :model-value="bandwidthUsage" class="h-2" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sessions" class="mt-6 space-y-6">
              <Card class="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle class="text-white">Active Connections</CardTitle>
                  <CardDescription class="text-slate-400">Real-time view of all active privileged sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="space-y-3">
                    <div v-for="(session, index) in activeSessions" :key="index" class="flex items-center justify-between p-4 rounded-lg bg-slate-800/30 border border-slate-800">
                      <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <div>
                          <div class="text-white text-sm font-medium">{{ session.user }}</div>
                          <div class="text-xs text-slate-400">{{ session.protocol }} &rarr; {{ session.target }}</div>
                        </div>
                      </div>
                      <div class="flex items-center gap-4">
                        <span class="text-xs text-slate-400">Duration: {{ session.duration }}</span>
                        <Button size="sm" variant="destructive" class="h-7 text-xs">Revoke</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card class="bg-slate-900/50 border-slate-800"><CardContent class="p-6 text-center"><div class="text-3xl font-bold text-cyan-400">{{ activeConnections }}</div><div class="text-sm text-slate-400 mt-1">Active Sessions</div></CardContent></Card>
                <Card class="bg-slate-900/50 border-slate-800"><CardContent class="p-6 text-center"><div class="text-3xl font-bold text-green-400">0</div><div class="text-sm text-slate-400 mt-1">Blocked Attempts</div></CardContent></Card>
                <Card class="bg-slate-900/50 border-slate-800"><CardContent class="p-6 text-center"><div class="text-3xl font-bold text-blue-400">99.9%</div><div class="text-sm text-slate-400 mt-1">Uptime SLA</div></CardContent></Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
    <!-- Section 5: Risk Mitigation FAQ -->
    <section id="compliance" class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <Badge class="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Risk Mitigation</Badge>
          <h2 class="text-3xl md:text-4xl font-bold text-balance">
            Frequently Asked Questions.
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Security First.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible class="space-y-3">
          <AccordionItem value="item-1" class="bg-slate-900/50 border border-slate-800 rounded-lg px-4">
            <AccordionTrigger class="hover:no-underline text-white text-left">How does PDAccess ensure zero-knowledge credential proxying?</AccordionTrigger>
            <AccordionContent class="text-slate-400">PDAccess proxies all privileged sessions through encrypted tunnels. Raw passwords, API keys, and certificates are stored in the SAPM vault and never exposed to end users. When a user initiates a session, PDAccess retrieves the credentials from the vault, establishes the connection through the proxy, and tears down the session when complete. The user's machine never has access to the actual credentials.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" class="bg-slate-900/50 border border-slate-800 rounded-lg px-4">
            <AccordionTrigger class="hover:no-underline text-white text-left">What compliance frameworks does PDAccess support?</AccordionTrigger>
            <AccordionContent class="text-slate-400">PDAccess is designed to support compliance with SOC 2 Type II, ISO 27001, HIPAA, PCI DSS, and GDPR. All privileged sessions are recorded and logged with full audit trails. The platform supports role-based access control (RBAC), multi-factor authentication (MFA), and just-in-time access provisioning. Regular security audits and penetration testing are conducted to ensure ongoing compliance.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" class="bg-slate-900/50 border border-slate-800 rounded-lg px-4">
            <AccordionTrigger class="hover:no-underline text-white text-left">Can PDAccess integrate with our existing identity providers?</AccordionTrigger>
            <AccordionContent class="text-slate-400">Yes. PDAccess supports integration with major identity providers including Active Directory, Okta, Azure AD, Keycloak, and any SAML 2.0 or OIDC-compliant provider. LDAP and RADIUS authentication are also supported for legacy systems. Integration is configured through the admin dashboard with minimal setup required.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600"></div>
            <span class="text-sm text-slate-400">&copy; 2026 PDAccess. All rights reserved.</span>
          </div>
          <div class="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
