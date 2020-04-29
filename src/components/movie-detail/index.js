import { connect } from 'react-redux'
import { MovieDetail as Component} from './movie-detail'
import { getMovieDetails } from '../../utils/get-movie-details'
import { showMovieDetail } from '../../store/actions'


const mapStateToProps = state => {
    console.log(state)
   return  ({
    movie: getMovieDetails(state.genres, state.currentMovieId)
})
}

const mapDispatchToProps = dispatch => ({
    showMovieDetail: () => dispatch(showMovieDetail())
})

export const MovieDetail = connect(mapStateToProps, mapDispatchToProps)(Component)
