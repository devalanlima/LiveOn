<template>
  <div class="flex flex-col gap-10 pt-10">
    <div class="mx-auto w-fit">
      <ToggleButton v-model="bgRed" onLabel="Primary" offLabel="Secondary" />
    </div>
    <div :class="['block w-32 h-32 mx-auto rounded-2xl outline outline-[3px] outline-[var(--surface-d)]', bgRed ? 'bg-[var(--surface-d)]' : 'bg-[var(--surface-e)]']"/>
  </div>
</template>

<script setup>
const bgRed = ref(true)
</script>
