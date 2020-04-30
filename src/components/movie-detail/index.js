import { connect } from 'react-redux'
import { MovieDetail as Component} from './movie-detail'
import { getMovieDetails } from '../../utils/get-movie-details'
import { showMovieDetail } from '../../store/actions'


const mapStateToProps = state => ({
    movie: getMovieDetails(state.genres, state.searchResults, state.currentMovieId)
})

const mapDispatchToProps = dispatch => ({
    showMovieDetail: () => dispatch(showMovieDetail())
})

export const MovieDetail = connect(mapStateToProps, mapDispatchToProps)(Component)
