import { SPOTIFY_TOKEN, URL_CODE} from './constants'

export const spotifyReducer = (state = { token: null, refresh_token: null, code: null }, action) => {
    const { type, payload } = action
    switch (type) {
        case SPOTIFY_TOKEN:
            return {
            ...state,
                token: payload.token,
            refresh_token: payload.refresh_token
            }
        case URL_CODE:
            return {
                ...state,
                code: payload
            }
        default: return state
    }
}