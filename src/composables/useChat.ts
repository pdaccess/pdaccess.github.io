import { ref } from 'vue'

export function useChat() {
  const isOpen = ref(false)
  const messageList = ref<any[]>([])
  const newMessagesCount = ref(0)

  function openChat() {
    isOpen.value = true
    newMessagesCount.value = 0
  }

  function closeChat() {
    isOpen.value = false
  }

  async function sendMessage(msg: string) {
    const SLACK_WEBHOOK_URL = ''
    if (!msg || !SLACK_WEBHOOK_URL) return

    const data = {
      channel: '#chatbot',
      username: 'PDAccess Site Visitor',
      text: msg,
      icon_emoji: ':bomb:'
    }

    try {
      await $fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify({ payload: JSON.stringify(data) }),
        headers: { 'Content-Type': 'application/json' }
      })
      messageList.value = [...messageList.value, { text: msg }]
      if (!isOpen.value) {
        newMessagesCount.value++
      }
    } catch (err) {
      console.error('Chat send failed:', err)
    }
  }

  return { isOpen, messageList, newMessagesCount, openChat, closeChat, sendMessage }
}
