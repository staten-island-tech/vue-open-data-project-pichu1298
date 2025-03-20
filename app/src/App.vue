<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="bg-gray-900 min-h-screen">
    <h1 class="text-center text-white py-4 text-3xl">🐿️Squirrels🐿️</h1>
    <div class="flex">
      <SideBar />
      <RouterView class="w-full bg-gray-800 p-4 text-white" />
    </div>
  </div>
</template>

<style scoped></style>
