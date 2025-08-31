<template>
  <AppCard>
    <h5 class="card-title text-truncate">{{ title }}</h5>
    <p class="card-text text-truncate">
      {{ content }}
    </p>
    <p class="text-secondary">{{ createdDate }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-0 text-white" @click.stop="$emit('modal')">
          <i class="bi bi-search p-2"></i>
        </button>
        <button class="btn p-0 text-white" @click.stop="$emit('preview')">
          <i class="bi bi-plus-square p-2"></i>
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
})

defineEmits(['modal', 'preview'])

// dayjs 적용 - 날짜 포맷터
const dayjs = inject('dayjs')
const createdDate = computed(() => dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'))
</script>

<style lang="scss" scoped></style>
