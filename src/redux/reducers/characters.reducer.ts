import { Reducer } from "@reduxjs/toolkit";
import { Character, PageInfo } from "../types/types";
import { CharactersActions } from "../actions/characters.actions";


interface CharactersState {
    status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
    characters: Character[];
    query: string;
    pageInfo: PageInfo;
    error: string | number | null;
}

const initialState: CharactersState = {
    status: "IDLE",
    characters: [],
    query: "",
    pageInfo: { count: 0, pages: 0, next: "", prev: "" },
    error: null,

}

/**
 * Funciones 
 * 
 * @param {State} state 
 * @param {DataStore.Reducer<CharactersState, CharactersActions>} action 
 * @returns {State} un estado
 */


const charactersReducer: Reducer<CharactersState, CharactersActions> = (state = initialState, action): CharactersState => {

    switch (action.type) {
        case 'GET_CHARACTERS':
            return {
                ...state,
                status: "LOADING",
                characters: [],
                query: action.query,
                error: null
            };
        case 'GET_SUCCESS_CHARACTERS':
            return {
                ...state,
                status: 'COMPLETED',
                characters: action.characters,
                pageInfo: action.pageInfo
            };
        case "GET_ERROR_CHARACTERS":
            return {
                ...state,
                status: "FAILED",
                characters: [],
                error: action.error,
            };
        default:
            return {
                ...state
            }
    }

}

export default charactersReducer;