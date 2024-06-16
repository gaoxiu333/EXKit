<script setup lang="ts">
import ThemeSelect from './components/ThemeSelect.vue'

defineOptions({
  name: 'Navbar'
})
</script>

<template>
  <div
    class="sticky top-0 z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100"
  >
    <nav class="navbar">
      <div class="flex-1 px-2 lg:flex-none">
        <a class="text-lg font-bold">Starter Kit</a>
      </div>
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <ThemeSelect />
        </div>
      </div>
    </nav>
  </div>
</template>
