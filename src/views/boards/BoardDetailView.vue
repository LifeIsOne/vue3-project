<template>
  <div>
    <h1>Board Detail</h1>
    <hr class="my-3" />
    <div class="bg-dark text-white p-3 mb-3 card">
      <h2>{{ board.title }}</h2>
      <p>{{ board.content }}</p>
      <p class="text-secondary">{{ board.createdAt }}</p>
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

const props = defineProps({
  boardId: Number,
})

const router = useRouter()
const route = useRoute()
const boardId = route.params.boardId
const board = ref({})

const fetchBoard = async () => {
  const { data } = await getBoardById(props.boardId)
  setBoard(data)
  // board.value = { ...data }
}
const setBoard = ({ title, content, createdAt }) => {
  board.value.title = title
  board.value.content = content
  board.value.createdAt = createdAt
}
fetchBoard()

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}
const boardEditPage = () => {
  router.push({ name: 'BoardEdit', params: { boardId: props.boardId } })
}
</script>

<style lang="scss" scoped></style>
