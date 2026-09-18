<script setup lang="ts">
import { TabsRoot, type TabsRootEmits, type TabsRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends TabsRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<TabsRootEmits>()
</script>

<template>
  <TabsRoot v-bind="props" class="w-full" @update:model-value="emits('update:modelValue', $event)" :class="props.class">
    <slot />
  </TabsRoot>
</template>
