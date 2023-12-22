<template>
  <div class="h-full w-full overflow-hidden">
    <VirtualScroller
      :items="data"
      :itemSize="672"
      class="w-full h-full px-5"
    >
      <template v-slot:item="{ item, options }">
        <PrimeVuePanel :url-image="item.download_url"
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
    "author": string;
    "height": number;
    "width": number;
    "url": string;
    "download_url": string;
  }]
>('https://picsum.photos/v2/list?page=1&limit=100');

</script>

<style>
.p-virtualscroller-content {
  @apply px-5;
}
</style>