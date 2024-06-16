<script setup lang="ts">
import { theme } from 'ant-design-vue'
/** 定制主题 */
const THEME = {
  // 风格
  algorithm: [theme.darkAlgorithm, theme.defaultAlgorithm],
  // 全局
  token: {
    colorPrimary: '#1890ff'
  },
  // 组件
  components: {
    Button: {
      colorPrimary: '#1890ff'
    }
  }
}
</script>

<template>
  <a-config-provider :theme="THEME">
    <RouterView />
  </a-config-provider>
</template>
