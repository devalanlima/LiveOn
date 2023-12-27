<template>
  <div class="prime-vue-tag">
    <Tag :style="backgroundTag">
      <div class="flex align-items-center gap-1">
        <Icon
          v-if="props.icon !== undefined"
          :name="props.icon"
          size="20"
        />
        <span v-if="props.label !== undefined">{{ props.label }}</span>
      </div>
    </Tag>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  icon?: string | undefined;
  color?: string | undefined;
}
const props = defineProps<Props>();

const backgroundTag = computed(() => ({
  background: props.color
}))
</script>
