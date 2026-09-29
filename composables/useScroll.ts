import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold: number = 20) {
  const isScrolled = ref(false)
  let ticking = false

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (typeof window !== 'undefined') {
          isScrolled.value = window.scrollY > threshold
        }
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return { isScrolled }
}
