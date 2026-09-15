import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold: number = 20) {
  const isScrolled = ref(false)

  function handleScroll() {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}
