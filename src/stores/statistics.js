
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../supabase'

export const useStatisticsStore = defineStore('statistics', () => {

  const statistics = ref([])


  const getStatistics = async (quizId) => {

    const { data, error } = await supabase.from('statistics')
      .select('a ,  b ,  c ,  d')
      .eq('quizId', quizId)

    if (error) {
      console.log(error.message);
    }

    const arr = []

    if (data) {
      data.forEach(index => {
        arr.push(Object.values(index))
      })
      statistics.value = arr
      console.log("statistics " + statistics.value);
      return statistics
    } else return 'no data'
  }


  return { statistics, getStatistics }
})
