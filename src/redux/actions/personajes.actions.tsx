import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { changePageService, searchPersonajeService } from "../../services/personaje.services";
import { PageInfo, Personaje } from "../types/types";


export interface FetchingPersonajes extends Action {
    type: 'FETCHING_PERSONAJES',
    payload: {
        name: string
    }
}

export interface SuccesPersonajes extends Action {
    type: 'SUCCESS_PERSONAJES',
    payload: {
        personajes: Personaje[],
        pageInfo: PageInfo
    }
}

export interface ErrorPersonajes extends Action {
    type: 'ERROR_PERSONAJES',
    payload: {
        error: string
    }
}

export interface GetSearchPersonajes extends Action {
    type: 'GET_SEARCH_PERSONAJES',
    payload: {
        busqueda: string
    }
}

export interface AddFavorito extends Action {
    type: 'ADD_FAVORITO',
    payload: Personaje
}

export interface RemoveFavorito extends Action {
    type: 'REMOVE_FAVORITO',
    payload: Personaje
}

export interface ChangeFavorito extends Action {
    type: 'CHANGE_FAVORITO',
    payload: Personaje
}

export interface RemoveAllFavoritos extends Action {
    type: 'REMOVE_ALL_FAVORITOS'
}

export const changeFavorito: ActionCreator<ChangeFavorito> = ( personaje: Personaje ) => {
    return {
        type: 'CHANGE_FAVORITO',
        payload: personaje
    }
}

export const fetchingPersonajes: ActionCreator<FetchingPersonajes> = ( name: string) => {
    return {
        type: 'FETCHING_PERSONAJES',
        payload: { name: name }
    }
}

export const successPersonajes: ActionCreator<SuccesPersonajes> = (personajes: Personaje[], pageInfo: PageInfo) => {
    return {
        type: 'SUCCESS_PERSONAJES',
        payload: {
            personajes: personajes,
            pageInfo: pageInfo
        }
    }
}

export const errorPersonajes: ActionCreator<ErrorPersonajes> = ( error: string ) => {
    return {
        type: 'ERROR_PERSONAJES',
        payload: {
            error: error
        }
    }
}


export const getSearchPersonajes: ActionCreator<GetSearchPersonajes> = (name: string) => {
    return {
        type: 'GET_SEARCH_PERSONAJES',
        payload: {
            busqueda: name
        }
    }
}

export const removeFavorito: ActionCreator<RemoveFavorito> = (personaje: Personaje) => {
    return {
        type: 'REMOVE_FAVORITO',
        payload: personaje
    }
}


export const addFavorito: ActionCreator<AddFavorito> = (personaje: Personaje) => {
    return {
        type: 'ADD_FAVORITO',
        payload: personaje
    }
}

export const removeAllFavoritos: ActionCreator<RemoveAllFavoritos> = () => {
    return {
        type: 'REMOVE_ALL_FAVORITOS',
    }
}


export interface SearchPersonajesThunks extends ThunkAction<void, RootState, unknown, PersonajesAction>   {
    
}

export const searchPersonajesThunk = (name: string): SearchPersonajesThunks => {
    return async ( dispatch ) => {
        dispatch(getSearchPersonajes(name))
        try {
            dispatch(fetchingPersonajes(name))
            const response = await searchPersonajeService(name);

            const [personajes, info] = response;
            dispatch(successPersonajes(personajes, info));
        } catch ( error ) {
            dispatch(errorPersonajes(error));
        }
    }
}


export const changePageThunk = ( url: string ): SearchPersonajesThunks => {

    return async ( dispatch ) => {
        try{
            const [ personajes, info ] = await changePageService(url);
            dispatch(successPersonajes(personajes, info));

        } catch ( error ) {
            dispatch(errorPersonajes(error));
        }
    }
}


    

export type PersonajesAction = 
    | ReturnType<typeof fetchingPersonajes>
    | ReturnType<typeof successPersonajes>
    | ReturnType<typeof errorPersonajes>
    | ReturnType<typeof addFavorito>
    | ReturnType<typeof changeFavorito>
    | ReturnType<typeof removeFavorito>
    | ReturnType<typeof removeAllFavoritos>
    | ReturnType<typeof getSearchPersonajes>



