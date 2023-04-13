<template>
	<div class="about" v-if="quiz">
		<h1>here is result of quiz {{ route.params.id }}</h1>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { q } from './../data/quizes'

const quizList = ref(q)
const route = useRoute()

const quiz = quizList.value.find((quiz) => quiz.id === parseInt(route.params.id))
</script>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
