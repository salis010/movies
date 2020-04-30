import { connect } from 'react-redux'
import { SearchResult as Component } from './search-result'
import { setCurrentMovie } from '../../store/actions'

const mapDispatchToProps = dispatch => ({
    setCurrentMovie: id => dispatch(setCurrentMovie(id))
})

export const SearchResult = connect(null, mapDispatchToProps)(Component)
