<template>
  <div class="prime-vue-image">
    <Image
      alt="Image"
      preview
    >
      <template #indicator>
        <i class="pi pi-search"></i>
      </template>
      <template #image>
        <img
          :src="props.urlImage"
          alt="image"
          class="h-full object-contain"
        />
      </template>
      <template #preview="slotProps">
        <img
          class="h-screen object-contain"
          :src="props.urlImage"
          alt="preview"
          :style="slotProps.style"
          @click="slotProps.onClick"
        />
      </template>
    </Image>
  </div>
</template>

<script setup lang="ts">
interface Props {
  urlImage: string;
}

const props = defineProps<Props>()

</script>

<style>
.prime-vue-image .p-image {
  @apply h-full flex justify-center;
}

.p-image-toolbar {
  @apply bg-primary_color rounded-3xl z-[9999999] m-5 !important;
}

.p-link {
  @apply text-secondary_color_text !important;
}
</style>