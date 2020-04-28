import React, { useEffect } from 'react'
import { H1 } from '../common'
import { Genre } from '../genre/genre'
import { theMovieDbUrl } from '../../constants'


export const App = ({ genres, setGenres }) => {
	
	useEffect(() => {
		fetch(`https://www.themoviedb.org/3/genre/movie/list?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US`)
		// fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US`)
			.then(response => response.json())
			.then(data => setGenres(data.genres))
			.catch(err => console.log(err))
	}, [])
	
	return (
		<>
			<H1>NETFLEX</H1>
			{genres.map(genre => <Genre key={genre.id} title={genre.name} />)}
		</>
	)
}
