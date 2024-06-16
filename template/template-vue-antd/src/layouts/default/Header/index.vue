<template>
  <a-layout-header style="background: #fff; padding: 0 16px">
    <a-flex align="middle" justify="space-between">
      <div>
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => configStore.toggleCollapsed(!collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => configStore.toggleCollapsed(!collapsed)" />
      </div>
      <a-space align="center">
        <SimpleIconeGithub />
        <a-dropdown>
          <a-avatar style="cursor: pointer;" />
          <template #overlay>
            <a-menu>
              <a-menu-item disabled>个人中心</a-menu-item>
              <a-menu-divider />
              <a-menu-item>退出登录</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-space>
    </a-flex>
  </a-layout-header>
</template>
<script setup lang="ts">
import { useConfigStore } from '@/stores/config'
import { storeToRefs } from 'pinia'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import SimpleIconeGithub from '~icons/simple-icons/github'
const configStore = useConfigStore()
const { collapsed } = storeToRefs(configStore)
</script>
