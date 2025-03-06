<template>
  <div class="w-[30%]">
    <h1>🐿️Squirel ID🐿️: {{ squirel.unique_squirrel_id }}</h1>
    <h1 class="">Squirel Date of Apperance: {{ squirel.date }}</h1>
    <h1>🐾Location Spotted🐾: {{ squirel.x }}, {{ squirel.y }}</h1>
  </div>
</template>

<script setup>
defineProps({
  squirel: Object,
})
</script>

<style scoped></style>
