<template>
  <TheHeader />
  <!-- <Transition name="router"> <RouterView /> </Transition> -->

  <router-view v-slot="{ Component }">
    <transition name="router">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<style scoped lang="scss">
.router-enter-from,
.router-leave-to {
  opacity: 0;
  // transform: translateY(40px);
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
  // transform: translateY(0);
}

.router-enter-active {
  transition: all 1s ease;
}
</style>
