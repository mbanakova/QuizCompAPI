<template>
  <header>
    <h4>question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="`width: ${barPercentage}`"></div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  questionStatus: string
  barPercentage: string
}>()
</script>

<style scoped lang="scss">
.quiz h4 {
  font-size: 30px;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid rgb(171, 164, 233);
}

.completion {
  height: 100%;
  width: 0%;
  background: repeating-linear-gradient(-45deg, #74d8e6, #74d8e6 25px, #74bce6 25px, #74bce6 50px);
}
</style>
