<template>
	<div class="question-container">
		<h1 class="question">{{ question.text }}</h1>
	</div>
	<div class="options-container">
		<div
			class="option"
			v-for="option in question.options"
			:key="option.id"
			@click="emitSelectedOption(option.isCorrect)"
		>
			<p class="option-label">{{ option.label }}</p>
			<div class="option-value">
				<p>{{ option.text }}</p>
			</div>
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
	font-size: 40px;
	margin-bottom: 20px;
}

.option {
	display: flex;
	margin-bottom: 20px;
	cursor: pointer;
}

.option-label {
	background-color: bisque;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.option-value {
	background-color: #f5f5f5;
	width: 100%;
	font-size: 30px;
	padding: 0 20px;
}
</style>