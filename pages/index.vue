<template>
  <div class="grid grid-cols-3 gap-4 m-8">
    <div class="col-span-1">
      <Card>
        <template #title>Image Uploader</template>
        <template #content>
          <p class="m-0">
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
              <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
              <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex items-center">
              <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
              <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex items-center">
              <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
              <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex items-center">
              <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
              <label for="ingredient4" class="ml-2">Onion</label>
            </div>
          </div>
          </p>
        </template>
      </Card>
    </div>
    <div class="col-span-2">
      <Card>
        <template #title>Simple Card</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})


import { ref } from 'vue';

const ingredient = ref('');
</script>

<style></style>