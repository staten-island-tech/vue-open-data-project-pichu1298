<template>
  <div class="w-[90%] ml-[10%]">
    <BarChart :chartData="furData" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted, ref, watch } from 'vue'

const furData = ref({
  labels: [],
  datasets: [],
})

// Watch for data updates and process fur color counts
watch(squirels, () => {
  if (!squirels.value.length) return

  const colorCounts = {}

  squirels.value.forEach((squirrel) => {
    const color = squirrel.primary_fur_color || 'Unknown' // Handle missing values
    colorCounts[color] = (colorCounts[color] || 0) + 1
  })

  furData.value = {
    labels: Object.keys(colorCounts),
    datasets: [
      {
        label: 'Fur Color',
        data: Object.values(colorCounts),
        backgroundColor: ['gray', 'black', 'brown', 'red', 'yellow'], // Customize colors
      },
    ],
  }
})

// Fetch data on mount
onMounted(async () => {
  await getData() // Fetch API data
})
</script>

<style scoped></style>
