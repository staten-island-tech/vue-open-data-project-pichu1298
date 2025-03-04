<template>
  <RouterLink :to="squirelPath" class="w-[30%]">
    <h1>🐿️Squirel ID🐿️: {{ squirel.unique_squirrel_id }}</h1>
    <h1 class="">Squirel Date of Apperance: {{ squirel.date }}</h1>
    <h1>🐾Location Spotted🐾: {{ squirel.x }}, {{ squirel.y }}</h1>
  </RouterLink>
</template>

<script setup>
defineProps({
  squirel: Object,
})
const squirelPath = computer(() => {
  return `/squirrel/${squirel.unique_squirrel_id}`
})
</script>

<style scoped></style>
