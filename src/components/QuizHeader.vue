<template>
  <div class="progress">
    <div class="progress__bar">
      <div class="progress__completion" :style="`width: ${barPercentage}`"></div>
    </div>
    <h4 class="progress__title">{{ questionStatus }}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  questionStatus: string
  barPercentage: string
}>()
</script>

<style scoped lang="scss">
.progress {
  padding: 20px 0 0;

  width: 100%;
}
.progress__title {
  font-size: 20px;
  margin: 0 0 20px;
  text-align: center;
}

.progress__bar {
  width: 100%;
  height: 25px;
  border: 3px solid $accent;
  margin-bottom: 40px;
}

.progress__completion {
  height: 100%;
  width: 0%;
  background: repeating-linear-gradient(-45deg, #74d8e6, #74d8e6 25px, #74bce6 25px, #74bce6 50px);
  transition: $tr;
}
</style>
