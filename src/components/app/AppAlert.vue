<template>
  <!-- <Transition name="slide">
    <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">
      <i :class="iconClass"></i>
      {{ msg }}
    </div>
  </Transition> -->
  <div class="app-alert">
    <TransitionGroup name="slide">
      <div
        v-for="({ msg, type }, index) in items"
        :key="index"
        class="alert"
        :class="styleClass(type)"
        role="alert"
      >
        <i :class="iconClass(type)"></i>
        {{ msg }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  items: Array,
})
// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false,
//   },
//   msg: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     default: 'error',
//     validator: (value) => ['success', 'error'].includes(value),
//   },
// })

const styleClass = (type) =>
  type === 'success' ? 'alert-success text-success' : 'alert-danger text-danger'
const iconClass = (type) =>
  type === 'success' ? 'bi bi-check-circle-fill' : 'bi bi-dash-circle-fill'

// const iconClass = computed(() =>
//   props.type === 'success' ? 'bi bi-check-circle-fill' : 'bi bi-dash-circle-fill',
// )
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 50px;
  right: 50px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.2s;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.2s;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
