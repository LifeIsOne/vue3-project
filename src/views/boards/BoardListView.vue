<template>
  <div>
    <h1>Board List</h1>
    <hr class="my-3" />
    <div class="row g-1">
      <div v-for="board in boards" :key="board.id" class="col-4">
        <!-- prettier-ignore -->
        <BoardItem
          :title="board.title"
          :content="board.content"
          :created-at="board.createdAt"
          @click="boardDetailPage(board.id)"
          />
      </div>
    </div>
  </div>
</template>

<script setup>
import BoardItem from '@/components/boards/BoardItem.vue'
import { ref } from 'vue'
import { getBoards } from '@/api/boards'
import { useRouter } from 'vue-router'

const boards = ref()
const router = useRouter()

const fetchBoards = () => {
  boards.value = getBoards()
}
fetchBoards()

const boardDetailPage = (id) => {
  router.push(`boards/${id}`)
}
</script>

<style lang="scss" scoped></style>
