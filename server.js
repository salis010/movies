const express = require('express')
const axios = require('axios')
const getMoviesPerGenre = require('./backend/get-movies-per-genre')

const app = express()
const port = 3000
const tokenV4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjE1MjIzMDdhNDkzZTJhNjIxYmQ1ZmQ0MDlmY2EyMyIsInN1YiI6IjVlYTFjNTMwYjA0NjA1MDAyMjVlY2ZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPW4ASx5XbWqW2WBSEjEyWegS4qhFX_20UF3BCliIAU'
const tokenV3 = 'e21522307a493e2a621bd5fd409fca23'

let genres

app.use(express.static(__dirname + '/dist'))

app.get('/genres', (req, res) => {
	console.log('genres requested', genres.length)
	res.json(genres)
})

app.get('/search/:movie', (req, res) => {
	
	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US&query=${req.params.movie}&page=1&include_adult=false`)
		.then(response => res.json(response.data))
		.catch(err => console.log(err))
})

const optionsV4 = {
	headers: {
		'Authorization': `Bearer ${tokenV4}`,
		'Content-Type': 'application/json;charset=utf-8'
	}
}

const optionsV3 = {
	headers: {
		'Authorization': `Bearer ${tokenV3}`,
		'Content-Type': 'application/json;charset=utf-8'
	}
}


// works: gets list of genres
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US')
	.then(response => {
		genres = response.data.genres
		console.log(genres)		
	})
	.then(() => genres = getMoviesPerGenre(genres))
	.catch(err => console.log(err))


// get list of movies by genre id
// axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e21522307a493e2a621bd5fd409fca23&with_genres=28')
// 	.then(response => console.log(response.data))
// 	.catch(err => console.log(err))

// works: get details about movie
// axios.get('https://api.themoviedb.org/3/movie/181812?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US')
// 	.then(response => console.log(response.data))
// 	.catch(err => console.log(err))

// works: search for 'Indiana'
// axios.get('https://api.themoviedb.org/3/search/movie?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US&query=indiana&page=1&include_adult=false')
// 	.then(response => console.log(response.data))
// 	.catch(err => console.log(err))


app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})
