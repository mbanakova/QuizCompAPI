// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // return { count, doubleCount, increment }
  state: () => ({
    user: {
      name: '',
      age: null,
      isAuthenticated: false
    }
  }),
  actions: {
    addUser(user) {
      this.user = user
    },
    // toggleFavourites() {
    //   this.favouritesOpen = !this.favouritesOpen;
    // },
    // deleteFromFavs(id) {
    //   console.log(id);
    //   this.favourites = this.favourites.filter(i => i.id != id)
    // }
  },
  getters: {
    getFavouritesQuantiity() {
      //  return this.favourites.length
    }
  }
})
