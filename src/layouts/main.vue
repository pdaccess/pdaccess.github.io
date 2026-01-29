<template>
  <div>
    <Header />
    <nuxt />

    <beautifulChat
      :agentProfile="agentProfile"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :participants="participants"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :colors="redColors"
    />

    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";

export default {
  name: "DefaultContainer",
  components: {
    Footer,
  },
  props: {
    background: {
      type: String,
      default: "loginwall",
    },
  },
  computed: {
    findSrcSet() {
      let set = [];
      set.push(
        require(`~/assets/backgrounds/${this.background}-small.jpg`) + " 480w"
      );
      set.push(
        require(`~/assets/backgrounds/${this.background}.jpg`) + " 1080w"
      );
      return set;
    },
  },
  created() {
    //let ckeditor = this.$refs.script.createElement('script');
    //ckeditor.setAttribute('src',"//m.pdaccess.com/form/generate.js?id=10");
    //this.$refs.script.appendChild(ckeditor);
  },
  data() {
    return {
      agentProfile: {
        teamName: "PDAccess Team",
        imageUrl: require("@/assets/logos/h2h_logo.svg"),
      },
      messageList: [],
      newMessagesCount: 0,
      isChatOpen: false,
      participants: [
        {
          id: "user1",
          name: "PDAccess Team",
          imageUrl: require("@/assets/logos/pdaccess_black.png"),
        },
      ],
      redColors: {
        header: {
          bg: "#D32F2F",
          text: "#fff",
        },
        launcher: {
          bg: "#D32F2F",
        },
        messageList: {
          bg: "#fff",
        },
        sentMessage: {
          bg: "#F44336",
          text: "#fff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#fff",
          text: "#212121",
        },
      },
    };
  },
  methods: {
    sendMessage(msg) {
      if (msg.data.text.length > 0) {
        let data = {
          channel: "#chatbot",
          username: "PDAccess Site Visitor",
          text: msg.data.text,
          icon_emoji: ":bomb:",
        };
        let form = new FormData();
        form.append("payload", JSON.stringify(data));
        this.$http({
          method: "post",
          url:
            "",
          data: form,
          headers: {
            "content-type": "multipart/form-data",
          },
        }).then(() => {
          this.newMessagesCount = this.isChatOpen
            ? this.newMessagesCount
            : this.newMessagesCount + 1;
          this.messageList.push(msg);
        });
      }
    },
    onMessageWasSent(msg) {
      this.sendMessage(msg);
    },
    openChat() {
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      this.isChatOpen = false;
    },
  },
};
</script>
<style scoped>
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.9;
}
.has-margin-top-10 {
  margin-top: 10px;
}
.has-margin-bottom-10 {
  margin-top: 10px;
}
</style>