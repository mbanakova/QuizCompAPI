<template>
  <div class="results">
    <h3>your result is:</h3>
    <!-- <Transition name="selected"> -->
    <!-- <p v-if="toggle"> -->
    <p>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</p>
    <!-- </Transition> -->
    <!-- <button @click="toggle = !toggle">click</button> -->
    <RouterLink to="/">go back</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

defineProps<{
  numberOfCorrectAnswers: number
  quizQuestionLength: number
}>()

const toggle = ref(false)
</script>

<style scoped lang="scss">
.results {
  text-align: center;
  padding: 20px;
  margin-top: 50px;
}

p {
  font-size: 18px;
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
</style>
