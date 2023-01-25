<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '@/components/templates/header.vue'

export default {
  components: {
    Header
  }
}
</script>
