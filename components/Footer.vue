<template>
  <footer class="border-t border-slate-800 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 class="text-white font-semibold mb-4">Product</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/product/pdaccess_linux_host_security" class="hover:text-white transition-colors">Linux Direct Audit</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_cloud_security" class="hover:text-white transition-colors">Privileged Access Management</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_sso" class="hover:text-white transition-colors">Identity &amp; Access Management</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_pdvault" class="hover:text-white transition-colors">Password Vault</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Resources</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/docs" class="hover:text-white transition-colors">Documentation</NuxtLink></li>
            <li><NuxtLink to="/blogs" class="hover:text-white transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/solutions" class="hover:text-white transition-colors">Solutions</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-slate-400">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/contacts" class="hover:text-white transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="/legal/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/legal/terms_and_conditions" class="hover:text-white transition-colors">Terms of Service</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm text-slate-400">&copy; {{ currentYear }} PDAccess. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
