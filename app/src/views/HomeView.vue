<template>
  <div class="flex w-full">
    <div class="flex flex-wrap justify-between ml-[10%] w-[90%] gap-4 bg-gray-100 p-4">
      <SquirrelItems v-for="(squirel, index) in squirels" :key="index" :squirel="squirel" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelItems from '@/components/SquirrelItems.vue'
import SideBar from '@/components/SideBar.vue'

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
