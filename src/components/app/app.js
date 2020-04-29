import React, { useEffect } from 'react'
import { H1 } from '../common'
import { Genre } from '../genre/index'
import { MovieDetail } from '../movie-detail/index'

export const App = ({ genres, setGenres, isShowMovieDetail }) => {
	
	useEffect(() => {
		fetch('http://localhost:3000/genres')
			.then(response => response.json())
			.then(genres => setGenres(genres))
			.catch(err => console.log(err))
	}, [])

	// console.log(genres) // remove
	
	return (
		<>
			<H1>NETFLEX</H1>
			{!isShowMovieDetail && genres.map(genre => 
				<Genre 
					key={genre.id} 
					title={genre.name} 
					movies={genre.movies}
				/>
			)}
			{isShowMovieDetail &&
				<MovieDetail />
			}
		</>
	)
}
