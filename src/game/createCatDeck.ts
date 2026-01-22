import type { Card } from "../types/memory";
import { fetchCatImages } from "../api/catApi";

function shuffle<T>(array: readonly T[]): T[] {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        const tmp = a[i]!;
        a[i] = a[j]!;
        a[j] = tmp;
    }
    return a;
}

function uid(): string {
    return crypto.randomUUID();
}

export async function createCatDeck(pairCount: number): Promise<Card[]> {
    const images = await fetchCatImages(pairCount);

    const cards: Card[] = [];

    images.forEach((img, index) => {
        const pairId = index + 1;

        cards.push(
            {
                id: pairId,
                uid: uid(),
                imageUrl: img.url,
                flipped: false,
                matched: false,
            },
            {
                id: pairId,
                uid: uid(),
                imageUrl: img.url,
                flipped: false,
                matched: false,
            }
        );
    });

    return shuffle(cards);
}
