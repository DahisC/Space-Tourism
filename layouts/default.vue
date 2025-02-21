<template>
  <div class="text-white">
    <header
      class="flex justify-between items-center h-[var(--mobile-header-height)] p-6 fixed w-full top-0 left-0"
      tl="h-[var(--tablet-header-height)] p-0"
      dt="h-[var(--desktop-header-height)] pt-10"
    >
      <div class="shrink-0" tl="px-10" dt="px-16">
        <img class="w-10 h-10" tl="w-12 h-12" src="@/assets/shared/logo.svg" alt="logo" />
      </div>

      <!-- fix: 此處的 -mr 數值需要確認 -->
      <div class="h-1px bg-white/25 w-full -mr-10 z-1 hidden" dt="block"></div>

      <!-- Desktop Nav -->
      <nav
        class="grow-1 h-full bg-white/5 hidden desktop-text-preset-8 pr-12 backdrop-blur-[80px]"
        tl="block"
        dt="grow-0 pl-159px"
      >
        <ul class="flex justify-end gap-x-12 items-center h-full">
          <li>
            <a class="whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3 hidden" dt="inline">00</span>
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a class="whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3">01</span>
              <span>DESTINATION</span>
            </a>
          </li>
          <li>
            <a class="whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3">02</span>
              <span>CREW</span>
            </a>
          </li>
          <li>
            <a class="whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3">03</span>
              <span>TECHNOLOGY</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Nav hamburger -->
      <button tl="hidden">
        <img class="w-6" src="@/assets/shared/icon-hamburger.svg" alt="logo" />
      </button>
    </header>

    <main
      class="min-h-[calc(100vh-var(--mobile-header-height))] flex flex-col mt-[var(--mobile-header-height)]"
      tl="min-h-[calc(100vh-var(--tablet-header-height))] mt-[var(--tablet-header-height)]"
      dt="min-h-[calc(100vh-var(--desktop-header-height))] mt-[var(--desktop-header-height)]"
    >
      <slot />
    </main>
  </div>
</template>

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
