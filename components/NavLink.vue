<template>
  <NuxtLink :to class="relative">
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
a {
  @apply after:content-[''] after:block after:absolute after:right-0 after:w-3px tl:after:bottom-0 after:h-full tl:after:h-3px tl:after:w-full after:bg-white after:opacity-0 hover:after:opacity-50 after:transition-all after:transition-duration-300;
}

a.router-link-exact-active::after {
  opacity: 1;
}
</style>
