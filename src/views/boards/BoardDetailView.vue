<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :msg="error.message" />
  <div v-else>
    <h1>Board Detail</h1>
    <p>id: {{ props.boardId }}, isOdd: {{ isOdd }}</p>
    <hr class="my-3" />
    <div class="bg-dark text-white p-3 mb-3 card">
      <h2>{{ board.title }}</h2>
      <p class="content">{{ board.content }}</p>
      <p class="text-secondary">
        {{ $dayjs(board.createdAt).format('YYYY년 MM월 DD일 HH:mm:ss') }}
      </p>
    </div>

    <!-- todo: 수정해야할 듯 안나옴 -->
    <AppError v-if="removeError" :msg="removeError.message" />
    <!-- 버튼 시작 -->
    <div class="row g-1">
      <!-- 이전  -->
      <div class="col-auto">
        <button
          class="btn btn-outline-secondary text-white"
          @click="$router.push('/boards/' + (Number(boardId) - 1))"
        >
          prev
        </button>
      </div>
      <!-- 다음  -->
      <div class="col-auto">
        <button
          class="btn btn-outline-secondary text-white"
          @click="$router.push('/boards/' + (Number(boardId) + 1))"
        >
          next
        </button>
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
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { computed, toRefs } from 'vue'
import { useAlert } from '@/composables/alert'
import { useAxios } from '@/hook/useAxios'
import { useNumber } from '@/composables/number'

// 얼럿
const { vAlert, vSuccess } = useAlert()

const props = defineProps({
  boardId: String,
})

const router = useRouter()
// const boardIdRef = toRef(props, 'boardId')
const { boardId: boardIdRef } = toRefs(props)
const { isOdd } = useNumber(boardIdRef)
const route = useRoute()
const boardId = route.params.boardId
const url = computed(() => '/boards/' + props.boardId)
const { data: board, loading, error } = useAxios(url)

const setBoard = ({ title, content, createdAt }) => {
  // 원하는 데이터만 구조 분해 할당으로 파라메터로 선언
  board.value.title = title
  board.value.content = content
  board.value.createdAt = createdAt
}

// 삭제 로딩•에러 상태
const {
  loading: removeLoading,
  error: removeError,
  execute,
} = useAxios(
  '/boards/' + boardId,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: 'BoardList' })
      vSuccess('De lete complete!')
    },
    onError: (err) => {
      vAlert(err.message)
    },
  },
)

const removeBoard = async () => {
  if (confirm('Confirm delete?') === false) {
    return
  }
  execute()
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

onBeforeRouteUpdate(() => {
  console.log('🆙 페이지 갱신 \n onBeforeRouteUpdate')
})

onBeforeRouteLeave(() => {
  console.log('🍂 페이지 이탈 \n onBeforeRouteLeave')
})
</script>
<script>
export default {
  beforeRouteEnter() {
    console.log('📥 페이지 진입 \n beforeRouteEnter')
  },
}
</script>

<style lang="scss" scoped></style>
