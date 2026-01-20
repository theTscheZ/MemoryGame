import { defineStore } from 'pinia'

export interface Item {
    id: number
    title: string
    completed: boolean
}

interface ItemsState {
    items: Item[]
    loading: boolean
    error: string | null
}

export const useItemsStore = defineStore('items', {
    state: (): ItemsState => ({
        items: [],
        loading: false,
        error: null,
    }),

    actions: {
        async fetchItems() {
            this.loading = true
            this.error = null

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }

                const data: Item[] = await response.json()
                this.items = data.slice(0, 10)
            } catch (err) {
                this.error = (err as Error).message
            } finally {
                this.loading = false
            }
        },

        toggleItem(id: number) {
            const item = this.items.find(i => i.id === id)
            if (item) {
                item.completed = !item.completed
            }
        }
    }
})