<template>
  <div>
    <div>
      <SquirrelItems v-for="squirel in squirels" :key="unique_squirrel_id" :squirel="squirel" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelItems from '@/components/SquirrelItems.vue'

const squirels = ref('')
async function getData() {
  const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'
  try {
    const response = await fetch(url)
    let json = await response.json()
    console.log(json)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
  } catch (error) {
    console.error(error.message)
  }
  squirels.value = json.results
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
