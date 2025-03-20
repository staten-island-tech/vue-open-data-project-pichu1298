<template>
  <div class="ml-[10%]">
    <BarChart :chart-data="locationData" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted, ref, watch } from 'vue'
const locationData = ref({
  labels: [],
  datasets: [],
})

// Watch for data updates and process shift counts
watch(squirels, () => {
  if (!squirels.value.length) return // Ensure data exists

  const numOfAbove = squirels.value.filter(
    (squirrel) => squirrel.location === 'Above Ground',
  ).length
  const numOfOn = squirels.value.filter((squirrel) => squirrel.location === 'Ground Plane').length

  console.log(numOfAbove, numOfOn) // Debugging check

  // Update shiftData reactively
  locationData.value = {
    labels: ['Above Ground', 'On Ground'], // X-axis labels
    datasets: [
      {
        label: 'Amount of Squirrels',
        data: [numOfAbove, numOfOn], // Y-axis values
        backgroundColor: ['#ADD8E6', '#8B4513'], // Bar colors
      },
    ],
  }
})

onMounted(async () => {
  await getData() // Fetch API data
})
</script>

<style scoped></style>
