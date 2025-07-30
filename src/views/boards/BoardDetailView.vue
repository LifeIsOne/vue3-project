import { useRoute, useRouter } from 'vue-router'
import { deleteBoard, getBoardById } from '@/api/boards'
import { ref } from 'vue'
import { useAlert } from '@/composables/alert'

const props = defineProps({
  boardId: String,
})

const router = useRouter()
const route = useRoute()
const boardId = route.params.boardId
const board = ref({})

// alert composable
const { vAlert } = useAlert()

// ... existing code ...

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