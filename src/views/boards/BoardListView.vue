<template>
  <div>
    <h1>Board List</h1>
    <hr class="my-4" />
    <!-- 검색 폼 -->
    <BoardFilter v-model:title="params.title_like" v-model:limit="params._limit" />

    <hr class="my-3" />

    <AppLoading v-if="loading" />

    <AppError v-else-if="error" :msg="error.message" />

    <!-- 게시물 items -->
    <template v-else>
      <AppGrid :items="boards">
        <template v-slot="{ item }">
          <BoardItem
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="boardDetailPage(item.id)"
            @modal="openModal(item)"
          />
        </template>
      </AppGrid>
      <div class="row g-1">
        <div v-for="board in boards" :key="board.id" class="col-4">
          <!-- prettier-ignore -->
        </div>
      </div>
      <!-- 페이징 -->
      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="(page) => (params._page = page)"
      />
    </template>
    <!-- 게시물 items 끝 -->

    <!-- 모달 -->
    <Teleport to="#modal">
      <BoardModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :createdAt="modalCreatedAt"
      />
    </Teleport>

    <hr class="my-5" />
    <AppCard>
      <BoardDetailView :boardId="'1'" />
    </AppCard>
  </div>
</template>

<script setup>
import BoardItem from '@/components/boards/BoardItem.vue'
import BoardDetailView from '@/views/boards/BoardDetailView.vue'
import BoardModal from '@/components/boards/BoardModal.vue'
import AppPagination from '@/components/app/AppPagination.vue'
import AppGrid from '@/components/app/AppItemGrid.vue'
import BoardFilter from '@/components/boards/BoardFilter.vue'
import { computed, ref, watchEffect } from 'vue'
import { getBoards } from '@/api/boards'
import { useRouter } from 'vue-router'

const router = useRouter()
const boards = ref({})
// 로딩과 에러 상태
const error = ref(null)
const loading = ref(false)

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
    loading.value = true
    const { data, headers } = await getBoards(params.value)
    boards.value = data
    totalBoardCount.value = headers['x-total-count']
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
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

// 모달
const show = ref(false) // 기본값
const modalTitle = ref('')
const modalContent = ref('')
const modalCreatedAt = ref('')

const openModal = ({ title, content, createdAt }) => {
  show.value = true
  modalTitle.value = title
  modalContent.value = content
  modalCreatedAt.value = createdAt
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
