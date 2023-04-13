<template>
  <h2 class="question">{{ question.text }}</h2>

  <div class="options-container">
    <div
      class="option"
      v-for="option in question.options"
      :key="option.id"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option__label">{{ option.label }}</p>
      <p class="option__value">
        {{ option.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['selectOption'])

defineProps<{
  question: {
    id: number
    text: string
    options?: Array<any>
  }
}>()

const emitSelectedOption = (isCorrect: boolean) => {
  emit('selectOption', isCorrect)
}
</script>

<style scoped lang="scss">
.question {
  margin: 0;
  font-size: 25px;
}
.options-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
}
.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;

  &:hover {
    & .option__label {
      background-color: $accent;
    }

    & .option__value {
      background-color: $border;
    }
  }

  &:active {
    & .option__value {
      background-color: $light;
    }
  }
}

.option__label {
  margin: 0;
  background-color: $light;
  color: $white;
  font-weight: bold;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $tr;
}

.option__value {
  margin: 0;
  background-color: $pale;
  flex-grow: 1;
  font-size: 20px;
  padding: 8px 10px;
  transition: $tr;
}
</style>
