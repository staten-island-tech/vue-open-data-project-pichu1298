<template>
  <div class="w-[30%] p-6 bg-gray-800 rounded-lg shadow-md space-y-4">
    <h1 class="text-2xl font-semibold text-white">
      🐿️ Squirrel ID 🐿️:
      <span class="font-normal text-gray-400">{{ squirel.unique_squirrel_id }}</span>
    </h1>
    <h2 class="text-xl font-medium text-gray-200">
      Squirrel Date of Appearance: <span class="font-light text-gray-500">{{ squirel.date }}</span>
    </h2>
    <h3 class="text-xl font-medium text-gray-200">
      🐾 Location Spotted 🐾:
      <span class="font-light text-gray-500">{{ squirel.x }}, {{ squirel.y }}</span>
    </h3>
  </div>
</template>

<script setup>
defineProps({
  squirel: Object,
})
</script>

<style scoped></style>
