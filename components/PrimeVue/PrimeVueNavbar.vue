<template>
    <Menubar
      :model="items"
      class="flex gap-5"
    >
      <template #start>
        <Icon
          name="LiveOnLarge"
          class="h-[50px] w-[100px]"
        />
      </template>
      <template #item="{ item, props }">
        <a
          v-ripple
          class="flex align-items-center"
          v-bind="props.action"
        >
          <Icon
            :name="item.icon"
            size="20"
          />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex gap-2 items-center">
          <InputText
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto"
          />
          <Icon name="prime:user" size="40" class="rounded-full bg-orange-500 text-black p-1"/>
        </div>
      </template>
    </Menubar>
</template>

<script setup>
const items = ref([
  {
    label: 'Home',
    icon: 'prime:home'
  },
]);


</script>

<style scoped>
.p-menubar{
  @apply rounded-none border-transparent border-b-primary_color
}
</style>
