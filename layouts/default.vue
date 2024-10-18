<template>
  <div class="flex flex-col h-screen">
    <Banner :logo="'logo.png'" />
    <div class="bg-gray-50 flex-1">
      <slot class />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
