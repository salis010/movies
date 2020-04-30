import React, { useEffect } from 'react'
import { serverUrl } from '../../constants'
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
		<>
			<Title title='NETFLEX' />
			<ToolBar />
			
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
		</>
	)
}
