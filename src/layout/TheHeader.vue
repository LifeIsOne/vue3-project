<template>
  <header>
    <nav class="navbar navbar-expand-sm bg-secondary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Miracle</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">List</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/nested">Nested</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/mypage">MyPage</RouterLink>
            </li> -->
          </ul>
          <div class="d-flex" role="search">
            <button class="btn btn-primary" type="button" @click="boardCreatePage">Create</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const boardCreatePage = () => {
  // router.push('/boards/create')
  router.push({
    name: 'BoardCreate',
  })
}
</script>

<style lang="scss" scoped></style>
