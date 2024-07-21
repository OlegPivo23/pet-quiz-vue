<template>
  <div class="container mx-auto px-4">
    <div class="quiz__wrapper flex flex-col mt-10 mb-10 justify-center items-center md:flex-row md:justify-between ">
      <h1 class="text-3xl font-bold">Простые опросники</h1>
      <ui-input :placeholder="'Введите название опросника'" v-model="search" />
    </div>
    <div
      v-auto-animate
      class="cards flex flex-wrap gap-4 justify-center md:justify-between"
      v-if="filteredQuizes.length > 0"
    >
      <ui-card
        class="cursor-pointer transition duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105"
        v-for="(quiz, index) in filteredQuizes"
        @click="navigateToQuiz(quiz.id)"
        :key="index"
        :style="{ width: '25rem', overflow: 'hidden' }"
      >
        <template #header>
          <img class="w-full h-40 object-cover" :alt="quiz.name" :src="quiz.img" />
        </template>
        <template #title>{{ quiz.name }}</template>
        <template #content>
          <p>описание</p>
        </template>
      </ui-card>
    </div>
    <div v-else>
      <h2 class="text-center text- font-bold">По вашему запросу ничего не найдено</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

import quizesData from '../quizes.json'

interface Option {
  id: number
  label: string
  text: string
  isCorrect: boolean
}

interface Question {
  id: number
  text: string
  options: Option[]
}

interface Quiz {
  id: number
  img: string
  name: string
  questions: Question[]
}

const quizes = ref<Quiz[]>(quizesData as Quiz[])

console.log(quizesData)

const search = ref<string>('')

const navigateToQuiz = (id: number): void => {
  router.push(`/quiz/${id}`)
}

const filteredQuizes = computed<Quiz[]>(() => {
  return quizes.value.filter((quiz: Quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
