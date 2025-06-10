<template>
  <div>
    <h1>Board List</h1>
    <hr class="my-4" />
    <!-- 검색 폼 -->
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <!-- n개씩 보기 -->
        <div class="col-3">
          <select v-model="params._limit" class="form-select">
            <option value="3">Show 3</option>
            <option value="6">Show 6</option>
            <option value="9">Show 9</option>
          </select>
        </div>
      </div>
    </form>

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
        <!-- prev -->
        <li class="page-item" :class="{ disabled: params._page <= 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="--params._page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- page -->
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a>
        </li>
        <!-- next -->
        <li class="page-item" :class="{ disabled: params._page >= pageCount }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="++params._page">
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
import { computed, ref, watchEffect } from 'vue'
import { getBoards } from '@/api/boards'
import { useRouter } from 'vue-router'

const router = useRouter()
const boards = ref({})

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
})
const totalBoardCount = ref(0)
const pageCount = computed(() => Math.ceil(totalBoardCount.value / params.value._limit))

const fetchBoards = async () => {
  try {
    const { data, headers } = await getBoards(params.value)
    boards.value = data
    totalBoardCount.value = headers['x-total-count']
  } catch (err) {
    console.error(err)
  }
}
// fetchBoards()

watchEffect(fetchBoards)

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
