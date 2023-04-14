import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {

  const modalAuth = ref(false)

  const toggleModalAuth = () => {
    modalAuth.value = !modalAuth.value
  }

  return { modalAuth, toggleModalAuth }
})