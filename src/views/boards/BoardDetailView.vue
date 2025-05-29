<template>
  <div>
    <h1>Board Detail</h1>
    <hr class="my-3" />
    <div class="bg-dark text-white p-3 mb-3 card">
      <h2>{{ form.title }}</h2>
      <p>{{ form.content }}</p>
      <p class="text-secondary">{{ form.createdAt }}</p>
    </div>
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
import { getBoardById } from '@/api/boards'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const boardId = route.params.boardId
const form = ref()

const fetchBoard = () => {
  const data = getBoardById(boardId)
  form.value = { ...data }
}
fetchBoard()

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}
const boardEditPage = () => {
  router.push({ name: 'BoardEdit', params: { boardId } })
}
</script>

<style lang="scss" scoped></style>
