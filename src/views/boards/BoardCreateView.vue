<template>
  <div>
    <h1>Create Board</h1>
    <hr />
    <AppError v-if="error" :msg="error.message" />
    <BoardForm
      v-model:title="boardForm.title"
      v-model:content="boardForm.content"
      @submit.prevent="saveBoard"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-secondary" @click="boardListPage">List</button>
        <!-- <button class="btn btn-success">Save</button> -->

        <button class="btn btn-primary" :disabled="loading">
          <template v-if="loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </template>
          <template v-else>Save</template>
        </button>
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
// 로딩 상태
const loading = ref(false)
const error = ref(null)

const saveBoard = async () => {
  loading.value = true
  try {
    await createBoard({
      ...boardForm.value,
      createdAt: Date.now(),
      // createdAt: new Date().toLocaleString(),
    })
    router.push({ name: 'BoardList' })
    vSuccess('Edit complete!')
  } catch (err) {
    vAlert(err.message)
    error.value = err
  } finally {
    loading.value = false
  }
}

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}

// 얼럿( Alert )
const { vAlert, vSuccess } = useAlert()
</script>

<style lang="scss" scoped></style>
