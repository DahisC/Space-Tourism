<template>
  <header
    class="flex justify-between items-center h-[var(--mobile-header-height)] p-6 fixed w-full top-0 left-0 z-1"
    tl="h-[var(--tablet-header-height)] p-0"
    dt="h-[var(--desktop-header-height)] pt-10"
  >
    <NuxtLink class="shrink-0" tl="px-10" dt="px-16" :to="{ name: 'index' }">
      <img class="w-10 h-10" tl="w-12 h-12" src="@/assets/shared/logo.svg" alt="logo" />
    </NuxtLink>

    <div class="h-1px bg-white/25 w-full -mr-30px z-1 hidden" dt="block"></div>

    <nav
      class="h-full bg-white/5 backdrop-blur-[80px] fixed top-0 right-0 pl-8 transition-all"
      :class="{ 'translate-x-full': !isMobileNavOpen }"
      tl="block relative pl-0 pr-12 grow-1 !translate-x-0"
      dt="grow-0 pl-159px"
    >
      <!-- Mobile inner header -->
      <div class="h-[calc(var(--mobile-header-height))] mb-12 flex items-center justify-end" tl="hidden">
        <button class="mr-6" @click="isMobileNavOpen = false">
          <img class="w-6" src="@/assets/shared/icon-close.svg" alt="nav-close" />
        </button>
      </div>

      <ul class="flex flex-col gap-y-8 w-222px" tl="w-auto flex-row justify-end gap-x-12 items-center h-full gap-y-0">
        <li v-for="navLink in NAV_LINKS" :key="navLink.to" tl="h-full">
          <NavLink class="h-full flex items-center desktop-text-preset-8" :to="{ name: navLink.to }">
            <span class="desktop-text-preset-8-bold mr-3">{{ navLink.number }}</span>
            <span>{{ navLink.name }}</span>
          </NavLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile Nav hamburger -->
    <button tl="hidden" @click="isMobileNavOpen = true">
      <img class="w-6" src="@/assets/shared/icon-hamburger.svg" alt="logo" />
    </button>
  </header>
</template>

<script setup lang="ts">
const isMobileNavOpen = ref(false);

const NAV_LINKS: { number: string; name: string; to: string }[] = [
  { number: '00', name: 'HOME', to: 'index' },
  { number: '01', name: 'DESTINATION', to: 'destination' },
  { number: '02', name: 'CREW', to: 'crew' },
  { number: '03', name: 'TECHNOLOGY', to: 'technology' },
];
</script>

<style>
/* fix: 可能是無用的設定 */
div#__nuxt {
  height: inherit;
}

:root {
  --mobile-header-height: 88px;
  --tablet-header-height: 96px;
  --desktop-header-height: 136px;
}
</style>
