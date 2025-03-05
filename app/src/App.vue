<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <h1 class="text-center">🐿️Squirrels🐿️</h1>
  <SideBar />
  <RouterView />
</template>

<style scoped></style>
