<template>
  <div>
    <h1>About View</h1>
    <p>{{ $route.path }}</p>
    <button @click="$router.push('/')" class="btn btn-primary">Home Button</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route.path: ', route.path)
</script>

<style lang="scss" scoped></style>
