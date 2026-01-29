<template>
  <div>
    <Section>
      <div class="container has-text-left is-primary">
        <h2 class="title is-2">Open-Source Privileged Access Management</h2>
        <h4 class="subtitle is-5">
          PDAccess offers compliant agile, secure and next generation <b>PAM&IAM</b> solution
          PDAccess offers compliant agile, secure and next generation <b>PAM&IAM</b> solution
          for <b>CLOUDS</b> and <b>ON-PREM</b> environments
        </h4>
        <div class="subtitle tags">
          <span class="tag is-info is-light"> #PAM </span>
          <span class="tag is-info is-light"> #IAM </span>
          <span class="tag is-info is-light"> #CloudSecurity </span>
          <span class="tag is-info is-light"> #OpenSource </span>
        </div>
        <h4 class="subtitle is-4"></h4>
        <div class="tile is-ancestor has-text-center">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                  <a class="button is-danger" href="#protocols" v-show="!showEmail">
                    More Info
                  </a>
                  <button :class="['is-success',
                    { 'is-success': !showEmail, 'is-success': showEmail },
                    'button',
                  ]" @click="sendEmail">
                    {{ showEmail ? "Send" : emailText }}
                  </button>
                  <button class=" button is-danger" @click="showEmail = false" v-show="showEmail">
                    Cancel
                  </button>
                </article>
                <article class="tile is-child" v-show="showEmail">
                  <div class="box has-background-primary">
                    <div class="field">
                      <div :class="['control', 'has-icons-left', 'has-icons-right',]">
                        <input :class="['input', { 'is-danger': showErrorMessage }]" type="email" v-model="email"
                          placeholder="Enter your e-mail address" />
                        <span class="icon is-small is-left">
                          <font-awesome-icon :icon="['fa', 'envelope']" />
                        </span>
                        <span class="icon is-small is-right">
                          <font-awesome-icon :icon="['fa', 'check']" />
                        </span>
                      </div>
                      <p class="help is-danger" v-show="showErrorMessage">{{ errorMessage }}</p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" v-model="firstName" placeholder="Fist Name" />
                        <span class="icon is-small is-left">
                          <font-awesome-icon :icon="['fa', 'user']" />
                        </span>
                        <span class="icon is-small is-right">
                          <font-awesome-icon :icon="['fa', 'check']" />
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" v-model="lastName" placeholder="Last Name" />
                        <span class="icon is-small is-left">
                          <font-awesome-icon :icon="['fa', 'user']" />
                        </span>
                        <span class="icon is-small is-right">
                          <font-awesome-icon :icon="['fa', 'check']" />
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" v-model="company" placeholder="Name of your company" />
                        <span class="icon is-small is-left">
                          <font-awesome-icon :icon="['fa', 'building']" />
                        </span>
                        <span class="icon is-small is-right">
                          <font-awesome-icon :icon="['fa', 'check']" />
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-four-fifths">
            <div style="position: relative; overflow: hidden">
              <div style="width: 100%; padding-bottom: 68.4874%"></div>

              <picture>
                <img sizes="(max-width: 1000px) 100vw, 1000px" :src="require('@/assets/screen/web_login2.png')" alt=""
                  loading="lazy" style="
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 1;
                    transition: none 0s ease 0s;
                  " />
                " />
              </picture>
              <picture>
                <img sizes="(max-width: 1000px) 100vw, 1000px" :src="require('@/assets/screen/terminal_login2.png')"
                  alt="" loading="lazy" style="
                    position: absolute;
                    top: 20px;
                    right: 50px;
                    width: 60%;
                    height: 60%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 1;
                    transition: none 0s ease 0s;
                  " />
              </picture>
              <picture>
                <img sizes="(max-width: 1000px) 100vw, 1000px" :src="require('@/assets/screen/cli_login2.png')" alt=""
                  loading="lazy" style="
                    position: absolute;
                    top: 60px;
                    right: 0px;
                    width: 50%;
                    height: 50%;
                    object-fit: cover;
                    object-position: center center;
                    opacity: 1;
                    transition: none 0s ease 0s;
                  " />
              </picture>
              <noscript>
                <picture>
                  <source type="image/webp" srcset="
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/accd9/app-v2_1_0-dark.webp  250w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/8df11/app-v2_1_0-dark.webp  500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/23e94/app-v2_1_0-dark.webp 1000w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/9dc04/app-v2_1_0-dark.webp 1500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/58ed3/app-v2_1_0-dark.webp 1904w
                    " sizes="(max-width: 1000px) 100vw, 1000px" />
                  <source srcset="
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/f2e94/app-v2_1_0-dark.png  250w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/ede32/app-v2_1_0-dark.png  500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/c4f79/app-v2_1_0-dark.png 1000w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/f060d/app-v2_1_0-dark.png 1500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/487aa/app-v2_1_0-dark.png 1904w
                    " sizes="(max-width: 1000px) 100vw, 1000px" />
                  <img loading="lazy" sizes="(max-width: 1000px) 100vw, 1000px" srcset="
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/f2e94/app-v2_1_0-dark.png  250w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/ede32/app-v2_1_0-dark.png  500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/c4f79/app-v2_1_0-dark.png 1000w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/f060d/app-v2_1_0-dark.png 1500w,
                      /static/34b1c5a5ebea0fb48198de92bdb84aae/487aa/app-v2_1_0-dark.png 1904w
                    " src="/static/34b1c5a5ebea0fb48198de92bdb84aae/c4f79/app-v2_1_0-dark.png" alt="" style="
                      position: absolute;
                      top: 0;
                      left: 0;
                      opacity: 1;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      object-position: center;
                    " />
                </picture>
              </noscript>
            </div>
            <link itemprop="screenshot" href="/static/34b1c5a5ebea0fb48198de92bdb84aae/c4f79/app-v2_1_0-dark.png" />
          </div>
          <div class="column"></div>
        </div>
      </div>
    </Section>

    <!-- <Timeline /> -->
    <MainDetail>
      <!-- <Price /> -->
    </MainDetail>

    <section class="section is-background-light">
      <br />
    </section>
  </div>
</template>
<script>
import MainDetail from "@/views/MainDetail";
import Section from "@/components/Section";

export default {
  name: "Main",
  layout: "main",
  components: {
    MainDetail,
    Section,
  },
  mounted() {
    this.$tracking();
  },
  data() {
    return {
      showEmail: false,
      showErrorMessage: false,
      errorMessage: null,
      email: null,
      firstName: null,
      lastName: null,
      company: null,
      emailText: "Demo Request",
    };
  },
  methods: {
    async sendEmail() {
      if (this.showEmail || this.email) {

        if (!this.email) {
          this.errorMessage = "please enter valid email address"
          this.showErrorMessage = true
          return
        }
        if (!this.firstName) {
          this.errorMessage = "please enter valid firstName "
          this.showErrorMessage = true
          return
        }
        if (!this.lastName) {
          this.errorMessage = "please enter valid lastName"
          this.showErrorMessage = true
          return
        }
        if (!this.company) {
          this.errorMessage = "please enter valid company"
          this.showErrorMessage = true
          return
        }
        this.showErrorMessage = false
        let data = new FormData();
        data.append("mauticform[email]", this.email);
        data.append("mauticform[first_name]", this.firstName);
        data.append("mauticform[last_name]", this.lastName);
        data.append("mauticform[company]", this.company);

        data.append("mauticform[formId]", 10);
        data.append("mauticform[return]", "https://www.pdaccess.com");
        data.append("mauticform[formName]", "pdaaccountformnew");
        data.append("mauticform[messenger]", "1");
        this.$axios
          .post("https://m.pdaccess.com/form/submit?formId=10", data, {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          })
          .then((result) => {
            console.log(result);
            this.email = null;
            this.showEmail = !this.showEmail;
            this.emailText = "Check your email!";
            window.location = "https://www.pdacess.com/thanks"
          })
          .catch((err) => {
            console.log(err);
            this.showErrorMessage = true
            this.errorMessage = err
          });
      } else {
        this.showEmail = !this.showEmail;
        this.showErrorMessage = !this.showErrorMessage;
      }
    },
  },
};
</script>