import React, { useEffect } from 'react'
import { H1 } from '../common'
import { Genre } from '../genre/genre'
import { theMovieDbUrl } from '../../constants'


export const App = ({ genres, setGenres }) => {
	
	useEffect(() => {
		fetch('http://localhost:3000/genres')
			.then(response => response.json())
			.then(genres => setGenres(genres))
			.catch(err => console.log(err))
	}, [])
	console.log(genres)
	return (
		<>
			<H1>NETFLEX</H1>
			{genres.map(genre => 
				<Genre 
					key={genre.id} 
					title={genre.name} 
					movies={genre.movies}
				/>)}
		</>
	)
}
