<template>
  <div>
    <h1>Home View</h1>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button @click="goAboutView" class="btn btn-primary">About Button</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutView = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>
