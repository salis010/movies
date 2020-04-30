import { connect } from 'react-redux'
import { Search as Component } from './search'
import { setCurrentMovie, setSearchResults } from '../../store/actions'


const mapStateToProps = state => ({
    genres: state.genres,
    isShowMovieDetail: state.isShowMovieDetail,
})

const mapDispatchToProps = dispatch => ({
    setCurrentMovie: id => dispatch(setCurrentMovie(id)),
    setSearchResults: searchResults => dispatch(setSearchResults(searchResults)),
})

export const Search = connect(mapStateToProps, mapDispatchToProps)(Component)
