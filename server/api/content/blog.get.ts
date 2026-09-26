export default defineEventHandler((event) => {
  const slug = getQuery(event).slug || 'hello-pdaccess'
  
  return {
    id: slug,
    slug: slug,
    _path: `/blog/${slug}`,
    title: 'Hello PDAccess',
    description: 'Introducing PDAccess - the next generation privileged access management platform.',
    content: 'Welcome to PDAccess documentation...',
    body: '<p>This is a placeholder blog post. PDAccess is a zero-knowledge privileged access management platform that provides secure access to your infrastructure.</p>',
    time: '2025-03-01'
  }
})
