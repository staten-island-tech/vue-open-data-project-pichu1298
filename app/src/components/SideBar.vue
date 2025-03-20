<template>
  <div
    class="w-[10%] h-screen bg-gray-800 text-white fixed left-0 top-0 p-3 flex flex-col space-y-4 shadow-lg"
  >
    <RouterLink
      to="/"
      class="w-[100%] text-sm font-medium hover:bg-gray-700 p-2 rounded-md transition duration-300"
      >Home</RouterLink
    >
    <RouterLink
      to="/squirelDataTime"
      class="w-[100%] text-sm font-medium hover:bg-gray-700 p-2 rounded-md transition duration-300"
      >PM or AM</RouterLink
    >
    <RouterLink
      to="/squirelDataFurColor"
      class="w-[100%] text-sm font-medium hover:bg-gray-700 p-2 rounded-md transition duration-300"
      >Fur Color</RouterLink
    >
    <RouterLink
      to="/squirelLocation"
      class="w-[100%] text-sm font-medium hover:bg-gray-700 p-2 rounded-md transition duration-300"
      >Squirrel Location</RouterLink
    >
    <RouterLink
      to="/squirelActions"
      class="w-[100%] text-sm font-medium hover:bg-gray-700 p-2 rounded-md transition duration-300"
      >Seen Actions</RouterLink
    >
  </div>
</template>

<script setup></script>

<style scoped></style>
