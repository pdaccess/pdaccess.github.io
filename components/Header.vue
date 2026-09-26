<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50'
        : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="main navigation">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/assets/logos/pdaccess_white_logo.png" class="h-10 w-auto" alt="PDAccess" />
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink to="/products/" class="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium">
            Products
          </NuxtLink>
          <NuxtLink to="/solutions/" class="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium">
            Solutions
          </NuxtLink>
          <NuxtLink to="/blogs" class="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium">
            Blog
          </NuxtLink>
          <NuxtLink to="/docs" class="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium">
            Docs
          </NuxtLink>
          <NuxtLink to="/sales/" class="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 font-medium">
            Questions?
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <button @click="toggleTheme" class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
            <font-awesome-icon :icon="isDark ? ['fa', 'sun'] : ['fa', 'moon']" class="text-lg" />
          </button>
          <a href="https://www.github.com/pdaccess" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
          </a>
          <a href="mailto:hello@pdaccess.com" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <font-awesome-icon :icon="['fa', 'envelope']" class="text-lg" />
          </a>
          <a href="https://www.linkedin.com/company/pdaccess" class="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
          </a>
          <NuxtLink to="/changelogs/" class="badge badge-accent">
            <span class="font-semibold">2.0</span>
          </NuxtLink>
          <a href="https://app.pdaccess.com" class="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors duration-200 text-sm" title="Login to the PDAccess cloud system">
            Login Cloud
          </a>
          <NuxtLink to="/getstarted/" class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-colors duration-200 text-sm">
            Get Started
          </NuxtLink>
        </div>

        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200" aria-label="Toggle menu">
          <font-awesome-icon :icon="isOpen ? ['fa', 'times'] : ['fa', 'bars']" class="text-xl" />
        </button>
      </div>

      <div v-show="isOpen" class="md:hidden pb-4 border-t mt-2 pt-4 border-border/50 bg-background/95 backdrop-blur-md">
        <div class="flex flex-col space-y-2">
          <NuxtLink to="/products/" class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-accent" @click="isOpen = false">
            Products
          </NuxtLink>
          <NuxtLink to="/solutions/" class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-accent" @click="isOpen = false">
            Solutions
          </NuxtLink>
          <NuxtLink to="/blogs" class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-accent" @click="isOpen = false">
            Blog
          </NuxtLink>
          <NuxtLink to="/docs" class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-accent" @click="isOpen = false">
            Docs
          </NuxtLink>
          <NuxtLink to="/sales/" class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-muted-foreground hover:text-foreground hover:bg-accent" @click="isOpen = false">
            Questions?
          </NuxtLink>
          <div class="flex items-center space-x-3 pt-3 border-t border-border/50">
            <a href="https://www.github.com/pdaccess" class="transition-colors duration-200 text-muted-foreground hover:text-foreground">
              <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
            </a>
            <a href="mailto:hello@pdaccess.com" class="transition-colors duration-200 text-muted-foreground hover:text-foreground">
              <font-awesome-icon :icon="['fa', 'envelope']" class="text-lg" />
            </a>
            <a href="https://www.linkedin.com/company/pdaccess" class="transition-colors duration-200 text-muted-foreground hover:text-foreground">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg" />
            </a>
          </div>
          <div class="flex flex-col space-y-2 pt-3">
            <a href="https://app.pdaccess.com" class="px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors duration-200 text-center text-sm">
              Login Cloud
            </a>
            <NuxtLink to="/getstarted/" class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-colors duration-200 text-center text-sm">
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '~/composables/useScroll'
import { useTheme } from '~/composables/useTheme'

const { isScrolled } = useScroll(20)
const { isDark, toggleTheme } = useTheme()
const isOpen = ref(false)
</script>
