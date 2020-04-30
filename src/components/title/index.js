import { connect } from 'react-redux'
import { Title as Component } from './title'
import { goHome } from '../../store/actions'


const mapDispatchToProps = dispatch => ({
    goHome: () => dispatch(goHome())
})

export const Title = connect(null, mapDispatchToProps)(Component)
