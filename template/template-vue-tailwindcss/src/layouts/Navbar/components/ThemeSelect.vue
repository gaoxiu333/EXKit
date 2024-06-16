<script setup lang="ts">
import { THEMES } from '@/constans/themes'
import { useColorMode } from '@vueuse/core'
import IconMdiTheme from '~icons/mdi/theme'
import IconMdiChevronDown from '~icons/mdi/chevron-down'
const mode = useColorMode({
  attribute: 'data-theme',
  modes: {
    ...THEMES.reduce((acc, cur) => ({ ...acc, [cur]: cur }), {})
  }
})
console.log('THEMES', THEMES, mode.value)
defineOptions({
  name: 'ThemeSelect'
})
const changeTheme = (theme: string) => {
  mode.value = theme
}
</script>
<template>
  <div class="dropdown dropdown-end hidden [@supports(color:oklch(0%_0_0))]:block">
    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">
      <IconMdiTheme />主题
      <IconMdiChevronDown />
    </div>
    <div
      class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16"
    >
      <div tabindex="0" class="grid grid-cols-1 gap-3 p-3">
        <button
          v-for="theme in THEMES"
          :key="theme"
          class="outline-base-content text-start outline-offset-4 [&_svg]:visible"
          :data-set-theme="theme"
          data-act-class="[&_svg]:visible"
          @click="changeTheme(theme)"
        >
          <span
            :data-theme="theme"
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <span class="flex-grow text-sm">{{ theme }}</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="w-2 rounded bg-primary" />
                  <span class="w-2 rounded bg-secondary" />
                  <span class="w-2 rounded bg-accent" />
                  <span class="w-2 rounded bg-neutral" />
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
