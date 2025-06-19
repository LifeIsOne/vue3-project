<template>
  <nav class="mt-5 bg-dart" aria-label="Page navigation example">
    <ul class="pagination justify-content-center text-light">
      <!-- prev -->
      <li class="page-item" :class="isPrevPage">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="$emit('page', --currentPage)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- page -->
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('page', page)">{{ page }}</a>
      </li>
      <!-- next -->
      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="$emit('page', ++currentPage)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['page'])

const isPrevPage = computed(() => ({
  disabled: props.currentPage <= 1,
}))
const isNextPage = computed(() => ({
  disabled: props.currentPage >= props.pageCount,
}))
</script>

<style scoped></style>
