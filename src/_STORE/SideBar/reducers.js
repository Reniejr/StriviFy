import { SIDEBAR } from './constants'

export const sideBarReducer = (state = {toggle: true}, action) => {
    const { type, payload } = action
    switch (type) {
        case SIDEBAR:
            return {
                ...state,
                toggle: !state.toggle
            }
        default: return state
    }
}