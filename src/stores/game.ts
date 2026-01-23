import { defineStore } from "pinia";

export interface StoredCard {
    id: number;
}

export const useGameStore = defineStore("game", {
    state: () => ({
        level: 2,
        matchedIds: [] as number[],
        deckSize: 0,
        deckImages: [] as string[],
        deckOrder: [] as number[],
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

        setDeck(size: number, images: string[], order: number[]) {
            this.deckSize = size;
            this.deckImages = images;
            this.deckOrder = order;
        },

        clearMatched() {
            this.matchedIds = [];
        },

        resetForDifficulty(size: number) {
            this.level = size;
            this.matchedIds = [];
            this.deckSize = 0;
            this.deckImages = [];
            this.deckOrder = [];
        },
    },

    persist: true,
});