import { SPOTIFY_TOKEN, URL_CODE } from './constants'

export const getURLCode = (code) => ({type: URL_CODE, payload: code})
export const setToken = (token) => ({type:SPOTIFY_TOKEN, payload:token})