<template>
  <div class="w-[90%] ml-[10%]">
    <BarChart :chartData="squirels.value.shift" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted } from 'vue'

onMounted(() => {
  getData()
})

//Squirels.shift has the variables of "Object" then "PM" or "AM"
//the BarChart component needs data as...
//const simpleChartData = ref({
//   labels: ["Category 1", "Category 2", "Category 3"], // X-axis labels
//   datasets: [
//     {
//       label: "Sample Dataset", // Name of dataset (shown in legend)
//       data: [10, 20, 30], // Values for each label
//       backgroundColor: ["blue", "green", "orange"], // Colors for each bar
//     }
//   ]
// });

//Therefore data should be organized as...
//labels: ["PM", "AM"]
//datasets: [{data: [numOfPM, numOfAM]}]

//const data = ... change the stuff here and use .map
</script>

<style lang="scss" scoped></style>
