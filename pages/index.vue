<template>
  <Body class="bg-settings bg-home-mobile" tl="bg-home-tablet" dt="bg-home-desktop">
    <div class="grow-1 flex flex-col p-6" tl="px-10 py-32" dt="px-0 flex-row gap-x-7.5 items-end justify-center">
      <section class="flex flex-col grow-1" dt="grow-0 flex-row gap-x-7.5 items-center">
        <div class="text-center" tl="max-w-512px mx-auto" dt="text-left max-w-540px">
          <h1 class="mb-6">
            <div class="mobile-text-preset-4 text-blue-300 mb-6" tl="desktop-text-preset-5">
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div class="animate-fade-in mobile-text-preset-1 opacity-0" tl="desktop-text-preset-1">SPACE</div>
          </h1>
          <p class="text-blue-300 mobile-text-preset-9" tl="tablet-text-preset-9" dt="desktop-text-preset-9 text-left">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div class="grow-1 flex items-center justify-center" tl="items-end" dt="w-540px justify-end">
          <NuxtLink :to="{ name: 'destination' }">
            <button class="relative w-36 h-36 bg-white rounded-full group" tl="w-68 h-68">
              <div
                class="hidden animate-ripple absolute aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 -z-1 rounded-full w-[calc(100%+176px)] group-hover:block"
              />

              <span class="text-blue-900 mobile-text-preset-4" tl="desktop-text-preset-4">EXPLORE</span>
            </button>
          </NuxtLink>
        </div>
      </section>
    </div>
  </Body>
</template>

<style scoped>
.animate-fade-in {
  animation: 3s ease-in-out 0.5s forwards fade-in;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

.animate-ripple {
  animation: 2s infinite ease-in-out ripple;
}

/* hint: 可以只寫 from！！　接著透過 UnoCSS breakpoint 定義各個斷點底下的 to 寬度 */
@keyframes ripple {
  from {
    width: 100%;
  }
}
</style>
