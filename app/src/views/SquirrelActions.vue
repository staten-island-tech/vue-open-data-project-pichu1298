<template>
  <div class="w-[90%] ml-[10%]">
    <BarChart :chartData="actionData" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted, ref, watch } from 'vue'

// Reactive data for the bar chart
const actionData = ref({
  labels: [],
  datasets: [],
})

// Watch for squirrel data updates
watch(squirels, () => {
  if (!squirels.value.length) return

  const actionCounts = {
    Running: 0,
    Chasing: 0,
    Climbing: 0,
    Eating: 0,
    Foraging: 0,
    Kuks: 0,
    Quaas: 0,
    Moans: 0,
    Tail_Flags: 0,
    Tail_Twitches: 0,
    Approaches: 0,
    Indifferent: 0,
    Runs_From: 0,
  }

  // Count occurrences of each action
  squirels.value.forEach((squirrel) => {
    if (squirrel.running) actionCounts.Running++
    if (squirrel.chasing) actionCounts.Chasing++
    if (squirrel.climbing) actionCounts.Climbing++
    if (squirrel.eating) actionCounts.Eating++
    if (squirrel.foraging) actionCounts.Foraging++
    if (squirrel.kuks) actionCounts.Kuks++
    if (squirrel.quaas) actionCounts.Quaas++
    if (squirrel.moans) actionCounts.Moans++
    if (squirrel.tail_flags) actionCounts.Tail_Flags++
    if (squirrel.tail_twitches) actionCounts.Tail_Twitches++
    if (squirrel.approaches) actionCounts.Approaches++
    if (squirrel.indifferent) actionCounts.Indifferent++
    if (squirrel.runs_from) actionCounts.Runs_From++
  })

  console.log(actionCounts) // Debugging check

  // Filter out actions with 0 counts
  const filteredActions = Object.keys(actionCounts).filter((key) => actionCounts[key] > 0)
  //Filters the actions... Object.keys grabs the KEY name. Basically the "Name" : item. Grabs the Name portion. Filters each key for any key with a number above 0.
  const filteredCounts = filteredActions.map((key) => actionCounts[key])
  //This grabs the only the key names.

  // Update the chart data
  actionData.value = {
    labels: filteredActions,
    datasets: [
      {
        label: 'Squirrel Actions',
        data: filteredCounts,
        backgroundColor: 'skyblue', // Single color or use an array for variety
      },
    ],
  }
})

// Fetch data on mount
onMounted(async () => {
  await getData() // Fetch action data
})
</script>

<style scoped></style>
