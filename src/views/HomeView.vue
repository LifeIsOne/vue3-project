<template>
  <div>
    <h1>Home View</h1>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button @click="goAboutView" class="btn btn-primary">About Button</button>
    <hr />
    <AppItemGrid :items="items" v-slot="{ item }" col-class="col-3">
      <AppCard>{{ item }}</AppCard>
    </AppItemGrid>
    <hr />
    <!-- <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">Click Person</button> -->
    <h1>{{ position }}</h1>
    <h1>x는 {{ x }}</h1>
    <h1>y는 {{ y }}</h1>
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
import { useRouter } from 'vue-router'
import { inject, reactive, ref, toRef, toRefs } from 'vue'

const router = useRouter()
const goAboutView = () => {
  router.push('/about')
}

// AppGrid 더미
const items = ref(['Alpha', 'Bravo', 'Charile', 'Delta'])

// const person = inject('person')
// console.log('person.name: ', person.name)

const position = reactive({
  x: 100,
  y: 1000,
})

// const { x, y } = position
// const x = ref(position.x)
// const y = ref(position.y)
// console.log('x: ', typeof x.value)
// console.log('y: ', typeof y.value)

// const x = toRef(position, 'x')
// const y = toRef(position, 'y')

const { x, y } = toRefs(position)
</script>
