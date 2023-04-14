<template>
  <div class="layout" v-if="modalAuth">
    <form @submit.prevent="auth" class="login__form">
      <h1 class="login__title">{{ modalTitle }}</h1>
      <div v-if="!loading" class="login__inputs">
        <input
          v-if="modalTitle === 'Регистрация'"
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
</template>

<script setup>
import { reactive, defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from './../stores/user'
import { useAppStore } from './../stores/app'
import LoadingSpinner from './LoadingSpinner.vue'

const appStore = useAppStore()
const { modalAuth } = storeToRefs(appStore)

const userStore = useUserStore()
const props = defineProps(['modalTitle', 'isLogin'])

const { errorMessage, loading, user } = storeToRefs(userStore)

const userCredentials = reactive({
  username: '',
  email: '',
  password: ''
})

// const showModal = () => {
//   isVisible.value = true
// }

// const handleOk = (e) => {
//   console.log(e)
//   isVisible.value = false
// }

const auth = async () => {
  if (props.isLogin) {
    await userStore.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email
    })
  } else {
    await userStore.handleSignup(userCredentials)
  }

  if (user.value) {
    appStore.toggleModalAuth()
  }
  // if (errorMessage.value !== '') {
  //   console.log(errorMessage.value)
  //   return
  // }
}
</script>

<style scoped lang="scss">
.layout {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: $tr;
}

.login__form {
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: $shadow;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $white;
  color: $dark;
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
