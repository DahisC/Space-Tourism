<template>
  <Body
    class="bg-settings bg-[url(@/assets/crew/background-crew-mobile.jpg)]"
    tl="bg-[url(@/assets/crew/background-crew-tablet.jpg)]"
    dt="bg-[url(@/assets/crew/background-crew-desktop.jpg)]"
  >
    <div class="grow-1 flex flex-col p-6 items-center">
      <div class="mb-6" tl="self-start">
        <span class="text-white/25 font-barlow-condensed font-bold tracking-[0.15em] mr-6 text-16px">02</span>
        <span class="mobile-text-preset-6">MEET YOUR CREW</span>
      </div>

      <div class="flex flex-col grow-1">
        <div class="w-full pt-10 text-center mb-8 grow-1 flex flex-col items-center">
          <div class="mobile-text-preset-4 text-white/50 mb-2">COMMANDER</div>
          <div class="mobile-text-preset-3 mb-6 uppercase">Douglas Hurley</div>
          <div class="text-blue-300 mobile-text-preset-9 mb-auto">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He
            launched into space for the third time as commander of Crew Dragon Demo-2.
          </div>
          <div class="flex gap-x-4">
            <div v-for="_crew in crewList" :key="_crew.name" class="w-10px h-10px bg-white rounded-full"></div>
          </div>
        </div>

        <div class="h-350px">
          <img class="w-full h-full object-contain" src="/assets/crew/image-douglas-hurley.webp" />
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
