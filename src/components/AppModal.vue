<template>
  <div v-if="modelValue">
    <!-- 오버레이 -->
    <div class="modal-backdrop fade show"></div>
    <!-- 모달 -->
    <div
      class="modal fade show d-block"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-secondary">
            <slot name="header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="$emit('update:modelValue', false)"
              ></button>
            </slot>
          </div>
          <div class="modal-body"><slot></slot></div>
          <div class="modal-footer border-secondary">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: String,
})
defineEmits(['close', 'update:modelValue'])
</script>

<style lang="scss" scoped></style>
