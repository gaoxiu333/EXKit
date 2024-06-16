<script setup lang="ts">
import { computed, ref } from 'vue'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { useConfigStore } from '@/stores/config'
import Logo from '../Logo/index.vue'

const configStore = useConfigStore()

const selectedKeys = ref<string[]>(['1'])
const collapsed = computed(() => configStore.collapsed)
const MENUS = [
  {
    key: '1',
    icon: UserOutlined,
    label: '主页',
    path: '/'
  },
  {
    key: '2',
    icon: VideoCameraOutlined,
    label: '关于',
    path: '/about'
  }
]
</script>
<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <Logo />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item v-for="item in MENUS" :key="item.key" @click="$router.push(item.path)">
        <user-outlined />
        <span>{{ item.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<style scoped>
.logo {
  margin: 16px;
  color: #fff;
  white-space: nowrap;
  padding-left: 10px;
  font-size: 16px;
}

.logo .anticon {
  font-size: 32px;
}
</style>
