<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <RouterView />

  <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
</template>

<script>
import Header from '@/components/templates/header.vue'

export default {
  components: {
    Header
  }
}
</script>
