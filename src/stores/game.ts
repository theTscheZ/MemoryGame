import { defineStore } from "pinia";

export interface StoredCard {
    id: number;
}

export const useGameStore = defineStore("game", {
    state: () => ({
        level: 2,
        matchedIds: [] as number[],
    }),

    actions: {
        setLevel(level: number) {
            this.level = level;
        },

        saveMatched(cards: { id: number; matched: boolean }[]) {
            this.matchedIds = cards
                .filter(c => c.matched)
                .map(c => c.id);
        },

        resetGame() {
            this.level = 2;
            this.matchedIds = [];
        },
    },

    persist: true,
});