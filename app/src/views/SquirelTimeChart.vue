<template>
  <div class="w-[90%] ml-[10%]">
    <BarChart :chartData="shiftData" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted, ref, watch } from 'vue'

// Make shiftData reactive
const shiftData = ref({
  labels: [],
  datasets: [],
})

// Watch for data updates and process shift counts
watch(squirels, () => {
  if (!squirels.value.length) return // Ensure data exists

  const numOfPM = squirels.value.filter((squirrel) => squirrel.shift === 'PM').length
  const numOfAM = squirels.value.filter((squirrel) => squirrel.shift === 'AM').length

  console.log(numOfPM, numOfAM) // Debugging check

  // Update shiftData reactively
  shiftData.value = {
    labels: ['PM', 'AM'], // X-axis labels
    datasets: [
      {
        label: 'Shift Count',
        data: [numOfPM, numOfAM], // Y-axis values
        backgroundColor: ['blue', 'orange'], // Bar colors
      },
    ],
  }
})

// Fetch data when the component is mounted
onMounted(async () => {
  await getData() // Ensure data is fully loaded
})
</script>

<style lang="scss" scoped></style>
