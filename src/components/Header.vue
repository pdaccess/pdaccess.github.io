<template>
  <nav :class="[{ 'is-fixed-top': isFixed }, 'navbar', 'is-primary']" role="navigation" aria-label="main navigation">
    <div class="container is-fluid">
      <div class="navbar-brand">
        <nuxt-link :class="['navbar-item', { 'bg-white': isFixed }]" to="/">
          <img :src="require('@/assets/logos/logo_pda_b.svg')" style="max-height: 50px" />
          <!-- <h1 class="title is-5">ccess</h1> -->
        </nuxt-link>
        <a role="button" @click="toggle" :class="burgers" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicEnd">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicEnd" :class="menus">
        <div class="navbar-start">

          <nuxt-link class="navbar-item" to="/products/">
            <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Products</strong>
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/solutions/" @click="toggle">
            <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Solutions</strong>
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/blogs/">
            <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Blog</strong>
          </nuxt-link>

          <nuxt-link class="navbar-item" to="/sales/">
            <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Questions ?</strong>
          </nuxt-link>
        </div>

        <div class="navbar-end is-rounded">
          <a href="https://www.github.com/pdaccess" class="navbar-item">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>

          <a href="mailto:hello@pdaccess.com" class="navbar-item">
            <font-awesome-icon :icon="['fa', 'envelope']" />
          </a>
          <a href="https://www.linkedin.com/company/pdaccess" class="navbar-item">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <nuxt-link class="navbar-item" to="/changelogs/">
            <span class="tag is-small is-danger">
              <strong>1.7-stable</strong>
            </span>
          </nuxt-link>
          <a class="navbar-item" href="https://app.pdaccess.com">
            <span class="tag is-medium is-info has-tooltip-bottom is-dark"
              data-tooltip="Login cloud system of pdaccess. Please contact us for credentials">
              <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Login Cloud</strong>
            </span>
          </a>

          <nuxt-link class="navbar-item" to="/getstarted/">
            <span class="tag is-medium is-success is-rounded">
              <strong :class="[{ 'text-white': !isFixed }, { 'text-black': isFixed }]">Get Started</strong>
            </span></nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data: function () {
    return {
      burgers: ["navbar-burger", "burger", "is-link", "has-shadow"],
      menus: ["navbar-menu"],
      tstatus: false,
      macLink: "/download/PDAccess-0.0.1-mac.zip",
      windowsLink: "/download/PDAccess 0.0.1.exe",
      linuxLink: "/download/PDAccess 0.0.1.AppImage",
      downloadLink: `https://app.pdaccess.com/${this.macLink}`,
      isFixed: false,
    };
  },
  methods: {
    toggle() {
      if (!this.tstatus) {
        this.burgers = [...this.burgers, "is-active"];
        this.menus = [...this.menus, "is-active"];
      } else {
        this.burgers.pop();
        this.menus.pop();
      }
      this.tstatus = !this.tstatus;
    },
    handleScroll() {
      // if (window.scrollY > 20) {
      //   this.isFixed = true;
      // } else {
      //   this.isFixed = false;
      // }
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    // document.getElementsByClassName("test").t;
  },
  head() {
    return {
      title: "PDAccess, Next Generation IAM and PAM Software",
      description:
        "PDAccess, Next Generation Privileged Access Management and Identity Access Management Software both cloud and on-prem environment",
      meta: [
        {
          hid: "title",
          name: "title",
          content: "PDAccess, Next Generation IAM and PAM Software",
        },
        {
          hid: "description",
          name: "description",
          content:
            "PDAccess, Next Generation Privileged Access Management and Identity Access Management Software both cloud and on-prem environment",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.pdaccess.com",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "PDAccess, Next Generation PAM and IAM",
        },
        { hid: "og:site_name", property: "og:site_name", content: "PDAccess" },

        {
          hid: "og:image",
          property: "og:image",
          content: `${require("@/assets/logos/pdaccess_white_logo.png")}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "PDAccess, Next Generation PAM and IAM Software",
        },
        // Twitter card
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://www.pdaccess.com",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "PDAccess",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Next Generation PAM and IAM",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@pdaccess",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${require("@/assets/logos/pdaccess_white_logo.png")}`,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-rounded {
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 0.5rem;
}

.text-white {
  color: white !important;
  transition: color 1s;
}

.text-black {
  color: #17181a !important;
  transition: color 1s;
}

.is-fixed-top {
  /* background-color: white !important; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: background-color 1s, box-shadow 1s;
}

.hero .navbar {
  position: fixed;
  width: 100%;
  background-color: transparent;
  transition: background-color 1s;
}

.bg-dark {
  background-color: #17181a !important;
  transition: background-color 1s;
}

.navbar-item {
  background-color: transparent;
  transition: background-color 1s;
}

.navbar-item:hover strong {
  color: white !important;
}

@media screen and (max-width: 1023px) {
  .is-fixed-top .navbar-menu {
    background-color: transparent !important;
  }

  .is-fixed-top .navbar-burger {
    color: #1a2531;
  }
}
</style>
