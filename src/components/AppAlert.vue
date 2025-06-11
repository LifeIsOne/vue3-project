<template>
  <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">
    <i :class="iconClass"></i>
    {{ msg }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  msg: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'error',
    validator: (value) => ['success', 'error'].includes(value),
  },
})

const styleClass = computed(() =>
  props.type === 'success' ? 'alert-success text-success' : 'alert-danger text-danger',
)

const iconClass = computed(() =>
  props.type === 'success' ? 'bi bi-check-circle-fill' : 'bi bi-dash-circle-fill',
)
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 50px;
  right: 50px;
}
</style>
