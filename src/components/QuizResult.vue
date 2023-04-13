<template>
  <div class="results">
    <h3 class="results__title">
      Правильных ответов: {{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}
    </h3>
    <!-- <Transition name="selected"> -->
    <!-- <p v-if="toggle"> -->
    <!-- </Transition> -->
    <!-- <button @click="toggle = !toggle">click</button> -->
    <div class="result__buttons">
      <RouterLink class="button button--pale" to="/quizlist">К списку тестов</RouterLink>
      <button v-if="!openAnswers" class="button" @click="viewAnswers">Открыть ответы</button>
    </div>
    <TransitionGroup name="answers">
      <ul class="user__results" v-if="openAnswers">
        <li class="total-list card">
          <div class="top">
            <h3>1. Если смешать поровну жёлтый, красный и синий цвета, какой цвет получится?</h3>
            <div class="img">
              <img
                src="data:image/jpeg;base64,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"
                alt="d"
              />
            </div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 30.7692%"></div>
            <div class="z-layer">Фиолетовый</div>
            <div class="z-layer">Ответили: 12</div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 15.3846%"></div>
            <div class="z-layer">Малиновый</div>
            <div class="z-layer">Ответили: 6</div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 17.9487%"></div>
            <div class="z-layer">Бирюзовый</div>
            <div class="z-layer">Ответили: 7</div>
          </div>
          <div class="answer-bar correct">
            <div class="percent-bar" style="width: 35.8974%"></div>
            <div class="z-layer">Бордовый</div>
            <div class="z-layer">Ответили: 14</div>
          </div>
        </li>

        <li class="total-list card">
          <div class="top">
            <h3>2. Что на картинке?</h3>
            <div class="img">
              <img
                src="data:image/jpeg;base64,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"
                alt="d"
              />
            </div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 10.2564%"></div>
            <div class="z-layer">Шуруп</div>
            <div class="z-layer">Ответили: 4</div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 17.9487%"></div>
            <div class="z-layer">Винт</div>
            <div class="z-layer">Ответили: 7</div>
          </div>
          <div class="answer-bar">
            <div class="percent-bar" style="width: 15.3846%"></div>
            <div class="z-layer">Саморез</div>
            <div class="z-layer">Ответили: 6</div>
          </div>
          <div class="answer-bar correct">
            <div class="percent-bar" style="width: 56.4103%"></div>
            <div class="z-layer">Болт</div>
            <div class="z-layer">Ответили: 22</div>
          </div>
        </li>
      </ul></TransitionGroup
    >
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

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

.selected-enter-from {
  background-color: bisque;
}

.selected-enter-to {
  background-color: tomato;
}

.selected-enter-active {
  transition: all 4s ease;
}
.total-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
</style>
