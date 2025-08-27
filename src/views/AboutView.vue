<template>
  <div>
    <h1>About View</h1>
    <p>{{ $route.path }}</p>
    <button @click="$router.push('/')" class="btn btn-primary">Home Button</button>
    <h1>Store</h1>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountPlus: {{ doubleCountPlus }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route.path: ', route.path)

const store = useCounterStore()
console.log(store)
const { counter, doubleCount, doubleCountPlus } = storeToRefs(store)
const { increment } = store
</script>
