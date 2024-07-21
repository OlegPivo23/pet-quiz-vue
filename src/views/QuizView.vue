<template>
  <div class="container mx-md mt-5 pl-5 pr-5">
    <div @click="goHome" class="flex justify-end">
      <ui-breadcrumb @click="goHome" :home="home" />
    </div>

    <QuizHeader
      :questionsStatus="questionsStatus"
      :completed="completed"
      @changeCompleted="handleChangeCompleted"
    />
    <QuestionComponent
      v-if="!showResult"
      :question="quiz.questions[currentQuizIndex]"
      :questionsStatus="questionsStatus"
      :currentQuizIndex="currentQuizIndex"
      @changeIndex="changeIndex"
      @complete="handleComplete"
      @selectOption="onOptionSelected"
    />
    <ResultComponent
      v-else="showResult"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :quiz="quiz"
      :barPercantage="barPercantage"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import QuestionComponent from '@/components/QuestionComponent.vue'
import QuizHeader from '@/components/QuizHeader.vue'
import ResultComponent from '../components/ResultComponent.vue'
import { useRoute } from 'vue-router'
import quizes from '../quizes.json'

const route = useRoute()
const quizId = parseInt(route.params.id as string)

const home = ref({
  icon: 'pi pi-home'
})

const router = useRouter()

const goHome = (): void => {
  router.push('/')
}

const quiz = quizes.find((quiz) => quiz.id === quizId)

const currentQuizIndex = ref<number>(0)
const numberOfCorrectAnswers = ref<number>(0)

const questionsStatus = computed(() => {
  return `${currentQuizIndex.value}/${quiz.questions.length}`
})

const showResult = ref<boolean>(false)

const completed = computed<number>(() => {
  return Math.floor((currentQuizIndex.value / quiz.questions.length) * 100)
})

const changeIndex = () => {
  if (currentQuizIndex.value <= quiz.questions.length - 1) {
    currentQuizIndex.value += 1
  }
}

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value += 1
  }
  if (quiz.questions.length === currentQuizIndex.value) {
    showResult.value = true
  }
}
</script>
