import { 
    SET_GENRES, 
    SHOW_MOVIE_DETAIL, 
    SET_CURRENT_MOVIE, 
    SET_SEARCH_RESULTS, 
    SET_FILTER,
    SET_SEARCHING,
    GO_HOME
} from './action-types'


export const setGenres = genres => ({ type: SET_GENRES, payload: genres })
export const showMovieDetail = isShowMovieDetail => ({ type: SHOW_MOVIE_DETAIL, payload: isShowMovieDetail })
export const setCurrentMovie = id => ({ type: SET_CURRENT_MOVIE, payload: id })
export const setSearchResults = searchResults => ({ type: SET_SEARCH_RESULTS, payload: searchResults })
export const setFilter = filter => ({ type: SET_FILTER, payload: filter })
export const setSearching = isSearching => ({ type: SET_SEARCHING, payload: isSearching })
export const goHome = () => ({ type: GO_HOME, payload: null })
