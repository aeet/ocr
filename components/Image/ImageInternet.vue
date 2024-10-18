<template>
  <div class="p-8 flex justify-center space-x-1">
    <InputText type="url" variant="filled" v-model="url" />
    <Button icon="pi pi-check" @click="onLinkEnter" />
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['upload:image'])
const url = ref("")

const onLinkEnter = () => {
  emits('upload:image', { id: generateUUID(), data: url.value, type: 'internet' })
}

</script>

<style></style>