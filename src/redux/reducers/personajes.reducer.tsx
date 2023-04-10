import { Reducer } from "@reduxjs/toolkit";
import { PageInfo, Personaje } from "../types/types";
import { PersonajesAction } from "../actions/personajes.actions";

interface PersonajesState{
    personajes: Personaje[],
    busqueda: string,
    status: 'idle' | 'fetching' | 'success' | 'error',
    pageInfo: PageInfo,
    favoritos: Personaje[],
    error: string | null,
    
}

const initialState: PersonajesState = {
    personajes: [],    
    busqueda: '',
    status: 'idle',
    pageInfo: {count: 0, pages: 0, next: '0', prev: '1'},
    favoritos: [],
    error: null

}

/**
 * Funciones 
 * 
 * @param {State} state 
 * @param {DataStore.Reducer<PersonajesState, PersonajesAction>} action 
 * @returns {State} un estado
 */


const personajesReducer: Reducer<PersonajesState, PersonajesAction> = (state = initialState, action): PersonajesState => {
    
    switch(action.type) {
        case 'CHANGE_FAVORITO':
            return {
                ...state,
                personajes: [...state.personajes, action.payload]
            }
        case 'FETCHING_PERSONAJES':
            return {
                ...state,
                busqueda: action.payload.name,
                status: 'fetching',
                personajes: [],
                error: null
            }
        case 'ADD_FAVORITO':
            return {
                ...state,
                favoritos: [
                    action.payload, ...state.favoritos.filter( e => e.id !== action.payload.id)
                ]
            }
        case 'ERROR_PERSONAJES':
            return {
                ...state,
                error: action.payload.error,
                status: 'error',
                personajes: []
            }
        case 'SUCCESS_PERSONAJES':
            return {
                ...state,
                
                status: 'success',
                personajes: action.payload.personajes,
                pageInfo: action.payload.pageInfo,
                error: null
            }
        case 'REMOVE_ALL_FAVORITOS':
            return {
                ...state,
                favoritos: []
            }
        default:
            return {
                ...state
            }
    }

}

export default personajesReducer;