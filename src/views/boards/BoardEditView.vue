<template>
  <div>
    <h1>Board Edit</h1>
    <hr />
    <BoardForm
      @submit.prevent="editBoard"
      v-model:title="boardForm.title"
      v-model:content="boardForm.content"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="boardDetailPage">
          Cancel
        </button>
        <button class="btn btn-outline-success">Save</button>
      </template>
    </BoardForm>
    <!-- <AppAlert :show="showAlert" :msg="alertMsg" :type="alertType" /> -->
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { getBoardById, updateBoard } from '@/api/boards'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BoardForm from '@/components/BoardForm.vue'

const route = useRoute()
const router = useRouter()
const boardId = route.params.boardId
const boardForm = ref({
  title: null,
  content: null,
})

// 1. 조회
const fetchBoard = async () => {
  try {
    const { data } = await getBoardById(boardId)
    setBoardForm(data)
  } catch (err) {
    console.error(err)
    vAlert(err.message)
  }
}
const setBoardForm = ({ title, content }) => {
  boardForm.value.title = title
  boardForm.value.content = content
}
fetchBoard()

const editBoard = async () => {
  try {
    await updateBoard(boardId, { ...boardForm.value })
    // router.push({ name: 'BoardDetail', params: { boardId } })
    vAlert('Edit complete!', 'success')
  } catch (err) {
    console.error(err)
    vAlert(err.message)
  }
}

const boardDetailPage = () => {
  router.push(`/boards/${route.params.id}`)
}

// Alert
// const showAlert = ref(false)
// const alertMsg = ref('')
// const alertType = ref('error')
const alerts = ref([])

const vAlert = (msg, type) => {
  // showAlert.value = true
  // alertMsg.value = msg
  // alertType.value = type
  alerts.value.push({ msg, type })
  setTimeout(() => {
    // showAlert.value = false
    alerts.value.shift()
  }, 3000)
}
</script>

<style lang="scss" scoped></style>
