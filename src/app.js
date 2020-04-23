import React, { useEffect } from 'react'
import { H1 } from './components/common'
import { Genre } from './components/genre/genre'

const genres = ['Horror', 'Comedy', 'Series']

const baseUrl = 'https://www.themoviedb.org/documentation/api'

export const App = () => {
	
	useEffect(() => {

		// the below does not work due to a CORS issue
		// fetching from the backend works
		fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US')
			.then(response => response.json())
			.then(data => console.log(data))
	}, [])
	
	return (
		<>
			<H1>NETFLEX</H1>
			{genres.map(genre => <Genre key={genre} title={genre} />)}
		</>
	)
}
