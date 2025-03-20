<template>
  <div class="flex w-full">
    <div class="flex flex-wrap justify-between ml-[10%] w-[90%] gap-4 bg-gray-900 p-6 rounded-lg">
      <SquirrelItems v-for="(squirel, index) in squirels" :key="index" :squirel="squirel" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SquirrelItems from '@/components/SquirrelItems.vue'
import { getData, squirels } from '@/components/SquirelCall.js'
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
