<template>
  <div class="w-[90%] ml-[10%]">
    <BarChart :data="squirels.shift" />
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
import { onMounted } from 'vue'

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>
