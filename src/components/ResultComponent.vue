<template>
  <div>
    <h1 class="text-3xl font-bold">
      Ваш результат: {{ props.numberOfCorrectAnswers }} / {{ props.quiz.questions.length }}
    </h1>
    <p class="text-2xl">Ваша оценка: {{ props.barPercantage }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  numberOfCorrectAnswers: Number,
  quiz: Object,
  barPercantage: String
})
</script>
