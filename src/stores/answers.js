
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase'

export const useAnswersStore = defineStore('answers', () => {

  const answers = ref([])
  const stats = [
    {
      id: '432',
      quiz: 'Химия',
      username: 'Вася',
      totalQuestions: 3,
      correctAnswers: 2
    }
  ]

  const addUserAnswers = (userAnswers) => {
    answers.value = userAnswers

    // const { username, quiz, correctAnswers, totalQuestions } = answers

    // await supabase.from('answers').insert({
    //   username, quiz, correctAnswers, totalQuestions
    // })
  }
  const addToStatistics = async (attempt) => {
    stats.push(attempt)
    console.log(attempt);

    const { username, quiz, correctAnswers, totalQuestions } = attempt
    const errorMessage = ref('')

    const { data, error } = await supabase.from('answers').insert({
      username, quiz, correctAnswers, totalQuestions
    })
    if (error) {
      errorMessage.value = error.message
      console.log(errorMessage.value);
      console.log(data);
    }
  }

  const getAnswers = async () => {

    const { data, error } = await supabase.from('answers').select()

    if (error) {
      console.log(error.message);
    }

    answers.value = data
    return answers
  }
  return { answers, stats, addUserAnswers, addToStatistics, getAnswers }
})
