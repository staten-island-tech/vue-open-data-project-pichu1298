<template>
  <div class="flex flex-wrap justify-between w-full gap-4 bg-gray-100 p-4">
    <h1>Loading..</h1>
    <SquirrelItems v-for="(squirel, index) in squirels" :key="index" :squirel="squirel" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelItems from '@/components/SquirrelItems.vue'

const squirels = ref([])

async function getData() {
  const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    let json = await response.json()
    console.log(json)
    squirels.value = json
  } catch (error) {
    console.error(error.message)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
