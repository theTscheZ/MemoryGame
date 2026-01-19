import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";
import GameView from "../views/GameView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: StartView },
        { path: "/game", component: GameView }
    ]
});

export default router;