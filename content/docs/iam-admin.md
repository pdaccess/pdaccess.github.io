---
title: IAM Administrator Guide
description: Complete guide for IAM administrators managing identities, authentication, directory integration, and access provisioning in PDAccess.
author:
  name: PDAccess Team
  bio: PDAccess Team
---

## Overview

As an IAM (Identity and Access Management) Administrator, your responsibility is managing user identities, authentication mechanisms, directory integrations, and access provisioning across the organization. PDAccess provides a centralized identity platform that unifies authentication for all enterprise applications and infrastructure systems.

This guide covers the scenarios and solutions most relevant to your role.

## Scenario 1: Integrating Active Directory with PDAccess

**The Challenge:** Your organization uses Active Directory for user management, but applications and infrastructure systems have separate user databases. Users authenticate differently everywhere, and administrators must manage multiple user directories.

**PDAccess Solution:** Full AD integration with proxy authentication, group synchronization, and OU-based access policies.

**Steps:**

1. Navigate to **IAM > Directory Integration** in the PDAccess dashboard
2. Click **Add Directory** and select **Active Directory**
3. Configure the connection:
   - Enter the AD domain controller address
   - Provide bind credentials (service account with read access)
   - Enable LDAPS for encrypted communication
4. Select Organizational Units (OUs) to import
5. Configure group synchronization settings
6. Test the connection and import users
7. Enable automatic synchronization (recommended: every 15 minutes)

**Supported AD Features:**

- User import from AD with attributes (name, email, department, group membership)
- Group synchronization (local groups mapped to AD groups)
- OU-based access policies (access rules applied per OU)
- Password synchronization (PDAccess credentials stay in sync with AD)
- Proxy authentication (PDAccess forwards authentication to AD)

## Scenario 2: Setting Up OAuth2 Authentication for Applications

**The Challenge:** Your organization uses multiple SaaS applications, each with its own authentication mechanism. Employees manage dozens of application passwords, and IT has no visibility into access patterns.

**PDAccess Solution:** OAuth2-based single sign-on that centralizes authentication across all applications.

**Steps:**

1. Navigate to **IAM > OAuth2 Applications** in the PDAccess dashboard
2. Click **Register Application**
3. Configure the OAuth2 client:
   - Enter application name and description
   - Set redirect URIs (the URLs where OAuth2 responses are sent)
   - Select grant types (Authorization Code with PKCE recommended)
   - Configure token lifetime and refresh token settings
4. Generate client ID and client secret
5. Provide these credentials to the application development team
6. Configure the application to use PDAccess as the identity provider

**OAuth2 Features:**

- PKCE (Proof Key for Code Exchange) for public clients
- Refresh tokens for persistent sessions
- Scoped access (limit what the application can do)
- Token revocation for instant access denial
- OIDC (OpenID Connect) for user identity verification

## Scenario 3: Configuring SAML SSO for Enterprise Applications

**The Challenge:** Enterprise applications require SAML-based SSO for authentication. Setting up SAML for each application is complex and error-prone.

**PDAccess Solution:** PDAccess acts as the identity provider (IdP) for SAML, simplifying SSO configuration.

**Steps:**

1. Navigate to **IAM > SAML Applications**
2. Click **Add Application**
3. Configure the SAML application:
   - Enter the application name
   - Set the ACS (Assertion Consumer Service) URL
   - Configure name ID format (emailAddress recommended)
   - Select attributes to include in the SAML assertion
4. Generate the SAML metadata document
5. Provide the metadata URL and signing certificate to the application administrator
6. Map PDAccess user attributes to SAML attributes
7. Test the SSO flow

**SAML Features:**

- IdP-initiated and SP-initiated SSO flows
- Assertion signing and encryption
- Attribute mapping (user, email, groups, custom attributes)
- Single logout (SLO) support
- Session timeout configuration

## Scenario 4: Managing LDAP Integration

**The Challenge:** Your organization uses LDAP for directory services, and several legacy applications require LDAP authentication. Managing separate user databases for each application is unsustainable.

**PDAccess Solution:** PDAccess integrates with LDAP directories for centralized user authentication and group management.

**Steps:**

1. Navigate to **IAM > LDAP Integration**
2. Click **Add LDAP Directory**
3. Configure the connection:
   - Enter the LDAP server URL (ldaps:// for encrypted)
   - Provide the bind DN and credentials
   - Set the base DN for user searches
   - Configure the user search filter (e.g., `(objectClass=posixAccount)`)
4. Map LDAP attributes to PDAccess user fields
5. Test the connection and import users
6. Enable automatic synchronization

**LDAP Features:**

- LDAPS (LDAP over SSL/TLS) for encrypted communication
- Group membership synchronization
- Attribute mapping for user profiles
- Search filter customization
- Multi-Directory support (connect to multiple LDAP directories)

## Scenario 5: Provisioning and Revoking Access

**The Challenge:** When employees join, transfer, or leave the organization, provisioning and revoking access across systems is manual, slow, and error-prone.

**PDAccess Solution:** Automated provisioning and revocation workflows that ensure access is always current.

**New Hire Onboarding:**

1. User is added to Active Directory / LDAP
2. PDAccess automatically imports the user within 15 minutes
3. Group-based access policies are applied automatically
4. User receives an invitation to set up their PDAccess account
5. Upon first login, the user accesses all applications they're authorized for

**Employee Transfer:**

1. User is moved to a new group in Active Directory
2. PDAccess syncs the group change and updates access policies
3. Previous access is revoked; new access is granted automatically

**Offboarding:**

1. User's AD account is disabled
2. PDAccess detects the disabled account and revokes all access
3. Active sessions are terminated immediately
4. All user credentials in the vault are invalidated

## Scenario 6: Enforcing Multi-Factor Authentication

**The Challenge:** Single-factor authentication is insufficient for privileged accounts. You need MFA that works across all systems without disrupting users.

**PDAccess Solution:** Built-in MFA with TOTP, SMS, and push notification support.

**Steps:**

1. Navigate to **IAM > MFA Settings**
2. Configure MFA requirements:
   - Enable MFA for all privileged accounts (recommended)
   - Select MFA methods (TOTP recommended as primary)
   - Set MFA enforcement level (required for login, required for sensitive actions)
3. Configure MFA backup codes
4. Communicate MFA requirements to users
5. Users register their MFA device through the PDAccess portal

**MFA Features:**

- TOTP (Time-based One-Time Password) — Google Authenticator, Authy, Microsoft Authenticator
- SMS-based verification
- Push notification approval
- Backup codes for account recovery
- MFA bypass for trusted devices (with caution)
- Adaptive MFA (require additional verification based on risk)

## Best Practices for IAM Administrators

1. **Use LDAPS, not LDAP** — Always use encrypted connections to directory services
2. **Enable MFA for all privileged accounts** — Non-negotiable for security
3. **Sync directories frequently** — Set synchronization to 15 minutes or less
4. **Use group-based policies** — Assign access based on AD/LDAP groups, not individual users
5. **Test provisioning workflows** — Regularly test onboarding, transfer, and offboarding processes
6. **Document all integrations** — Maintain a registry of all OAuth2, SAML, and LDAP integrations
7. **Review access quarterly** — Audit user access and remove unnecessary permissions
