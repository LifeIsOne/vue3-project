<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :msg="error.message" />

  <div v-else>
    <h1>Board Detail</h1>
    <hr class="my-3" />
    <div class="bg-dark text-white p-3 mb-3 card">
      <h2>{{ board.title }}</h2>
      <p>{{ board.content }}</p>
      <p class="text-secondary">
        {{ $dayjs(board.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
      </p>
    </div>

    <!-- todo: 수정해야할 듯 안나옴 -->
    <AppError v-if="removeError" :msg="removeError.message" />
    <!-- 버튼 시작 -->
    <div class="row g-1">
      <!-- 이전  -->
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white">prev</button>
      </div>
      <!-- 다음  -->
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white">next</button>
      </div>
      <div class="col-auto me-auto"></div>
      <!-- 글 목록 -->
      <div class="col-auto">
        <button class="btn btn-outline-secondary text-white" @click="boardListPage">
          List Page
        </button>
      </div>
      <!-- 수정 -->
      <div class="col-auto">
        <button class="btn btn-outline-success" @click="boardEditPage">Edit</button>
      </div>
      <!-- 삭제 -->
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="removeBoard" :disabled="removeLoading">
          <template v-if="removeLoading">
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
          </template>

          <template v-else>Delete</template>
        </button>
      </div>
    </div>
    <!-- 버튼 종료 -->
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { deleteBoard, getBoardById } from '@/api/boards'
import { ref } from 'vue'

const props = defineProps({
  boardId: String,
})

const router = useRouter()
const route = useRoute()
const boardId = route.params.boardId
const board = ref({})

// 로딩•에러 상태
const loading = ref(false)
const error = ref(null)

const fetchBoard = async () => {
  try {
    loading.value = true
    const { data } = await getBoardById(props.boardId)
    setBoard(data)
    // board.value = { ...data } 어떤 데이터가 올 지 알지 못하기 때문에
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}
const setBoard = ({ title, content, createdAt }) => {
  // 원하는 데이터만 구조 분해 할당으로 파라메터로 선언
  board.value.title = title
  board.value.content = content
  board.value.createdAt = createdAt
}
fetchBoard()

// 삭제 로딩•에러 상태
const removeError = ref(null)
const removeLoading = ref(false)

const removeBoard = async () => {
  try {
    if (confirm('Confirm delete?') === false) {
      return
    }
    removeLoading.value = true
    await deleteBoard(props.boardId)
    router.push({ name: 'BoardList' })
  } catch (err) {
    vAlert(err.message)
    removeError.value = err
  } finally {
    removeLoading.value = false
  }
}
// const removeBoard = async () => {
//   removeLoading.value = true
//   try {
//     await deleteBoard(props.boardId)
//     router.push({ name: 'BoardList' })
//   } catch (err) {
//     vAlert(err.message)
//     removeError.value = err
//   } finally {
//     removeLoading.value = false
//   }
// }

const boardListPage = () => {
  router.push({ name: 'BoardList' })
}
const boardEditPage = () => {
  router.push({ name: 'BoardEdit', params: { boardId: props.boardId } })
}
</script>

<style lang="scss" scoped></style>
