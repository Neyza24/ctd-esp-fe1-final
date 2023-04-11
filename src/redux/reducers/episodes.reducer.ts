import { Reducer } from "react";
import { Episode } from "../types/types";
import { EpisodesActions } from "../actions/episodes.actions";


interface EpisodesState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  episodes: Episode | Episode[];
  error: string | null;
}

const initialState: EpisodesState = {
  status: "IDLE",
  episodes: [],
  error: null,
}

/**
 * Episodios reducer
 *
 * @param {State} state
 * @param {DataStore.Reducer<EpisodesState, EpisodesActions>} action
 * @returns {State}
 */


const episodesReducer: Reducer<EpisodesState, EpisodesActions> = (
  state = initialState,
  action
): EpisodesState => {
  switch (action.type) {
    case "GET_EPISODES":
      return {
        ...state,
        status: "LOADING",
        episodes: [],
        error: null,
      };
    case "GET_SUCCESS_EPISODES":
      return {
        ...state,
        status: "COMPLETED",
        episodes: action.episodes,
      };
    case "GET_ERROR_EPISODES":
      return {
        ...state,
        status: "FAILED",
        error: action.error,
      };
    default:
      return { ...state };
  }
};

export default episodesReducer;