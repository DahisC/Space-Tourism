<template>
  <li
    class="relative h-full cursor-pointer transition-color transition-duration-300"
    hover="text-white"
    :class="{ '!after:opacity-100 text-white': isSelected }"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
interface Props {
  isSelected: boolean;
}

defineProps<Props>();
</script>

<style scoped>
li {
  @apply after:content-[''] after:block after:absolute after:bottom-0 after:h-3px after:w-full after:bg-white after:opacity-0 hover:after:opacity-50 after:transition-all after:transition-duration-300;
}
</style>
