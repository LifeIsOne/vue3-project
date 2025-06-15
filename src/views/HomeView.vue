<template>
  <div>
    <h1>Home View</h1>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button @click="goAboutView" class="btn btn-primary">About Button</button>
    <hr />
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-danger" @click="person.say">peson</button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name)
    // console.log(this.$person.say())
  },
}
</script>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutView = () => {
  router.push('/about')
}

const person = inject('person')
console.log('setup : ', person.name)
</script>

<style lang="scss" scoped></style>
