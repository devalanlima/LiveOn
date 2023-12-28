<template>
  <section
    class="prime-vue-panel grid grid-rows-[50px_500px_50px] grid-cols-1 outline outline-1 outline-primary_color rounded-xl justify-between w-full max-w-[900px] py-2 gap-2 overflow-hidden mt-10 mx-auto animation-duration-1000 animation-ease-in-out"
  >
    <header class="row-start-1 row-end-2 px-3 flex justify-between items-center h-full">
      <div class="flex gap-2 items-center">
        <Icon
          name="prime:user"
          size="40"
          class="rounded-full bg-orange-500 text-black p-1"
        />
        <p class="text-lg font-semibold">Esquilocalvodameianoite</p>
      </div>
      <div class="flex gap-2 items-center">
        <Icon
          name="prime:calendar-times"
          size="25"
        />
        <p>
          Há 7 dias.
        </p>
      </div>
    </header>
    <main
      class="row-start-2 row-end-3 flex items-center justify-center outline outline-1 outline-primary_color p-3 panel-image"
    >
      <div class="h-full gap-4 grid grid-rows-[auto_1fr]">
        <h2 class="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <PrimeVueImage
          class="min-h-[300px]"
          :url-image="props.urlImage"
        />
      </div>
    </main>
    <footer class="row-start-3 row-end-4 w-full">
      <Toolbar>
        <template #start>
          <Button
            icon="p"
            text
            aria-label="Copiar Link"
            v-tooltip.bottom="{ value: 'Copiar Link' }"
          >
            <Icon
              name="prime:link"
              size="20"
            />
          </Button>
          <Button
            icon="p"
            text
            aria-label="Comentários"
            v-tooltip.bottom="{ value: 'Comentários' }"
          >
            <Icon
              name="prime:comment"
              size="20"
            />
          </Button>
        </template>
        <template #center>
          {{ props.atualPost + 1 }} / {{ props.totalPosts }}
        </template>
        <template #end>
          <Button class="flex gap-2 items-center">
            <span>Abrir Post</span>
            <Icon
              name="prime:window-maximize"
              size="20"
            />
          </Button>
        </template>
      </Toolbar>
    </footer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  urlImage: string;
  atualPost: number;
  totalPosts: number;
}

const props = defineProps<Props>()

</script>

<style>
.prime-vue-panel .p-toolbar {
  @apply h-full p-0 pb-0 m-0 mt-0 border-none px-3 !important;
}

.prime-vue-panel .p-toolbar-group-start {
  @apply flex gap-2;
}

.prime-vue-panel .p-toolbar-group-center {
  @apply flex gap-2;
}

.p-tooltip-text {
  @apply text-secondary_color_text !important
}
</style>