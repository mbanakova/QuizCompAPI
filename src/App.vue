<template>
  <TheHeader /><router-view v-slot="{ Component }">
    <transition name="router">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import { useUserStore } from './stores/user'

const userStore = useUserStore()

onMounted(() => {
  userStore.getUser()
})
</script>

<style scoped lang="scss">
.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}

.router-enter-active {
  transition: all 1s ease;
}
</style>
