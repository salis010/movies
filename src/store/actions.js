import { SET_GENRES, SHOW_MOVIE_DETAIL, SET_CURRENT_MOVIE } from './action-types'


export const setGenres = genres => ({ type: SET_GENRES, payload: genres })
export const showMovieDetail = isShowMovieDetail => ({ type: SHOW_MOVIE_DETAIL, payload: isShowMovieDetail })
export const setCurrentMovie = id => ({ type: SET_CURRENT_MOVIE, payload: id })
