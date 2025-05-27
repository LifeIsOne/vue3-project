<template>
  <div>
    <h1>Create Board</h1>
    <hr />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-3 d-flex gap-2">
        <button type="button" class="btn btn-outline-secondary">BoardList</button>
        <button class="btn btn-success">Save</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
