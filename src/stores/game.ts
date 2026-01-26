import { defineStore } from "pinia";
import type { Card } from "../types/memory"; // dein Card Interface

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

        saveMatched(cards: Card[]) { // <-- hier Card verwenden
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
