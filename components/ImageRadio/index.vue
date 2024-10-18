<template>
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center" v-for="option in options">
            <RadioButton v-model="ingredient" :inputId="option" :name="option" :value="option" />
            <label :for="option" class="ml-2">{{ option }}</label>
        </div>
    </div>
</template>
<script setup lang="ts">
const { options, value } = defineProps<{ options: string[], value: string }>()
import { ref } from 'vue';
const ingredient = ref(value ? value : options[0]);
</script>