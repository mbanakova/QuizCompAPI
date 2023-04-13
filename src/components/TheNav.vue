<template>
  <nav class="nav">
    <RouterLink active-class="active" class="router-link" to="/">home</RouterLink>
    <RouterLink active-class="active" class="router-link" to="results">results</RouterLink>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
.router-link {
  padding: 5px 10px;
  color: $white;
  text-decoration: none;
  font-size: 18px;
}
.active {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
