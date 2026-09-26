export default defineEventHandler((event) => {
  // Nuxt Content internal query API - returns empty gracefully
  const body = readBody(event)
  return []
})
