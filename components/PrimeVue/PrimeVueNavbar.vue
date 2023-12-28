<template>
  <nav class="molecules-navbar flex w-full max-w-[345px] justify-content-center">
    <Menu
      :model="items"
      class="w-full grow max-w-[345px]"
    >
      <template #start>
        <span class="p-3 px-6 flex w-full">
          <Icon
            name="LiveOnLarge"
            class="h-[50px] w-[100px]"
          />
        </span>
      </template>
      <template #item="{ item, props }">
        <a
          v-ripple
          class="flex align-items-center"
          v-bind="props.action"
        >
          <Icon
            v-if="item.icon !== undefined"
            :name="item.icon"
            size="25"
          />
          <span class="ml-2 text-xl">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <button
          v-ripple
          class="flex items-center w-full p-3 gap-3"
        >
          <div>
            <Icon
              name="prime:user"
              size="40"
              class="rounded-full bg-orange-500 text-black p-1"
            />
          </div>
          <div class="flex w-full grow justify-between items-center">
            <span class="font-bold">Esquilocalvodameianoite</span>
            <PrimeVueTag
              v-tooltip="roleTagStyle.label"
              :icon="roleTagStyle.icon"
              :color="roleTagStyle.color"
            />
          </div>
        </button>
      </template>
    </Menu>
  </nav>
</template>

<script setup lang="ts">
const items = ref([
  {
    items: [
      {
        label: 'Novo',
        icon: 'prime:plus',
      },
      {
        label: 'Buscar',
        icon: 'prime:search',
      },
      {
        label: 'Comunidades',
        icon: 'prime:users',
      }
    ]
  },
]);

const atualRole = ref<'Espectador' | 'Moderador' | 'Streamer' | undefined>('Espectador')

interface RoleTagStyle {
  label?: 'Espectador' | 'Moderador' | 'Streamer';
  icon: string;
  color: string;
}

const roleTagStyle = computed((): RoleTagStyle => {
  let tagStyle: RoleTagStyle = {
    label: 'Espectador',
    icon: 'prime:eye',
    color: '#fff',
  }
  switch (atualRole.value) {
    case 'Espectador':
      tagStyle = {
        label: 'Espectador',
        icon: 'prime:eye',
        color: '#fff',
      }
      break;
    case 'Moderador':
      tagStyle = {
        label: 'Moderador',
        icon: 'prime:wrench',
        color: '#00AD03',
      }
      break
    case 'Streamer':
      tagStyle = {
        label: 'Streamer',
        icon: 'prime:verified',
        color: '#772CE8',
      }
      break
    default:
      tagStyle = {
        label: 'Espectador',
        icon: 'prime:eye',
        color: '#fff',
      }
      break;
  }
  return tagStyle
})
</script>

<style>
.molecules-navbar .p-menu {
  @apply border-none rounded-none outline outline-1 outline-primary_color flex flex-col;
}

.molecules-navbar .p-submenu-header {
  @apply hidden;
}

.molecules-navbar .p-menu-end {
  @apply my-auto mb-0 border-t-[1px] border-primary_color;
}
</style>