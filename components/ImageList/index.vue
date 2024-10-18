<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="image in images.filter((i: ImageMeta) => i.type === type)" :key="image.id"
      class="flex flex-col items-center">
      <Image :src="image.data" :alt="image.id" preview class="w-full h-auto flex-1" />
      <div class="flex justify-center items-center w-full mt-2 space-x-2">
        <Button icon="pi pi-check" class="size-6" @click="checkImage(image)" />
        <Button icon="pi pi-times" class="size-6" @click="deleteImage(image)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ImageMeta, ImageType } from '~/stores/image';

const { images, type } = defineProps<{ images: ImageMeta[], type: ImageType }>()
const emits = defineEmits(['delete:image', 'check:image'])

const deleteImage = (image: ImageMeta) => {
  emits('delete:image', image)
}
const checkImage = (image: ImageMeta) => {
  emits('check:image', image)
}
</script>
