<template>
  <main class="container">
    <header>
      <h1>Тесты</h1>
      <input v-model.trim="search" type="text" placeholder="Поиск..." />
    </header>

    <div class="options-container">
      <ul class="card-list">
        <TransitionGroup
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <QuizCard
            v-for="(quiz, index) in quizes"
            :key="quiz.id"
            :quiz="quiz"
            :data-index="index"
          />
        </TransitionGroup>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuizListStore } from './../stores/quizList'
import gsap from 'gsap'
import QuizCard from '../components/QuizCard.vue'

const quizListStore = useQuizListStore()
const search = ref('')
const quizes = ref(quizListStore.quizes)
watch(search, () => {
  quizes.value = quizListStore.quizes.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const beforeEnter = (elem) => {
  //card-enter-from
  elem.style.opacity = 0
  elem.style.transform = 'translateY(50px)'
}

const enter = (elem) => {
  //card-enter-to
  gsap.to(elem, {
    y: 0,
    opacity: 1,
    duration: 0.3,
    delay: elem.dataset.index * 0.3
  })
}

const afterEnter = () => {
  //card-enter-active
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.card-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  gap: 20px;
}
i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
