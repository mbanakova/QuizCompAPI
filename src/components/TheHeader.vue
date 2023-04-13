<template>
  <header class="header">
    <div class="container header__container">
      <TheNav />
      <p v-if="userStore.user.isAuthenticated" class="header__user">
        Привет, {{ userStore.user.name }}
      </p>
      <button v-if="userStore.user.isAuthenticated" class="button" @click="logout">Выйти</button>
    </div>
  </header>
</template>

<script setup>
import TheNav from './TheNav.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './../stores/user'
const userStore = useUserStore()
const router = useRouter()
const logout = () => {
  userStore.user.isAuthenticated = false
  router.push({ name: 'login' })
}
</script>

<style scoped lang="scss">
.header {
  padding: 20px 0;
  background-color: $accent;
  color: $white;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__user {
  margin: 0;
}
</style>
