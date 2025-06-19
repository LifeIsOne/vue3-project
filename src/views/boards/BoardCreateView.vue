<template>
  <div>
    <h1>Create Board</h1>
    <hr />
    <BoardForm
      v-model:title="boardForm.title"
      v-model:content="boardForm.content"
      @submit.prevent="saveBoard"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-secondary" @click="boardListPage">List</button>
        <button class="btn btn-success">Save</button>
      </template>
    </BoardForm>
  </div>
</template>

<script setup>
import { createBoard } from '@/api/boards'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BoardForm from '@/components/boards/BoardForm.vue'
import { useAlert } from '@/composables/alert'

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
      // createdAt: new Date().toLocaleString(),
    })
    router.push({ name: 'BoardList' })
    vSuccess('Edit complete!')
  } catch (err) {
    console.error(err)
    vAlert(err.message)
  }
}

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}

// 얼럿( Alert )
const { vAlert, vSuccess } = useAlert()
</script>

<style lang="scss" scoped></style>
