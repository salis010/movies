import { connect } from 'react-redux'
import { Filter as Component } from './filter'
import { setFilter } from '../../store/actions'


const mapStateToProps = state => ({
    options: state.genres.map(genre => genre.name),
})

const mapDispatchToProps = dispatch => ({
    setFilter: genre => dispatch(setFilter(genre))
})

export const Filter = connect(mapStateToProps, mapDispatchToProps)(Component)
