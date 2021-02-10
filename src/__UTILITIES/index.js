import store from "../_STORE";
import { REFRESH_TOKEN } from "../_STORE/Spotify/constants";
import {
  getSearch,
  getRefreshToken,
  getPlaylist,
  getBrowse,
  getTracksPlaylist,
  getNewReleases,
} from "./Spotify";

// export const getDetails = () => {console.log(store.getState())}

//REFRESH STATE TOKEN
export const setNewToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");
  const newToken = await getRefreshToken(refreshToken);
  // console.log(spotifyStore)
  await store.dispatch({ type: REFRESH_TOKEN, payload: newToken });
};

//SEARCH
export const searchFetch = async (search) => {
  const spotifyStore = store.getState().spotify;
  // console.log(spotifyStore.token)
  let result;
  result = await getSearch(spotifyStore.token, search);
  return result;
};

//GET PLAYLIST
export const getPlaylistFetch = async (playlistId) => {
  const spotifyStore = store.getState().spotify;
  // console.log(spotifyStore.token)
  let result;
  result = await getPlaylist(spotifyStore.token, playlistId);
  return result;
};

//GET BROWSE
export const getBrowseFetch = async (categoryId, limit) => {
  const spotifyStore = store.getState().spotify;
  // console.log(spotifyStore.token)
  let result;
  result = await getBrowse(spotifyStore.token, categoryId, limit);
  return result;
};

//GET NEW RELEASES
export const fetchNewReleases = async (limit) => {
  const spotifyStore = store.getState().spotify;
  let result;
  result = await getNewReleases(spotifyStore.token, limit);
  return result;
};

//GET TRACKS FROM PLAYLIST
export const getTracksPlaylistFetch = async (url) => {
  const spotifyStore = store.getState().spotify;
  // console.log(spotifyStore.token)
  let result;
  result = await getTracksPlaylist(spotifyStore.token, url);
  return result;
};

//FETCH
export const getUser = async (query) => {
  let url;
  query
    ? (url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user?${query}`)
    : (url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user`);
  const response = await fetch(url),
    result = await response.json();
  // console.log(result)
  return result;
};
