<template>
  <div class="text-danger text-center py-4">
    {{ msg }}
  </div>
</template>

<script setup>
defineProps({
  msg: String,
})
</script>

<style scoped></style>
