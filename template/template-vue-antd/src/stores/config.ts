import { defineStore } from 'pinia'

const useConfigStore = defineStore('config', {
  state: () => {
    return {
      global: {
        darkMode: false,
        siderTheme: 'light',
        collapsed: false
      }
    }
  },
  getters: {
    collapsed: (state) => state.global.collapsed
  },
  actions: {
    toggleCollapsed(collapsed: boolean) {
      this.global = Object.assign({}, this.global, { collapsed })
    }
  }
})

export { useConfigStore }
