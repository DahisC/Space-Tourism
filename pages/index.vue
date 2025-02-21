<template>
  <div class="min-h-screen flex flex-col bg-home-mobile bg-settings" tl="bg-home-tablet" dt="bg-home-desktop">
    <header class="flex justify-between items-center h-88px p-6" tl="h-96px p-0" dt="h-136px pt-10">
      <div class="shrink-0" tl="px-10" dt="px-16">
        <img class="w-10 h-10" tl="w-12 h-12" src="@/assets/shared/logo.svg" alt="logo" />
      </div>

      <div class="h-1px bg-white/25 w-full -mr-10 z-1 hidden" dt="block"></div>

      <!-- Desktop Nav -->
      <nav
        class="grow-1 h-full bg-white/5 hidden desktop-text-preset-8 pr-12 backdrop-blur-[80px]"
        tl="block"
        dt="grow-0 pl-159px"
      >
        <ul class="flex justify-end gap-x-12 items-center h-full">
          <li>
            <a class="text-white whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3 hidden" dt="inline">00</span>
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a class="text-white whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3">01</span>
              <span>DESTINATION</span>
            </a>
          </li>
          <li>
            <a class="text-white whitespace-nowrap" href="#">
              <span class="desktop-text-preset-8-bold mr-3">02</span>
              <span>CREW</span>
            </a>
          </li>
          <li>
            <a class="text-white whitespace-nowrap" href="#">
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

    <main class="p-6 grow-1 flex flex-col" tl="px-10 py-32" dt="px-0 flex-row gap-x-7.5 items-end justify-center">
      <section class="flex flex-col grow-1" dt="grow-0 flex-row gap-x-7.5 items-center">
        <div class="text-center" tl="max-w-512px mx-auto" dt="text-left max-w-540px">
          <h1 class="mb-6">
            <div class="mobile-text-preset-4 text-blue-300 mb-6" tl="desktop-text-preset-5">
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div class="mobile-text-preset-1 text-white" tl="desktop-text-preset-1">SPACE</div>
          </h1>
          <p class="text-blue-300 mobile-text-preset-9" tl="tablet-text-preset-9" dt="desktop-text-preset-9 text-left">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div class="grow-1 flex items-center justify-center" tl="items-end" dt="w-540px justify-end">
          <button class="w-36 h-36 bg-white rounded-full" tl="w-68 h-68">
            <span class="text-blue-900 mobile-text-preset-4" tl="desktop-text-preset-4">EXPLORE</span>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
div#__nuxt {
  height: inherit;
}
</style>
