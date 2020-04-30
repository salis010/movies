import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { serverUrl } from '../../constants'
import { GlobalWrapper } from '../common'
import { Title } from '../title/index'
import { ToolBar } from '../tool-bar'
import { Genre } from '../genre/index'
import { MovieDetail } from '../movie-detail/index'
import { SearchResults } from '../search-results'


export const App = ({ genres, setGenres, isShowMovieDetail, searchResults, isSearching }) => {
	
	useEffect(() => {
		fetch(`${serverUrl}/genres`)
			.then(response => response.json())
			.then(genres => setGenres(genres))
			.catch(err => console.log(err))
	}, [])

	return (
		<GlobalWrapper>
			<Title title='NETFLEX' />
			{ !isShowMovieDetail && <ToolBar /> }
			
			{ !isShowMovieDetail && !isSearching && 
			genres.map(genre => 
				<Genre 
					key={genre.id} 
					title={genre.name} 
					movies={genre.movies}
				/>
			)}
			{ !isShowMovieDetail && isSearching && <SearchResults movies={searchResults} /> }
			{ isShowMovieDetail && <MovieDetail /> }
		</GlobalWrapper>
	)
}

App.propTypes = {
	genres: PropTypes.array.isRequired,
	isShowMovieDetail: PropTypes.bool.isRequired,
	isSearching: PropTypes.bool.isRequired,
	searchResults: PropTypes.array.isRequired,
	setGenres: PropTypes.func.isRequired,
}
