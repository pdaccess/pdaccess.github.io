export default defineEventHandler(() => {
  return [
    {
      id: 'introduction',
      _path: '/docs/introduction',
      title: 'Introduction',
      description: 'Getting started with PDAccess - zero-knowledge privileged access management',
      body: '<h1>Introduction to PDAccess</h1><p>PDAccess is a zero-knowledge privileged access management platform...</p>'
    },
    {
      id: 'security-admin',
      _path: '/docs/security-admin',
      title: 'Security Administrator Guide',
      description: 'Complete guide for security administrators',
      body: '<h1>Security Administrator Guide</h1><p>This guide covers security administration tasks...</p>'
    },
    {
      id: 'iam-admin',
      _path: '/docs/iam-admin',
      title: 'IAM Administrator Guide',
      description: 'Identity and access management guide',
      body: '<h1>IAM Administrator Guide</h1><p>Identity and access management setup and configuration...</p>'
    },
    {
      id: 'pam-admin',
      _path: '/docs/pam-admin',
      title: 'PAM Administrator Guide',
      description: 'Privileged access management guide',
      body: '<h1>PAM Administrator Guide</h1><p>Privileged access management configuration and best practices...</p>'
    }
  ]
})
