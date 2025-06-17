<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          :value="title"
          @input="$emit('update:title', $event.target.value)"
          type="text"
          class="form-control"
          placeholder="Search by title"
        />
      </div>
      <!-- n개씩 보기 -->
      <div class="col-3">
        <select
          :value="limit"
          @input="$emit('update:limit', $event.target.value)"
          class="form-select"
        >
          <option value="3">Show 3</option>
          <option value="6">Show 6</option>
          <option value="9">Show 9</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  limit: Number,
})
defineEmits(['updata:title', 'update:limit'])
</script>

<style scoped></style>
