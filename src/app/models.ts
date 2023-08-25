export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacription: string;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    rating: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;

}

export interface APIResponse<T> {
    results: Array<T>
}

interface Genre {
    name: string;
}
interface ParentPlatform {
    platform: {
        slug: string;
        name: string;
    }
}
interface Publishers {
    name: string;
}
interface Rating {
    id: number;
    count: number;
    title: string;

}
interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    }
}
