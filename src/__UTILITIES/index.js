import store from '../_STORE'
import { REFRESH_TOKEN } from '../_STORE/Spotify/constants'
import { getSearch, getRefreshToken, getPlaylist, getBrowse, getTracksPlaylist} from './Spotify'

// export const getDetails = () => {console.log(store.getState(), refreshToken)}

//REFRESH STATE TOKEN
export const setNewToken = async () => {
    const spotifyStore = store.getState().spotify
    const newToken = await getRefreshToken(spotifyStore.refresh_token)
    await store.dispatch({type:REFRESH_TOKEN, payload: newToken})
}

//SEARCH
export const searchFetch = async (search) => {
    const spotifyStore = store.getState().spotify
    if (spotifyStore.token) {
     await getSearch(spotifyStore.token, search.query, search.type )   
    } else {
        await setNewToken()
        await getSearch(spotifyStore.token, search.query, search.type )
    }
}

//GET PLAYLIST
export const getPlaylistFetch = async () => {
    const spotifyStore = store.getState().spotify
    if (spotifyStore.token) {
     await getPlaylist(spotifyStore.token)   
    } else {
        await setNewToken()
        await getPlaylist(spotifyStore.token)
    }
}

//GET BROWSE
export const getBrowseFetch = async (categoryId) => {
    const spotifyStore = store.getState().spotify
    let result
    if (spotifyStore.token) {
        result = await getBrowse(spotifyStore.token, categoryId)
    } else {
        await setNewToken()
        result = await getBrowse(spotifyStore.token, categoryId)
    }
    return result
}

//GET TRACKS FROM PLAYLIST
export const getTracksPlaylistFetch = async (url) => {
    const spotifyStore = store.getState().spotify
    let result
    if (spotifyStore.token) {
        result = await getTracksPlaylist(spotifyStore.token, url)
    } else {
        await setNewToken()
        result = await getTracksPlaylist(spotifyStore.token, url)
    }
    return result
}




//FETCH
export const getUser = async (query) => {
    let url
    query
        ? url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user?${query}`
        : url = `${process.env.REACT_APP_STRIVIFY_DB_ONLINE}/strivify/user`
    const response = await fetch(url),
        result = await response.json()
    // console.log(result)
    return result
}

