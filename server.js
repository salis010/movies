const express = require('express')
const axios = require('axios')
const getMoviesPerGenre = require('./backend/get-movies-per-genre')
const trimMoviesData = require('./backend/trim-movies-data')

const app = express()
const port = 3000
let genres

app.use(express.static(__dirname + '/dist'))

app.get('/genres', (req, res) => {
	res.json(genres)
})

// gets a movie's details
app.get('/search/:movie', (req, res) => {	
	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US&query=${req.params.movie}&page=1&include_adult=false`)
		.then(response => res.json(response.data))
		.catch(err => console.log(err))
})

// gets list of genres
axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e21522307a493e2a621bd5fd409fca23&language=en-US')
	.then(response => response.data.genres)
	.then(data => getMoviesPerGenre(data))
	.then(data => genres = trimMoviesData(data))
	.catch(err => console.log(err))

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})
