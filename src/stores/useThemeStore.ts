import { defineStore } from 'pinia'

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
    mode: ThemeMode
}

export const useThemeStore = defineStore('theme', {
    state: (): ThemeState => ({
        mode: 'dark',
    }),

    actions: {
        toggleTheme() {
            this.mode = this.mode === 'dark' ? 'light' : 'dark'
        },

        setTheme(mode: ThemeMode) {
            this.mode = mode
        }
    }
})