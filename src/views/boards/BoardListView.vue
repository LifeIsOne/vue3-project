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
    <hr class="my-5" />
    <AppCard>
      <BoardDetailView :boardId="1" />
    </AppCard>
  </div>
</template>

<script setup>
import BoardItem from '@/components/boards/BoardItem.vue'
import BoardDetailView from '@/views/boards/BoardDetailView.vue'
import AppCard from '@/components/AppCard.vue'
import { ref } from 'vue'
import { getBoards } from '@/api/boards'
import { useRouter } from 'vue-router'

const boards = ref()
const router = useRouter()

const fetchBoards = () => {
  boards.value = getBoards()
}
fetchBoards()

const boardDetailPage = (boardId) => {
  // router.push(`boards/${id}`)
  router.push({
    name: 'BoardDetail',
    params: {
      boardId,
    },
  })
}
</script>

<style lang="scss" scoped></style>
