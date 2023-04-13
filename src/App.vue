<template>
  <TheNav />
  <Transition name="router"> <RouterView /> </Transition>
</template>

<script setup>
import TheNav from './components/TheNav.vue'
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
