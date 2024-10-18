<template>
  <div class="p-8 flex justify-center items-start relative">
    <Textarea v-model="data" autoResize rows="5" cols="30" />
    <Button icon="pi pi-check" @click="onBase64Enter" class="absolute bottom-0 right-0" />
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['upload:image'])
const data = ref("")

const onBase64Enter = () => {
  emits('upload:image', { id: generateUUID(), data: data.value, type: 'base64' })
}

</script>

<style></style>