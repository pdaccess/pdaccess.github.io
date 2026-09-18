<script setup lang="ts">
import { NavigationMenuRoot, type NavigationMenuRootEmits, type NavigationMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends NavigationMenuRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <NavigationMenuRoot
    v-bind="delegatedProps"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </NavigationMenuRoot>
</template>
