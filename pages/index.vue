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
    <div class="col-span-2 min-h-20">
      <Card class="min-h-full">
        <template #content>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyImageStore } from '~/stores/image';

const store = useMyImageStore()
definePageMeta({
  layout: 'default',
})



const checkImage = async (image: ImageMeta) => {
  if (image.type === 'upload' || image.type === 'base64') {
    const data = await useLazyFetch('/ocr/predict-by-base64', { method: 'post', body: { base64_str: image.data } })
    console.log(data.data.value)
  }
  if (image.type === 'internet') {
    const data = await useLazyFetch(`/ocr/predict-by-url?imageUrl=${image.data}`)
    console.log(data.data.value)
  }
}

</script>
