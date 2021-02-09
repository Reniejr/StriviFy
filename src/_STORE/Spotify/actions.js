import { SPOTIFY_TOKEN, URL_CODE, REFRESH_TOKEN, PLAYLIST } from "./constants";

export const getURLCode = (code) => ({ type: URL_CODE, payload: code });
export const setToken = (token) => ({ type: SPOTIFY_TOKEN, payload: token });
export const refreshToken = (token) => ({
  type: REFRESH_TOKEN,
  payload: token,
});
export const setPlaylist = (playlist) => ({
  type: PLAYLIST,
  payload: playlist,
});
