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
    <!-- 페이징 -->
    <nav class="mt-5 bg-dart" aria-label="Page navigation example">
      <ul class="pagination justify-content-center text-light">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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

const router = useRouter()
const boards = ref({})
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
})

const fetchBoards = async () => {
  // 2. async/await, 구조 분해 할당
  try {
    const { data } = await getBoards(params.value)
    boards.value = data
  } catch (err) {
    console.error(err)
  }
  // // 3.구조 분해 할당 응용
  // ({ data: boards.value } = await getBoards())

  // 1. // then(), catch()
  // getBoards()
  //   .then((resp) => {
  //     console.log('resp : ', resp)
  //   })
  //   .catch((err) => {
  //     console.log('err : ', err)
  //   })
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
<style>
.page-link {
  background: #212529;
  color: #fff;
  border: none;
}
</style>
