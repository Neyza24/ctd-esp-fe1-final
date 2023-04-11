export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
    species: string;
    gender: string;
    origin: {
        name: string,
        url: string
    }
    episode: string[];
}

export interface PageInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}


export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
}