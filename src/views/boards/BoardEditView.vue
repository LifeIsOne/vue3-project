<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :msg="error.message" />

  <div v-else>
    <h1>Board Edit</h1>
    <hr />
    <AppError v-if="editError" :msg="editError.message" />

    <BoardForm
      @submit.prevent="editBoard"
      v-model:title="boardForm.title"
      v-model:content="boardForm.content"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="boardDetailPage">
          Cancel
        </button>
        <button class="btn btn-success" :disabled="editLoading">
          <template v-if="editLoading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </template>
          <template v-else>Edit</template>
        </button>
      </template>
    </BoardForm>
    <!-- <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType" /> -->
  </div>
</template>

<script setup>
import { getBoardById, updateBoard } from '@/api/boards'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BoardForm from '@/components/boards/BoardForm.vue'
import { useAlert } from '@/composables/alert'
import { useAxios } from '@/hook/useAxios'

// 얼럿( Alert )
const { vAlert, vSuccess } = useAlert()

const route = useRoute()
const router = useRouter()
const boardId = route.params.boardId

// 조회
const { data: boardForm, loading, error } = useAxios('/boards/' + boardId)

// 수정 로딩, 에러 상태
const {
  loading: editLoading,
  error: leditError,
  execute,
} = useAxios(
  '/boards/' + boardId,
  { method: 'patch' },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: 'BoardDetail', params: { boardId } })
      vSuccess('Edit complete!')
    },
    onError: (err) => {
      vAlert(err.message)
    },
  },
)

const editBoard = () => {
  execute({
    ...boardForm.value,
  })
}

const boardDetailPage = () => {
  router.push({
    name: 'BoardDetail',
    params: {
      boardId,
    },
  })
}
</script>

<style lang="scss" scoped></style>
