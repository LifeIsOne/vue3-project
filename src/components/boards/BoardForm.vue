<template>
  <form>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title</label>
      <input
        v-focus
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Content</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>
    <div class="mt-3 d-flex gap-2">
      <slot name="actions"> </slot>
    </div>
  </form>
</template>

<script setup>
// const vFocus = {
//   mounted: (el) => {
//     el.focus()
//   },
// }
defineProps({
  title: String,
  content: String,
})

defineEmits(['update:title', 'update:content'])
</script>

<style scoped></style>
