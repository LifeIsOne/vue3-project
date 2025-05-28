<template>
  <div class="text-white text-center p-5">
    <h1>🤷‍♂️ Oops!</h1>
    <h2>Page Not Found</h2>
    <div class="text-secondary">Status: 404 Not Found!</div>
    <!-- {{ $route.params.pathMatch }} -->
    <div class="mt-5">
      <RouterLink>
        <button class="btn btn-primary">Home</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
