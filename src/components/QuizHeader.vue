<template>
  <h1 class="font-bold text-6xl">Quiz</h1>
  <div class="text-3xl mt-5 font-bold">Question: {{ props.questionsStatus }}</div>
  <div class="bar">
    <div class="completion mt-10">
      <ui-knob v-model="props.completed" valueTemplate="{value}%" ></ui-knob>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  questionsStatus: String,
  completed: Number
})
</script>
