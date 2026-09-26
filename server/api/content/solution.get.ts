export default defineEventHandler((event) => {
  const slug = getQuery(event).slug || ''
  
  return {
    id: slug,
    _path: `/solution/${slug}`,
    title: `Solution: ${slug}`,
    description: `Solution details for ${slug}`,
    body: `<h1>Solution: ${slug}</h1><p>Solution details for ${slug}.</p>`,
    time: '2025-01-15'
  }
})
