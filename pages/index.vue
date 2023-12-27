<template>
  <div class="h-full w-full overflow-hidden relative">
    <VirtualScroller
      :items="data"
      :itemSize="672"
      class="w-full h-full px-5"
    >
      <template v-slot:item="{ item, options }">
        <PrimeVuePanel
          v-if="!pending"
          :url-image="item.url"
          :atual-post="options.index"
          :total-posts="options.count"
        />
      </template>
    </VirtualScroller>
  </div>
</template>

<script setup lang="ts">

const { data, pending } = await useFetch<[
  {
    "id": string;
    "url": string;
    "width": number; 
    "height": number;
    "breeds": Array<string>;
    "favourite": object;
  }
]>('https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_oycSzK0NXRk1YswSVXgADhhfsLLz32Ic3vDwO5t3H7CGUQPXTYmB9ahtz3yWomdW')

</script>

<style>
.p-virtualscroller-content {
  @apply px-5;
}
</style>