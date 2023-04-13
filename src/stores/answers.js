
import { defineStore } from 'pinia'

export const useAnswersStore = defineStore('answers', {
  state: () => ({
    answers: [],
    stats: []
  }),
  actions: {
    addUserAnswers(answers) {
      this.answers = answers
    },
  },
  getters: {
  }
})
