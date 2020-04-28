import { connect } from 'react-redux'
import { App as Component } from './app'
import { setGenres } from '../../store/actions'


const mapStateToProps = state => ({
    genres: state.genres,
})

const mapDispatchToProps = dispatch => ({
    setGenres: genres => dispatch(setGenres(genres)),
})

export const App = connect(mapStateToProps, mapDispatchToProps)(Component)
