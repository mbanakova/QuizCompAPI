<template>
  <header class="header">
    <div class="container header__container">
      <TheNav />
      <div class="header__auth" v-if="!loadingUser">
        <button class="button button--pale" @click="isLogin" v-if="!user">Вход</button>
        <button class="button" @click="isSignUp" v-if="!user">Регистрация</button>
        <button class="button" @click="logout" v-if="user">Выйти</button>
      </div>
    </div>
    <ModalWindow :modalTitle="modalTitle" :isLogin="login" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from './../stores/app'
import { useUserStore } from './../stores/user'
import TheNav from './TheNav.vue'
import ModalWindow from './ModalWindow.vue'

const appStore = useAppStore()
const userStore = useUserStore()
const { user, loadingUser } = storeToRefs(userStore)
const modalTitle = ref('')
const login = ref(false)

const isLogin = () => {
  appStore.toggleModalAuth()
  modalTitle.value = 'Вход'
  login.value = true
}

const isSignUp = () => {
  appStore.toggleModalAuth()
  modalTitle.value = 'Регистрация'
}
</script>

<style scoped lang="scss">
.header {
  padding: 20px 0;
  background-color: $accent;
  color: $white;
  position: relative;
  min-height: 77px;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__auth {
  display: flex;
  gap: 10px;
}
.header__user {
  margin: 0;
}
</style>
