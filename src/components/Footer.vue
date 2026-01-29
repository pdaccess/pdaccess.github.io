<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-mobile is-multiline">
        <div class="column">
          <div class="columns is-mobile is-multiline">
            <div class="column">
              <div class="columns is-multiline is-vcentered">
                <div class="column is-full has-text-right">
                  <figure class="image is-96x96">
                    <img :src="require('@/assets/logos/logo_pda_b.svg')" alt="PDAccess" />
                  </figure>
                </div>
                <div class="column is-full">
                  <h3 class="has-text-left subtitle is-6">
                    PDAccess is a Privleged Access Security and Identity Access
                    Management Software for both cloud and on-perm usage
                  </h3>
                </div>
                <!-- <div class="column is-full">
                  <p class="has-text-left subtitle is-6">
                    ©
                    
                    {{ new Date().getFullYear() }}
                    
                    PDAccess. All rights reserved.
                  </p>
                </div> -->
              </div>
            </div>
            <div class="column">
              <div class="menu">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <div class="tile is-child">
                      <div class="content">
                        <nuxt-link to="/product/pdaccess_cloud_security">Privileged Session Management</nuxt-link>
                      </div>
                    </div>
                    <div class="tile is-child">
                      <div class="content">
                        <nuxt-link to="/product/pdaccess_linux_host_security">Linux Direct Audit&Security</nuxt-link>
                      </div>
                    </div>
                    <div class="tile is-child">
                      <div class="content">
                        <nuxt-link to="/product/pdaccess_pdvault">Password Vault - SAPM</nuxt-link>
                      </div>
                    </div>
                    <div class="tile is-child">
                      <div class="content">
                        <nuxt-link to="/product/pdaccess_sso">Identity and Access Management</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="menu">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <div class="tile is-child">
                      <nuxt-link to="/products">
                        <div class="columns is-vcentered is-mobile">
                          <div class="column is-2">
                            <span class="icon has-text-link is-medium">
                              <font-awesome-icon :icon="['fas', 'desktop']" />
                            </span>
                          </div>
                          <div class="column">Products</div>
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="tile is-child">
                      <nuxt-link to="/hr">
                        <div class="columns is-vcentered is-mobile">
                          <div class="column is-2">
                            <span class="icon has-text-link is-medium">
                              <font-awesome-icon :icon="['fas', 'user-graduate']" />
                            </span>
                          </div>
                          <div class="column">Jobs</div>
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="tile is-child">
                      <nuxt-link to="/getstarted">
                        <div class="columns is-vcentered is-gapless">
                          <div class="column is-2">
                            <span class="icon has-text-link is-medium">
                              <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
                            </span>
                          </div>
                          <div class="column">Get&nbsp;Started</div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="menu">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <div class="tags">
                      <span class="tag is-danger is-light">
                        Privileged Access Magement</span>
                      <span class="tag is-danger is-light">
                        Cloud Access Securiy</span>
                      <span class="tag is-danger is-light">
                        Password Maintanence</span>
                      <span class="tag is-danger is-light">
                        Identity Access Management</span>
                      <span class="tag is-danger is-light"> Open Source</span>
                      <span class="tag is-danger is-light">
                        Shared Password Management</span>
                      <span class="tag is-danger is-light">
                        Application to Application Password Maangement</span>
                      <span class="tag is-danger is-light">
                        Passwordless connectiviy</span>
                      <span class="tag is-danger is-light">
                        Password Vault</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <hr />
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p class="has-text-left subtitle is-6">
                  Copyright ©
                  <!-- -->
                  {{ new Date().getFullYear() }}
                  <!-- -->
                  PDAccess. All rights reserved.
                </p>
              </div>

              <div class="level-item">
                <em class="is-primary">&nbsp;&nbsp;</em>
                <p class="has-text-left subtitle is-6">
                  <nuxt-link to="/about">About</nuxt-link>
                </p>
                <em class="is-primary">&nbsp;&#124;&nbsp;</em>
                <p class="has-text-left subtitle is-6">
                  <nuxt-link to="/terms">Terms</nuxt-link>
                </p>
                <em class="is-primary">&nbsp;&#124;&nbsp;</em>
                <p class="has-text-left subtitle is-6">
                  <nuxt-link to="/privacy">Privacy</nuxt-link>
                </p>
                <em class="is-primary">&nbsp;&#124;&nbsp;</em>
                <p class="has-text-left subtitle is-6">
                  <nuxt-link to="/contacts">Contact</nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>
<!-- style scoped>
ul.is-unstyled {
  list-style: none;
  margin: 0;
  padding: 0;
}
ol {
  list-style-type: none;
}
.footer {
  color: #f2f4f8;
  border-top: 1px solid #23263c;
  background-color: transparent;
  padding: 3rem 1.5rem 6rem;
}

.footer .title {
  font-size: 1.2rem;
}

@media screen and (max-width: 1023px) {
  .footer img {
    width: 80%;
  }

  .footer .footer-list {
    font-size: 0.8rem;
  }
}

.footer {
  padding-bottom: 4rem;
}
</style -->
