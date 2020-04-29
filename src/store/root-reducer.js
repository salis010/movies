import { SET_GENRES, SHOW_MOVIE_DETAIL, SET_CURRENT_MOVIE } from './action-types'


const initialState = {
    genres: [],
    isShowMovieDetail: false,
    currentMovieId: 0,
}

export const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        
        case SET_GENRES:
            return { ...state, genres: action.payload }

        case SHOW_MOVIE_DETAIL:
            return { ...state, isShowMovieDetail: !state.isShowMovieDetail }

        case SET_CURRENT_MOVIE:
            console.log('Payload:', action.payload)
            return { ...state, isShowMovieDetail: true, currentMovieId: action.payload }
        
        default:
            return state
    }
}
