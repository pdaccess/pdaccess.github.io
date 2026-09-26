export default defineEventHandler((event) => {
  const slug = getQuery(event).slug || ''
  
  return {
    id: slug,
    _path: `/product/${slug}`,
    title: `Product: ${slug}`,
    description: `Product details for ${slug}`,
    body: `<h1>Product: ${slug}</h1><p>Product details for ${slug}.</p>`,
    time: '2025-06-01'
  }
})
