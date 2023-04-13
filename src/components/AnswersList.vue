<template>
  <ul class="user__results">
    <li class="total-list card" v-for="question in quiz.questions" :key="question.id">
      <div class="top">
        <h3>{{ question.id }}. {{ question.text }}</h3>
      </div>
      <div
        class="answer-bar"
        :class="{
          correct: option.isCorrect
        }"
        v-for="option in question.options"
        :key="option.id"
      >
        <div class="percent-bar" style="width: 30.7692%"></div>
        <div class="z-layer">
          {{ option.text }}
          <span v-if="option.id === userAnswers[question.id - 1].id">✓</span>
        </div>
        <div class="z-layer">Ответили: 12</div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizListStore } from './../stores/quizList'
import { useAnswersStore } from './../stores/answers'

const quizListStore = useQuizListStore()
const answersStore = useAnswersStore()
const route = useRoute()

const quizes = quizListStore.quizes
const quiz = quizes.find((quiz) => quiz.id === parseInt(route.params.id))

const userAnswers = answersStore.answers.userAnswers
</script>

<style scoped lang="scss">
.user__results {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.total-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}
.answer-bar {
  position: relative;
  padding: 5px 15px 7px;
  background-color: lighten($error, 40%);
  display: flex;
  justify-content: space-between;
}
.correct {
  background-color: lighten($success, 40%);
}
.percent-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-image: repeating-linear-gradient(
    -60deg,
    darken($error, 10%),
    darken($error, 10%) 10px,
    $error 10px,
    $error 20px
  );
  .correct & {
    background-image: repeating-linear-gradient(
      -60deg,
      $success,
      $success 10px,
      darken($success, 10%),
      10px,
      darken($success, 10%) 20px
    );
  }
}
.z-layer {
  position: relative;
  z-index: 1;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  & h3 {
    text-align: left;
    margin: 0;
  }
  .img {
    max-width: 100px;
  }
}

.user {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: black;
}
</style>
