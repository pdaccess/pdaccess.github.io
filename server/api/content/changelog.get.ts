export default defineEventHandler((event) => {
  const slug = getQuery(event).slug || ''
  
  return {
    id: slug,
    _path: `/changelog/${slug}`,
    title: `Changelog: ${slug}`,
    description: `Changelog for ${slug}`,
    body: `<h1>Changelog ${slug}</h1><p>Changelog content for ${slug}.</p>`,
    time: '2025-09-01'
  }
})
