<template>
  <section
    class="grid grid-rows-[50px_500px_50px] grid-cols-1 outline outline-2 outline-primary_color rounded-xl justify-between w-full max-w-[900px] py-2 gap-2 overflow-hidden mt-10 mx-auto"
  >
    <header class="row-start-1 row-end-2 px-3 flex justify-between h-[40px]">
      <div class="flex gap-2 items-center">
        <Avatar />
        <p>Esquilocalvodameianoite</p>
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
    <main class="row-start-2 row-end-3 bg-primary_color p-3 overflow-hidden">
      <div class="w-full h-full grid place-items-center rounded-xl overflow-hidden">
        <Image
          :src="props.urlImage"
          alt="Image"
          preview
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
.p-toolbar {
  @apply h-full p-0 pb-0 m-0 mt-0 border-none px-3 !important;
}

.p-toolbar-group-start {
  @apply flex gap-2;
}

.p-toolbar-group-center {
  @apply flex gap-2;
}

.p-tooltip-text {
  @apply text-primary_color_text !important
}

.p-image-toolbar {
  z-index: 9999999;
}
</style>