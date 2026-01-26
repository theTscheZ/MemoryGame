import type { Card } from "../types/memory";

function shuffleIndices(n: number): number[] {
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i]!, a[j]!] = [a[j]!, a[i]!];
    }
    return a;
}

export function createOrder(pairCount: number): number[] {
    return shuffleIndices(pairCount * 2);
}

export function createCardsFromImages(images: string[], order: number[]): Card[] {
    const base: Card[] = [];

    images.forEach((url, pairId) => {
        base.push(
            {
                id: pairId,
                uid: crypto.randomUUID(),
                imageUrl: url,
                flipped: false,
                matched: false,
            },
            {
                id: pairId,
                uid: crypto.randomUUID(),
                imageUrl: url,
                flipped: false,
                matched: false,
            }
        );
    });

    return order.map((i) => base[i]!);
}