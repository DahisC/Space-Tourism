<template>
  <Body class="bg-settings bg-technology-mobile" tl="bg-technology-tablet" dt="bg-technology-desktop">
    <div class="grow-1 flex flex-col p-6 items-center" tl="p-10" dt="px-0 py-12 items-end">
      <div dt="flex flex-col grow-1">
        <div class="mb-6" tl="self-start">
          <span
            class="text-white/25 font-barlow-condensed font-bold tracking-[0.15em] mr-6 text-16px"
            tl="text-20px"
            dt="text-28px"
          >
            03
          </span>
          <span class="mobile-text-preset-6" tl="tablet-text-preset-5" dt="desktop-text-preset-5">
            SPACE LAUNCH 101
          </span>
        </div>

        <div class="grow-1 flex flex-col gap-y-8" dt="flex-row-reverse w-auto gap-x-8">
          <div class="pt-16 h-322px -mx-6" tl="-mx-10 h-420px" dt="h-auto w-608px mx-0 pt-0">
            <div
              class="w-full h-full bg-cover bg-no-repeat bg-center"
              dt="bg-contain"
              :style="{
                backgroundImage: `url(${technologyImagePath})`,
              }"
            ></div>
          </div>

          <div class="flex flex-col gap-y-10" dt="flex-row w-635px gap-x-16 items-center">
            <div class="flex gap-x-4 justify-center" dt="flex-col gap-y-8 gap-x-0">
              <button
                v-for="(technologyOption, i) in technologyOptions"
                :key="technologyOption.name"
                class="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center transition-all transition-300"
                :class="{
                  'bg-white text-blue-900': currentTechnology.name === technologyOption.name,
                }"
                tl="w-14 h-14"
                dt="w-20 h-20"
                hover="border-white"
                @click="currentTechnology = technologyOption"
              >
                <span class="mobile-text-preset-4" tl="tablet-text-preset-4" dt="desktop-text-preset-4">
                  {{ i + 1 }}
                </span>
              </button>
            </div>

            <div class="flex flex-col text-center" tl="px-22" dt="px-0 text-left">
              <div
                class="mobile-text-preset-4 text-white/50 mb-4 text-"
                tl="tablet-text-preset-4"
                dt="desktop-text-preset-4"
              >
                THE TERMINOLOGY…
              </div>
              <div
                class="mobile-text-preset-3 uppercase mb-4"
                tl="tablet-text-preset-3"
                dt="mb-6 desktop-text-preset-3"
              >
                {{ currentTechnology.name }}
              </div>
              <p class="mobile-text-preset-9 text-blue-300" tl="tablet-text-preset-9" dt="desktop-text-preset-9 ">
                {{ currentTechnology.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>

<script setup lang="ts">
import { technology as technologyOptions } from '@/assets/data.json';

type Technology = (typeof technologyOptions)[number];

const currentTechnology = ref<Technology>(technologyOptions[0]);

const technologyImagePath = computed(() => currentTechnology.value.images.portrait.replace('.', '/_nuxt'));
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
