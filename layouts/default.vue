<template>
  <div class="flex w-full h-screen">
    <div class="grow relative">
      <div class="flex h-screen">
        <PrimeVueNavbar/>
        <slot />
      </div>
    </div>
    <MoleculesRightSidebar />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>