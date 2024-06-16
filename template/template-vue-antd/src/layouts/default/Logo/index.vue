<script setup lang="ts">
import VueIcon from '~icons/logos/vue'
import { useConfigStore } from '@/stores/config'
import { computed } from 'vue'
const configStore = useConfigStore()
const collapsed = computed(() => configStore.collapsed)
</script>
<template>
  <router-link to="/">
    <a-space align="center" class="container">
      <vue-icon />
      <span v-if="!collapsed">Vue</span>
    </a-space>
  </router-link>
</template>
<style scoped>
.container {
  text-align: center;
  color: #fff;
  font-size: 20px;
  padding: 20px;
}
</style>
