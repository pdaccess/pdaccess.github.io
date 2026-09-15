---
title: Oauth2 Support for PDAccess
description: PDVault Product Description
author:
  name: pdaccess Team
  bio: pdaccess Team
  image: /logos/pdaccess_black.png
---

# OAUTH2: Seamless Integration for Enterprise Authentication

In the realm of PDAccess, collaboration with services that define themselves is the norm. From a user's standpoint, PDAccess boasts a built-in user authentication database, encrypted for security, and seamlessly authenticates with external systems like LDAP, providing an intuitive Single Sign-On (SSO) experience. But what about external enterprise applications requiring authentication and authorization mechanisms?

## Two Paths to Functionality

1. **Application Implementation:**
   - The straightforward route involves implementing the functionality directly into your application.
   - Feasible for a single application, but if you have a multitude of applications, especially in a microservices architecture, duplicating the same functionality becomes cumbersome.

2. **Single Sign-On (SSO) Solution:**
   - Enter SSO logic, a paradigm embraced by PDAccess. With an SSO system in place, the need for application-level implementation diminishes, providing a flexible environment to segregate Authentication, Authorization, and Accounting (AAA) logic from business logic.

## Embracing OAuth2 Protocol

In the market, the go-to SSO protocol is OAuth2 (with its sister protocol, SAML, on PDAccess's roadmap). We've incorporated OAuth2 Identity Provider Logic into PDAccess, enabling you to seamlessly extend your authentication logic from PDAccess to your enterprise software.

![OAuth2 Protocol](https://api.pdaccess.com/uploads/Screen_Shot_2019_11_21_at_14_11_43_scaled_c6608835b4.jpg)

## Implementation Made Easy

1. **Administration Menu:**
   - Navigate to the Administration menu in PDAccess.
   - Effortlessly create your enterprise application authentication using the OAuth2 protocol.

2. **Framework Support:**
   - Leverage the abundance of frameworks with built-in OAuth2 authentication support, such as Spring Boot ([Learn More](https://spring.io/guides/tutorials/spring-boot-oauth2/)).

Seamlessly integrating OAuth2 into PDAccess opens up a world of possibilities for secure and straightforward enterprise authentication. Say goodbye to redundant implementations and embrace a future where authentication logic flows seamlessly across your ecosystem.

Learn more about OAuth2: [OAuth2 Protocol](https://oauth.net/2/)

#PDAccess #OAuth2 #EnterpriseAuthentication #SSO #SecureIntegration

