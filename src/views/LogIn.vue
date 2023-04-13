<template>
  <main class="container login">
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <h1 class="login__title">Авторизация</h1>
        <input class="login__input" type="text" placeholder="Имя" v-model.trim="user.name" />
        <input
          class="login__input"
          type="number"
          placeholder="Возраст"
          min="6"
          max="100"
          v-model="user.age"
        />
        <button class="button login__button" type="submit">Войти</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from './../stores/user'
const user = reactive({
  name: '',
  age: null,
  isAuthenticated: false
})

const router = useRouter()
const userStore = useUserStore()
const login = () => {
  user.isAuthenticated = true
  userStore.addUser(user)

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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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

.login__input {
  padding: 8px;
  border: 2px solid $border;
  border-radius: 4px;
  transition: $tr;
  outline: none;

  &:focus {
    border-color: $accent;
  }
}

.login__button {
  align-self: flex-end;
}
</style>
