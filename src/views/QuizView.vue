<template>
  <main class="container quiz-view" v-if="quiz">
    <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <div class="question-container">
      <QuestionItem
        v-if="!showResults"
        :question="quiz.questions[currentQuestionId - 1]"
        @selectOption="onOptionSelected"
      />
      <QuizResult
        v-else
        :quizQuestionLength="quiz.questions.length"
        :numberOfCorrectAnswers="correctAnswersNum"
      />
    </div>
  </main>
  <div v-else>quiz {{ route.params.id }} does not exist</div>
  <RouterView />
</template>

<script setup>
import QuizHeader from './../components/QuizHeader.vue'
import QuestionItem from './../components/QuestionItem.vue'
import QuizResult from './../components/QuizResult.vue'
import { useRoute, RouterView } from 'vue-router'
import { useQuizListStore } from './../stores/quizList'
import { useAnswersStore } from './../stores/answers'
import { ref, reactive, computed } from 'vue'

const route = useRoute()
const answersStore = useAnswersStore()
const quizListStore = useQuizListStore()

const quizId = parseInt(route.params.id)
const quiz = quizListStore.quizes.find((q) => q.id === quizId)
const currentQuestionId = ref(1)
const correctAnswersNum = ref(0)

const questionStatus = computed(() => {
  if (currentQuestionId.value <= quiz.questions.length) {
    return `Вопрос ${currentQuestionId.value} из ${quiz.questions.length}:`
  } else {
    return `Тест завершён`
  }
})

const barPercentage = computed(() => {
  if (currentQuestionId.value <= quiz.questions.length) {
    return `${((currentQuestionId.value - 1) / quiz.questions.length) * 100}%`
  } else {
    return `100%`
  }
})
const showResults = ref(false)
const userQuiz = reactive({
  quizId,
  userAnswers: []
})

const onOptionSelected = ({ isCorrect, id }) => {
  if (isCorrect) {
    correctAnswersNum.value++
  }

  if (quiz.questions.length === currentQuestionId.value) {
    showResults.value = true
    answersStore.addUserAnswers(userQuiz)
  }
  const answer = {
    id,
    isCorrect
  }
  userQuiz.userAnswers.push(answer)
  currentQuestionId.value++
}
</script>

<style scoped lang="scss">
.question-container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.quiz-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
