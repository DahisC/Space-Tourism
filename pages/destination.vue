<template>
  <Body
    class="bg-settings bg-[url(@/assets/destination/background-destination-mobile.jpg)]"
    tl="bg-[url(@/assets/destination/background-destination-tablet.jpg)]"
    dt="bg-[url(@/assets/destination/background-destination-desktop.jpg)]"
  >
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
              class="flex gap-x-8 text-blue-300 mobile-text-preset-8 mb-6 justify-center uppercase"
              tl="desktop-text-preset-8"
              dt="mb-10 justify-start"
            >
              <li v-for="destination in destinations" :key="destination.name" @click="onSelectDestination(destination)">
                {{ destination.name }}
              </li>
            </ul>

            <div class="mobile-text-preset-2 mb-4 uppercase" tl="tablet-text-preset-2" dt="desktop-text-preset-2">
              {{ destination.name }}
            </div>
            <p
              class="mobile-text-preset-9 text-blue-300 mb-6"
              tl="tablet-text-preset-9"
              dt="desktop-text-preset-9 mb-10"
            >
              {{ destination.description }}
            </p>

            <div class="bg-white/25 h-1px w-full mb-6" dt="mb-10" />

            <div class="flex flex-col gap-y-6" tl="flex-row gap-x-8 justify-around" dt="justify-start">
              <div dt="w-1/2">
                <div class="text-blue-300 desktop-text-preset-7 mb-3 uppercase">AVG. DISTANCE</div>
                <div class="desktop-text-preset-6 uppercase">{{ destination.distance }}</div>
              </div>

              <div dt="w-1/2">
                <div class="text-blue-300 desktop-text-preset-7 mb-3 uppercase">Est. travel time</div>
                <div class="desktop-text-preset-6 uppercase">{{ destination.travel }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Body>
</template>

<script setup lang="ts">
import { destinations } from '@/assets/data.json';

type Destination = (typeof destinations)[number];

const destination = ref<Destination>(destinations[0]);

const onSelectDestination = (newDestination: Destination) => {
  destination.value = newDestination;
};

const destinationImagePath = computed(() => destination.value.images.webp.replace('.', '/_nuxt'));
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
