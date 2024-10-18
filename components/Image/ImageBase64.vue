<template>
  <div class="p-8  justify-center items-start relative">
    <Textarea class="max-h-32 overflow-y-auto" v-model="data" rows="5" cols="30" />
    <Button icon="pi pi-check" @click="onBase64Enter" class="absolute bottom-4 right-0" />
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['upload:image'])
const data = ref("")

const onBase64Enter = () => {
  emits('upload:image', { id: generateUUID(), data: data.value, type: 'base64' })
}

</script>
