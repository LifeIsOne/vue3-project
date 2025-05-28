<template>
  <div>
    <h1>Board Edit</h1>
    <hr />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
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
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const boardDetailPage = () => {
  router.push(`/boards/${route.params.id}`)
}

// const boardId = route.params.id
// const boardDetailPage = () => {
//   router.push({ name: 'BoardDetail', params: boardId })
// }
</script>

<style lang="scss" scoped></style>
