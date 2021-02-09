import { SPOTIFY_TOKEN, URL_CODE, REFRESH_TOKEN, PLAYLIST } from "./constants";

export const spotifyReducer = (
  state = {
    token: null,
    refresh_token: null,
    code: null,
    player: {
      id: null,
      type: null,
    },
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SPOTIFY_TOKEN:
      return {
        ...state,
        token: payload.token,
        refresh_token: payload.refresh_token,
      };
    case URL_CODE:
      return {
        ...state,
        code: payload,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case PLAYLIST:
      return {
        ...state,
        player: {
          id: payload.id,
          type: payload.playerType,
        },
      };
    default:
      return state;
  }
};
