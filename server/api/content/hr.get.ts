export default defineEventHandler((event) => {
  const slug = getQuery(event).slug || ''
  
  if (slug === 'cybersecurity_developer') {
    return {
      id: 'cybersecurity_developer',
      _path: '/hr/cybersecurity_developer',
      title: 'Cybersecurity Developer',
      description: 'Develop and maintain cybersecurity solutions',
      body: '<h1>Cybersecurity Developer</h1><p>Job description for cybersecurity developer position.</p>'
    }
  }
  
  if (slug === 'cybersecurity_validation_engineer') {
    return {
      id: 'cybersecurity_validation_engineer',
      _path: '/hr/cybersecurity_validation_engineer',
      title: 'Cybersecurity Validation Engineer',
      description: 'Validate and test cybersecurity systems',
      body: '<h1>Cybersecurity Validation Engineer</h1><p>Job description for cybersecurity validation engineer position.</p>'
    }
  }
  
  return {
    id: slug,
    _path: `/hr/${slug}`,
    title: `HR: ${slug}`,
    description: `HR position for ${slug}`,
    body: `<h1>HR: ${slug}</h1><p>Job details for ${slug}.</p>`
  }
})
