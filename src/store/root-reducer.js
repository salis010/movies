import { SET_GENRES, SHOW_MOVIE_DETAIL, SET_CURRENT_MOVIE, SET_SEARCH_RESULTS } from './action-types'


const initialState = {
    genres: [],
    isShowMovieDetail: false,
    currentMovieId: 0,
    searchResults: [],
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

        case SET_SEARCH_RESULTS:
            console.log('SET_SEARCH_RESULTS')
            return { ...state, searchResults: action.payload }
        
        default:
            return state
    }
}
