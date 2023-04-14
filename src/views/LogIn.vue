<template>
  <main class="container login">
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <h1 class="login__title">Авторизация</h1>
        <div v-if="!loading" class="login__inputs">
          <input
            class="login__input"
            type="text"
            placeholder="Имя"
            autocomplete="username"
            v-model.trim="userCredentials.username"
          />
          <input
            class="login__input"
            type="text"
            placeholder="E-mail"
            autocomplete="email"
            v-model.trim="userCredentials.email"
          />
          <input
            class="login__input"
            type="password"
            autocomplete="current-password"
            placeholder="Пароль"
            v-model.trim="userCredentials.password"
          />
        </div>
        <LoadingSpinner v-else></LoadingSpinner>
        <p class="error">{{ errorMessage }}</p>
        <button class="button login__button" type="submit" :disabled="loading">Войти</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import LoadingSpinner from './../components/LoadingSpinner.vue'

const router = useRouter()
const userStore = useUserStore()
const { errorMessage, loading, user } = storeToRefs(userStore)

const userCredentials = reactive({
  username: '',
  email: '',
  password: ''
})

const login = async () => {
  await userStore.handleSignup(userCredentials)
  if (errorMessage.value !== '') {
    console.log(errorMessage.value)
    return
  }
  router.push({ name: 'quizlist' })
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login__form {
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: $shadow;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login__title {
  font-size: 20px;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: $accent;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}

.login__inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.login__input {
  padding: 8px;
  border: 2px solid $border;
  border-radius: 4px;
  transition: $tr;
  outline: none;
  width: 100%;

  &:focus {
    border-color: $accent;
  }
}

.login__button {
  align-self: flex-end;
}

.error {
  margin: 0;
  color: $error;
  min-height: 25px;
}
</style>
