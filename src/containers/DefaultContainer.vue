<template>
  <div>
    <section
      class="hero is-dark is-fullheight is-fullheight-with-navbar has-background-dark"
    >
      <img
        alt="Background Protected"
        class="hero-background is-transparent"
        :src="require(`@/assets/backgrounds/${this.background}.jpg`)"
        :srcset="`${findSrcSet[0]}, ${findSrcSet[1]}`"
        sizes="480w 1080w"
      />
      <div class="hero-head">
        <Header />
      </div>
      <div class="hero-body" v-scroll-reveal.reset>
        <router-view />
      </div>
    </section>
    <router-view name="detail" />
    <Footer class="" />
    <beautiful-chat
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
    <!-- <a href="#" @click.prevent="openChat()">Open the chat window</a> -->
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "DefaultContainer",
  components: {
    Header,
    Footer,
  },
  props: {
    background: {
      type: String,
      default: "background",
    },
  },
  computed: {
    findSrcSet() {
      let set = [];
      set.push(
        require(`@/assets/backgrounds/${this.background}-small.jpg`) + " 480w"
      );
      set.push(
        require(`@/assets/backgrounds/${this.background}.jpg`) + " 1080w"
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