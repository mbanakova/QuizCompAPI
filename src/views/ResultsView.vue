<template>
  <main class="results container">
    <h1 class="results__title">Таблица результатов</h1>
    <LoadingSpinner v-if="loading" />
    <table class="results__table" v-else>
      <thead class="results__head">
        <tr>
          <th>Участник:</th>
          <th>Тест:</th>
          <th class="selected">Правильных ответов:</th>
          <th class="">Неправильных ответов:</th>
          <th class="">Время:</th>
        </tr>
      </thead>
      <tbody class="results__body">
        <tr class="card" v-for="data in tableData" :key="data.id">
          <td>{{ data.username }}</td>
          <td>{{ data.quiz }}</td>
          <td>
            {{ data.correctAnswers }} / {{ data.totalQuestions }} ({{
              ((data.correctAnswers / data.totalQuestions) * 100).toFixed(1)
            }}%)
          </td>
          <td>
            {{ data.totalQuestions - data.correctAnswers }} / {{ data.totalQuestions }} ({{
              (((data.totalQuestions - data.correctAnswers) / data.totalQuestions) * 100).toFixed(
                1
              )
            }}%)
          </td>
          <td>119 cек.</td>
        </tr>
      </tbody>
    </table>
    <!-- <button @click="loadStats">click</button>
    <pre>{{ statistics }}</pre> -->
  </main>
</template>

<script setup>
import { useAnswersStore } from './../stores/answers'
import { onMounted, ref } from 'vue'
import LoadingSpinner from './../components/LoadingSpinner.vue'

const answersStore = useAnswersStore()
const tableData = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await answersStore.getAnswers()
  loading.value = false
  tableData.value = answersStore.answers
})
</script>

<style lang="scss">
.results__title {
  margin: 0 0 40px;
  font-size: 25px;
}

.results__table {
  border-collapse: collapse;
  border: 1px solid $border;
  width: 100%;
  text-align: center;
  word-wrap: break-word;

  & td {
    padding: 5px;
    border: 1px solid $border;
  }
}

.results__head {
  background-color: $accent;
  color: $white;
  text-align: center;

  & th {
    padding: 10px 5px;
    border: 1px solid $border;
  }
}
</style>
