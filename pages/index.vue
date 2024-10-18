<template>
  <div class="grid grid-cols-3 gap-4 m-8">
    <div class="col-span-1">
      <Card>
        <template #title>Images</template>
        <template #content>
          <div class="m-0">
            <ImageRadio :options="getOptions()" :value="getSelected()" @update:value="onRadioValueChange" />
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-2">
      <Card>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyImageStore } from '~/stores/image';

definePageMeta({
  layout: 'default',
})

const { getOptions, getSelected, setSelected } = useMyImageStore()

const onRadioValueChange = (value: string) => {
  setSelected(value)
}

</script>
