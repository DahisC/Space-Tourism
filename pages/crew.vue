<template>
  <Body
    class="bg-settings bg-[url(@/assets/crew/background-crew-mobile.jpg)]"
    tl="bg-[url(@/assets/crew/background-crew-tablet.jpg)]"
    dt="bg-[url(@/assets/crew/background-crew-desktop.jpg)]"
  >
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

      <div class="flex flex-col grow-1" dt="flex-row">
        <div class="w-full pt-10 text-center mb-8 grow-1 flex flex-col items-center" tl="w-512px" dt="w-539px pt-0">
          <div class="mobile-text-preset-4 text-white/50 mb-2" tl="tablet-text-preset-4">COMMANDER</div>
          <div class="mobile-text-preset-3 mb-6 uppercase" tl="tablet-text-preset-3">Douglas Hurley</div>
          <div class="text-blue-300 mobile-text-preset-9 mb-auto" tl="tablet-text-preset-9" dt="mb-0">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He
            launched into space for the third time as commander of Crew Dragon Demo-2.
          </div>
          <div class="flex gap-x-4">
            <div v-for="_crew in crewList" :key="_crew.name" class="w-10px h-10px bg-white rounded-full"></div>
          </div>
        </div>

        <div class="h-350px" tl="h-463px -mb-10" dt="h-auto mb-0 w-539px">
          <img class="w-full h-full object-contain" src="/assets/crew/image-douglas-hurley.png" />
        </div>
      </div>
    </div>
  </Body>
</template>

<script setup lang="ts">
import { crew as crewList } from '@/assets/data.json';

type Crew = (typeof crewList)[number];

const crew = ref<Crew>(crewList[0]);

const onSelectCrew = (newCrew: Crew) => {
  crew.value = newCrew;
};

// const destinationImagePath = computed(() => destination.value.images.webp.replace('.', '/_nuxt'));
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
