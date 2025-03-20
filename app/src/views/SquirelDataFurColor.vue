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

    //color equals the name of each color
    colorCounts[color] = (colorCounts[color] || 0) + 1
    //creates colorCounts as a key, for each color it updates every squirrel that has that color
  })

  furData.value = {
    labels: Object.keys(colorCounts),
    datasets: [
      {
        label: 'Amount of Squirrels',
        data: Object.values(colorCounts),
        backgroundColor: ['#4169E1'], // Customize colors
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
