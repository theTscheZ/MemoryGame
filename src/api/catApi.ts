const CAT_API_URL = "https://api.thecatapi.com/v1/images/search";
const CAT_API_KEY = "live_6N0A8HzPJMR6Mf3aRvv1Jgmjepv01RWciDhGbsxseOSMWhkpFMNVq3xsw3viZxRY";

export type CatImage = {
    id: string;
    url: string;
};

export async function fetchCatImages(limit: number): Promise<CatImage[]> {
    const response = await fetch(`${CAT_API_URL}?limit=${limit}`, {
        headers: {
            "x-api-key": CAT_API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error("Error fetching images!");
    }

    return await response.json();
}
