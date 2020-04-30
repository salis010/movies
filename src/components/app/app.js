import React, { useEffect } from 'react'
import { serverUrl } from '../../constants'
import { Search } from '../search/index'
import { H1 } from '../common'
import { Genre } from '../genre/index'
import { MovieDetail } from '../movie-detail/index'
import { SearchResults } from '../search-results'


export const App = ({ genres, setGenres, isShowMovieDetail, searchResults }) => {
	
	useEffect(() => {
		fetch(`${serverUrl}/genres`)
			.then(response => response.json())
			.then(genres => setGenres(genres))
			.catch(err => console.log(err))
	}, [])
// console.log(searchResults)
	// console.log(genres) // remove
	
	return (
		<>
			<H1>NETFLEX</H1>
			<Search />
			<SearchResults movies={searchResults} />
			
			{/* {!isShowMovieDetail && genres.map(genre => 
				<Genre 
					key={genre.id} 
					title={genre.name} 
					movies={genre.movies}
				/>
			)}
			{isShowMovieDetail &&
				<MovieDetail />
			} */}
		</>
	)
}
