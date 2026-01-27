import { defineStore } from "pinia";
import type { Card } from "../types/memory";

type GameState = {
    level: number;
    matchedIds: number[];
    deckSize: number;
    deckImages: string[];
    deckOrder: number[];
};

function defaultState(): GameState {
    return {
        level: 2,
        matchedIds: [],
        deckSize: 0,
        deckImages: [],
        deckOrder: [],
    };
}

export const useGameStore = defineStore("game", {
    state: () => ({
        currentUser: null as string | null,
        users: {} as Record<string, GameState>,
    }),

    getters: {
        state(state): GameState {
            if (!state.currentUser) return defaultState();
            return state.users[state.currentUser] ?? defaultState();
        },
    },

    actions: {
        login(username: string) {
            if (!this.users[username]) {
                this.users[username] = defaultState();
            }
            this.currentUser = username;
        },

        logout() {
            this.currentUser = null;
        },

        setLevel(level: number) {
            if (!this.currentUser) return;
            this.users[this.currentUser] ??= defaultState();
            this.users[this.currentUser]!.level = level;
        },

        saveMatched(cards: Card[]) {
            if (!this.currentUser) return;
            this.users[this.currentUser] ??= defaultState();
            this.users[this.currentUser]!.matchedIds = cards
                .filter((c) => c.matched)
                .map((c) => c.id);
        },

        resetGame() {
            if (!this.currentUser) return;
            this.users[this.currentUser] = defaultState();
        },

        setDeck(size: number, images: string[], order: number[]) {
            if (!this.currentUser) return;
            this.users[this.currentUser] ??= defaultState();
            const u = this.users[this.currentUser]!;
            u.deckSize = size;
            u.deckImages = images;
            u.deckOrder = order;
        },

        clearMatched() {
            if (!this.currentUser) return;
            this.users[this.currentUser] ??= defaultState();
            this.users[this.currentUser]!.matchedIds = [];
        },

        resetForDifficulty(size: number) {
            if (!this.currentUser) return;
            this.users[this.currentUser] ??= defaultState();
            const u = this.users[this.currentUser]!;
            u.level = size;
            u.matchedIds = [];
            u.deckSize = 0;
            u.deckImages = [];
            u.deckOrder = [];
        },
    },

    persist: true,
});