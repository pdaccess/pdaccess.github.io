export default defineNuxtPlugin((nuxtApp) => {
  let mauticLoaded = false

  nuxtApp.provide('tracking', () => {
    if (typeof window === 'undefined') return

    if (!mauticLoaded) {
      const script = document.createElement('script')
      script.src = 'https://m.pdaccess.com/mtc.js'
      script.async = true
      document.body.appendChild(script)
      mauticLoaded = true

      script.onload = () => {
        if (typeof (window as any).mtc !== 'undefined') {
          (window as any).mtc('send', 'pageview')
        }
      }
    } else {
      if (typeof (window as any).mtc !== 'undefined') {
        (window as any).mtc('send', 'pageview')
      }
    }
  })
})
