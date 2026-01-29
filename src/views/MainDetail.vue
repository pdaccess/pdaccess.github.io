<template>
  <div class="has-background-light">
    <section class="section has-background-light">
      <Content v-scroll-reveal.reset />
    </section>
    <br />
    <br />
    <section v-scroll-reveal.reset class="has-background-light">
      <div>
        <div class="section-heading has-text-centered">
          <h3 class="title is-2 text-gray">References & Partners</h3>
          <h4 class="subtitle is-5 text-gray">
            We are working with reputble companies and partners which are the
            best in their fields
          </h4>
        </div>
        <br />
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile is-parent">
              <div
                class="tile is-child box"
                v-for="(image, index) in imagesf2"
                :key="index"
              >
                <figure :class="`image`">
                  <img
                    :src="require(`@/assets/refs/${image.src}`)"
                    style="filter: grayscale(100%); height: 64px"
                  />
                </figure>
              </div>
            </div>
            <div class="tile is-parent">
              <div
                class="tile is-child box"
                v-for="(image, index) in imagesf3"
                :key="index"
              >
                <figure :class="`image`">
                  <img
                    :src="require(`@/assets/refs/${image.src}`)"
                    style="filter: grayscale(100%); height: 64px"
                  />
                </figure>
              </div>
            </div>
            <div class="tile is-parent">
              <div
                class="tile is-child box is-horizontal-center equal-height"
                v-for="(image, index) in imagesf1"
                :key="index"
              >
                <figure :class="`image`" style="width: 120px; margin: auto">
                  <img
                    :src="require(`@/assets/refs/${image.src}`)"
                    style="filter: grayscale(100%); height: 64px"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
    <section class="hero is-large has-background-light">
      <div class="container is-fluid has-margin-top-10">
        <div class="section-heading" style="text-align: center">
          <h3 class="title is-3 text-gray" id="protocols">
            Features for PAM&IAM needs
          </h3>
          <h4 class="subtitle is-5 text-gray">
            Next Generation PAM logic with progressive interfaces
          </h4>
          <div class="container"></div>
        </div>
      </div>
    </section>
    <section class="hero is-meduim">
      <nav class="level mt-20 has-background-white">
        <div class="level-item has-text-centered">
          <div>
            <p class="title text-gray">Authentication</p>
            <p class="heading text-gray mb-10">OAUTH2, SAML</p>
            <p class="heading text-gray mb-10">LDAP</p>
            <figure class="image is-inline-block is-96x96">
              <img
                :src="require(`@/assets/animations/663-fingerprint-scan.gif`)"
              />
            </figure>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div class="">
            <p class="title text-gray">Protocols</p>
            <p class="heading text-gray mb-10">SSH, TELNET, VNC</p>
            <p class="heading text-gray mb-10">RDP, SQL</p>
            <figure class="image is-inline-block is-96x96">
              <img :src="require(`@/assets/animations/plug.gif`)" />
            </figure>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="title text-gray">Platfroms</p>
            <p class="heading text-gray">Mac, Linux,</p>
            <p class="heading text-gray">Windows</p>

            <figure class="image is-inline-block is-96x96">
              <img :src="require(`@/assets/animations/computer.gif`)" />
            </figure>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title text-gray">Vault</p>
            <p class="heading text-gray mb-10">Millitary level Vault</p>
            <p class="heading text-gray mb-10">for sensetive Data storage</p>
            <figure class="image is-inline-block is-96x96">
              <img :src="require(`@/assets/animations/696-padlock-tick.gif`)" />
            </figure>
          </div>
        </div>
      </nav>
      <div class="container is-centered">
        <table
          class="table is-bordered is-striped is-hoverable is-fullwidth mt-10"
        >
          <thead>
            <tr>
              <th style="width: 250px">Feature</th>
              <th style="">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in details" :key="index">
              <td class="">
                <h2>{{ detail.title }}</h2>
              </td>
              <td class=""><span v-html="detail.desc" /></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td>
                <em class="tag has-text-danger is-white">*</em> This features is
                supported in enterprise version
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
//import InfiniteSlideBar from "vue-infinite-slide-bar";
import Content from "./Content";
// import GetInTouch from "@/components/forms/GetInTouch";

export default {
  components: {
    //InfiniteSlideBar,
    Content,
    // GetInTouch
  },
  methods: {},
  data: () => {
    return {
      imagesf1: [
        { src: "iyzico.jpg", size: "is-64x64" },
        { src: "tcsc.jpg", size: "is-64x64" },
        { src: "tt-pilot.png", size: "is-64x64" },
        { src: "akaunting.png", size: "is-64x64" },
      ],
      imagesf2: [
        { src: "turk-telekom.jpg", size: "is-64x64" },
        { src: "turkcell3.png", size: "is-64x64" },
        { src: "yklogo.jpg", size: "is-64x64", sector: "" },

        { src: "turkcell-global-bilgi.png", size: "is-64x64" },
      ],
      imagesf3: [
        { src: "entertech.png", size: "is-64x64" },
        { src: "icube.jpg", size: "is-64x64" },
        { src: "growth-circuit.png", size: "is-64x64" },

        { src: "draper_uni.png", size: "is-64x64" },
      ],
      details: [
        {
          title: "Privileged Session Protocols - Terminal",
          desc: "Rdp, Vnc, Ssh, Telnet, ",
        },
        {
          title: "Privileged Session Protocols - Databases",
          desc: "Postgresql, Mysql, Oracle and MSSQL",
        },
        {
          title: "IAM",
          desc: "Rest, Oauth2, SAML, Tacacs<em class='tag has-text-danger is-white is-nogap'>*</em>, Radius<em class='tag has-text-danger is-white'>*</em>, Ldap<em class='tag has-text-danger is-white'>*</em>",
        },
        {
          title: "Cloud Providers - Public or On-prem",
          desc: "AWS, Azure, GCP. Any other cloud platform which is has a protocol level access ",
        },
        {
          title: "Vault",
          desc: "Military grade, encrypted store.All sensetive data is stored here.",
        },
        {
          title: "Passwordless Connectivity",
          desc: "Using no password or credential type while connections.",
        },
        {
          title: "Shared Password Management",
          desc: "From UI or sharing links",
        },
        {
          title: "Credentails Management",
          desc: "You can share credentails with permission: can_see_password",
        },
        {
          title: "Credentails Management 2",
          desc: "Each credentials has 2 mode: break the glass and check-in check-out mode",
        },
        {
          title: "Application to Application Password Management",
          desc: "Share links with rest calls. supported formats: json, csv, xml. Can be integrated infitive application.",
        },
        {
          title: "Developer integratons - DevSecOps",
          desc: "rest call and cli applicaton. Also, cli application can connect using your favorite application (putty, mstsc etc.)",
        },
        {
          title: "Group Management",
          desc: "Group all credentials, service etc. together and all mangement made in groups.",
        },
        {
          title: "MFA",
          desc: "Supported with 3 different methods: Google Auth, SMS, E-mail",
        },
        {
          title: "Alarms",
          desc: "System wide activites (proxy and logging) regex based and group Managed",
        },
        {
          title: "Notifcation",
          desc: "Controllered by every credentials, group and services. Also user based configuration",
        },
        {
          title: "Deployment Os",
          desc: "Linux servers. Centos, Redhat, Ubuntu. ec2 instances or compute enginees.",
        },

        {
          title: "Deployment Envoriment",
          desc: "Docker or Docker-compose for easy to use. Kubernetes or Openshift Supported",
        },
      ],
    };
  },
};
</script>
<style scoped>
.text-gray {
  color: #9a9a9a;
}

.mt-20 {
  margin-top: 20px;
}

.mb-10 {
  margin-bottom: 10px !important;
}

.card {
  background-color: white;
  border-color: white;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.section.is-medium {
  padding: 2.5rem 2rem;
}
.is-x128 {
  height: 128px;
}
</style>