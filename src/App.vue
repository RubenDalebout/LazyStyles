<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <RouterView />

  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>

  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert—check it out!
  </div>

  <span class="badge text-bg-primary">Primary</span>
  <span class="badge text-bg-secondary">Secondary</span>
  
  <ul class="list-group">
  <li class="list-group-item active" aria-current="true">An active item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
</template>

<script>
import Header from '@/components/templates/header.vue'

export default {
  components: {
    Header
  }
}
</script>
