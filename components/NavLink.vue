<template>
  <NuxtLink
    :to
    class="relative after:content-[''] after:block after:absolute after:bottom-0 after:h-3px after:w-full after:bg-white after:opacity-0 hover:after:opacity-50 after:transition-all after:transition-duration-300"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  to: RouteLocationRaw;
}

defineProps<Props>();

// refactor: 使用 defineNuxtLink 附加樣式
</script>

<style scoped>
a.router-link-exact-active::after {
  opacity: 1;
}
</style>
