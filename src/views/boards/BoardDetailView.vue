<template>
  <div>
    <h1>Board Detail</h1>
    <hr class="my-3" />
    <h2>Title</h2>
    <p>Content</p>
    <p class="text-muted">2025-01-01</p>
    <div class="row g-1">
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white">prev</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white">next</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white" @click="boardListPage">
          List Page
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-success" @click="boardEditPage">Edit</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const boardId = route.params.id

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}
const boardEditPage = () => {
  router.push({ name: 'BoardEdit', params: { boardId } })
}
</script>

<style lang="scss" scoped></style>
