export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug') || ''
  const type = getQuery(event).type || 'product'
  
  return {
    id: slug,
    _path: `/${type}/${slug}`,
    title: `${type.charAt(0).toUpperCase() + type.slice(1)}: ${slug}`,
    description: `Content for ${slug}`,
    body: `<h1>${type.charAt(0).toUpperCase() + type.slice(1)}: ${slug}</h1><p>Content for ${slug}.</p>`,
    time: '2025-09-01'
  }
})
