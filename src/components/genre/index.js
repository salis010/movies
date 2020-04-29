import { connect } from 'react-redux'
import { setCurrentMovie } from '../../store/actions'
import { Genre as Component } from './genre'


const mapDispatchToProps = dispatch => ({
    setCurrentMovie: id => dispatch(setCurrentMovie(id)),
})

export const Genre = connect(null, mapDispatchToProps)(Component)
