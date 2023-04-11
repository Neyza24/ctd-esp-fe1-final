import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { Episode } from "../types/types";
import { IRootState } from "../store";
import { fetchEpisodes } from "../../services/character.services";


interface getEpisodesAccion extends Action {
  type: "GET_EPISODES";
  query: string;
}
interface getEpisodesSuccessAccion extends Action {
  type: "GET_SUCCESS_EPISODES";
  episodes: Episode | Episode[];
}
interface getEpisodesErrorAccion extends Action {
  type: "GET_ERROR_EPISODES";
  error: string;
}

const getEpisodes: ActionCreator<getEpisodesAccion> = (query: string) => {
  return {
    type: "GET_EPISODES",
    query: query,
  };
};

const getEpisodesSuccess: ActionCreator<getEpisodesSuccessAccion> = (
  episodes: Episode | Episode[]
) => {
  return {
    type: "GET_SUCCESS_EPISODES",
    episodes: episodes,
  };
};

const getEpisodesError: ActionCreator<getEpisodesErrorAccion> = (
  mensaje: string
) => {
  return {
    type: "GET_ERROR_EPISODES",
    error: mensaje,
  };
};

export type EpisodesActions =
  | ReturnType<typeof getEpisodes>
  | ReturnType<typeof getEpisodesSuccess>
  | ReturnType<typeof getEpisodesError>;


interface FetchEpisodesThunkAction extends ThunkAction<void, IRootState, unknown, EpisodesActions> { }

export const getEpisodesThunk = (
  listEpisodeID: (string | undefined)[]
): FetchEpisodesThunkAction => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchEpisodes(listEpisodeID);
      if (response !== undefined) {
        dispatch(getEpisodesSuccess(response));
      }
    } catch (error) {
      dispatch(getEpisodesError(error));
    }
  };
};


