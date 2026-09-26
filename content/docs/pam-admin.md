---
title: PAM Administrator Guide
description: Complete guide for PAM administrators managing credential vault, session recording, access policies, and privileged access in PDAccess.
author:
  name: PDAccess Team
  bio: PDAccess Team
---

## Overview

As a PAM (Privileged Access Management) Administrator, your primary responsibility is managing privileged credentials, controlling session access, monitoring sessions, and maintaining the credential vault. PDAccess provides a comprehensive PAM platform that covers credential storage, automatic rotation, session recording, command logging, and access policy management.

This guide covers the scenarios and solutions most relevant to your role.

## Scenario 1: Setting Up the Credential Vault

**The Challenge:** Credentials for servers, databases, and applications are stored in spreadsheets, emails, and local files. When passwords rotate, the entire process is manual and error-prone.

**PDAccess Solution:** Centralized, encrypted credential vault with automatic rotation and injection.

**Steps:**

1. Navigate to **PAM > Credential Vault** in the PDAccess dashboard
2. Click **Add Credential**
3. Select the credential type:
   - Linux/Unix system
   - Windows system
   - Database (PostgreSQL, MySQL, Oracle, SQL Server, etc.)
   - Network device (Cisco, Huawei, etc.)
   - Application (Docker, Kubernetes, CI/CD, etc.)
4. Enter the system details:
   - Hostname or IP address
   - Port (default for the protocol)
   - Protocol (SSH, RDP, VNC, SQL, etc.)
5. Enter the current credentials (username and password)
6. Set the rotation schedule (daily, weekly, monthly, quarterly)
7. Configure access permissions (which users/groups can access this credential)
8. Save the credential

**Vault Features:**

- AES-GCM encryption for all stored credentials
- Automatic password generation and rotation
- Credential injection without exposing passwords to users
- Version history for all credential changes
- Access logging for all credential operations

## Scenario 2: Configuring Automatic Password Rotation

**The Challenge:** Manual password rotation is time-consuming, error-prone, and often skipped for systems that are hard to update.

**PDAccess Solution:** Fully automatic password rotation that updates credentials in the destination system and the vault simultaneously.

**Steps:**

1. Navigate to **PAM > Rotation Policies**
2. Click **Create Policy**
3. Configure the rotation policy:
   - Select the systems or credential groups to rotate
   - Set the rotation frequency (daily, weekly, monthly, quarterly, custom)
   - Configure password complexity requirements (length, character types)
   - Set maintenance windows (when rotation can occur)
4. Enable the policy

**Rotation Process:**

1. PDAccess generates a new strong password
2. The platform connects to the destination system using the current credentials
3. The password is updated on the destination system
4. The new password is encrypted and stored in the vault
5. The old credentials are invalidated
6. Authorized users are notified of the rotation

**Supported Systems for Automatic Rotation:**

- Linux/Unix systems (SSH passwords, sudo passwords)
- Windows systems (local admin, domain credentials)
- PostgreSQL, MySQL, Oracle, SQL Server databases
- Redis, MongoDB, Elasticsearch
- Cisco network devices
- Custom applications (via API integration)

## Scenario 3: Managing Session Access

**The Challenge:** Administrators need access to production systems, but granting direct access exposes credentials and provides no visibility into their actions.

**PDAccess Solution:** Proxy-based session management that routes all connections through PDAccess, eliminating credential exposure and providing complete session visibility.

**Connecting to a System:**

1. Administrator navigates to **PAM > Sessions**
2. Selects the target system from the asset list
3. Clicks **Connect**
4. PDAccess retrieves the credentials from the vault (user never sees them)
5. The session is established through the PDAccess proxy
6. The administrator works normally, unaware that credentials are being injected automatically

**Session Management Features:**

- Video recording of every session
- Text logging of all commands and output
- Real-time session monitoring by administrators
- Instant session termination
- Session tagging and search
- Session replay for incident investigation

## Scenario 4: Configuring Access Policies

**The Challenge:** All administrators have the same level of access to all systems. There's no concept of least privilege or time-bound access.

**PDAccess Solution:** Granular, role-based access policies with time boundaries and approval workflows.

**Creating an Access Policy:**

1. Navigate to **PAM > Access Policies**
2. Click **Create Policy**
3. Configure the policy:
   - **Scope**: Select which systems the policy applies to (all production servers, specific database, etc.)
   - **Roles**: Define which user roles can access under this policy
   - **Duration**: Set the maximum session length (30 minutes, 4 hours, 8 hours, etc.)
   - **Approval**: Require approval for access (no approval, manager approval, dual approval)
   - **Time Window**: Restrict access to specific hours or days
   - **IP Restrictions**: Limit access to specific IP ranges
4. Save and enable the policy

**Policy Examples:**

| Policy Name | Scope | Duration | Approval | Time Window |
|-------------|-------|----------|----------|-------------|
| Standard Admin | All servers | 8 hours | None | Business hours |
| Emergency Access | Production DB | 1 hour | Dual approval | Any time |
| Contractor Access | Specific app | 4 hours | Manager | Business hours only |
| Auditor Access | All systems | 2 hours | None | Business hours |

## Scenario 5: Monitoring and Recording Sessions

**The Challenge:** Administrators access production systems, but security teams have no visibility into what they're doing. When something goes wrong, there's no record of events.

**PDAccess Solution:** Comprehensive session recording and monitoring with video playback and command-level audit trails.

**Monitoring Active Sessions:**

1. Navigate to **PAM > Live Sessions**
2. View all active privileged sessions with:
   - Administrator name and role
   - Connected system and protocol
   - Session start time and duration
   - Source IP address
   - Live video preview
3. Click any session to see the full live view

**Reviewing Past Sessions:**

1. Navigate to **PAM > Session History**
2. Search sessions by:
   - Administrator name
   - Connected system
   - Date range
   - Tags
3. Click any session to play the video recording
4. View the command log with timestamps and output

**Session Features:**

- **Video Recording**: Full-screen video capture of every session
- **Command Logging**: Every command with timestamp, output, and exit code
- **Searchable Commands**: Search command logs for specific keywords
- **Session Tagging**: Add tags to sessions for easier searching
- **Session Export**: Download recordings and logs for forensic analysis

## Scenario 6: Managing Linux Agent Security

**The Challenge:** Your Linux servers need per-user authentication, command logging, and audit trails, but managing SSH keys across thousands of servers is a nightmare.

**PDAccess Solution:** PDAccess Linux Agent eliminates SSH key management entirely while providing comprehensive security controls.

**Deploying the Linux Agent:**

1. Navigate to **PAM > Linux Agent**
2. Download the agent package for your distribution (RPM or DEB)
3. Install on target servers:
   ```bash
   # RHEL/CentOS/Rocky
   sudo yum install pdaccess-agent.rpm
   
   # Ubuntu/Debian
   sudo apt install ./pdaccess-agent.deb
   ```
4. Configure the agent:
   - Enter the PDAccess server URL
   - Set the agent authentication token
   - Configure logging level
5. Verify the agent is communicating with PDAccess
6. Assign access policies to servers with the agent installed

**Linux Agent Features:**

- Automatic authentication (no SSH keys needed)
- Per-user command logging
- Command authorization (restrict which commands users can run)
- Session recording
- Compliance reporting

## Scenario 7: Generating Compliance Reports

**The Challenge:** Auditors require evidence of privileged access controls, session recording, and credential management. Compiling this evidence manually takes weeks.

**PDAccess Solution:** Pre-built compliance reports that satisfy major frameworks.

**Steps:**

1. Navigate to **PAM > Reports**
2. Select the report type:
   - **Access Report**: Who accessed what, when, and for how long
   - **Session Report**: Summary of all recorded sessions
   - **Command Report**: All commands executed on monitored systems
   - **Credential Rotation Report**: Password rotation history
   - **Policy Violation Report**: Access policy violations and attempts
   - **Compliance Report**: Pre-built report for PCI-DSS, SOX, HIPAA, ISO 27001
3. Set the reporting period
4. Click **Generate Report**
5. Review and export the report (PDF, CSV, JSON)

## Best Practices for PAM Administrators

1. **Enable automatic rotation** — Rotate all credentials on a defined schedule
2. **Use proxy-based sessions** — Never expose credentials directly to administrators
3. **Record all sessions** — Video and text recording for every privileged session
4. **Enforce least privilege** — Grant minimum access needed for each role
5. **Require approval for sensitive systems** — Dual approval for production databases
6. **Review sessions regularly** — Schedule weekly session review for critical systems
7. **Test rotation** — Verify automatic rotation works correctly after each update
8. **Maintain agent coverage** — Install Linux Agent on all Linux servers
9. **Backup vault configuration** — Regularly export and backup access policies and rotation schedules
10. **Conduct access reviews** — Quarterly review of all access policies and credentials
