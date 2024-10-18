<template>
  <div class="flex  justify-between  min-h-16 items-center  p-2 bg-primary-200">
    <div class="flex space-x-1 items-center">
      <img class="h-16" :src="logo" alt="logo" />
      <div class="text-white text-3xl">OCR Online</div>
    </div>
    <div class="text-white"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ logo: string }>()
</script>
