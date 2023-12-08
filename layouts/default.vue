<template>
  <div class="flex w-full h-screen">
    <div class="grow relative">
      <header class="absolute w-full">
        <PrimeVueNavbar class="h-full" />
      </header>
      <div class="flex h-screen pt-[68px]">
        <MoleculesNews/>
        <slot />
      </div>
    </div>
    <MoleculesRightSidebar />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>