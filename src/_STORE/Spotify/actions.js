import { SPOTIFY_TOKEN } from './constants'

export const setToken = (token) => ({type:SPOTIFY_TOKEN, payload:token})