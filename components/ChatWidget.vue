<template>
  <div v-if="isOpen" class="fixed bottom-4 right-4 z-50 flex flex-col items-end">
    <!-- Chat Launcher -->
    <button
      v-if="!showChat"
      @click="showChat = true"
      class="w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <font-awesome-icon :icon="['fa', 'comment']" class="text-2xl" />
      <span v-if="newMessagesCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
        {{ newMessagesCount }}
      </span>
    </button>

    <!-- Chat Window -->
    <div v-if="showChat" class="w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden mb-4">
      <!-- Header -->
      <div class="bg-primary-500 text-white p-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img src="/assets/logos/h2h_logo.png" class="w-8 h-8 rounded-full" alt="PDAccess" />
          <div>
            <p class="font-semibold text-sm">PDAccess Team</p>
            <p class="text-xs text-white/80">Online</p>
          </div>
        </div>
        <button @click="showChat = false" class="text-white hover:text-white/80">
          <font-awesome-icon :icon="['fa', 'times']" />
        </button>
      </div>

      <!-- Messages -->
      <div ref="messageContainer" class="h-80 overflow-y-auto p-4 bg-gray-50">
        <div v-for="(msg, index) in messageList" :key="index" class="mb-3">
          <div class="flex items-end">
            <div class="bg-primary-500 text-white rounded-lg rounded-br-none px-4 py-2 max-w-xs">
              <p class="text-sm">{{ msg }}</p>
            </div>
          </div>
        </div>
        <div v-if="isTyping" class="flex items-end">
          <div class="bg-gray-200 text-gray-700 rounded-lg rounded-bl-none px-4 py-2">
            <p class="text-sm">Typing...</p>
          </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-3 border-t border-gray-200 bg-white">
        <div class="flex items-center space-x-2">
          <input
            v-model="inputMessage"
            @keyup.enter="handleSend"
            type="text"
            placeholder="Type a message..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
          <button
            @click="handleSend"
            class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <font-awesome-icon :icon="['fa', 'paper-plane']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useChat } from '~/composables/useChat'

const { messageList, newMessagesCount, sendMessage, isOpen } = useChat()
const showChat = ref(false)
const inputMessage = ref('')
const isTyping = ref(false)
const messageContainer = ref<HTMLElement | null>(null)

async function handleSend() {
  if (!inputMessage.value.trim()) return
  const msg = inputMessage.value.trim()
  inputMessage.value = ''
  messageList.value = [...messageList.value, msg]
  isTyping.value = true

  await nextTick()
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }

  sendMessage(msg)

  setTimeout(() => {
    isTyping.value = false
    const responses = [
      'Thanks for your message! Our team will get back to you shortly.',
      'We appreciate your interest in PDAccess. Let us know how we can help!',
      'Got it! A PDAccess specialist will reach out to you soon.'
    ]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    messageList.value = [...messageList.value, randomResponse]
  }, 1500)
}
</script>
