
import { PageInfo, Personaje } from "../redux/types/types";

/**
 * 
 * @param { string } name
 * @returns {Promise<[Personaje[], PageInfo] | [any, any]>}
*/


export const searchPersonajeService = async (name: string): Promise<[Personaje[], PageInfo] | [any, any]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    if (response.ok) {
        const data = await response.json();
        return [data.results, data.info]
    }

    return [[], {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }]

}

/**
 * Función que retorna personajes según la página
 * @param { string } url
 * @returns {Promise<[Personaje[], PageInfo] | [any, any]>}
*/
export const changePageService = async (url: string): Promise<[Personaje[], PageInfo] | [any, any]> => {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return [data.results, data.info]
    } 
    
    return [[], {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }]
    
}

// export const getPersonajes = async (): Promise<[Personaje[], PageInfo] | [any, any]> => {
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await response.json();
//     return [data.results, data.info];
// };

