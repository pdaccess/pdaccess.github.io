import { computed, onMounted, ref } from 'vue'

export const useTheme = () => {
  const isDark = ref(true)

  const theme = computed(() => isDark.value ? 'dark' : 'light')

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      isDark.value = false
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  })

  return { isDark, theme, toggleTheme }
}
