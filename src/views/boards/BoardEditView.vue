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

const { data: boardForm, loading, error } = useAxios('/boards/' + boardId)

// 조회
const fetchBoard = async () => {
  try {
    loading.value = true
    const { data } = await getBoardById(boardId)
    setBoardForm(data)
  } catch (err) {
    // console.error(err)
    vAlert(err.message)
    error.value = err
  } finally {
    loading.value = false
  }
}
const setBoardForm = ({ title, content }) => {
  boardForm.value.title = title
  boardForm.value.content = content
}
fetchBoard()

// 수정 로딩, 에러 상태
const editLoading = ref(false)
const editError = ref(null)

const editBoard = async () => {
  editLoading.value = true
  try {
    await updateBoard(boardId, { ...boardForm.value })
    router.push({ name: 'BoardDetail', params: { boardId } })
    vSuccess('Edit complete!')
  } catch (err) {
    vAlert(err.message)
    editError.value = err
  } finally {
    editLoading.value = false
  }
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
