<template>
  <div class="card">
    <RouterLink class="card__link" :to="`/quiz/${quiz.id}`">
      <img :src="quiz.img" :alt="quiz.name" />
      <div class="card__text">
        <h2 class="card__header">{{ quiz.name }}</h2>
        <p>{{ quiz.questions.length }} questions</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  quiz: {
    id: number
    img: string
    name: string
    questions: Array<any>
  }
}>()
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card__link {
  display: block;
}

.card img {
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.card__text {
  padding: 5px 10px 10px;
}

.card__header {
  font-weight: bold;
}
</style>
