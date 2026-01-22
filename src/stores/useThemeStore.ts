import { defineStore } from 'pinia'

export type ThemeMode = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        mode: 'dark' as ThemeMode,
    }),

    actions: {
        toggleTheme() {
            this.mode = this.mode === 'dark' ? 'light' : 'dark'
        },
    },

    persist: true,
})
