<template>
  <div>
    <h1>Board Edit</h1>
    <hr />
    <form @submit.prevent="boardEdit">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input v-model="boardForm.title" type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="boardForm.content" class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-3 d-flex gap-2">
        <button type="button" class="btn btn-outline-danger" @click="boardDetailPage">
          Cancel
        </button>
        <button class="btn btn-outline-success">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { getBoardById, updateBoard } from '@/api/boards'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const boardId = route.params.boardId
const boardForm = ref({
  title: null,
  content: null,
})

// 1. 조회
const fetchBoard = async () => {
  const { data } = await getBoardById(boardId)
  setBoardForm(data)
}
const setBoardForm = ({ title, content }) => {
  boardForm.value.title = title
  boardForm.value.content = content
}
fetchBoard()

const boardEdit = async () => {
  try {
    await updateBoard(boardId, { ...boardForm.value })
    router.push({ name: 'BoardDetail', params: { boardId } })
  } catch (err) {
    console.error(err)
  }
}

const boardDetailPage = () => {
  router.push(`/boards/${route.params.id}`)
}

// const boardId = route.params.id
// const boardDetailPage = () => {
//   router.push({ name: 'BoardDetail', params: boardId })
// }
</script>

<style lang="scss" scoped></style>
