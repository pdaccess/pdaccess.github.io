<template>
  <section class="section pricing is-medium is-success" id="pricing">
    <div class="pricing-table">
      <div
        class="pricing-plan"
        @mouseover="hover0 = true"
        @mouseleave="hover0 = false"
        v-bind:class="{ 'is-active': hover0 }"
      >
        <div class="plan-header">Teams</div>
        <div class="plan-price"></div>
        <div class="plan-items">
          <div class="plan-item">
            Monthly Charge (Annual option is possible)
          </div>
          <div class="plan-item">0 - 5 Member</div>
          <div class="plan-item">
            Central Access Management with Secure Connectivity
          </div>
          <div class="plan-item">Terminal Proxy (SSH, Telnet, RDP, VNC)</div>
          <div class="plan-item">
            Database Proxy (Oracle, Postgresl, MSSQL, Mysql)
          </div>
          <div class="plan-item">Activity Monitor</div>
          <div class="plan-item">Desktop Client (Mac, Win, Linux)</div>
          <div class="plan-item">Military Grade Vault</div>
        </div>
        <div class="plan-footer">
          <button class="button is-fullwidth" @click="routeToContact">
            Choose
          </button>
        </div>
      </div>

      <div
        class="pricing-plan is-warning"
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
        v-bind:class="{ 'is-active': hover1 }"
      >
        <div class="plan-header">Startups</div>
        <div class="plan-price"></div>
        <div class="plan-items">
          <div class="plan-item">
            Monthly Charge (Annual option is possible)
          </div>
          <div class="plan-item">5 - 20 Member</div>
          <div class="plan-item">Video Record For Sessions</div>
          <div class="plan-item">Time Based Access</div>
          <div class="plan-item">Time window Access</div>
          <div class="plan-item">Policy Enforcement for Sessions</div>
          <div class="plan-item">Oauth2 Idp Provider</div>
          <div class="plan-item">API Support</div>
        </div>
        <div class="plan-footer">
          <button class="button is-fullwidth" @click="routeToContact">
            Choose
          </button>
        </div>
      </div>
      <div
        class="pricing-plan is-danger"
        @mouseover="hover3 = true"
        @mouseleave="hover3 = false"
        v-bind:class="{ 'is-active': hover3 }"
      >
        <div class="plan-header">Enterprises</div>
        <div class="plan-price"></div>
        <div class="plan-items">
          <div class="plan-item">On-Prem install</div>
          <div class="plan-item">Native Terminal & Database Proxy</div>
          <div class="plan-item">Hardened Linux Agent</div>
          <div class="plan-item">LDAP Proxy</div>
          <div class="plan-item">IAM Entegration (LDAP)</div>
          <div class="plan-item">Geo Based Access</div>
          <div class="plan-item">Automation (Beta)</div>
          <div class="plan-item">SAML IdS Provider (Beta)</div>
        </div>
        <div class="plan-footer">
          <button class="button is-fullwidth" @click="routeToContact">
            Choose
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "price",
  data() {
    return {
      hover0: false,
      hover1: false,
      hover2: false,
      hover3: false,
    };
  },
  methods: {
    routeToContact() {
      this.$router.push({ name: "contacts" });
    },
  },
};
</script>