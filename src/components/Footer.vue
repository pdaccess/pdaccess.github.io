<template>
  <footer :class="['border-t', isDark ? 'bg-dark-900 border-dark-800' : 'bg-gray-100 border-gray-200']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="space-y-4">
          <img src="@/assets/logos/logo_pda_b.svg" alt="PDAccess" class="h-10 w-auto" />
          <p :class="['text-sm leading-relaxed', isDark ? 'text-dark-400' : 'text-gray-600']">
            PDAccess is a Privileged Access Security and Identity Access Management Software for both cloud and on-prem usage
          </p>
        </div>

        <div>
          <h4 :class="['font-semibold mb-4', isDark ? 'text-dark-200' : 'text-gray-800']">Products</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/product/pdaccess_cloud_security" :class="['text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Privileged Session Management</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_linux_host_security" :class="['text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Linux Direct Audit & Security</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_pdvault" :class="['text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Password Vault - SAPM</NuxtLink></li>
            <li><NuxtLink to="/product/pdaccess_sso" :class="['text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Identity and Access Management</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 :class="['font-semibold mb-4', isDark ? 'text-dark-200' : 'text-gray-800']">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/products" :class="['flex items-center space-x-2 text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']"><font-awesome-icon :icon="['fas', 'desktop']" class="w-4" /><span>Products</span></NuxtLink></li>
            <li><NuxtLink to="/hr" :class="['flex items-center space-x-2 text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']"><font-awesome-icon :icon="['fas', 'user-graduate']" class="w-4" /><span>Jobs</span></NuxtLink></li>
            <li><NuxtLink to="/getstarted" :class="['flex items-center space-x-2 text-sm transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']"><font-awesome-icon :icon="['fas', 'sign-in-alt']" class="w-4" /><span>Get Started</span></NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 :class="['font-semibold mb-4', isDark ? 'text-dark-200' : 'text-gray-800']">Capabilities</h4>
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

      <div :class="['mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0', isDark ? 'border-t border-dark-800' : 'border-t border-gray-200']">
        <p :class="['text-sm', isDark ? 'text-dark-500' : 'text-gray-500']">
          Copyright © {{ currentYear }} PDAccess. All rights reserved.
        </p>
        <div class="flex items-center space-x-4 text-sm">
          <NuxtLink to="/about" :class="['transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">About</NuxtLink>
          <span :class="[isDark ? 'text-dark-600' : 'text-gray-400']">|</span>
          <NuxtLink to="/legal/terms" :class="['transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Terms</NuxtLink>
          <span :class="[isDark ? 'text-dark-600' : 'text-gray-400']">|</span>
          <NuxtLink to="/legal/privacy" :class="['transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Privacy</NuxtLink>
          <span :class="[isDark ? 'text-dark-600' : 'text-gray-400']">|</span>
          <NuxtLink to="/contacts" :class="['transition-colors duration-200', isDark ? 'text-dark-400 hover:text-white' : 'text-gray-600 hover:text-gray-900']">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()
const currentYear = new Date().getFullYear()
</script>
