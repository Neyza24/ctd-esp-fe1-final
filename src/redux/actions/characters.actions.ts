import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { Character, PageInfo } from "../types/types";
import { IRootState } from "../store";
import { changePage, getCharactersAPI } from "../../services/character.services";


interface GetCharacters extends Action {
    type: 'GET_CHARACTERS',
    query: string
}


interface GetSuccessCharacters extends Action {
    type: 'GET_SUCCESS_CHARACTERS',
    characters: Character[];
    pageInfo: PageInfo;

}

interface GetErrorCharacters extends Action {
    type: 'GET_ERROR_CHARACTERS';
    error: string | number;
}

const getCharacters: ActionCreator<GetCharacters> = (query: string) => {
    return {
        type: 'GET_CHARACTERS',
        query: query
    }
}

const getSuccessCharacters: ActionCreator<GetSuccessCharacters> = (
    characters: Character[],
    pageInfo: PageInfo
) => {
    return {
        type: 'GET_SUCCESS_CHARACTERS',
        characters: characters,
        pageInfo: pageInfo
    }
}

const getErrorCharacters: ActionCreator<GetErrorCharacters> = (
    mensaje: string | number
) => {
    return {
        type: 'GET_ERROR_CHARACTERS',
        error: mensaje
    }
}

export type CharactersActions =
    | ReturnType<typeof getCharacters>
    | ReturnType<typeof getSuccessCharacters>
    | ReturnType<typeof getErrorCharacters>



interface FetchCharactersThunkAction extends ThunkAction<void, IRootState, unknown, CharactersActions> { }


export const fetchCharactersThunk = (
    query: string
): FetchCharactersThunkAction => {
    return async (dispatch, getState) => {
        dispatch(getCharacters(query));

        try {
            const response = await getCharactersAPI(query);
            const [characters, info, status] = response;
            if (status === 200) {
                dispatch(getSuccessCharacters(characters, info));
            } else {
                dispatch(getErrorCharacters(status));
            }
        } catch (error) {
            dispatch(getErrorCharacters(error));
        }
    }
}



export const changePageThunk = (url: string): FetchCharactersThunkAction => {
    return async (dispatch, getState) => {
        try {
            const [characters, info] = await changePage(url);
            dispatch(getSuccessCharacters(characters, info));
        } catch (error) {
            dispatch(getErrorCharacters(error));
        }
    }
}



