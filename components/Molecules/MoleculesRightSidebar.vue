<template>
  <div :class="[' flex max-w-[345px] min-w-[20px] relative overflow-hidden', isOpen ? 'w-full' : 'w-0']">
    <button
      class="w-[20px] h-full bg-primary_color relative overflow-hidden"
      @click="isOpen = !isOpen"
    >
      <Icon
        :name="isOpen ? 'prime:angle-right' : 'prime:angle-left'"
        size="30"
        class="-translate-x-1"
      />

    </button>
    <div class="flex flex-col grow">
      <AtomsTwitchPlayer v-if="isOpen" />
      <AtomsTwitchChat v-if="isOpen" class="grow" />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>

<style scoped></style>