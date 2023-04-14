
import { defineStore } from 'pinia'

export const useAnswersStore = defineStore('answers', {
  state: () => ({
    answers: [],
    stats: [
      {
        id: '432',
        quiz: 'Химия',
        username: 'Вася',
        totalQuestions: 3,
        correctAnswers: 2
      }
    ]
  }),
  actions: {
    addUserAnswers(answers) {
      this.answers = answers
    },
    addToStatistics(attempt) {
      this.stats.push(attempt)
    },
  },
  getters: {
  }
})
