
import { Character, Episode, PageInfo,  } from "../redux/types/types";

/**
 * Función que retorna todos los personajes y filtra por nombre si es requerido
 *
 * @param {string | undefined} name
 * @returns {Promise<[Character[], PageInfo, number] | [any, any, number]>} returns Characters and info
 */
export const getCharactersAPI = async (
    name?: string
  ): Promise<[Character[], PageInfo, number] | [any, any, number]> => {
    let nameParam = "";
    if (name !== "" && name !== undefined) {
      nameParam = `name=${name}`;
    }
    return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
      function (response) {
        return response
          .json()
          .then((data) => [data.results, data.info, response.status]);
      }
    );
  };


/**
 *  Función que retorna personajes por pa´gina
 *
 * @param {string }url
 * @returns {Promise<[Character[], PageInfo]>} returns Characters and info
*/

export const changePage = async (
    url: string
): Promise<[Character[], PageInfo]> => {
    return fetch(url)
        .then((data) => data.json())
        .then((data) => [data.results, data.info]);
};


/**
 * Función que retorna todos los episodios en base a un personaje
 *
 * @param {Array<number>} listEpisodeID
 * @returns {Promise<Episode | Episode[]>} returns all episodes of one Character
*/

export const fetchEpisodes = async (
    listEpisodeID: (string | undefined)[]
): Promise<Episode | Episode[]> => {
    return (
        await fetch(`https://rickandmortyapi.com/api/episode/${listEpisodeID}`)
    ).json();
};

