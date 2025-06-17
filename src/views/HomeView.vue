<template>
  <div>
    <h1>Home View</h1>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button @click="goAboutView" class="btn btn-primary">About Button</button>
    <hr />
    <AppGrid :items="items" v-slot="{ item }" col-class="col-3">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
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
import AppGrid from '@/components/AppItemGrid.vue'
import AppCard from '@/components/app/AppCard.vue'
import { ref } from 'vue'

const router = useRouter()
const goAboutView = () => {
  router.push('/about')
}

// AppGrid 더미
const items = ref(['Alpha', 'Bravo', 'Charile', 'Delta'])
</script>

<style lang="scss" scoped></style>
