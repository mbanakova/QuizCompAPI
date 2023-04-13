<template>
  <div class="results">
    <h3 class="results__title">
      Правильных ответов: {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
    </h3>
    <div class="result__buttons">
      <RouterLink class="button button--pale" to="/quizlist">К списку тестов</RouterLink>
      <button v-if="!openAnswers" class="button" @click="viewAnswers">Открыть ответы</button>
    </div>
    <TransitionGroup name="answers">
      <AnswersList v-if="openAnswers" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import AnswersList from './AnswersList.vue'

defineProps<{
  numberOfCorrectAnswers: number
  quizQuestionLength: number
}>()

const openAnswers = ref(false)

const viewAnswers = () => {
  openAnswers.value = !openAnswers.value
}
</script>

<style scoped lang="scss">
.answers-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.answers-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.answers-enter-active {
  transition: $tr;
}

.results {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.results__title {
  margin: 0;
}

.results__total {
  font-size: 18px;
  margin: 0;
}

.result__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
