<template>
  <ul>
    <li>
      <NuxtLink
        v-if="prev"
        :to="{ name: base, params: { slug: prev.slug } }"
        class="text-primary font-bold hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>

      <span v-else>&nbsp;</span>
    </li>
    <li>
      <NuxtLink
        v-if="next"
        :to="{ name: base, params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    base: {
      type: String,
      default: () => null,
    },
  },
};
</script>