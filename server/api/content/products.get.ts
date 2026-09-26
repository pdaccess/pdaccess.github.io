export default defineEventHandler(() => {
  const products = [
    {
      slug: 'pdaccess_linux_host_security',
      _path: '/product/pdaccess_linux_host_security',
      title: 'Linux Host Security',
      description: 'Audit and control every command on your Linux servers with per-user authentication, no shared accounts, and full session recording.',
      features: ['Per-user authentication, no shared accounts', 'Command-level authorization', 'Full command logging and session recording', 'Agent-based SSH proxy', 'Supports RHEL, CentOS, Ubuntu, Debian, SUSE'],
      time: '2025-06-01'
    },
    {
      slug: 'pdaccess_cloud_security',
      _path: '/product/pdaccess_cloud_security',
      title: 'Cloud Security',
      description: 'Proxy-based secure access to cloud and on-premises infrastructure. No exposed interfaces, no VPN tunnels required.',
      features: ['Proxy-based access (no exposed interfaces)', 'SSH, RDP, VNC, Telnet, Terminal, SQL protocols', 'Video + text session recording', 'Native SQL client via proxy', 'AWS, Azure, GCP, on-prem, hybrid'],
      time: '2025-05-01'
    },
    {
      slug: 'pdaccess_sso',
      _path: '/product/pdaccess_sso',
      title: 'Single Sign-On',
      description: 'Centralized identity management with OAuth2, SAML 2.0, and OIDC. LDAP and Active Directory integration included.',
      features: ['OAuth2, SAML 2.0, OIDC authentication', 'Active Directory, LDAP/LDAPS directory sync', 'Local, AD, Custom Identity providers', 'Group sync + role-based access', 'Java, .NET, Node.js, Python, PHP frameworks'],
      time: '2025-04-01'
    },
    {
      slug: 'pdaccess_pdvault',
      _path: '/product/pdaccess_pdvault',
      title: 'PDVault',
      description: 'Cryptographic secret management with AES-GCM encryption, automatic password rotation, and credential injection.',
      features: ['AES-GCM encryption at rest and in transit', 'Automatic credential rotation on schedule', 'Credentials never exposed to users', 'Linux, Windows, DBs, Network support', 'PostgreSQL, MySQL, Oracle, SQL Server'],
      time: '2025-03-01'
    }
  ]
  return products
})
