import { connect } from 'react-redux'
import { Search as Component } from './search'
import { setSearching, goHome, setSearchResults } from '../../store/actions'


const mapStateToProps = state => ({
    genres: state.genres,
    isShowMovieDetail: state.isShowMovieDetail,
})

const mapDispatchToProps = dispatch => ({
    setSearching: isSearching => dispatch(setSearching(isSearching)),
    setSearchResults: searchResults => dispatch(setSearchResults(searchResults)),
    goHome: () => dispatch(goHome()),
})

export const Search = connect(mapStateToProps, mapDispatchToProps)(Component)
