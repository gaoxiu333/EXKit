<script setup lang="ts">
import Navbar from './Navbar/index.vue'

import { RouterView } from 'vue-router'

defineOptions({
  name: 'DefaultLayout'
})
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
