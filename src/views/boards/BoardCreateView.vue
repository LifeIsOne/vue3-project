<template>
  <div>
    <h1>Create Board</h1>
    <hr />
    <form @submit.prevent="saveBoard">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input v-model="boardForm.title" type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea v-model="boardForm.content" class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-3 d-flex gap-2">
        <button type="button" class="btn btn-outline-secondary" @click="boardListPage">List</button>
        <button class="btn btn-success">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { createBoard } from '@/api/boards'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const boardForm = ref({
  title: null,
  content: null,
})

const saveBoard = async () => {
  try {
    await createBoard({
      ...boardForm.value,
      createdAt: Date.now(),
    })
    router.push({ name: 'BoardList' })
  } catch (err) {
    console.error(err)
  }
}

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}
</script>

<style lang="scss" scoped></style>
