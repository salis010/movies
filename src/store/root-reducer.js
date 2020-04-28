import { SET_GENRES } from './action-types'


const initialState = {
    genres: [],
}

export const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        
        case SET_GENRES:
            console.log('reducer')
            return { genres: action.payload }
        
        default:
            return state
    }
}
