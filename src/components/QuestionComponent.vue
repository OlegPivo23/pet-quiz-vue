<template>
  <div class="mt-5 mb-5">
    <h1 class="text-3xl">Question: {{ question.text }}</h1>
  </div>
  <div>
    <div
      v-for="(option, index) in question.options"
      :key="index"
      class="flex gap-4 items-center w-full cursor-pointer"
      @click="emitSelectOption(option.isCorrect)"
    >
      <span class="text-red-500 font-bold text-3xl">{{ option.label }}</span>
      <p @click="handleChange" class="text-3xl w-full border p-5 m-5 hover:bg-gray-200">
        {{ option.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  question: Object,
  questionsStatus: String,
  currentQuizIndex: Number
})

const emit = defineEmits(['changeIndex', 'complete', 'selectOption'])

const emitSelectOption = (isCorrect: boolean): void => {
  emit('selectOption', isCorrect)
}

const handleChange = () => {
  emit('changeIndex') 
  emit('complete') 
}
</script>
