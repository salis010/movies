import { 
    SET_GENRES, 
    SHOW_MOVIE_DETAIL, 
    SET_CURRENT_MOVIE, 
    SET_SEARCH_RESULTS, 
    SET_FILTER,
    SET_SEARCHING,
    GO_HOME 
} from './action-types'
import { filterGenres } from '../utils/filter-genres'


const initialState = {
    genres: [],
    isShowMovieDetail: false,
    currentMovieId: 0,
    searchResults: [],
    filter: 'all',
    isSearching: false,
}

export const rootReducer = (state = initialState, action ) => {
    switch(action.type) {
        
        case SET_GENRES:
            return { ...state, genres: action.payload }

        case SHOW_MOVIE_DETAIL:
            return { ...state, isShowMovieDetail: !state.isShowMovieDetail }

        case SET_CURRENT_MOVIE:
            return { ...state, isShowMovieDetail: true, currentMovieId: action.payload }

        case SET_SEARCH_RESULTS:
            return { ...state, searchResults: action.payload }

        case SET_FILTER:

            const filter = action.payload

            return { 
                ...state, 
                filter: filter, 
                searchResults: filter == 'all' ? [] : filterGenres(state.genres, action.payload),
                isSearching: filter == 'all' ? false : true
            }

        case SET_SEARCHING:
            return { ...state, isSearching: action.payload }

        case GO_HOME:
            return {
                ...state,
                isShowMovieDetail: false,
                currentMovieId: 0,
                searchResults: [],
                filter: 'all',
                isSearching: false,
            }
        
        default:
            return state
    }
}
