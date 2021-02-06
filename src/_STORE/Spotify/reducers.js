import { SPOTIFY_TOKEN} from './constants'

export const spotifyReducer = (state = { token: null }, action) => {
    const { type, payload } = action
    switch (type) {
        case SPOTIFY_TOKEN:
            return {
            ...state,
            token: payload
        }
        default: return state
    }
}