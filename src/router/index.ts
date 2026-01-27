import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";
import GameView from "../views/GameView.vue";

const router = createRouter({
    history: createWebHistory("/memory"),
    routes: [
        {
            path: "/",
            name: "start",
            component: StartView,
        },
        {
            path: "/game",
            name: "game",
            component: GameView,
        },
    ],
});

export default router;