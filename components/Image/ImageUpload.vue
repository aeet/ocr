<template>
  <div class="p-8">
    <FileUpload mode="basic" multiple @select="onFileSelect" customUpload auto severity="secondary"
      class="p-button-outlined" />
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['upload:images'])

const onFileSelect = async (event: any) => {
  const files = event.files;
  const base64Promises = Array.from(files).map(file => convertToBase64(file));
  Promise.all(base64Promises).then(images => {
    console.log(images)
    emits('upload:images', images)
  });
}

const convertToBase64 = (file: any): Promise<ImageMeta> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ id: generateUUID(), data: reader.result as string, type: 'upload' });
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}
</script>
