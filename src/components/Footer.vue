<template>
  <footer class="bg-dark-900 border-t border-dark-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="space-y-4">
          <img src="@/assets/logos/logo_pda_b.svg" alt="PDAccess" class="h-10 w-auto" />
          <p class="text-dark-400 text-sm leading-relaxed">
            PDAccess is a Privileged Access Security and Identity Access Management Software for both cloud and on-prem usage
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-dark-200 mb-4">Products</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/product/pdaccess_cloud_security" class="text-dark-400 hover:text-white text-sm transition-colors duration-200">Privileged Session Management</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_linux_host_security" class="text-dark-400 hover:text-white text-sm transition-colors duration-200">Linux Direct Audit & Security</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_pdvault" class="text-dark-400 hover:text-white text-sm transition-colors duration-200">Password Vault - SAPM</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_sso" class="text-dark-400 hover:text-white text-sm transition-colors duration-200">Identity and Access Management</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-dark-200 mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/products" class="flex items-center space-x-2 text-dark-400 hover:text-white text-sm transition-colors duration-200"><font-awesome-icon :icon="['fas', 'desktop']" class="w-4" /><span>Products</span></NuxtLink></li>
            <li><NuxtLink to="/hr" class="flex items-center space-x-2 text-dark-400 hover:text-white text-sm transition-colors duration-200"><font-awesome-icon :icon="['fas', 'user-graduate']" class="w-4" /><span>Jobs</span></NuxtLink></li>
            <li><NuxtLink to="/getstarted" class="flex items-center space-x-2 text-dark-400 hover:text-white text-sm transition-colors duration-200"><font-awesome-icon :icon="['fas', 'sign-in-alt']" class="w-4" /><span>Get Started</span></NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-dark-200 mb-4">Capabilities</h4>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary">PAM</span>
            <span class="badge badge-primary">Cloud Security</span>
            <span class="badge badge-primary">Password Vault</span>
            <span class="badge badge-primary">IAM</span>
            <span class="badge badge-success">Open Source</span>
            <span class="badge badge-primary">SAPM</span>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-dark-500 text-sm">
          Copyright © {{ currentYear }} PDAccess. All rights reserved.
        </p>
        <div class="flex items-center space-x-4 text-sm">
          <NuxtLink to="/about" class="text-dark-400 hover:text-white transition-colors duration-200">About</NuxtLink>
          <span class="text-dark-600">|</span>
          <NuxtLink to="/legal/terms" class="text-dark-400 hover:text-white transition-colors duration-200">Terms</NuxtLink>
          <span class="text-dark-600">|</span>
          <NuxtLink to="/legal/privacy" class="text-dark-400 hover:text-white transition-colors duration-200">Privacy</NuxtLink>
          <span class="text-dark-600">|</span>
          <NuxtLink to="/contacts" class="text-dark-400 hover:text-white transition-colors duration-200">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
