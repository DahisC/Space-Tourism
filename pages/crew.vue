<template>
  <Body class="bg-settings bg-crew-mobile" tl="bg-crew-tablet" dt="bg-crew-desktop">
    <div class="grow-1 flex flex-col p-6 items-center" tl="p-10" dt="py-12 px-0 w-fit mx-auto">
      <div class="mb-6" tl="self-start">
        <span
          class="text-white/25 font-barlow-condensed font-bold tracking-[0.15em] mr-6 text-16px"
          tl="text-20px"
          dt="text-28px"
        >
          02
        </span>
        <span class="mobile-text-preset-6" tl="tablet-text-preset-5" dt="desktop-text-preset-5">MEET YOUR CREW</span>
      </div>

      <div class="flex flex-col grow-1" dt="flex-row gap-x-8">
        <div
          class="w-full pt-10 text-center mb-8 grow-1 flex flex-col items-center"
          tl="w-512px"
          dt="w-539px pt-0 mb-0 items-start text-left"
        >
          <div class="mb-6" dt="my-auto">
            <div
              class="mobile-text-preset-4 text-white/50 mb-2 uppercase"
              tl="tablet-text-preset-4"
              dt="desktop-text-preset-4"
            >
              {{ currentCrew.role }}
            </div>
            <div class="mobile-text-preset-3 mb-6 uppercase" tl="tablet-text-preset-3" dt="desktop-text-preset-3">
              {{ currentCrew.name }}
            </div>
            <div class="text-blue-300 mobile-text-preset-9" tl="tablet-text-preset-9" dt="mb-0 desktop-text-preset-9">
              {{ currentCrew.bio }}
            </div>
          </div>
          <div class="flex gap-x-4" dt="mb-12 gap-x-10">
            <button
              v-for="crewOption in crewOptions"
              :key="crewOption.name"
              class="w-10px h-10px bg-white/20 rounded-full hover:bg-white/50 transition-all transition-duration-300"
              :class="{
                '!bg-white': currentCrew.name === crewOption.name,
              }"
              dt="w-15px h-15px"
              @click="currentCrew = crewOption"
            ></button>
          </div>
        </div>

        <div
          class="h-350px flex items-center justify-center bg-contain bg-no-repeat bg-center"
          tl="h-463px"
          dt="h-auto mb-0 w-539px"
          :style="{
            backgroundImage: `url(${crewImagePath})`,
          }"
        ></div>
      </div>
    </div>
  </Body>
</template>

<script setup lang="ts">
import { crew as crewOptions } from '@/assets/data.json';

type Crew = (typeof crewOptions)[number];

const currentCrew = ref<Crew>(crewOptions[1]);

const crewImagePath = computed(() => currentCrew.value.images.webp);
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate {
  animation: rotate 300s linear infinite;
}
</style>
