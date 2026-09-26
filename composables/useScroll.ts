import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold: number = 20) {
  const isScrolled = ref(false)

  function handleScroll() {
    if (typeof window !== 'undefined') {
      isScrolled.value = window.scrollY > threshold
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { isScrolled }
}
