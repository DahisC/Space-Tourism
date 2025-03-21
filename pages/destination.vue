<template>
  <Body class="bg-settings bg-destination-mobile" tl="bg-destination-tablet" dt="bg-destination-desktop">
    <div class="grow-1 flex flex-col p-6 items-center" tl="p-10" dt="py-12 px-0 w-fit mx-auto">
      <div class="mb-6" tl="self-start">
        <span
          class="text-white/25 font-barlow-condensed font-bold tracking-[0.15em] mr-6 text-16px"
          tl="text-20px"
          dt="text-28px"
        >
          01
        </span>
        <span class="mobile-text-preset-6" tl="tablet-text-preset-5" dt="desktop-text-preset-5">
          PICK YOUR DESTINATION
        </span>
      </div>

      <div class="grow-1 flex flex-col" dt="flex-row gap-x-8">
        <div class="grow-1 flex justify-center items-center mb-8" dt="grow-0 w-539px mb-0">
          <img class="w-150px animate-rotate" tl="w-300px" dt="w-480px" :src="destinationImagePath" />
        </div>

        <div class="flex flex-col text-center" tl="max-w-514px" dt="max-w-none w-539px justify-center text-left">
          <div dt="max-w-445px mx-auto">
            <ul
              class="flex gap-x-8 text-blue-300 mobile-text-preset-8 mb-6 justify-center uppercase h-8"
              tl="desktop-text-preset-8"
              dt="mb-10 justify-start"
            >
              <DestinationLink
                v-for="destinationOption in destinationOptions"
                :key="destinationOption.name"
                @click="currentDestination = destinationOption"
                :is-selected="currentDestination.name === destinationOption.name"
              >
                {{ destinationOption.name }}
              </DestinationLink>
            </ul>

            <div class="mobile-text-preset-2 mb-4 uppercase" tl="tablet-text-preset-2" dt="desktop-text-preset-2">
              {{ currentDestination.name }}
            </div>
            <p
              class="mobile-text-preset-9 text-blue-300 mb-6"
              tl="tablet-text-preset-9"
              dt="desktop-text-preset-9 mb-10"
            >
              {{ currentDestination.description }}
            </p>

            <div class="bg-white/25 h-1px w-full mb-6" dt="mb-10" />

            <div class="flex flex-col gap-y-6" tl="flex-row gap-x-8 justify-around" dt="justify-start">
              <div dt="w-1/2">
                <div class="text-blue-300 desktop-text-preset-7 mb-3 uppercase">AVG. DISTANCE</div>
                <div class="desktop-text-preset-6 uppercase">{{ currentDestination.distance }}</div>
              </div>

              <div dt="w-1/2">
                <div class="text-blue-300 desktop-text-preset-7 mb-3 uppercase">Est. travel time</div>
                <div class="desktop-text-preset-6 uppercase">{{ currentDestination.travel }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>

<script setup lang="ts">
import { destinations as destinationOptions } from '@/assets/data.json';

type Destination = (typeof destinationOptions)[number];

const currentDestination = ref<Destination>(destinationOptions[0]);

const destinationImagePath = computed(() => currentDestination.value.images.webp.replace('.', '/_nuxt'));
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
  animation: rotate 720s linear infinite;
}
</style>
