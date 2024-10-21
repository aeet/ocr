<template>
  <div class="grid grid-cols-3 gap-4 m-8">
    <div class="col-span-1">
      <Card>
        <template #title>Images</template>
        <template #content>
          <div class="m-0">
            <ImageRadio :options="store.getOptions()" :value="store.getSelected()" @update:value="store.setSelected" />
            <template v-if="store.getSelected() === 'upload'">
              <ImageUpload @upload:images="store.addImages" />
              <ImageList :type="'upload'" :images="store.getImages()" @delete:image="store.removeImage"
                @check:image="checkImage" />
            </template>
            <template v-if="store.getSelected() === 'internet'">
              <ImageInternet @upload:image="store.addImage" />
              <ImageList :type="'internet'" :images="store.getImages()" @delete:image="store.removeImage"
                @check:image="checkImage" />
            </template>
            <template v-if="store.getSelected() === 'base64'">
              <ImageBase64 @upload:image="store.addImage" />
              <ImageList :type="'base64'" :images="store.getImages()" @delete:image="store.removeImage"
                @check:image="checkImage" />
            </template>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-2 flex flex-col">
      <Card class="flex-grow">
        <template #content>
          <ProgressSpinner v-if="loading"></ProgressSpinner>
          <canvas ref="canvasRef" class="w-full h-full"></canvas>
        </template>
      </Card>

      <Card class="mt-4" style="background-color: #f0f0f0;">
        <template #content>
          <div v-if="loading">loading...</div>
          <div v-if="!loading" class="p-2 text-sm">识别到的文本: {{ ocrText }}</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyImageStore } from '~/stores/image';
import { ref, type VNodeRef } from 'vue';

definePageMeta({
  layout: 'default',
})

const store = useMyImageStore()
const loading = ref(false)
const ocrResult = ref<any>(null);
const ocrText = ref("");
const imageSize = ref({ width: 800, height: 600 });
const canvasRef = ref<HTMLCanvasElement | undefined>();

const drawOcrResultOnCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas || !ocrResult.value || !ocrResult.value.data || !imageSize.value.width || !imageSize.value.height) return;
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  canvas.width = imageSize.value.width;
  canvas.height = imageSize.value.height;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ocrResult.value.data.forEach((item: any) => {
    const [coordinates, text] = item;
    const [topLeft, , bottomLeft] = coordinates;
    const rectHeight = bottomLeft[1] - topLeft[1];
    const fontSize = rectHeight * 0.8;
    ctx.fillStyle = 'black';
    ctx.font = `${fontSize}px Arial`;
    const textX = topLeft[0];
    const textY = topLeft[1] + rectHeight * 0.8;
    ctx.fillText(text[0], textX, textY);
  });
  const combinedText = ocrResult?.value.data?.map((item: any) => item[1][0]).join(' ');
  ocrText.value = combinedText
  loading.value = false
};




const checkImage = async (image: ImageMeta) => {
  loading.value = true
  if (image.type === 'upload' || image.type === 'base64') {
    const { data } = await useLazyFetch<any>('/ocr/predict-by-base64', { method: 'post', body: { base64_str: image.data } })
    ocrResult.value = unref(data)
    drawOcrResultOnCanvas()
  }
  if (image.type === 'internet') {
    const { data } = await useLazyFetch<any>(`/ocr/predict-by-url?imageUrl=${image.data}`)
    ocrResult.value = unref(data)
    drawOcrResultOnCanvas()
  }
}


</script>
