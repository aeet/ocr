<template>
  <div class="flex  justify-between  min-h-16 items-center  p-2 bg-mPink">
    <div class="flex space-x-1 items-center">
      <img class="h-16" :src="logo" alt="logo" />
      <div class="text-white text-3xl">OCR</div>
    </div>
    <div class="text-white">Login</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ logo: string }>()
</script>
