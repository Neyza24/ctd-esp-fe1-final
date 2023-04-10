export interface Personaje{
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "image": string,
    "personajeFavorito": boolean
}

export interface PageInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}

