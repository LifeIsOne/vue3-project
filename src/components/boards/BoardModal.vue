<template>
  <AppModal v-model="show" title="BOARD">
    <template #default>
      <div class="row">
        <div class="col-3 text-secondary">Title</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3 text-secondary">Content</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3 text-secondary">Created At</div>
        <div class="col-9">{{ $dayjs(createdAt).format('YYYY. MM. DD HH:mm:ss') }}</div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">
        Close
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: String,
  content: String,
  createdAt: [String, Number],
})
const emits = defineEmits(['update:modelValue'])

const show = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})
const closeModal = () => {
  show.value = false
}
</script>

<style scoped></style>
