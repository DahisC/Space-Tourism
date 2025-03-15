<template>
  <div class="text-white">
    <Header />

    <main
      class="min-h-[calc(100vh-var(--mobile-header-height))] flex flex-col mt-[var(--mobile-header-height)]"
      tl="min-h-[calc(100vh-var(--tablet-header-height))] mt-[var(--tablet-header-height)]"
      dt="min-h-[calc(100vh-var(--desktop-header-height))] mt-[var(--desktop-header-height)]"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const NAV_LINKS: { number: string; name: string; to: string }[] = [
  { number: '00', name: 'HOME', to: 'index' },
  { number: '01', name: 'DESTINATION', to: 'destination' },
  { number: '02', name: 'CREW', to: 'crew' },
  { number: '03', name: 'TECHNOLOGY', to: 'technology' },
];
</script>
